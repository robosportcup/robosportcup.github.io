(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==(void 0===e?"undefined":_typeof(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(t){return e[t]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n.r(t),n(1),n(3);var o=n(2),i=n.n(o),r=n(5);r.keys().forEach(function(e){r(e)});var a=n(22);a.keys().forEach(function(e){a(e)}),i.a.init()},function(e,t,n){},function(e,t,n){(function(t){e.exports=function(){function e(e){var t=void 0===e?"undefined":_typeof(e);return!!e&&("object"==t||"function"==t)}function n(t){if("number"==typeof t)return t;if(function(e){return"symbol"==(void 0===e?"undefined":_typeof(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":_typeof(e))}(e)&&w.call(e)==f}(t))return d;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var o=p.test(t);return o||v.test(t)?b(t.slice(2),o?2:8):m.test(t)?d:+t}function o(e){var t=void 0===e?"undefined":_typeof(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":_typeof(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":_typeof(e))}(e)&&q.call(e)==j}(e))return O;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(N,"");var n=M.test(e);return n||A.test(e)?L(e.slice(2),n?2:8):C.test(e)?O:+e}function r(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return $()})}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}var s="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},u="Expected a function",d=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,b=parseInt,y="object"==(void 0===s?"undefined":_typeof(s))&&s&&s.Object===Object&&s,g="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,_=Math.min,x=function(){return h.Date.now()},E=function(t,o,i){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError(u);return e(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),function(t,o,i){function r(e){var n=f,o=l;return f=l=void 0,y=e,p=t.apply(o,n)}function a(e){var t=e-b;return void 0===b||t>=o||t<0||h&&e-y>=m}function c(){var e=x();if(a(e))return s(e);v=setTimeout(c,function(e){var t=o-(e-b);return h?_(t,m-(e-y)):t}(e))}function s(e){return v=void 0,w&&f?r(e):(f=l=void 0,p)}function d(){var e=x(),t=a(e);if(f=arguments,l=this,b=e,t){if(void 0===v)return function(e){return y=e,v=setTimeout(c,o),g?r(e):p}(b);if(h)return v=setTimeout(c,o),r(b)}return void 0===v&&(v=setTimeout(c,o)),p}var f,l,m,p,v,b,y=0,g=!1,h=!1,w=!0;if("function"!=typeof t)throw new TypeError(u);return o=n(o)||0,e(i)&&(g=!!i.leading,m=(h="maxWait"in i)?k(n(i.maxWait)||0,o):m,w="trailing"in i?!!i.trailing:w),d.cancel=function(){void 0!==v&&clearTimeout(v),y=0,f=b=l=v=void 0},d.flush=function(){return void 0===v?p:s(x())},d}(t,o,{leading:r,maxWait:o,trailing:a})},O=NaN,j="[object Symbol]",N=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,A=/^0o[0-7]+$/i,L=parseInt,S="object"==(void 0===s?"undefined":_typeof(s))&&s&&s.Object===Object&&s,z="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,T=S||z||Function("return this")(),q=Object.prototype.toString,D=Math.max,B=Math.min,H=function(){return T.Date.now()},P=function(e,t,n){function r(t){var n=d,o=f;return d=f=void 0,b=t,m=e.apply(o,n)}function a(e){var n=e-v;return void 0===v||n>=t||n<0||g&&e-b>=l}function c(){var e=H();if(a(e))return s(e);p=setTimeout(c,function(e){var n=t-(e-v);return g?B(n,l-(e-b)):n}(e))}function s(e){return p=void 0,h&&d?r(e):(d=f=void 0,m)}function u(){var e=H(),n=a(e);if(d=arguments,f=this,v=e,n){if(void 0===p)return function(e){return b=e,p=setTimeout(c,t),y?r(e):m}(v);if(g)return p=setTimeout(c,t),r(v)}return void 0===p&&(p=setTimeout(c,t)),m}var d,f,l,m,p,v,b=0,y=!1,g=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t=i(t)||0,o(n)&&(y=!!n.leading,l=(g="maxWait"in n)?D(i(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),u.cancel=function(){void 0!==p&&clearTimeout(p),b=0,d=v=f=p=void 0},u.flush=function(){return void 0===p?m:s(H())},u},$=function(){},W={isSupported:function(){return!!a()},ready:function(e,t){var n=window.document,o=new(a())(r);$=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,K=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,J=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Q=new(function(){function e(){Y(this,e)}return F(e,[{key:"phone",value:function(){var e=c();return!(!I.test(e)&&!K.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=c();return!(!G.test(e)&&!J.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),R=function(e,t){var n=void 0;return Q.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},V=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,r=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),R("aos:out",i),e.options.id&&R("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?r():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),R("aos:in",i),e.options.id&&R("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&r()}(e,window.pageYOffset)})},X=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},Z=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},ee=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},te=[],ne=!1,oe={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ie=function(){return document.all&&!window.atob},re=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ne=!0),ne&&(t=oe,(e=te).forEach(function(e,n){var o=Z(e.node,"mirror",t.mirror),i=Z(e.node,"once",t.once),r=Z(e.node,"id"),a=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(a?a.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=Z(e,"anchor"),r=Z(e,"anchor-placement"),a=Number(Z(e,"offset",r?0:t)),c=r||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=X(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+a}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=Z(e,"anchor"),o=Z(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),X(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:r}}),V(te=e),window.addEventListener("scroll",E(function(){V(te,oe.once)},oe.throttleDelay)))},ae=function(){if(te=ee(),se(oe.disable)||ie())return ce();re()},ce=function(){te.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),oe.initClassName&&e.node.classList.remove(oe.initClassName),oe.animatedClassName&&e.node.classList.remove(oe.animatedClassName)})},se=function(e){return!0===e||"mobile"===e&&Q.mobile()||"phone"===e&&Q.phone()||"tablet"===e&&Q.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return oe=U(oe,e),te=ee(),oe.disableMutationObserver||W.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),oe.disableMutationObserver=!0),oe.disableMutationObserver||W.ready("[data-aos]",ae),se(oe.disable)||ie()?ce():(document.querySelector("body").setAttribute("data-aos-easing",oe.easing),document.querySelector("body").setAttribute("data-aos-duration",oe.duration),document.querySelector("body").setAttribute("data-aos-delay",oe.delay),-1===["DOMContentLoaded","load"].indexOf(oe.startEvent)?document.addEventListener(oe.startEvent,function(){re(!0)}):window.addEventListener("load",function(){re(!0)}),"DOMContentLoaded"===oe.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&re(!0),window.addEventListener("resize",P(re,oe.debounceDelay,!0)),window.addEventListener("orientationchange",P(re,oe.debounceDelay,!0)),te)},refresh:re,refreshHard:ae}}()}).call(this,n(4))},function(e,t,n){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==("undefined"==typeof window?"undefined":_typeof(window))&&(n=window)}e.exports=n},function(e,t,n){function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}var r={"./blocks/button.pcss":6,"./blocks/footer.pcss":7,"./blocks/header-navigation.pcss":8,"./blocks/header.pcss":9,"./blocks/link.pcss":10,"./blocks/main-about.pcss":11,"./blocks/main-counter.pcss":12,"./blocks/main-event-announcement.pcss":13,"./blocks/main-events.pcss":14,"./blocks/main-experts.pcss":15,"./blocks/main-hero.pcss":16,"./blocks/main-news.pcss":17,"./blocks/main-organizers.pcss":18,"./blocks/main-welcome.pcss":19,"./blocks/partners.pcss":20,"./blocks/social.pcss":21,"./index.pcss":1};o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=5},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}var r={"./blocks/header-navigation.js":23,"./blocks/main-counter.js":24,"./index.js":0};o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=22},function(e,t){function n(){var e=document.getElementsByClassName("header__navigation");Array.from(e).forEach(function(e){e.classList.remove("header__navigation_active")});var t=document.getElementsByClassName("header-navigation__hamburger");Array.from(t).forEach(function(e){e.classList.remove("header-navigation__hamburger_active")}),o()}function o(){document.body.style.overflowY="",document.body.style.position="static"}var i=Array.from(document.getElementsByClassName("header-navigation__hamburger")),r=Array.from(document.getElementsByClassName("header-navigation__link")),a=function(e){var t=!this.classList.contains("header-navigation__hamburger_active");this.classList.toggle("header-navigation__hamburger_active");var n=this.parentNode.getElementsByClassName("header__navigation");n&&Array.from(n).forEach(function(e){e.classList.toggle("header__navigation_active"),t?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true")):(e.removeAttribute("role"),e.removeAttribute("aria-modal"))}),t?(window.scrollTo(0,0),document.body.style.overflowY="scroll",document.body.style.position="fixed",document.body.style.width="100%"):o()};i.forEach(function(e){e.addEventListener("click",a)}),r.forEach(function(e){e.addEventListener("click",n)}),window.addEventListener("resize",n)},function(e,t){function n(e,t,n){var o=e.getElementsByClassName("main-counter__title");o&&o.length>0&&(o[0].innerText=t);var i=e.getElementsByClassName("main-counter__value");i&&i.length>0&&(i[0].innerText=n)}var o=Array.from(document.getElementsByClassName("main-counter")),i=!0;setInterval(function(){o.forEach(function(e){var t,o,r=e.getAttribute("data-date");if(r){var a=(new Date(r)-new Date)/1e3;a<0&&(a=0);var c=Math.floor(a/60/60/24);a-=24*c*60*60;var s=Math.floor(a/60/60);a-=60*s*60;var u=Math.floor(a/60);a-=60*u;var d=Math.floor(a),f=e.getElementsByClassName("main-counter__item");f.length>=1&&n(f[0],0===(o=(t=c)>20?t-10*Math.floor(t/10):t)?"дней":1===o?"день":o>=2&&o<=4?"дня":"дней",c),f.length>=2&&n(f[1],function(e){var t=e>20?e-10*Math.floor(e/10):e;return 0===t?"часов":1===t?"час":t>=2&&t<=4?"часа":"часов"}(s),s),f.length>=3&&n(f[2],function(e){var t=e>20?e-10*Math.floor(e/10):e;return 0===t?"минут":1===t?"минута":t>=2&&t<=4?"минуты":"минут"}(u),u),f.length>=4&&n(f[3],function(e){var t=e>20?e-10*Math.floor(e/10):e;return 0===t?"секунд":1===t?"секунда":t>=2&&t<=4?"секунды":"секунд"}(d),d),i&&(i=!1,e.classList.add("main-counter_active"))}})},1e3)}]);

},{}]},{},[1]);
