(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BugerIngredients_BreadBottom__20t2K",BreadTop:"BugerIngredients_BreadTop__mreXm",Seeds1:"BugerIngredients_Seeds1__3FbTP",Seeds2:"BugerIngredients_Seeds2__u2Gg6",Meat:"BugerIngredients_Meat__2pBsX",Cheese:"BugerIngredients_Cheese__1hsaw",Salad:"BugerIngredients_Salad__3scea",Bacon:"BugerIngredients_Bacon__3VQWn"}},,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__2O5m_",Open:"SideDrawer_Open__25q0a",Close:"SideDrawer_Close__K1JwQ"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2Bn4D",Label:"BuildControl_Label__1B4wY",Less:"BuildControl_Less__1Dk9t",More:"BuildControl_More__2XK57"}},,function(e,t,a){e.exports={Toolbar:"toolbar_Toolbar__3yi3M",DesktopOnly:"toolbar_DesktopOnly__c9piI"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3cgbs",active:"NavigationItem_active__pglsm"}},function(e,t,a){e.exports={BuldControls:"BuildControls_BuldControls__DD41D",OrderButton:"BuildControls_OrderButton__3UQuD",enable:"BuildControls_enable__PpaZO"}},function(e,t,a){e.exports={Button:"button_Button__wM6iJ",Success:"button_Success__2nr8b",Danger:"button_Danger__3lOcz"}},,,function(e,t,a){e.exports={Content:"Layout_Content__1tD4D"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"logo_Logo__nRqs1"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2wdB7"}},function(e,t,a){e.exports={DrawerToggle:"DrawToggle_DrawerToggle__1gNbf"}},function(e,t,a){e.exports={BackDrop:"backDrop_BackDrop__24jpr"}},function(e,t,a){e.exports={Burger:"Burger_Burger__3Opjb"}},function(e,t,a){e.exports={Modal:"modal_Modal__2SCSj"}},,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=(a(29),a(2)),o=a(3),s=a(5),u=a(4),d=function(e){return e.children},m=a(15),p=a.n(m),g=a(9),h=a.n(g),_=a(16),b=a.n(_),E=a(17),f=a.n(E),v=function(e){return r.a.createElement("div",{className:f.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:b.a,alt:"my burger"}))},B=a(18),C=a.n(B),w=a(10),k=a.n(w),y=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?k.a.active:null},e.children))},O=function(){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(y,{link:"/",active:!0},"Burger Builder"),r.a.createElement(y,{link:"/"},"CheckOut"))},N=a(19),D=a.n(N),S=function(e){return r.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},j=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(S,{clicked:e.drawToggle}),r.a.createElement(v,{height:"80%"}),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(O,null)))},I=a(6),T=a.n(I),x=a(20),A=a.n(x),M=function(e){return e.show?r.a.createElement("div",{className:A.a.BackDrop,onClick:e.clicked}):null},P=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.open&&(t=[T.a.SideDrawer,T.a.Open]),r.a.createElement(d,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(v,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(O,null))))},L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!0},e.sideDrawClosed=function(){e.setState({showSideDrawer:!1})},e.sideDrawToggle=function(){e.setState((function(t){return{showSideDrawer:!e.state.showSideDrawer}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(j,{drawToggle:this.sideDrawToggle}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawClosed}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(n.Component),H=a(8),R=a(23),Y=a(21),J=a.n(Y),W=a(1),F=a.n(W),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:F.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:F.a.BreadTop},r.a.createElement("div",{className:F.a.Seeds1}),r.a.createElement("div",{className:F.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:F.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:F.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:F.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:F.a.Salad});break;default:e=null}return e}}]),a}(n.Component),Q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(K,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:J.a.Burger},r.a.createElement(K,{type:"bread-top"}),t,r.a.createElement(K,{type:"bread-bottom"}))},X=a(11),q=a.n(X),z=a(7),U=a.n(z),G=function(e){return r.a.createElement("div",{className:U.a.BuildControl},r.a.createElement("div",{className:U.a.Label},e.label),r.a.createElement("button",{className:U.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:U.a.More,onClick:e.added},"More"))},V=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:q.a.BuldControls},r.a.createElement("p",null,"Current Price:",r.a.createElement("strong",null,e.price.toFixed(2))),V.map((function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchaseAble,onClick:e.ordered},"ORDER NOW"))},$=a(22),ee=a.n($),te=function(e){return r.a.createElement(d,null,r.a.createElement(M,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},ae=a(12),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.ButtonType]].join(" "),onClick:e.clicked},e.children)},le=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"TOTAL PRICE:",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to CheckOut ....."),r.a.createElement(re,{ButtonType:"Danger",clicked:e.purchaseCancel},"CANCEL"),r.a.createElement(re,{ButtonType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},ce={salad:.4,cheese:.6,meat:1.3,bacon:1.6},ie=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,meat:0,cheese:0},totalPrice:5,purchaseAble:!1,purchasing:!1},e.addIngredients=function(t){var a=e.state.ingredients[t]+1,n=Object(H.a)({},e.state.ingredients);n[t]=a;var r=ce[t],l=e.state.totalPrice+r;e.setState({totalPrice:l,ingredients:n}),e.updatePurchase(n)},e.removeIngredients=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(H.a)({},e.state.ingredients);r[t]=n;var l=ce[t],c=e.state.totalPrice-l;e.setState({totalPrice:c,ingredients:r})}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseContinueHandler=function(){alert("You continue")},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e}return Object(o.a)(a,[{key:"updatePurchase",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseAble:t>0})}},{key:"render",value:function(){var e=Object(H.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(d,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(le,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancel:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler})),r.a.createElement(Q,{ingredients:this.state.ingredients}),r.a.createElement(Z,{ingredientAdded:this.addIngredients,ingredientRemove:this.removeIngredients,disabled:e,price:this.state.totalPrice,purchaseAble:this.state.purchaseAble,ordered:this.purchaseHandler}))}}]),a}(n.Component),oe=(a(30),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null,r.a.createElement(ie,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.f0098dcd.chunk.js.map