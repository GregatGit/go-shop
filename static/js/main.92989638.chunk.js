(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),i=n.n(s),o=n(40),c=n(41),l=n(50),u=n(42),m=n(51),d=n(1),p=n(52),y="ADD_LIST",f="ITEM_BOUGHT",h="HOME_PAGE",g="COMPLETED_LIST",E="EMPTY_SHOPPINGLIST";function b(){return{type:h}}var v=function(e){return{type:"LIST_CHOSEN",payload:e}},O=function(e){var t=e.name,n=e.func;return r.a.createElement("div",null,r.a.createElement("h2",null,"Hi ",t),r.a.createElement("ul",{className:"myList"},r.a.createElement("li",null,r.a.createElement("button",{className:"myButton",onClick:function(){return n("YourLists")}},"YOUR LISTS")),r.a.createElement("li",null,r.a.createElement("button",{className:"myButtonOff"},"QUICK LISTS")),r.a.createElement("li",null,r.a.createElement("button",{className:"myButtonOff"},"MAKE A LIST")),r.a.createElement("li",null,r.a.createElement("button",{className:"myButtonOff"},"IMPORT A LIST")),r.a.createElement("li",null,r.a.createElement("button",{className:"myButtonOff"},"SEND A LIST"))))},w=n(2),_=function(e){return e.replace(/_/g," ").toUpperCase()},S=Object(d.b)(function(e,t){return{lists:e.lists,amount:e.shoppingList.length}},{selectChosen:v})(function(e){var t=e.lists,n=e.selectChosen,s=e.home,i=e.amount,o=Object(a.useState)(null),c=Object(w.a)(o,2),l=c[0],u=c[1];var m;return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"CHOOSE A LIST"),r.a.createElement("ul",{id:"yourList"},t&&(m=t,Object.keys(m).map(function(e){var n=_(t[e].name);return r.a.createElement("li",{key:e},r.a.createElement("button",{onClick:function(){return function(e){u(e)}(e)},className:"myButton"},n))}))),l&&r.a.createElement("div",null,r.a.createElement("h3",null,"Hit the button below see the list items"),r.a.createElement("button",{onClick:function(){n(l)}},"LOAD ",_(t[l].name))),r.a.createElement("h3",null,"ITEM IN YOUR LIST: ",i),r.a.createElement("button",{className:"homeButton",onClick:s},"HOME"),i?r.a.createElement("button",{className:"homeButton"},"GO SHOP"):"")}),k=Object(d.b)(function(e,t){return{chosen:e.chosen,items:e.items,lists:e.lists,mainList:e.shoppingList}},{addList:function(e){var t=e.map(function(e){return Object(p.a)({},e,{done:!1,skip:!1})});return{type:y,payload:t}},homePage:b})(function(e){var t=e.chosen,n=e.items,s=e.lists,i=e.addList,o=e.goShop,c=e.homePage,l=e.mainList,u=Object(a.useState)(!0),m=Object(w.a)(u,2),d=m[0],p=m[1],y=s[t].name,f=l.map(function(e){return e.name});function h(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelectorAll("input"),a=Array.from(t).filter(function(e){return e.checked}).map(function(e){return e.name}),r=n.filter(function(e){return-1!==a.indexOf(e.name)});i(r),e&&o()}var g,E,b=d?"Select":"Unselect";return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,_(y)," LIST"),r.a.createElement("h3",null,"Select items for your shop"),r.a.createElement("p",null,"you can select all if needed"),r.a.createElement("ul",{className:"toSort"},(g=t,E=f,n.filter(function(e){return-1!==e.lists.indexOf(g)}).filter(function(e){return-1===E.indexOf(e.name)}).map(function(e){var t=e.name;return r.a.createElement("li",{className:"checkboxFive",key:t},r.a.createElement("input",{type:"checkbox",id:t,name:t}),r.a.createElement("label",{htmlFor:t}," ",_(t)))}))),r.a.createElement("div",{className:"shopAndAdd"},r.a.createElement("button",{onClick:function(){document.querySelectorAll("input").forEach(function(e){return e.checked=d}),p(!d)}},b," All"),r.a.createElement("button",{onClick:h},"Let's Shop"),r.a.createElement("button",{onClick:function(){h(!1),c()}},"Add more items")),r.a.createElement("button",{className:"homeButton",onClick:c},"BACK"))}),L=Object(d.b)(function(e,t){return{list:e.shoppingList}},{itemBought:function(e){return{type:f,payload:e}},homePage:b,completedList:function(e){return{type:g,payload:e}},emptyShoppingList:function(){return{type:E}}})(function(e){var t=e.list,n=e.itemBought,s=e.homePage,i=e.completedList,o=e.emptyShoppingList,c=Object(a.useState)(t.length),l=Object(w.a)(c,2),u=l[0],m=l[1],d=Object(a.useState)(0),p=Object(w.a)(d,2),y=p[0],f=p[1],h=Object(a.useState)(!1),g=Object(w.a)(h,2),E=g[0],b=g[1];return r.a.createElement("div",{id:"shoppingList"},r.a.createElement("h2",null,"SHOPPING LIST"),r.a.createElement("ul",null,t&&t.filter(function(e){return!e.done}).map(function(e){var t=e.name;return r.a.createElement("li",{className:"sList",key:t},r.a.createElement("button",{onClick:function(){return function(e){n(e),m(u-1),f(y+1)}(t)}},_(t)))})),u>0?r.a.createElement("p",null,"items left: ",r.a.createElement("b",null,u)):r.a.createElement("button",{onClick:function(){i(t),o(),s()}},"DONE"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){b(!E)}},"You bought ",y)),r.a.createElement("div",null,E?function(e){return e.filter(function(e){return e.done}).map(function(e){return r.a.createElement("li",{key:e.name},_(e.name))})}(t):"click to see items bought"))}),A=(n(64),function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=t[0],s=t[1];return r.a.createElement("div",null,!n&&r.a.createElement(k,{goShop:function(){s(!0)}}),n&&r.a.createElement(L,null))}),j=(n(65),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:"Greg",show:"Lists"},n.changeShow=function(e){n.setState({show:e})},n.home=function(){n.setState({show:"Lists"})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.chosen?r.a.createElement(A,null):r.a.createElement("div",null,"Lists"===this.state.show&&r.a.createElement(O,{func:this.changeShow,name:this.state.user}),"YourLists"===this.state.show&&r.a.createElement(S,{home:this.home}))}}]),t}(r.a.Component)),T=Object(d.b)(function(e,t){return{lists:e.lists,chosen:e.chosen}},{selectChosen:v,filterList:function(e){return{type:"LIST_FILTER",payload:e}}})(j);var I=function(){return r.a.createElement("div",null,r.a.createElement(T,null))},C=n(6),N=n(45),M=n.n(N),F=n(144),B=n(46),P=n(47),H=n(26),x=n.n(H),D=n(9),U=Object(C.c)({shoppingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(D.a)(e),Object(D.a)(t.payload));case f:var n=e.map(function(e){return e.name}).indexOf(t.payload),a=Object(D.a)(e);return a[n].done=!0,a;case E:return[];default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if(!e)return B;switch(t.type){case"LIST_FILTER":return e.filter(function(e){return e.lists.indexOf(t.payload)>-1});default:return e}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;arguments.length>1&&arguments[1];return e||(e=x.a.mapKeys(P,"code")),e},chosen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_CHOSEN":return t.payload;case h:return null}return e},completed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return[].concat(Object(D.a)(e),[t.payload]);default:return e}},form:F.a}),q=Object(C.a)(M.a)(C.d);i.a.render(r.a.createElement(d.a,{store:q(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(I,null)),document.getElementById("root"))},46:function(e){e.exports=[{name:"cheese",category:"fresh",store:"Aldi",lists:["wy1"]},{name:"milk",category:"fresh",store:"Aldi",lists:["wy1","qs3"]},{name:"chicken_legs",category:"meat",store:"Aldi",lists:["wy1"]},{name:"rye_bread",category:"fresh",store:"Coles",lists:["wy1"]},{name:"dish_soap",category:"cleaning",store:"Aldi",lists:["wy1"]},{name:"tissues",category:"health",store:"Aldi",lists:["wy1"]},{name:"face_wash",category:"health",store:"Aldi",lists:["wy1"]},{name:"coffee",category:"beverages",store:"Coles",lists:["wy1"]},{name:"tea",category:"beverages",store:"Aldi",lists:["wy1"]},{name:"soft_drink",category:"beverages",store:"Aldi",lists:["ps2"]},{name:"coke",category:"beverages",store:"Coles",lists:["ps2"]},{name:"ligth_rye_bread",category:"backery",store:"Aldi",description:"light rye sandwiches",lists:["wy1","qs3"]},{name:"canned_tomatoes",category:"canned",store:"Aldi",description:"Australian canned tomatoes",lists:["wy1"]},{name:"Pasta_Sauce",category:"canned",store:"Aldi",description:"",lists:["wy1"]},{name:"beef_mince",category:"meat",store:"Aldi",description:"4 start 500g",lists:["wy1"]},{name:"spaghetti",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"spiral_pasta",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"olive_oil",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"cooking_oil",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"toilet_paper",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"butter",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"mince",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"buns",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"diswashing_tablets",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"sliced_ham",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"ham",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"instant_noodles",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"quick_oats",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"musli",category:"",store:"Aldi",description:"",lists:["wy1"]},{name:"onions",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"lettuce",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"tomatoes",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"carrots",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"apples",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"oranges",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"avocado",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"mandarines",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"bananas",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"red_onions",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"mushrooms",category:"",store:"Fruit_Market",description:"",lists:["fav1"]},{name:"potatoes",category:"",store:"Fruit_Market",description:"",lists:["fav1"]}]},47:function(e){e.exports=[{name:"weekly",code:"wy1",description:"Your weekly grocery shop"},{name:"fruit_&_veg",code:"fav1",description:"Fruit and vegetables"},{name:"party_shop",code:"ps2",description:"Typical pary food"},{name:"quick_shop",code:"qs3",description:"Just a few things for now"}]},53:function(e,t,n){e.exports=n(142)},64:function(e,t,n){},65:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.92989638.chunk.js.map