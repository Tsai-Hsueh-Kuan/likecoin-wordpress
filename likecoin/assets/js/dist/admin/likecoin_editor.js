!function(){"use strict";var t=(function(t){function i(t,r,e,n){var o,i,a,c,r=r&&r.prototype instanceof s?r:s,r=Object.create(r.prototype),n=new f(n||[]);return r._invoke=(o=t,i=e,a=n,c=d,function(t,r){if(c===g)throw new Error("Generator is already running");if(c===m){if("throw"===t)throw r;return l()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=y,t(r,e),"throw"===e.method))return w;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}n=u(n,r.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,w;var n=n.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w;{if(!n.done)return n;e[r.resultName]=n.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y)}e.delegate=null;return w}(e,a);if(n){if(n===w)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===d)throw c=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=g;n=u(o,i,a);if("normal"===n.type){if(c=a.done?m:v,n.arg!==w)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=m,a.method="throw",a.arg=n.arg)}}),r}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function s(){}function r(){}function e(){}function n(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function a(a){var r;this._invoke=function(e,n){function t(){return new Promise(function(t,r){!function r(t,e,n,o){t=u(a[t],a,e);if("throw"!==t.type){var i=t.arg,e=i.value;return e&&"object"==typeof e&&b.call(e,"__await")?Promise.resolve(e.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):Promise.resolve(e).then(function(t){i.value=t,n(i)},function(t){return r("throw",t,n,o)})}o(t.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function o(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function c(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(o,this),this.reset(!0)}function h(r){if(r){var t=r[_];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,t=function t(){for(;++e<r.length;)if(b.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=y,t.done=!0,t};return t.next=t}}return{next:l}}function l(){return{value:y,done:!0}}var p,y,d,v,g,m,w,x,L,b,E,_,j,O,P;p=function(){return this||"object"==typeof self&&self}()||Function("return this")(),L=Object.prototype,b=L.hasOwnProperty,E="function"==typeof Symbol?Symbol:{},_=E.iterator||"@@iterator",j=E.asyncIterator||"@@asyncIterator",O=E.toStringTag||"@@toStringTag",(P=p.regeneratorRuntime)?t.exports=P:((P=p.regeneratorRuntime=t.exports).wrap=i,d="suspendedStart",v="suspendedYield",g="executing",m="completed",w={},(E={})[_]=function(){return this},(p=(p=Object.getPrototypeOf)&&p(p(h([]))))&&p!==L&&b.call(p,_)&&(E=p),x=e.prototype=s.prototype=Object.create(E),(r.prototype=x.constructor=e).constructor=r,e[O]=r.displayName="GeneratorFunction",P.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===r||"GeneratorFunction"===(t.displayName||t.name))},P.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,e):(t.__proto__=e,O in t||(t[O]="GeneratorFunction")),t.prototype=Object.create(x),t},P.awrap=function(t){return{__await:t}},n(a.prototype),a.prototype[j]=function(){return this},P.AsyncIterator=a,P.async=function(t,r,e,n){var o=new a(i(t,r,e,n));return P.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},n(x),x[O]="Generator",x[_]=function(){return this},x.toString=function(){return"[object Generator]"},P.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},P.values=h,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(c),!t)for(var r in this)"t"===r.charAt(0)&&b.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=y),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),c=b.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),w},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),c(e),w}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n,o=e.completion;return"throw"===o.type&&(n=o.arg,c(e)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:h(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=y),w}})}(n={exports:{}}),n.exports),r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),e=r.regeneratorRuntime&&0<=Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),n=e&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e)r.regeneratorRuntime=n;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}var o=t;function u(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}var i,t=function(c){return function(){var t=this,a=arguments;return new Promise(function(r,e){var n=c.apply(t,a);function o(t){u(n,r,e,o,i,"next",t)}function i(t){u(n,r,e,o,i,"throw",t)}o(void 0)})}};wp&&(i=!1,wp.data.subscribe(t(o.mark(function t(){var r,e;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((r=wp.data.select("core/editor").isSavingPost())===i||r){t.next=9;break}return i=r,t.next=5,function(r){return new Promise(function(t){return setTimeout(t,r)})}(1e3);case 5:return t.next=7,jQuery.ajax({type:"POST",url:ajaxurl,data:"action=likecoin_get_error_notice"});case 7:(e=t.sent)&&(e=e.errors?e.errors.map(function(t){return t.message||t}).join(", "):e,wp.data.dispatch("core/notices").createNotice("error","LikeCoin Error: ".concat(e),{isDismissible:!0}));case 9:i=r;case 10:case"end":return t.stop()}},t)}))))}();
//# sourceMappingURL=likecoin_editor.js.map
