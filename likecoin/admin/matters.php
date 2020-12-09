<?php
/**
 * LikeCoin Matters publish functions
 *
 * Functions for saving draft/attachment and publishing on matters
 *
 * @package   LikeCoin
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// phpcs:disable WordPress.WP.I18n.NonSingularStringLiteralDomain

/**
 * Include useful functions
 */
require_once dirname( __FILE__ ) . '/../includes/class-likecoin-matters-api.php';
require_once dirname( __FILE__ ) . '/views/matters.php';
require_once dirname( __FILE__ ) . '/error.php';

/**
 * Clear all matters id and token in options
 */
function likecoin_logout_matters_session() {
	$option = get_option( LC_PUBLISH_OPTION_NAME );
	if ( ! isset( $option[ LC_OPTION_SITE_MATTERS_USER ] ) ) {
		return;
	}
	unset( $option[ LC_OPTION_SITE_MATTERS_USER ] );
	update_option( LC_PUBLISH_OPTION_NAME, $option );
}

/**
 * Parse error handling string
 *
 * @param string| $error Error string.
 */
function likecoin_handle_matters_api_error( $error ) {
	$decoded_error = json_decode( $error, true );
	if ( ! $decoded_error ) {
		likecoin_set_admin_errors( $error, 'publish' );
		return;
	}
	$error_message = isset( $decoded_error['errors'][0]['message'] ) ? $decoded_error['errors'][0]['message'] : null;
	$error_code    = isset( $decoded_error['errors'][0]['extensions']['code'] ) ? $decoded_error['errors'][0]['extensions']['code'] : null;
	if ( $error_code ) {
		if ( 'TOKEN_INVALID' === $error_code ) {
			likecoin_logout_matters_session();
			likecoin_set_admin_errors(
				__( 'Matters session expired. Please login again in LikeCoin publish settings', LC_PLUGIN_SLUG ),
				'publish'
			);
		} else {
			likecoin_set_admin_errors( $error_code, 'publish' );
		}
	} elseif ( $error_message ) {
		likecoin_set_admin_errors( $error_message, 'publish' );
	} else {
		likecoin_set_admin_errors( $error, 'publish' );
	}
}

/**
 * Apply post filter for matters
 *
 * @param WP_Post| $post Post object.
 */
function likecoin_filter_matters_post_content( $post ) {
	$option = get_option( LC_PUBLISH_OPTION_NAME );
	$params = array( 'add_footer_link' => isset( $option[ LC_OPTION_SITE_MATTERS_ADD_FOOTER_LINK ] ) );
	add_filter( 'jetpack_photon_skip_image', '__return_true', 10, 3 );
	$content = apply_filters( 'the_content', $post->post_content );
	$content = likecoin_replace_matters_attachment_url( $content, $params );
	remove_filter( 'jetpack_photon_skip_image', '__return_true', 10, 3 );
	return $content;
}

/**
 * Save a post as a draft to matters
 *
 * @param int|     $post_id Post id to be saved to matters.
 * @param WP_Post| $post Post object to be saved to matters.
 * @param boolean| $update if this is triggered by an update.
 */
function likecoin_save_to_matters( $post_id, $post, $update = true ) {
	$matters_info = get_post_meta( $post_id, LC_MATTERS_INFO, true );
	if ( ! $matters_info ) {
		$matters_info = array(
			'type' => 'post',
		);
	}
	if ( isset( $matters_info['published'] ) && $matters_info['published'] ) {
		return;
	}
	$matters_draft_id = isset( $matters_info['draft_id'] ) ? $matters_info['draft_id'] : null;
	$content          = likecoin_filter_matters_post_content( $post );
	$title            = apply_filters( 'the_title_rss', $post->post_title );
	$api              = LikeCoin_Matters_API::get_instance();
	if ( $update && $matters_draft_id ) {
		$draft = $api->update_draft( $matters_draft_id, $title, $content );
		if ( ! isset( $draft['id'] ) ) {
			unset( $matters_info['draft_id'] );
			$matters_draft_id = null;
			update_post_meta( $post_id, LC_MATTERS_INFO, $matters_info );
		} elseif ( $draft['id'] !== $matters_draft_id ) {
			$matters_draft_id         = $draft['id'];
			$matters_info['draft_id'] = $matters_draft_id;
			update_post_meta( $post_id, LC_MATTERS_INFO, $matters_info );
		}
	}
	if ( ! $matters_draft_id ) {
		$draft = $api->new_draft( $title, $content );
		if ( isset( $draft['error'] ) ) {
			likecoin_handle_matters_api_error( $draft['error'] );
			return;
		}
		$matters_info['draft_id'] = $draft['id'];
		update_post_meta( $post_id, LC_MATTERS_INFO, $matters_info );
	}
	return $matters_draft_id;
}

/**
 * Publish a post as an article to matters
 *
 * @param int|     $post_id Post id to be published to matters.
 * @param WP_Post| $post Post object to be published to matters.
 */
