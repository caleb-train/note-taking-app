(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},cMU6:function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),a=n.n(s),r=n("/MKj"),o=n("nOHt"),c=n.n(o),i=n("ciu6"),d={DeleteNoteAsync:i.b,ListNotesAsync:i.e,EditNote:i.c,Reset:i.f},u=n("9Jkg"),l=n.n(u),m=n("xn43"),f=function(e){var t=e.data,n=e.isLoading,a=e.message,r=e.isErrored,o=e.EditNote,c=e.ListNotesAsync,i=e.DeleteNoteAsync,d=e.Reset;Object(s.useEffect)(function(){a&&(Object(m.a)(a,r?"error":"success"),o({message:"",isErrored:!1}))},[l()(t)]),Object(s.useEffect)(function(){return c(),function(){return d()}},[]);return{isLoading:n,data:t,DeleteNote:function(e){i(e)},message:a,isErrored:r}},p=n("9eFo"),N=n("eH/x"),g=n.n(N),y=n("7Qib"),b=(n("sg+I"),a.a.createElement);t.default=Object(r.b)(function(e){var t=e.note;return{data:t.data,isErrored:t.isErrored,message:t.message,isLoading:t.isLoading}},d)(function(e){var t=f(e),n=t.isLoading,s=t.data,a=t.DeleteNote;return n?b(p.a,null):s&&s.length>0&&null!==s[0]?s.map(function(e){return b("div",{key:e.id,className:"card-hd"},b("div",{className:"card rumple ".concat(e.color," h-full"),style:g.a.rumple},b("div",{className:"card-body",onClick:function(t){return c.a.push({pathname:"".concat("/note-taking-app/","note/view"),query:{id:e.id}})}},b("h4",{className:"card-title text-xl"},e.title),b("p",{className:"card-text text-sm font-montserrat",style:{marginBottom:"2rem"}},Object(y.c)(e.body,100))),b("div",{className:"card-footer flex justify-between items-center",style:{border:"none",padding:"0 1rem",height:"3rem"}},b("span",{className:"text-sm"},"2-4-18"),b("button",{onClick:function(t){return a(e.id)},className:"text-sm p-1 border-2"},"Delete"))))}):b("div",{className:"emptyicon-hd"},b("div",{className:"emptyicon",style:g.a.emptyicon}),b("h3",{className:"my-4"},"pen a thought"))})}},[["H0SL",0,1,2]]]);