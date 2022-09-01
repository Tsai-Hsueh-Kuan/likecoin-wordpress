!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){function s(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){s(r,e,n,o,a,"next",t)}function a(t){s(r,e,n,o,a,"throw",t)}o(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports}),n=(s=e)&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,g=t(function(e){e=function(i){var s,t=Object.prototype,u=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o,a,i,c,e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),r=new E(r||[]);return e._invoke=(o=t,a=n,i=r,c=p,function(t,e){if(c===h)throw new Error("Generator is already running");if(c===d){if("throw"===t)throw e;return N()}for(i.method=t,i.arg=e;;){var n=i.delegate;if(n){var r=function t(e,n){var r=e.iterator[n.method];if(r===s){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=s,t(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var r=l(r,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,y;r=r.arg;if(!r)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y;{if(!r.done)return r;n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=s)}n.delegate=null;return y}(n,i);if(r){if(r===y)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===p)throw c=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=h;r=l(o,a,i);if("normal"===r.type){if(c=i.done?d:f,r.arg!==y)return{value:r.arg,done:i.done}}else"throw"===r.type&&(c=d,i.method="throw",i.arg=r.arg)}}),e}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",y={};function m(){}function g(){}function v(){}var w={};a(w,r,function(){return this});e=Object.getPrototypeOf,e=e&&e(e(_([])));e&&e!==t&&u.call(e,r)&&(w=e);var S=v.prototype=m.prototype=Object.create(w);function I(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function x(i,c){var e;this._invoke=function(n,r){function t(){return new c(function(t,e){!function e(t,n,r,o){t=l(i[t],i,n);if("throw"!==t.type){var a=t.arg;return(n=a.value)&&"object"==typeof n&&u.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):c.resolve(n).then(function(t){a.value=t,r(a)},function(t){return e("throw",t,r,o)})}o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,t=function t(){for(;++n<e.length;)if(u.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=s,t.done=!0,t};return t.next=t}}return{next:N}}function N(){return{value:s,done:!0}}return a(S,"constructor",g.prototype=v),a(v,"constructor",g),g.displayName=a(v,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,a(t,o,"GeneratorFunction")),t.prototype=Object.create(S),t},i.awrap=function(t){return{__await:t}},I(x.prototype),a(x.prototype,n,function(){return this}),i.AsyncIterator=x,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var a=new x(c(t,e,n,r),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},I(S),a(S,o,"Generator"),a(S,r,function(){return this}),a(S,"toString",function(){return"[object Generator]"}),i.keys=function(n){var t,r=[];for(t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,P(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=s),y}},i}(e.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}),p="LikeCoin WordPress Plugin",r=document.querySelector("#lcTitleStatus"),v=document.querySelector("#lcISCNStatus");function w(t,e){var n=e.text,r=e.className,o=e.id,a=e.rel,i=e.target,e=e.href,t=document.createElement(t);return n&&(t.innerText=n),o&&t.setAttribute("id",o),r&&t.setAttribute("class",r),a&&t.setAttribute("rel",a),i&&t.setAttribute("target",i),e&&t.setAttribute("href",e),t}var o=lcStringInfo,a=o.mainStatusLoading,i=o.mainStatusFailedPopUp,c=o.mainStatusLIKEPay,e=o.mainStatusUploadArweave,s=o.mainStatusRegisterISCN,S=o.buttonSubmitISCN,I=o.buttonRegisterISCN,x=o.draft,u={loading:a,failedPopup:i,onLIKEPay:c,onUploadArweave:e,onRegisterISCN:s},f="https://".concat(window.wpApiSettings.likecoHost);function b(t,e){r.textContent="";t=w("h1",{text:" · ",className:t}),e=w("h3",{text:e,className:"iscn-status-text"});r.appendChild(t),r.appendChild(e)}function P(t){return u[t]||"-"}function E(t,e){t&&(t.textContent="",t.appendChild(e))}function _(t,e){E(t,w("p",{text:e}))}function l(t){return h.apply(this,arguments)}function h(){return(h=n(g.mark(function t(e){var n,r,o,a,i,c,s,u,l,p,f,h,d,y,m;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e&&e.preventDefault(),n=document.querySelector("#lcMattersStatus"),r=document.querySelector("#lcArweaveStatus"),o=document.querySelector("#lcIPFSStatus"),p=lcPostInfo,a=p.iscnHash,i=p.iscnId,c=p.isMattersPublished,t.next=7,jQuery.ajax({type:"POST",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/refresh"),method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});case 7:s=t.sent,y=s.matters,d=s.ipfs,f=s.arweave,p=s.wordpress_published,lcPostInfo.isMattersPublished=s.matters.status,lcPostInfo.mattersIPFSHash=s.matters.ipfs_hash,a&&i?(u=encodeURIComponent(i),b("iscn-status-green",lcStringInfo.mainTitleDone),l=w("a",{text:i,rel:"noopener",target:"_blank",href:"https://app.".concat(window.wpApiSettings.likecoHost,"/view/").concat(u)}),E(v,l)):"publish"!==p||"initial"!==lcPostInfo.mainStatus&&!lcPostInfo.mainStatus.includes("failed")?"publish"!==p?(b("iscn-status-red",lcStringInfo.mainTitleDraft),(u=w("button",{text:S,className:"button button-primary",id:"lcArweaveUploadBtn"})).disabled="disabled",l=w("p",{text:lcStringInfo.mainTitleDraft}),(p=document.createElement("div")).appendChild(u),p.appendChild(l),E(v,p)):(b("iscn-status-orange",lcStringInfo.mainTitleIntermediate),_(v,P(lcPostInfo.mainStatus))):(b("iscn-status-orange",lcStringInfo.mainTitleIntermediate),h=w("button",{text:f.url?I:S,className:"button button-primary",id:"lcArweaveUploadBtn"}),E(v,h),h.addEventListener("click",T)),f.url&&(h=f.url,f=f.arweave_id,h=w("a",{text:f,rel:"noopener",target:"_blank",href:h}),E(r,h)),d.url&&(m=d.url,d=d.hash,m=w("a",{text:d,rel:"noopener",target:"_blank",href:m}),E(o,m)),y.url&&(m=y.url,y=y.article_id,m="Published"===c?w("a",{text:y,rel:"noopener",target:"_blank",href:m}):0!==y.length?w("a",{text:x,rel:"noopener",target:"_blank",href:m}):w("p",{text:"-"}),E(n,m));case 16:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=n(g.mark(function t(e){var n,r,o;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.origin!==f)return t.abrupt("return");t.next=2;break;case 2:try{n=JSON.parse(e.data),r=n.action,o=n.data,"ISCN_WIDGET_READY"===r?function(){L.apply(this,arguments)}():"ARWEAVE_SUBMITTED"===r?function(){m.apply(this,arguments)}(o):"ISCN_SUBMITTED"===r?function(){N.apply(this,arguments)}(o):console.warn("Unknown event: ".concat(r))}catch(t){console.error(t)}case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function m(){return(m=n(g.mark(function t(e){var n,r;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.ipfsHash,r=e.arweaveId,n&&r)return lcPostInfo.arweaveIPFSHash=n,lcPostInfo.arweaveId=r,_(v,P(lcPostInfo.mainStatus)),r={arweaveIPFSHash:n,arweaveId:r},t.prev=6,t.next=9,jQuery.ajax({type:"POST",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/arweave"),dataType:"json",contentType:"application/json; charset=UTF-8",data:JSON.stringify(r),method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});t.next=18;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),console.error(t.t0);case 14:return t.prev=14,t.next=17,l();case 17:return t.finish(14);case 18:case"end":return t.stop()}},t,null,[[6,11,14,18]])}))).apply(this,arguments)}function N(){return(N=n(g.mark(function t(e){var n,r,o,a;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(lcPostInfo.mainStatus="onRegisterISCN",t.prev=1,n=e.tx_hash,r=e.error,o=e.success,a=e.iscnId,r||!1===o)throw new Error("REGISTER_ISCN_SERVER_ERROR");t.next=5;break;case 5:return t.next=7,jQuery.ajax({type:"POST",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/metadata"),dataType:"json",contentType:"application/json; charset=UTF-8",data:JSON.stringify({iscnHash:n,iscnId:a}),method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});case 7:lcPostInfo.iscnHash=n,lcPostInfo.iscnId=a,lcPostInfo.mainStatus="done",t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.error(t.t0),lcPostInfo.mainStatus="failed";case 16:return t.prev=16,t.next=19,l();case 19:return t.finish(16);case 20:case"end":return t.stop()}},t,null,[[1,12,16,20]])}))).apply(this,arguments)}function T(t){return k.apply(this,arguments)}function k(){return(k=n(g.mark(function t(e){var n;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.preventDefault(),n=wpApiSettings,n=n.siteurl,lcPostInfo.mainStatus="onRegisterISCN",_(v,P(lcPostInfo.mainStatus)),n=encodeURIComponent(n),n="".concat(f,"/in/widget/iscn-ar?opener=1&blocking=1&mint=1&redirect_uri=").concat(n),!(n=window.open(n,"likeCoISCNWindow","menubar=no,location=no,width=576,height=768"))||n.closed||void 0===n.closed)return lcPostInfo.mainStatus="failedPopup",_(v,P(lcPostInfo.mainStatus)),t.abrupt("return");t.next=11;break;case 11:lcPostInfo.ISCNWindow=n,lcPostInfo.mainStatus="initial",window.addEventListener("message",d,!1);case 14:case"end":return t.stop()}},t)}))).apply(this,arguments)}function L(){return(L=n(g.mark(function t(){var e,n,r,o,a,i,c,s,u,l;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l=lcPostInfo,e=l.ISCNWindow){t.next=3;break}throw new Error("POPUP_WINDOW_NOT_FOUND");case 3:return e.postMessage(JSON.stringify({action:"INIT_WIDGET"}),f),t.prev=4,t.next=7,jQuery.ajax({type:"GET",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/arweave/upload"),dataType:"json",method:"GET",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});case 7:u=t.sent,n=u.files,r=u.title,o=u.tags,a=u.url,i=u.author,c=u.authorDescription,s=u.description,l=u.mattersIPFSHash,u=[],l&&(l="ipfs://".concat(l),u.push(l)),e.postMessage(JSON.stringify({action:"SUBMIT_ISCN_DATA",data:{files:n,metadata:{name:r,tags:o,url:a,author:i,authorDescription:c,description:s,fingerprints:u,type:"article",license:"",recordNotes:p,memo:p}}}),f),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(4),console.error("error occured when submitting ISCN:"),console.error(t.t0),lcPostInfo.mainStatus="failed";case 19:case"end":return t.stop()}},t,null,[[4,14]])}))).apply(this,arguments)}(s=document.getElementById("lcPublishRefreshBtn"))&&s.addEventListener("click",l),l()}();
//# sourceMappingURL=likecoin_metabox.js.map
