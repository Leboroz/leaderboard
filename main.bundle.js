(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function y(){}function v(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(T([])));L&&L!==r&&n.call(L,a)&&(b=L);var E=g.prototype=y.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=g,u(E,"constructor",g),u(g,"constructor",v),v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(j.prototype),u(j.prototype,i,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=((e=document.createElement("section")).className="title padding-x",e.innerHTML='\n  <div class="header">\n    <h1 class="display-1">Leaderboard</h1>\n  </div>',e);var e,n=document.createElement("article");n.className="container leader-board padding-x",n.innerHTML='\n  <div class="recent-scores">\n   <h2 class="display-2">Recent scores</h2>\n   <label>\n    Game board ID: \n    <input id="game_input" class="games" list="games" name="game">\n    <datalist id="games"><option value="'.concat("q7trRj6LtqszH8faUXEq",' (main)"></datalist>\n   </label>\n  </div>\n  <ul id="board" class="board">\n  </ul>\n  ');const o=n;var a=document.createElement("article");a.className="container form-container padding-x",a.innerHTML='\n  <h2 class="display-2">Add your score</h2>\n  <form id="form" class="form" autocomplete="off">\n   <label ><input type="text" id="name" name="name" placeholder="Your name"/ required></label>\n   <label ><input type="number" id="score" name="score" placeholder="Your score" required/></label>\n   <div class="button-wrapper">\n    <button id="new_game" type="button" class="btn">New game</button>\n    <span id="msg" class="btn msg"></span>\n    <button type="submit" class="btn" />Submit</button>\n   </div>\n  </form>\n  ';const i=a;var c=document.createElement("section");c.className="leader-board-container",c.append(o,i);const u=c;function s(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=r(757),y=r.n(m),v=function(){function t(){f(this,t)}var e,r,n;return h(t,null,[{key:"postName",value:(n=l(y().mark((function t(e){var r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.URL+this.gameName,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"postScore",value:(r=l(y().mark((function t(e,r){var n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.URL+this.scoreURL,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,score:r})});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"getScores",value:(e=l(y().mark((function t(){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.URL+this.scoreURL);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setId",value:function(t){this.id=t,this.scoreURL="/games/".concat(t,"/scores/")}}]),t}();p(v,"URL","https://us-central1-js-capstone-backend.cloudfunctions.net/api"),p(v,"gameName","/games/");const g=function(t,e){return e.score-t.score};var b=document.createElement("div");b.className="pop-up",b.innerHTML="There are no scores added";const w=b;function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=function(){function t(){f(this,t)}return h(t,null,[{key:"update",value:function(t){var e,r=(e=t.children,function(t){if(Array.isArray(t))return L(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return t.value}));localStorage.setItem("ids",JSON.stringify(r))}},{key:"get",value:function(t){localStorage.getItem("ids")&&(t.innerHTML="",JSON.parse(localStorage.getItem("ids")).forEach((function(e){var r=document.createElement("option");r.value=e,t.appendChild(r)})))}}]),t}();document.getElementById("header").append(t),document.getElementById("main").append(u);var x=document.getElementById("board"),j=document.getElementById("game_input"),S=u.querySelector("#new_game"),I=document.getElementById("games");x.appendChild(w);var N=function(){v.getScores().then((function(t){var e=t.result;if(x.innerHTML="",e.length<1)x.appendChild(w);else{e=e.sort(g);for(var r=function(t){var r=e[t],n=r.user,o=r.score;setTimeout((function(){x.appendChild(function(t,e,r){var n=document.createElement("li");n.className=r%2==0?"item item__2":"item",n.innerHTML="".concat(r+1,". ").concat(t,": ").concat(e);var o=document.createElement("i");return o.className="fas fa-trophy",0===r&&n.append(o),n}(n,o,t))}),100+20*t)},n=0;n<e.length;n+=1)r(n)}}))},O=function(t,e){t.textContent=e,t.classList.add("show-msg"),setTimeout((function(){t.classList.remove("show-msg")}),2e3)};E.get(I),v.setId("q7trRj6LtqszH8faUXEq"),document.getElementById("score").addEventListener("keydown",(function(t){var e=t.currentTarget.value;e>99999999&&(t.currentTarget.value=parseInt(e/10))})),document.getElementById("form").addEventListener("submit",(function(t){var e=document.getElementById("name").value,r=document.getElementById("score").value;t.preventDefault(),v.postScore(e,r).then((function(){N(),O(t.target.querySelector("#msg"),"Successfuly added score")})),t.target.reset()})),j.addEventListener("change",(function(t){if(t.target.value){var e=t.target.value.match(/^(\S+)/)[1];e!==v.id&&20===e.length&&(v.setId(e),N())}t.target.value=""})),S.addEventListener("click",(function(){v.postName("new game").then((function(t){var e=document.createElement("option");e.textContent=t.result.match(/^Game with ID: (.+) added.$/)[1],I.appendChild(e),O(document.querySelector("#msg"),"succesfuly created new board"),E.update(I)}))})),N()})()})();