var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function y(e,t,i){var o,r,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function T(){var e=p();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,d&&o?y(e):(o=r=void 0,u)}function w(){var e=p(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(T,t),s?y(e):u}(l);if(v)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,b(i)&&(s=!!i.leading,a=(v="maxWait"in i)?m(j(i.maxWait)||0,t):a,d="trailing"in i?!!i.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return b(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const S=document.querySelector(".feedback-form"),T=S.querySelector('input[name="email"]'),h=S.querySelector('textarea[name="message"]'),w="feedback-form-state";S.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:T.value,message:h.value}),e.currentTarget.reset(),localStorage.removeItem(w)})),S.addEventListener("input",t((function(){const e={email:T.value,message:h.value};localStorage.setItem(w,JSON.stringify(e)),console.log(e)}),500)),function(){const e=localStorage.getItem(w);if(e){const t=JSON.parse(e);T.value=t.email,h.value=t.message}}();
//# sourceMappingURL=03-feedback.92dda7df.js.map