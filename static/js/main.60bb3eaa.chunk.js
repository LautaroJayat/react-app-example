(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{14:function(t,e,n){t.exports=n(22)},19:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),i=(n(19),n(7)),l=n(1),s=n(2),u=n(4),h=n(3),p=n(5),m=(n(6),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"Weather Time!"),c.a.createElement("span",{className:"wellcome"},"For those who love the weather forecast..."))}}]),e}(a.Component)),y=n(12),d=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={cityName:""},n.onSubmit=function(t){t.preventDefault(),n.props.addCity(n.state.cityName),n.setState({cityName:""}),t.target.reset()},n.onChange=function(t){return n.setState(Object(y.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{onChange:this.onChange,name:"cityName",type:"text",placeholder:"Write a city..."}),c.a.createElement("button",null,"GO!")))}}]),e}(a.Component),f=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.city._id;return c.a.createElement("div",{className:"cityItem",onClick:this.props.deleteCity.bind(this,t)},c.a.createElement("h3",null,this.props.city.coord.lon),c.a.createElement("p",null,this.props.city.coord.lon,"\xb0C"),c.a.createElement("img",{src:this.props.city.coord.lon,alt:this.props.city.coord.lon}))}}]),e}(a.Component),b=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.city.map((function(e){return c.a.createElement(f,{key:e._id,city:e,deleteCity:t.props.deleteCity})}))}}]),e}(a.Component),j=n(13),O=n.n(j),v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={city:[]},n.addCity=function(t){console.log(t),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=df4c1079550f4c8d5d8f14a31aacf223")).then((function(t){return t.json()})).then((function(t){t.coord?(t._id=O.a.v4(),n.setState({city:[].concat(Object(i.a)(n.state.city),[t])}),console.log(n.state.city)):(console.log(t),console.log("Woops, no query pal!"))}))},n.deleteCity=function(t){n.setState({city:Object(i.a)(n.state.city.filter((function(e){return e._id!==t})))})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(m,null),c.a.createElement(d,{addCity:this.addCity}),c.a.createElement(b,{city:this.state.city,deleteCity:this.deleteCity}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},6:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.60bb3eaa.chunk.js.map