(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={wrapperCommon:"Statistics_wrapperCommon__2tnDC",wrapperLeft:"Statistics_wrapperLeft__2NdB4",posFeedback:"Statistics_posFeedback__3bGt3"}},,function(e,t,n){e.exports={button:"ButtonListItem_button__1MzNA"}},function(e,t,n){e.exports={section:"Section_section__2P-W5",title:"Section_title__HKE5_"}},,,,,function(e,t,n){e.exports={list:"FeedbackOptions_list__12Z34"}},function(e,t,n){e.exports={message:"Notification_message__2Vbv6"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),o=(n(18),n(7)),i=n(8),u=n(9),l=n(13),d=n(12),b=n(2),j=n.n(b),p=n(0),h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.percentage;return 0!==c&&Object(p.jsxs)("div",{className:j.a.wrapperCommon,children:[Object(p.jsxs)("div",{className:j.a.wrapperRigth,children:[Object(p.jsxs)("p",{children:["Good: ",t]}),Object(p.jsxs)("p",{children:["Neutral: ",n]}),Object(p.jsxs)("p",{children:["Bad: ",a]}),Object(p.jsxs)("p",{children:["Total: ",c]})]}),Object(p.jsx)("div",{className:j.a.wrapperLeft,children:Object(p.jsxs)("p",{className:j.a.posFeedback,children:["Positive feedback: ",s||0,"%"]})})]})},m=n(10),f=n.n(m),O=n(4),x=n.n(O),v=function(e){var t=e.name,n=e.onLeaveFeedback;return Object(p.jsx)("li",{className:x.a.listItem,children:Object(p.jsx)("button",{className:x.a.button,type:"button",name:t,onClick:function(){return n(t)},children:t})})},_=function(e){var t=e.nameButtons,n=e.onLeaveFeedback;return Object(p.jsx)("ul",{className:f.a.list,children:t.map((function(e){return Object(p.jsx)(v,{name:e,onLeaveFeedback:n},e)}))})},k=n(5),g=n.n(k),F=function(e){var t=e.title,n=e.children;return Object(p.jsxs)("section",{className:g.a.section,children:[Object(p.jsx)("h1",{className:g.a.title,children:t}),n]})},N=n(11),w=n.n(N),B=function(e){var t=e.message,n=e.total;return Object(p.jsx)(p.Fragment,{children:0===n&&Object(p.jsx)("h2",{className:w.a.message,children:t})})},C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=Object.values(e.state).reduce((function(e,t){return e+t}));return Math.round(e.state.good/t*100)},e.handleCounterFeedBack=function(t){return e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=Object.keys(this.state),s=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{title:"Please leave feedback",children:Object(p.jsx)(_,{nameButtons:c,onLeaveFeedback:this.handleCounterFeedBack})}),Object(p.jsxs)(F,{title:"Statistics",children:[Object(p.jsx)(h,{good:t,neutral:n,bad:a,total:s,percentage:r}),Object(p.jsx)(B,{message:"No feedback given",total:s})]})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c0738143.chunk.js.map