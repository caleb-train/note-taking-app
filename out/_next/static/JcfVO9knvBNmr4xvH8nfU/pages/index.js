(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},cMU6:function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),a=n.n(s),i=n("/MKj"),r=n("nOHt"),o=n.n(r),c=n("ciu6"),d={DeleteNoteAsync:c.b,ListNotesAsync:c.e,EditNote:c.c,Reset:c.f},u=n("9Jkg"),l=n.n(u),m=n("xn43"),f=function(e){var t=e.data,n=e.isLoading,a=e.message,i=e.isErrored,r=e.EditNote,o=e.ListNotesAsync,c=e.DeleteNoteAsync,d=e.Reset;Object(s.useEffect)(function(){a&&(Object(m.a)(a,i?"error":"success"),r({message:"",isErrored:!1}))},[l()(t)]),Object(s.useEffect)(function(){return o(),function(){return d()}},[]);return{isLoading:n,data:t,DeleteNote:function(e){c(e)},message:a,isErrored:i}},p=n("9eFo"),N=n("eH/x"),g=n.n(N),b=n("7Qib"),y=(n("sg+I"),a.a.createElement);t.default=Object(i.b)(function(e){var t=e.note;return{data:t.data,isErrored:t.isErrored,message:t.message,isLoading:t.isLoading}},d)(function(e){var t=f(e),n=t.isLoading,s=t.data,a=t.DeleteNote;return n?y(p.a,null):s&&s.length>0&&null!==s[0]?s.map(function(e){return y("div",{key:e.id,className:"card-hd"},y("div",{className:"card rumple ".concat(e.color," h-full"),style:g.a.rumple},y("div",{className:"card-body",onClick:function(t){return o.a.push({pathname:"".concat("https://caleb-train.github.io/note-taking-app/","note/view"),query:{id:e.id}})}},y("h4",{className:"card-title text-xl"},e.title),y("p",{className:"card-text text-sm font-montserrat",style:{marginBottom:"2rem"}},Object(b.c)(e.body,100))),y("div",{className:"card-footer flex justify-between items-center",style:{border:"none",padding:"0 1rem",height:"3rem"}},y("span",{className:"text-sm"},"2-4-18"),y("button",{onClick:function(t){return a(e.id)},className:"text-sm p-1 border-2"},"Delete"))))}):y("div",{className:"emptyicon-hd"},y("div",{className:"emptyicon",style:g.a.emptyicon}),y("h3",{className:"my-4"},"pen a thought"))})}},[["H0SL",0,1,2]]]);