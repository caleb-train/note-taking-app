(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2BvP":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("nOHt"),c=n.n(r),i=n("/MKj"),u=n("hfKm"),s=n.n(u),l=n("2Eek"),d=n.n(l),f=n("XoMD"),m=n.n(f),v=n("Jo+v"),N=n.n(v),p=n("4mXO"),g=n.n(p),b=n("pLtp"),h=n.n(b),k=n("vYYK"),w=n("9Jkg"),E=n.n(w),x=n("xn43");function y(e,t){var n=h()(e);if(g.a){var o=g()(e);t&&(o=o.filter(function(t){return N()(e,t).enumerable})),n.push.apply(n,o)}return n}var C=function(e,t){var n=t.data[0],a=t.editNote,r=t.isErrored,c=t.message,i=t.isLoading,u=t.EditNote,l=t.GetNoteAsync,f=t.Reset;Object(o.useEffect)(function(){c&&Object(x.a)(c,r?"error":"success"),u({message:"",isErrored:!1})},[E()(n)]),Object(o.useEffect)(function(){return l(e),function(){return f()}},[]);return{editNote:a,isLoading:i,updateNote:function(e){e.persist();var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):m.a?d()(e,m()(n)):y(n).forEach(function(t){s()(e,t,N()(n,t))})}return e}({},a,Object(k.a)({},e.target.name,e.target.value));u({editNote:t,makeNote:!1,saveNote:E()(t)!==E()(n)})},message:c,isErrored:r,note:n}},O=n("ciu6"),j={GetNoteAsync:O.d,EditNote:O.c,Reset:O.f},L=n("9eFo"),K=n("tF2K"),_=n("7Qib"),J=(n("T5Y8"),a.a.createElement);t.default=Object(i.b)(function(e){var t=e.note;return{data:t.data,editNote:t.editNote,isErrored:t.isErrored,message:t.message,isLoading:t.isLoading}},j)(function(e){var t=Object(r.useRouter)().query.id;console.log(e);var n=C(t,e),o=n.editNote,a=n.isLoading,i=n.updateNote;return n.message&&c.a.push("/"),a?J(L.a,null):o&&J("div",{className:"w-4/5 md:w-3/5 h-full flex flex-col mx-auto"},J("section",{className:"h-1/4 mt-6 flex flex-col items-center"},J("input",{name:"title",className:"text-2xl border-0 outline-none text-center",onChange:i,defaultValue:o.title}),J(K.a,{pickColor:function(e){return Object(K.b)(e,i)},editNote:o})),J("section",{className:"h-4/5"},J("h5",{className:"mx-auto mb-6 text-center"},"Change something to make edits"),J("textarea",{onInput:_.a,onChange:i,name:"body",value:o.body,className:"w-full md:p-8 p-6 rumple outline-none min-h-4/5 text-sm font-montserrat ".concat(o.color||"wht")})))||J(L.a,null)})},Kt5L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/note/[id]",function(){return n("2BvP")}])},tF2K:function(e,t,n){"use strict";n.d(t,"b",function(){return r});var o=n("q1tI"),a=n.n(o).a.createElement,r=function(e,t){t({persist:function(e){},target:{value:e,name:"color"}})};t.a=function(e){var t=e.pickColor,n=e.editNote;return a("div",{className:"colorpicker"},a("div",{onClick:function(e){return t("wht")},className:"".concat("wht"!==n.color&&n.color?"":"active"," picker wht")}),a("div",{onClick:function(e){return t("red")},className:"".concat("red"===n.color?"active":""," picker red")}),a("div",{onClick:function(e){return t("blu")},className:"".concat("blu"===n.color?"active":""," picker blu")}),a("div",{onClick:function(e){return t("yel")},className:"".concat("yel"===n.color?"active":""," picker yel")}),a("div",{onClick:function(e){return t("gray")},className:"".concat("gray"===n.color?"active":""," picker gray")}))}}},[["Kt5L",0,1,2]]]);