!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function p(e){return c=e,f=setTimeout(j,t),d?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function j(){var e=g();if(S(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?y(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function O(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return p(l);if(s)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=h(t)||0,T(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:w(g())},O}function T(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(T(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=T(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return T(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),j=(S.querySelector("[name = email]"),S.querySelector("[name = message]"),"feedback-form-state"),w={};!function(){var e=JSON.parse(localStorage.getItem(j));if(e)for(var t in e)e.hasOwnProperty(t)&&(S.elements[t].value=e[t]||"",w[t]=e[t])}(),S.addEventListener("input",e(t)((function(e){!function(e){w[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(w))}(e)}),500)),S.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=!0,r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)if(b=a.value,("INPUT"===b.nodeName||"TEXTAREA"===b.nodeName)&&!b.value){n=!1,alert("Fill field ".concat(b.name));break}}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}n&&(console.log(w),localStorage.removeItem(j),e.currentTarget.reset(),w={})}))}();
//# sourceMappingURL=03-feedback.9f883c2e.js.map