function likecoin_publish_to_matters( $post_id, $post ) {
	$matters_info = get_post_meta( $post_id, LC_MATTERS_INFO, true );
	if ( ! $matters_info ) {
		$matters_info = array(
			'type' => 'post',
		);
	}
	if ( isset( $matters_info['published'] ) && $matters_info['published'] ) {
		return;
	}
	$matters_draft_id = isset( $matters_info['draft_id'] ) ? $matters_info['draft_id'] : null;
	$content          = likecoin_filter_matters_post_content( $post );
	$title            = apply_filters( 'the_title_rss', $post->post_title );
	$api              = LikeCoin_Matters_API::get_instance();
	if ( ! $matters_draft_id ) {
		$draft = $api->new_draft( $title, $content );
		if ( isset( $draft['error'] ) ) {
			likecoin_handle_matters_api_error( $draft['error'] );
			return;
		}
		$matters_draft_id         = $draft['id'];
		$matters_info['draft_id'] = $matters_draft_id;
	} else {
		$draft = $api->update_draft( $matters_draft_id, $title, $content );
		if ( isset( $draft['error'] ) ) {
			likecoin_handle_matters_api_error( $draft['error'] );
			return;
		}
	}
	$res = $api->publish_draft( $matters_draft_id );
	if ( isset( $res['error'] ) ) {
		likecoin_handle_matters_api_error( $res['error'] );
		return;
	}
	$matters_info['published'] = true;
	update_post_meta( $post_id, LC_MATTERS_INFO, $matters_info );
	return $matters_draft_id;
}

/**
 * Upload a file as draft attachment to matters
 *
 * @param int| $attachment_id Attachment id to be uploaded to matters.
 */
function likecoin_post_attachment_to_matters( $attachment_id ) {
	$attachment     = get_post( $attachment_id );
	$file_path      = get_attached_file( $attachment_id );
	$file_mime_type = get_post_mime_type( $attachment_id );
	$filename       = basename( $file_path );
	$parent_post    = $attachment->post_parent;
	if ( ! $parent_post ) {
		return;
	}
	$matters_info = get_post_meta( $parent_post, LC_MATTERS_INFO, true );
	if ( ! $matters_info ) {
		$matters_info = array(
			'type' => 'post',
		);
	}
	if ( isset( $matters_info['published'] ) && $matters_info['published'] ) {
		return;
	}
	$matters_draft_id = isset( $matters_info['draft_id'] ) ? $matters_info['draft_id'] : null;
	if ( ! $matters_draft_id ) {
		$matters_draft_id = likecoin_save_to_matters( $parent_post, get_post( $parent_post ), false );
	}
	if ( ! $matters_draft_id ) {
		if ( ! likecoin_get_admin_errors() ) {
			likecoin_handle_matters_api_error( 'Cannot save draft before publishing' );
		}
		return;
	}
	$attachment_type = null;
	if ( wp_attachment_is( 'image', $attachment_id ) ) {
		$attachment_type = 'image';
	} elseif ( wp_attachment_is( 'audio', $attachment_id ) ) {
		$attachment_type = 'audio';
	}
	if ( ! $attachment_type ) {
		return;
	}
	$api = LikeCoin_Matters_API::get_instance();
	$res = $api->post_attachment(
		array(
			'path'      => $file_path,
			'filename'  => $filename,
			'mime_type' => $file_mime_type,
			'type'      => $attachment_type,
		),
		$matters_draft_id
	);
	if ( isset( $res['error'] ) ) {
		likecoin_handle_matters_api_error( $res['error'] );
		return;
	}
	$matters_attachment_id = $res['id'];
	$params                = array(
		'type'          => 'attachment',
		'url'           => $res['path'],
		'attachment_id' => $matters_attachment_id,
	);
	update_post_meta( $attachment_id, LC_MATTERS_INFO, $params );
	return $matters_attachment_id;
}

/**
 * Returns a boolean whether draft options are enabled
 */
function likecoin_check_should_hook_matters_draft() {
	$option = get_option( LC_PUBLISH_OPTION_NAME );

	return isset( $option[ LC_OPTION_SITE_MATTERS_USER ] ) &&
	isset( $option[ LC_OPTION_SITE_MATTERS_USER ][ LC_MATTERS_USER_ACCESS_TOKEN_FIELD ] ) &&
	$option[ LC_OPTION_SITE_MATTERS_USER ][ LC_MATTERS_USER_ACCESS_TOKEN_FIELD ] &&
	isset( $option[ LC_OPTION_SITE_MATTERS_AUTO_DRAFT ] ) &&
	$option[ LC_OPTION_SITE_MATTERS_AUTO_DRAFT ];
}

/**
 * Returns a boolean whether publish options are enabled
 */
function likecoin_check_should_hook_matters_publish() {
	$option = get_option( LC_PUBLISH_OPTION_NAME );
	return isset( $option[ LC_OPTION_SITE_MATTERS_USER ] ) &&
	isset( $option[ LC_OPTION_SITE_MATTERS_USER ][ LC_MATTERS_USER_ACCESS_TOKEN_FIELD ] ) &&
	$option[ LC_OPTION_SITE_MATTERS_USER ][ LC_MATTERS_USER_ACCESS_TOKEN_FIELD ] &&
	isset( $option[ LC_OPTION_SITE_MATTERS_AUTO_PUBLISH ] ) &&
	$option[ LC_OPTION_SITE_MATTERS_AUTO_PUBLISH ];
}

/**
 * Setup Matters related post hooks according to config
 */
function likecoin_add_matters_admin_hook() {
	if ( likecoin_check_should_hook_matters_draft() ) {
		add_action( 'save_post_post', 'likecoin_save_to_matters', 10, 3 );
		add_action( 'save_post_page', 'likecoin_save_to_matters', 10, 3 );
	}
	if ( likecoin_check_should_hook_matters_publish() ) {
		add_action( 'publish_post', 'likecoin_publish_to_matters', 10, 2 );
	} elseif ( likecoin_check_should_hook_matters_draft() ) {
		add_action( 'publish_post', 'likecoin_save_to_matters', 10, 2 );
	}
}

/**
 * Setup Matters related restful hook for Gutenberg file upload
 */
function likecoin_add_matters_restful_hook() {
	if ( likecoin_check_should_hook_matters_draft() || likecoin_check_should_hook_matters_publish() ) {
		add_action( 'add_attachment', 'likecoin_post_attachment_to_matters', 10, 2 );
	}
}