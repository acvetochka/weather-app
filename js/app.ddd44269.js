(function(){"use strict";var e={5101:function(e,t,n){var a=n(5130),r=n(6768);function o(e,t,n,a,o,u){const i=(0,r.g2)("Header"),c=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.bF)(c)],64)}const u={class:"header-container"},i={class:"logo-container"},c={class:"nav-content"};function s(e,t,n,a,o,s){const l=(0,r.g2)("router-view"),p=(0,r.g2)("CustomLayout");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("header",null,[(0,r.Lk)("div",u,[(0,r.Lk)("div",i,[(0,r.Lk)("a",{onClick:t[0]||(t[0]=(...t)=>e.goToMain&&e.goToMain(...t)),href:"#"},"Mini weather App")]),(0,r.Lk)("nav",null,[(0,r.Lk)("div",c,[(0,r.Lk)("a",{onClick:t[1]||(t[1]=(...t)=>e.goToMain&&e.goToMain(...t)),href:""},"Main"),(0,r.Lk)("a",{onClick:t[2]||(t[2]=(...t)=>e.goToAbout&&e.goToAbout(...t)),href:""},"About")])])])]),(0,r.bF)(p,null,{default:(0,r.k6)((()=>[(0,r.bF)(l)])),_:1})],64)}n(4114);var l=n(1387),p=(0,r.pM)({name:"Header",setup(){const e=(0,l.rd)(),t=()=>{e.push({name:"Main"})},n=()=>{e.push({name:"About"})};return{goToMain:t,goToAbout:n}}}),d=n(1241);const h=(0,d.A)(p,[["render",s],["__scopeId","data-v-3b51f14a"]]);var f=h,v=(0,r.pM)({name:"App",components:{Header:f},setup(){return{}}});const b=(0,d.A)(v,[["render",o]]);var y=b,w=n(9005);function m(e,t,n,a,o,u){const i=(0,r.g2)("Weather");return(0,r.uX)(),(0,r.Wv)(i)}var g=n(4232);const k={class:"search-box"},L={key:0,class:"weather-container"},M={class:"weather-wrap"},A={class:"location-box"},_={class:"location"},D={class:"date"},O={class:"weather-box"},T={class:"temp"},C={class:"weather"};function E(e,t,n,o,u,i){return(0,r.uX)(),(0,r.CE)("div",{class:(0,g.C4)(["weather","undefined"!==typeof e.weather?.main&&e.weather?.main.temp-273.15>16?"warm":""])},[(0,r.Lk)("main",null,[(0,r.Lk)("div",k,[(0,r.bo)((0,r.Lk)("input",{type:"text",id:"city",class:"search-bar",placeholder:"Search...","onUpdate:modelValue":t[0]||(t[0]=t=>e.city=t),onKeyup:t[1]||(t[1]=(0,a.jR)(((...t)=>e.fetchData&&e.fetchData(...t)),["enter"]))},null,544),[[a.Jo,e.city]])]),e.weather?.main?((0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("div",M,[(0,r.Lk)("div",A,[(0,r.Lk)("div",_,[(0,r.eW)((0,g.v_)(e.weather?.name)+", "+(0,g.v_)(e.weather.sys.country)+" ",1),(0,r.Lk)("div",D,(0,g.v_)(e.dateBuilder()),1)])])]),(0,r.Lk)("div",O,[(0,r.Lk)("div",T,(0,g.v_)((e.weather?.main.temp-273.15).toFixed(1))+"°C",1),(0,r.Lk)("div",C,(0,g.v_)(e.weather?.weather[0].main),1)])])):(0,r.Q3)("",!0)])],2)}var S=n(144),W=n(4373);function j(e){return W.A.get(`/?q=${e}&appid=${{NODE_ENV:"production",BASE_URL:"/"}.API_KEY}`)}const F=(0,w.nY)({id:"weather",state:()=>({city:"",weatherData:null}),actions:{async getWeatherData(e){const t=await j(e);this.weatherData=t.data,console.log("weatherData: ",this.weatherData),this.city=e}}});var x=(0,r.pM)({props:{counter:Number},setup(){const e=(0,S.KR)(""),t=F(),n=(0,r.EW)((()=>t.weatherData));function a(){t.getWeatherData(e.value)}function o(){let e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=n[e.getDay()],r=e.getDate(),o=t[e.getMonth()],u=e.getFullYear();return`${a} ${r} ${o} ${u}`}return{city:e,weather:n,fetchData:a,dateBuilder:o}}});const P=(0,d.A)(x,[["render",E]]);var X=P,$=(0,r.pM)({name:"Main",components:{Weather:X},setup(){return{}}});const J=(0,d.A)($,[["render",m]]);var K=J;const H=e=>((0,r.Qi)("data-v-0c26ca45"),e=e(),(0,r.jt)(),e),I={class:"about"},N=H((()=>(0,r.Lk)("p",null,"Mini Weather App – це веб-додаток, який дозволяє користувачам отримувати інформацію про погоду в певному місці. Він забезпечує зручний інтерфейс для доступу до поточних і прогнозованих даних про погоду для будь-якого місця, просто ввівши назву міста. Додаток розроблено таким чином, щоб бути простим і легким у використанні, що робить його ідеальним для людей, які хочуть отримувати швидкі оновлення погоди без потреби в більш складній і багатофункціональній програмі погоди.",-1))),B=H((()=>(0,r.Lk)("p",null,"Додаток використовує API для отримання даних про погоду та відображення їх користувачеві у візуально привабливому вигляді. Він містить основну інформацію про погоду, таку як температура.",-1))),R=H((()=>(0,r.Lk)("p",null,"Програма Mini Weather створена за допомогою сучасних веб-технологій, таких як Vue.js, HTML, CSS і JavaScript, що робить її легкою та швидкою програмою.",-1))),V=H((()=>(0,r.Lk)("p",null,"Загалом, Mini Weather App є чудовим інструментом для тих, хто хоче швидко та легко отримати доступ до інформації про погоду. Його простий та інтуїтивно зрозумілий інтерфейс робить його ідеальним вибором для тих, хто хоче бути в курсі погоди без необхідності переглядати безліч функцій і даних.",-1))),Y=H((()=>(0,r.Lk)("p",null,"Незалежно від того, чи плануєте ви подорож чи просто хочете дізнатися прогноз на день, додаток Mini Weather допоможе вам.",-1))),Q=[N,B,R,V,Y];function U(e,t,n,a,o,u){return(0,r.uX)(),(0,r.CE)("div",I,Q)}var q=(0,r.pM)({name:"About",setup(){return{}}});const z=(0,d.A)(q,[["render",U],["__scopeId","data-v-0c26ca45"]]);var G=z;const Z=[{path:"/",name:"Main",component:K},{path:"/about",name:"About",component:G}],ee=(0,l.aE)({history:(0,l.LA)("/weather-app/"),routes:Z});var te=ee;const ne=(0,a.Ef)(y),ae=(0,w.Ey)();ne.use(te),ne.use(ae),ne.mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var u=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,o<u&&(u=o));if(i){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,u=a[0],i=a[1],c=a[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(t&&t(a);s<u.length;s++)o=u[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(5101)}));a=n.O(a)})();
//# sourceMappingURL=app.ddd44269.js.map