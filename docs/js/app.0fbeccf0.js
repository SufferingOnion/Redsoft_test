(function(t){function e(e){for(var r,c,a=e[0],u=e[1],o=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],r=!0,a=1;a<s.length;a++){var u=s[a];0!==i[u]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var r={},i={app:0},n=[];function c(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=r,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(s,r,function(e){return t[e]}.bind(null,r));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Redsoft_test/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var o=0;o<a.length;o++)e(a[o]);var l=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"04ff":function(t,e,s){t.exports=s.p+"img/loader.a36a4c2f.svg"},"0a04":function(t,e,s){"use strict";var r=s("cae9"),i=s.n(r);i.a},"18b2":function(t,e){t.exports="data:image/png;base64,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"},"30b7":function(t,e,s){},"4bda":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("div",{staticClass:"wrapper"},[s("h1",[t._v("Картины эпохи Возрождения")]),s("div",{staticClass:"wrapper__pictures-list pictures-list"},t._l(t.pictures,(function(t){return s("PictureCard",{key:t.name,staticClass:"pictures-list__card",attrs:{picture:t}})})),1)]),s("Footer")],1)},n=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"picture",style:t.SoldOut},[r("img",{staticClass:"picture__img",attrs:{src:t.picture.url,alt:t.picture.name}}),r("div",{staticClass:"picture__details details"},[r("h2",{staticClass:"details__name"},[t._v(t._s(t.picture.name))]),r("h2",{staticClass:"details__author"},[t._v(t._s(t.picture.author))])]),t.picture.sold?r("div",{staticClass:"picture__soldOut"},[r("span",[t._v("Продана на аукционе")])]):r("div",{staticClass:"picture__cost"},[0!=t.picture.cost?r("div",{staticClass:"cost"},[0!=t.picture.last_cost?r("h3",{staticClass:"cost__last"},[t._v(t._s(t.picture.last_cost))]):t._e(),r("h3",{staticClass:"cost__current"},[t._v(t._s(t.picture.cost))])]):t._e(),r("transition-group",{staticClass:"cost__button",attrs:{name:"button",tag:"div"}},[0==this.purchaseRequest&&1!=this.picture.purchased?r("div",{key:"buy",staticClass:"button",on:{click:t.BuyPicture}},[t._v("Купить")]):t._e(),1==this.picture.purchased?r("div",{key:"purchased",staticClass:"button button__purchased"},[t._v("В корзине!")]):t._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:1==this.purchaseRequest&&1!=this.picture.purchased,expression:"this.purchaseRequest == true&&this.picture.purchased != true"}],key:"loading",staticClass:"button__loader"},[r("img",{attrs:{src:s("04ff")}}),r("img",{attrs:{src:s("04ff")}})])])],1)])},a=[],u={name:"PictureCard",props:{picture:Object},data:function(){return{purchaseRequest:!1}},computed:{SoldOut:function(){return this.picture.sold?{opacity:".5"}:{opacity:"1"}}},methods:{BuyPicture:function(){this.purchaseRequest=!0,this.$store.dispatch("BuyPicture",{id:this.picture.id})}}},o=u,l=(s("0a04"),s("2877")),p=Object(l["a"])(o,c,a,!1,null,"817cbce6",null),f=p.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"header__container"},[s("Menu"),t._m(0)],1)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"search"},[s("input",{staticClass:"search__field",attrs:{placeholder:"Поиск по названию картины",type:"text",name:"",id:""}}),s("button",{staticClass:"search__button button"},[t._v("Найти")])])}],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"menu"},[r("a",{staticClass:"menu__logo",attrs:{href:"#"}},[r("img",{attrs:{src:s("18b2"),alt:"museum's logo"}})]),r("a",{attrs:{href:"#"}},[t._v("Каталог")]),r("a",{attrs:{href:"#"}},[t._v("Доставка")]),r("a",{attrs:{href:"#"}},[t._v("Оплата")]),r("a",{attrs:{href:"#"}},[t._v("Контакты")]),r("a",{attrs:{href:"#"}},[t._v("О галерее")])])}],A={name:"Menu"},b=A,_=(s("bb78"),Object(l["a"])(b,m,v,!1,null,null,null)),C=_.exports,g={name:"Header",components:{Menu:C}},E=g,S=(s("a614"),Object(l["a"])(E,d,h,!1,null,"ea1ad588",null)),y=S.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"footer__container"},[s("Menu"),t._m(0)],1)])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contacts"},[r("div",{staticClass:"contacts__item"},[r("img",{attrs:{src:s("c3bb"),alt:"contact phone"}}),r("span",[t._v("+7 (495) 555-55-55")])]),r("div",{staticClass:"contacts__item"},[r("img",{attrs:{src:s("5a29"),alt:"contact phone"}}),r("span",[t._v("г. Москва, ул. Расплетина, 24")])])])}],O={name:"Footer",components:{Menu:C}},k=O,B=(s("95e1"),Object(l["a"])(k,T,w,!1,null,"a7f5a51a",null)),P=B.exports,R={name:"App",data:function(){return{}},computed:{pictures:function(){return this.$store.getters.get_pictures}},components:{PictureCard:f,Header:y,Footer:P}},j=R,x=(s("5c0b"),Object(l["a"])(j,i,n,!1,null,null,null)),z=x.exports,G=(s("4160"),s("d3b7"),s("159b"),s("2f62"));r["a"].use(G["a"]);var I=function(t){null==sessionStorage.getItem("pictures")?t.dispatch("GetPictures"):(console.log(JSON.parse(sessionStorage.getItem("pictures"))),t.commit("GET_PICTURES",JSON.parse(sessionStorage.getItem("pictures")))),t.subscribe((function(e){"PURCHASE"===e.type&&sessionStorage.setItem("pictures",JSON.stringify(t.state.pictures)),"GET_PICTURES"===e.type&&sessionStorage.setItem("pictures",JSON.stringify(t.state.pictures))}))},U=new G["a"].Store({state:{pictures:[]},mutations:{PURCHASE:function(t,e){t.pictures[e.id-1].purchased=e.status},GET_PICTURES:function(t,e){e.forEach((function(e){t.pictures.push(e)}))}},getters:{get_pictures:function(t){return t.pictures}},actions:{BuyPicture:function(t,e){fetch("https://reqres.in/api/products/3",{method:"GET",cache:"no-store"}).then((function(s){t.commit("PURCHASE",{status:s.ok,id:e.id})}))},GetPictures:function(t){fetch("/Redsoft_test/pictures.json",{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.commit("GET_PICTURES",e)}))}},plugins:[I]});s("db39");r["a"].config.productionTip=!1,new r["a"]({store:U,render:function(t){return t(z)}}).$mount("#app")},"5a29":function(t,e,s){t.exports=s.p+"img/adress.5c53ce6e.svg"},"5c0b":function(t,e,s){"use strict";var r=s("9c0c"),i=s.n(r);i.a},"6fa3":function(t,e,s){},"95e1":function(t,e,s){"use strict";var r=s("4bda"),i=s.n(r);i.a},"9c0c":function(t,e,s){},a614:function(t,e,s){"use strict";var r=s("30b7"),i=s.n(r);i.a},bb78:function(t,e,s){"use strict";var r=s("6fa3"),i=s.n(r);i.a},c3bb:function(t,e,s){t.exports=s.p+"img/phone.fafc5226.svg"},cae9:function(t,e,s){},db39:function(t,e,s){}});