(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(5),c=o.n(l),r=(o(4),o(12),function(e){var t=e.todo,o=e.index,a=e.completeTodo,l=e.removeTodo;return n.a.createElement("li",{className:t.isCompleted?"completed":""},n.a.createElement("div",{className:"view",style:{textDecoration:t.isCompleted?"line-through":""}},n.a.createElement("input",{checked:t.isCompleted||!1,type:"checkbox",className:"toggle",onChange:function(){return a(o)}}),n.a.createElement("label",null,t.text),t.isCompleted?n.a.createElement("button",{className:"destroy",onClick:function(){return l(o)}}):null))}),i=o(1);var m=function(e){var t=e.addTodo,o=e.completeAll,l=Object(a.useState)(""),c=Object(i.a)(l,2),r=c[0],m=c[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),m(""))}},n.a.createElement("input",{onChange:o,className:"toggle-all",id:"toggle-all",type:"checkbox",name:"toggle"}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement("input",{type:"text",className:"new-todo",value:r,onChange:function(e){return m(e.target.value)},placeholder:"Task..."}))},d=function(e){var t=e.todos,o=e.clearCompleted;if(0!==t.length)return n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},t.length," items left"),t.filter(function(e){return e.isCompleted}).length>0?n.a.createElement("button",{className:"clear-completed",onClick:o},"Clear completed (",t.filter(function(e){return e.isCompleted}).length,")"):null)},s=o(2),u=[{text:"Look at this beauty",isCompleted:!0},{text:"Read the code",isCompleted:!1},{text:"Contact author",isCompleted:!1},{text:"Write feedback",isCompleted:!1}],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=JSON.parse(window.localStorage.getItem("elmTodos"))||e,o=Object(a.useState)(t),n=Object(i.a)(o,2),l=n[0],c=n[1];return Object(a.useEffect)(function(){window.localStorage.setItem("elmTodos",JSON.stringify(l))}),{todos:l,addTodo:function(e){var t=Object(s.a)(l).concat([{text:e,isCompleted:!1}]);c(t)},completeTodo:function(e){var t=Object(s.a)(l);t[e].isCompleted=!t[e].isCompleted,c(t)},removeTodo:function(e){var t=Object(s.a)(l);t.splice(e,1),c(t)},clearCompleted:function(){var e=l.filter(function(e){return!1===e.isCompleted});c(e)},completeAll:function(){var e=l.map(function(e){return e.isCompleted=!e.isCompleted,e});c(e)}}},f=function(){var e=p(),t=e.todos,o=e.addTodo,a=e.completeTodo,l=e.removeTodo,c=e.clearCompleted,i=e.completeAll;return n.a.createElement("div",{className:"todoapp"},n.a.createElement("div",{className:""},n.a.createElement(m,{addTodo:o,completeAll:i}),n.a.createElement("ul",{className:"todo-list"},t.map(function(e,t){return n.a.createElement(r,{key:t,index:t,todo:e,completeTodo:a,removeTodo:l})})),n.a.createElement(d,{todos:t,clearCompleted:c})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,o){},6:function(e,t,o){e.exports=o(14)}},[[6,2,1]]]);
//# sourceMappingURL=main.227b5c86.chunk.js.map