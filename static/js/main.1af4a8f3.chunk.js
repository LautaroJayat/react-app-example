(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),c=(n(19),n(7)),s=n(1),l=n(2),u=n(4),p=n(3),h=n(5),d=(n(6),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title"},"Weather Time!"),o.a.createElement("span",{className:"wellcome"},"For those who love the weather forecast..."))}}]),t}(a.Component)),f=n(12),m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={cityName:""},n.onSubmit=function(e){e.preventDefault(),n.props.addCity(n.state.cityName),n.setState({cityName:""}),e.target.reset()},n.onChange=function(e){return n.setState(Object(f.a)({},e.target.name,e.target.value))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{onChange:this.onChange,name:"cityName",type:"text",placeholder:"Write a city..."}),o.a.createElement("button",null,"GO!")))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.city.weather[0].icon,t="http://openweathermap.org/img/wn/".concat(e,"@2x.png"),n=this.props.city._id;return o.a.createElement("div",{className:"cityItem",onClick:this.props.deleteCity.bind(this,n)},o.a.createElement("h3",null,this.props.city.name),o.a.createElement("p",null,o.a.createElement("strong",null,this.props.city.weather[0].description),", and the temperature is ",this.props.city.main.temp,"\xb0C"),o.a.createElement("img",{src:t,alt:this.props.city.coord.lon}))}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.city.map((function(t){return o.a.createElement(y,{key:t._id,city:t,deleteCity:e.props.deleteCity})}))}}]),t}(a.Component),g=n(13),v=n.n(g),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={city:[]},n.addCity=function(e){console.log(e),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=df4c1079550f4c8d5d8f14a31aacf223&units=metric")).then((function(e){return e.json()})).then((function(e){e.coord?(e._id=v.a.v4(),n.setState({city:[].concat(Object(c.a)(n.state.city),[e])}),console.log(n.state.city)):(console.log(e),console.log("Woops, no query pal!"))}))},n.deleteCity=function(e){n.setState({city:Object(c.a)(n.state.city.filter((function(t){return t._id!==e})))})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(d,null),o.a.createElement(m,{addCity:this.addCity}),o.a.createElement(b,{city:this.state.city,deleteCity:this.deleteCity}))}}]),t}(a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-app-example",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-app-example","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()},6:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.1af4a8f3.chunk.js.map