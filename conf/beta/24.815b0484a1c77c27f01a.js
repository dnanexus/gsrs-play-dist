(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{NpaL:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),a=function(){return function(){}}(),o=t("NcP4"),u=t("t68o"),i=t("pMnS"),r=t("+lnl"),d=t("EJ7M"),c=t("ap0P"),b=t("HE/B"),s=t("ThfK"),p=t("ldJ0"),m=t("OvbY"),f=t("Ok+c"),g=t("Pj+I"),h=t("Cka/"),F=t("UMU1"),_=t("dCG0"),v=t("B/2v"),C=t("S1Kd"),y=t("4z0a"),x=t("nFVu"),w=t("HfPH"),D=t("TtEo"),P=t("LC5p"),M=t("xZkp"),O=t("hifq"),S=t("Ip0R"),k=t("bujt"),L=t("UodH"),I=t("lLAP"),U=t("wFw1"),j=t("Mr+X"),q=t("SMsm"),E=t("YBVn"),T=t("6E2U"),N=t("s7Fu"),R=t("khmc"),z=t("YLZ7"),A=t("o3x0"),K=t("eDkP"),Y=t("4S5B"),V=t("Vurf"),G=t("dJrM"),H=t("seP3"),Z=t("Wf4p"),B=t("Fzqc"),J=t("dWZg"),$=t("gIcY"),W=t("b716"),X=t("/VYK"),Q=t("MvMx"),nn=t("oY6q"),ln=function(){function n(n,l,t,a,o,u){this.cvService=n,this.dialog=l,this.utilsService=t,this.substanceService=a,this.overlayContainerService=o,this.substanceFormService=u,this.unitDeleted=new e.n,this.subscriptions=[],this.errors=[]}return n.prototype.ngOnInit=function(){this.overlayContainer=this.overlayContainerService.getContainerElement()},n.prototype.openAmountDialog=function(){var n=this;this.unit.amount||(this.unit.amount={},"SRU-BLOCK"===this.unit.type&&(this.unit.amount={type:"DEGREE OF POLYMERIZATION",units:"per polymer"}));var l=this.dialog.open(nn.a,{data:{subsAmount:this.unit.amount},width:"1040px"});this.overlayContainer.style.zIndex="1002";var t=l.afterClosed().subscribe((function(l){n.overlayContainer.style.zIndex=null,n.unit.amount=l}));this.subscriptions.push(t)},n.prototype.displayAmount=function(n){return this.utilsService.displayAmount(n)},n.prototype.displayToConnectivity=function(n){var l=this.utilsService.sruDisplayToConnectivity(n);this.errors=l.$errors,0===this.errors.length&&(delete l.$errors,this.unit.attachmentMap=l)},n.prototype.deleteSRU=function(){this.unit.$$deletedCode=this.utilsService.newUUID(),this.unitDeleted.emit(this.unit)},n}(),tn=t("CQqH"),en=t("Jj5M"),an=e.rb({encapsulation:0,styles:[[".unit-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.related-substance[_ngcontent-%COMP%]{max-width:20%;width:20%}  .related-substance img{max-width:125px!important;margin:auto}.full[_ngcontent-%COMP%]{width:100%}.form-container[_ngcontent-%COMP%]{width:80%}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:10;background-color:rgba(255,255,255,.8);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:#666}.form-row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .attachment-count[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .connectivity[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .connectivity[_ngcontent-%COMP%]{width:50%}.form-row[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:50%;padding-right:15px}.inner-row-top[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.inner-row-top[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.inner-row-top[_ngcontent-%COMP%]   .attachment-count[_ngcontent-%COMP%], .inner-row-top[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .inner-row-top[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-right:15px}.inner-row-top[_ngcontent-%COMP%]   .connectivity[_ngcontent-%COMP%]{width:100%}.inner-row-top[_ngcontent-%COMP%]   .connectivity-container[_ngcontent-%COMP%]{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.inner-row-top[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:50%;padding-right:15px}.inner-row-bottom[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.inner-row-bottom[_ngcontent-%COMP%]   .connectivity[_ngcontent-%COMP%]{width:50%}.inner-row-bottom[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:50%;padding-right:15px}.references-container[_ngcontent-%COMP%]{width:100%}.padded[_ngcontent-%COMP%]{padding-right:20px}.amount-display[_ngcontent-%COMP%]{padding-top:11px}.form-actions[_ngcontent-%COMP%]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin:5px 0 10px}.form-content[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.amount[_ngcontent-%COMP%], .extent[_ngcontent-%COMP%], .group-access[_ngcontent-%COMP%], .location-type[_ngcontent-%COMP%], .mod-type[_ngcontent-%COMP%], .sites[_ngcontent-%COMP%]{width:33%}.access[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]{width:45%}"]],data:{}});function on(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"div",[["class","amount-display"]],null,null,null,null,null)),(n()(),e.Nb(1,null,[" "," "]))],null,(function(n,l){var t=l.component;n(l,1,0,t.displayAmount(t.unit.amount))}))}function un(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Nb(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.context.$implicit.text)}))}function rn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,un)),e.sb(2,278528,null,0,S.m,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.errors)}),null)}function dn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,91,"div",[["class","unit-form-container"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,4,"div",[["class","delete-container"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,3,"button",[["mat-icon-button",""],["matTooltip","Delete SRU"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.deleteSRU()&&e),e}),k.d,k.b)),e.sb(3,180224,null,0,L.b,[e.k,I.h,[2,U.a]],null,null),(n()(),e.tb(4,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","delete_forever"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,j.b,j.a)),e.sb(5,9158656,null,0,q.b,[e.k,q.d,[8,null],[2,q.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null),(n()(),e.tb(6,0,null,null,85,"div",[["class","form-row full"]],null,null,null,null,null)),(n()(),e.tb(7,0,null,null,2,"div",[["class","flex-column related-substance"]],null,null,null,null,null)),(n()(),e.tb(8,0,null,null,1,"img",[["appSubstanceImage",""],["class","related-image"]],null,null,null,null,null)),e.sb(9,4210688,null,0,E.a,[e.k,T.a],{entityId:[0,"entityId"]},null),(n()(),e.tb(10,0,null,null,81,"div",[["class","form-container"]],null,null,null,null,null)),(n()(),e.tb(11,0,null,null,44,"div",[["class","inner-row-top"]],null,null,null,null,null)),(n()(),e.tb(12,0,null,null,1,"app-cv-input",[["class","type"],["domain","POLYMER_SRU_TYPE"],["title","SRU Type"]],null,[[null,"valueChange"]],(function(n,l,t){var e=!0;return"valueChange"===l&&(e=!1!==(n.component.unit.type=t)&&e),e}),N.b,N.a)),e.sb(13,245760,null,0,R.a,[z.a,A.e,T.a,K.e,Y.a,V.a],{title:[0,"title"],domain:[1,"domain"],model:[2,"model"]},{valueChange:"valueChange"}),(n()(),e.tb(14,0,null,null,20,"mat-form-field",[["class","label mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,G.b,G.a)),e.sb(15,7520256,null,9,H.c,[e.k,e.h,[2,Z.j],[2,B.b],[2,H.a],J.a,e.z,[2,U.a]],null,null),e.Lb(603979776,1,{_controlNonStatic:0}),e.Lb(335544320,2,{_controlStatic:0}),e.Lb(603979776,3,{_labelChildNonStatic:0}),e.Lb(335544320,4,{_labelChildStatic:0}),e.Lb(603979776,5,{_placeholderChild:0}),e.Lb(603979776,6,{_errorChildren:1}),e.Lb(603979776,7,{_hintChildren:1}),e.Lb(603979776,8,{_prefixChildren:1}),e.Lb(603979776,9,{_suffixChildren:1}),(n()(),e.tb(25,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","label"],["placeholder","Label"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,l,t){var a=!0,o=n.component;return"input"===l&&(a=!1!==e.Fb(n,26)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==e.Fb(n,26).onTouched()&&a),"compositionstart"===l&&(a=!1!==e.Fb(n,26)._compositionStart()&&a),"compositionend"===l&&(a=!1!==e.Fb(n,26)._compositionEnd(t.target.value)&&a),"blur"===l&&(a=!1!==e.Fb(n,33)._focusChanged(!1)&&a),"focus"===l&&(a=!1!==e.Fb(n,33)._focusChanged(!0)&&a),"input"===l&&(a=!1!==e.Fb(n,33)._onInput()&&a),"ngModelChange"===l&&(a=!1!==(o.unit.label=t)&&a),a}),null,null)),e.sb(26,16384,null,0,$.d,[e.E,e.k,[2,$.a]],null,null),e.sb(27,16384,null,0,$.t,[],{required:[0,"required"]},null),e.Kb(1024,null,$.l,(function(n){return[n]}),[$.t]),e.Kb(1024,null,$.m,(function(n){return[n]}),[$.d]),e.sb(30,671744,null,0,$.r,[[8,null],[6,$.l],[8,null],[6,$.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,$.n,null,[$.r]),e.sb(32,16384,null,0,$.o,[[4,$.n]],null,null),e.sb(33,999424,null,0,W.b,[e.k,J.a,[6,$.n],[2,$.q],[2,$.j],Z.d,[8,null],X.a,e.z],{placeholder:[0,"placeholder"],required:[1,"required"]},null),e.Kb(2048,[[1,4],[2,4]],H.d,null,[W.b]),(n()(),e.tb(35,0,null,null,20,"mat-form-field",[["class","attachment-count mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,G.b,G.a)),e.sb(36,7520256,null,9,H.c,[e.k,e.h,[2,Z.j],[2,B.b],[2,H.a],J.a,e.z,[2,U.a]],null,null),e.Lb(603979776,10,{_controlNonStatic:0}),e.Lb(335544320,11,{_controlStatic:0}),e.Lb(603979776,12,{_labelChildNonStatic:0}),e.Lb(335544320,13,{_labelChildStatic:0}),e.Lb(603979776,14,{_placeholderChild:0}),e.Lb(603979776,15,{_errorChildren:1}),e.Lb(603979776,16,{_hintChildren:1}),e.Lb(603979776,17,{_prefixChildren:1}),e.Lb(603979776,18,{_suffixChildren:1}),(n()(),e.tb(46,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["disabled",""],["matInput",""],["name","attachment count"],["placeholder","attachment count"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,l,t){var a=!0,o=n.component;return"input"===l&&(a=!1!==e.Fb(n,47)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==e.Fb(n,47).onTouched()&&a),"compositionstart"===l&&(a=!1!==e.Fb(n,47)._compositionStart()&&a),"compositionend"===l&&(a=!1!==e.Fb(n,47)._compositionEnd(t.target.value)&&a),"blur"===l&&(a=!1!==e.Fb(n,54)._focusChanged(!1)&&a),"focus"===l&&(a=!1!==e.Fb(n,54)._focusChanged(!0)&&a),"input"===l&&(a=!1!==e.Fb(n,54)._onInput()&&a),"ngModelChange"===l&&(a=!1!==(o.unit.attachmentCount=t)&&a),a}),null,null)),e.sb(47,16384,null,0,$.d,[e.E,e.k,[2,$.a]],null,null),e.sb(48,16384,null,0,$.t,[],{required:[0,"required"]},null),e.Kb(1024,null,$.l,(function(n){return[n]}),[$.t]),e.Kb(1024,null,$.m,(function(n){return[n]}),[$.d]),e.sb(51,671744,null,0,$.r,[[8,null],[6,$.l],[8,null],[6,$.m]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,$.n,null,[$.r]),e.sb(53,16384,null,0,$.o,[[4,$.n]],null,null),e.sb(54,999424,null,0,W.b,[e.k,J.a,[6,$.n],[2,$.q],[2,$.j],Z.d,[8,null],X.a,e.z],{disabled:[0,"disabled"],placeholder:[1,"placeholder"],required:[2,"required"]},null),e.Kb(2048,[[10,4],[11,4]],H.d,null,[W.b]),(n()(),e.tb(56,0,null,null,35,"div",[["class","inner-row-bottom"]],null,null,null,null,null)),(n()(),e.tb(57,0,null,null,8,"div",[["class","amount"]],null,null,null,null,null)),(n()(),e.tb(58,0,null,null,1,"div",[["class","label padded"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Amount "])),(n()(),e.tb(60,0,null,null,3,"button",[["mat-icon-button",""],["matTooltip","add"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openAmountDialog()&&e),e}),k.d,k.b)),e.sb(61,180224,null,0,L.b,[e.k,I.h,[2,U.a]],null,null),(n()(),e.tb(62,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","add_circle_outline"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,j.b,j.a)),e.sb(63,9158656,null,0,q.b,[e.k,q.d,[8,null],[2,q.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null),(n()(),e.jb(16777216,null,null,1,null,on)),e.sb(65,16384,null,0,S.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(66,0,null,null,25,"div",[["class","connectivity-container"]],null,null,null,null,null)),(n()(),e.tb(67,0,null,null,22,"mat-form-field",[["class","connectivity mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,G.b,G.a)),e.sb(68,7520256,null,9,H.c,[e.k,e.h,[2,Z.j],[2,B.b],[2,H.a],J.a,e.z,[2,U.a]],null,null),e.Lb(603979776,19,{_controlNonStatic:0}),e.Lb(335544320,20,{_controlStatic:0}),e.Lb(603979776,21,{_labelChildNonStatic:0}),e.Lb(335544320,22,{_labelChildStatic:0}),e.Lb(603979776,23,{_placeholderChild:0}),e.Lb(603979776,24,{_errorChildren:1}),e.Lb(603979776,25,{_hintChildren:1}),e.Lb(603979776,26,{_prefixChildren:1}),e.Lb(603979776,27,{_suffixChildren:1}),(n()(),e.tb(78,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.sb(79,16384,[[21,4],[22,4]],0,H.g,[],null,null),(n()(),e.Nb(-1,null,["Connectivity"])),(n()(),e.tb(81,0,null,1,8,"textarea",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,l,t){var a=!0,o=n.component;return"input"===l&&(a=!1!==e.Fb(n,82)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==e.Fb(n,82).onTouched()&&a),"compositionstart"===l&&(a=!1!==e.Fb(n,82)._compositionStart()&&a),"compositionend"===l&&(a=!1!==e.Fb(n,82)._compositionEnd(t.target.value)&&a),"blur"===l&&(a=!1!==e.Fb(n,87)._focusChanged(!1)&&a),"focus"===l&&(a=!1!==e.Fb(n,87)._focusChanged(!0)&&a),"input"===l&&(a=!1!==e.Fb(n,87)._onInput()&&a),"ngModelChange"===l&&(a=!1!==o.displayToConnectivity(t)&&a),a}),null,null)),e.sb(82,16384,null,0,$.d,[e.E,e.k,[2,$.a]],null,null),e.Kb(1024,null,$.m,(function(n){return[n]}),[$.d]),e.sb(84,671744,null,0,$.r,[[8,null],[8,null],[8,null],[6,$.m]],{model:[0,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,$.n,null,[$.r]),e.sb(86,16384,null,0,$.o,[[4,$.n]],null,null),e.sb(87,999424,null,0,W.b,[e.k,J.a,[6,$.n],[2,$.q],[2,$.j],Z.d,[8,null],X.a,e.z],null,null),e.Kb(2048,[[19,4],[20,4]],H.d,null,[W.b]),(n()(),e.Nb(-1,null,["          "])),(n()(),e.jb(16777216,null,null,1,null,rn)),e.sb(91,16384,null,0,S.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(92,0,null,null,2,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),e.tb(93,0,null,null,1,"app-audit-info",[],null,null,null,_.c,_.b)),e.sb(94,114688,null,0,Q.a,[],{source:[0,"source"]},null)],(function(n,l){var t=l.component;n(l,5,0,"delete_forever"),n(l,9,0,t.unit&&(t.unit.uuid||t.unit._structure&&t.unit._structure.id)),n(l,13,0,"SRU Type","POLYMER_SRU_TYPE",t.unit.type),n(l,27,0,""),n(l,30,0,"label",t.unit.label),n(l,33,0,"Label",""),n(l,48,0,""),n(l,51,0,"attachment count","",t.unit.attachmentCount),n(l,54,0,"","attachment count",""),n(l,63,0,"add_circle_outline"),n(l,65,0,t.unit.amount),n(l,84,0,t.unit._displayConnectivity),n(l,87,0),n(l,91,0,t.errors&&t.errors.length>0),n(l,94,0,t.unit)}),(function(n,l){n(l,2,0,e.Fb(l,3).disabled||null,"NoopAnimations"===e.Fb(l,3)._animationMode),n(l,4,0,e.Fb(l,5).inline,"primary"!==e.Fb(l,5).color&&"accent"!==e.Fb(l,5).color&&"warn"!==e.Fb(l,5).color),n(l,14,1,["standard"==e.Fb(l,15).appearance,"fill"==e.Fb(l,15).appearance,"outline"==e.Fb(l,15).appearance,"legacy"==e.Fb(l,15).appearance,e.Fb(l,15)._control.errorState,e.Fb(l,15)._canLabelFloat,e.Fb(l,15)._shouldLabelFloat(),e.Fb(l,15)._hasFloatingLabel(),e.Fb(l,15)._hideControlPlaceholder(),e.Fb(l,15)._control.disabled,e.Fb(l,15)._control.autofilled,e.Fb(l,15)._control.focused,"accent"==e.Fb(l,15).color,"warn"==e.Fb(l,15).color,e.Fb(l,15)._shouldForward("untouched"),e.Fb(l,15)._shouldForward("touched"),e.Fb(l,15)._shouldForward("pristine"),e.Fb(l,15)._shouldForward("dirty"),e.Fb(l,15)._shouldForward("valid"),e.Fb(l,15)._shouldForward("invalid"),e.Fb(l,15)._shouldForward("pending"),!e.Fb(l,15)._animationsEnabled]),n(l,25,1,[e.Fb(l,27).required?"":null,e.Fb(l,32).ngClassUntouched,e.Fb(l,32).ngClassTouched,e.Fb(l,32).ngClassPristine,e.Fb(l,32).ngClassDirty,e.Fb(l,32).ngClassValid,e.Fb(l,32).ngClassInvalid,e.Fb(l,32).ngClassPending,e.Fb(l,33)._isServer,e.Fb(l,33).id,e.Fb(l,33).placeholder,e.Fb(l,33).disabled,e.Fb(l,33).required,e.Fb(l,33).readonly&&!e.Fb(l,33)._isNativeSelect||null,e.Fb(l,33)._ariaDescribedby||null,e.Fb(l,33).errorState,e.Fb(l,33).required.toString()]),n(l,35,1,["standard"==e.Fb(l,36).appearance,"fill"==e.Fb(l,36).appearance,"outline"==e.Fb(l,36).appearance,"legacy"==e.Fb(l,36).appearance,e.Fb(l,36)._control.errorState,e.Fb(l,36)._canLabelFloat,e.Fb(l,36)._shouldLabelFloat(),e.Fb(l,36)._hasFloatingLabel(),e.Fb(l,36)._hideControlPlaceholder(),e.Fb(l,36)._control.disabled,e.Fb(l,36)._control.autofilled,e.Fb(l,36)._control.focused,"accent"==e.Fb(l,36).color,"warn"==e.Fb(l,36).color,e.Fb(l,36)._shouldForward("untouched"),e.Fb(l,36)._shouldForward("touched"),e.Fb(l,36)._shouldForward("pristine"),e.Fb(l,36)._shouldForward("dirty"),e.Fb(l,36)._shouldForward("valid"),e.Fb(l,36)._shouldForward("invalid"),e.Fb(l,36)._shouldForward("pending"),!e.Fb(l,36)._animationsEnabled]),n(l,46,1,[e.Fb(l,48).required?"":null,e.Fb(l,53).ngClassUntouched,e.Fb(l,53).ngClassTouched,e.Fb(l,53).ngClassPristine,e.Fb(l,53).ngClassDirty,e.Fb(l,53).ngClassValid,e.Fb(l,53).ngClassInvalid,e.Fb(l,53).ngClassPending,e.Fb(l,54)._isServer,e.Fb(l,54).id,e.Fb(l,54).placeholder,e.Fb(l,54).disabled,e.Fb(l,54).required,e.Fb(l,54).readonly&&!e.Fb(l,54)._isNativeSelect||null,e.Fb(l,54)._ariaDescribedby||null,e.Fb(l,54).errorState,e.Fb(l,54).required.toString()]),n(l,60,0,e.Fb(l,61).disabled||null,"NoopAnimations"===e.Fb(l,61)._animationMode),n(l,62,0,e.Fb(l,63).inline,"primary"!==e.Fb(l,63).color&&"accent"!==e.Fb(l,63).color&&"warn"!==e.Fb(l,63).color),n(l,67,1,["standard"==e.Fb(l,68).appearance,"fill"==e.Fb(l,68).appearance,"outline"==e.Fb(l,68).appearance,"legacy"==e.Fb(l,68).appearance,e.Fb(l,68)._control.errorState,e.Fb(l,68)._canLabelFloat,e.Fb(l,68)._shouldLabelFloat(),e.Fb(l,68)._hasFloatingLabel(),e.Fb(l,68)._hideControlPlaceholder(),e.Fb(l,68)._control.disabled,e.Fb(l,68)._control.autofilled,e.Fb(l,68)._control.focused,"accent"==e.Fb(l,68).color,"warn"==e.Fb(l,68).color,e.Fb(l,68)._shouldForward("untouched"),e.Fb(l,68)._shouldForward("touched"),e.Fb(l,68)._shouldForward("pristine"),e.Fb(l,68)._shouldForward("dirty"),e.Fb(l,68)._shouldForward("valid"),e.Fb(l,68)._shouldForward("invalid"),e.Fb(l,68)._shouldForward("pending"),!e.Fb(l,68)._animationsEnabled]),n(l,81,1,[e.Fb(l,86).ngClassUntouched,e.Fb(l,86).ngClassTouched,e.Fb(l,86).ngClassPristine,e.Fb(l,86).ngClassDirty,e.Fb(l,86).ngClassValid,e.Fb(l,86).ngClassInvalid,e.Fb(l,86).ngClassPending,e.Fb(l,87)._isServer,e.Fb(l,87).id,e.Fb(l,87).placeholder,e.Fb(l,87).disabled,e.Fb(l,87).required,e.Fb(l,87).readonly&&!e.Fb(l,87)._isNativeSelect||null,e.Fb(l,87)._ariaDescribedby||null,e.Fb(l,87).errorState,e.Fb(l,87).required.toString()])}))}var cn=t("mrSG"),bn=function(n){function l(l,t,e){var a=n.call(this,e)||this;return a.substanceFormStructuralUnitsService=l,a.scrollToService=t,a.gaService=e,a.subscriptions=[],a.analyticsEventCategory="substance form structural units",a}return cn.a(l,n),l.prototype.ngOnInit=function(){this.menuLabelUpdate.emit("Structural Units")},l.prototype.ngAfterViewInit=function(){var n=this,l=this.substanceFormStructuralUnitsService.substanceSRUs.subscribe((function(l){n.structuralUnits=l}));this.subscriptions.push(l)},l.prototype.ngOnDestroy=function(){this.subscriptions.forEach((function(n){n.unsubscribe()}))},l.prototype.deleteSRU=function(n){this.substanceFormStructuralUnitsService.deleteSubstanceSRU(n)},l}(t("j/Lz").a),sn=t("jde1"),pn=t("HECD"),mn=e.rb({encapsulation:0,styles:[[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.code[_ngcontent-%COMP%]:nth-child(odd){background-color:rgba(68,138,255,.07)}.code[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:rgba(68,138,255,.15)}.code[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:rgba(128,128,128,.15)}.code[_ngcontent-%COMP%]     .mat-expansion-panel, .code[_ngcontent-%COMP%]     .mat-table, .code[_ngcontent-%COMP%]     textarea{background-color:transparent}"]],data:{}});function fn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"mat-divider",[["class","form-divider mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,D.b,D.a)),e.sb(1,49152,null,0,P.a,[],{inset:[0,"inset"]},null)],(function(n,l){n(l,1,0,!0)}),(function(n,l){n(l,0,0,e.Fb(l,1).vertical?"vertical":"horizontal",e.Fb(l,1).vertical,!e.Fb(l,1).vertical,e.Fb(l,1).inset)}))}function gn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,5,"div",[["appScrollToTarget",""],["class","alternate-backgrounds"]],[[8,"id",0]],null,null,null,null)),e.sb(1,4341760,null,0,M.a,[e.k,O.a],null,null),(n()(),e.tb(2,0,null,null,1,"app-structural-unit-form",[],null,[[null,"unitDeleted"]],(function(n,l,t){var e=!0;return"unitDeleted"===l&&(e=!1!==n.component.deleteSRU(t)&&e),e}),dn,an)),e.sb(3,114688,null,0,ln,[z.a,A.e,T.a,tn.a,K.e,en.a],{unit:[0,"unit"]},{unitDeleted:"unitDeleted"}),(n()(),e.jb(16777216,null,null,1,null,fn)),e.sb(5,16384,null,0,S.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,3,0,l.context.$implicit),n(l,5,0,!l.context.last)}),(function(n,l){n(l,0,0,"substance-structural-unit-"+l.context.index)}))}function hn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,2,"div",[["class","responsive"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,gn)),e.sb(2,278528,null,0,S.m,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.structuralUnits)}),null)}function Fn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-substance-form-structural-units-card",[],null,null,null,hn,mn)),e.sb(1,4440064,null,0,bn,[sn.a,O.a,pn.a],null,null)],(function(n,l){n(l,1,0)}),null)}var _n=e.pb("app-substance-form-structural-units-card",bn,Fn,{},{menuLabelUpdate:"menuLabelUpdate",hiddenStateUpdate:"hiddenStateUpdate",canAddItemUpdate:"canAddItemUpdate",componentDestroyed:"componentDestroyed"},[]),vn=t("M2Lx"),Cn=t("mVsa"),yn=t("v9Dh"),xn=t("ZYjt"),wn=t("uGex"),Dn=t("4tE/"),Pn=t("4epT"),Mn=t("EtvR"),On=t("4c35"),Sn=t("qAlS"),kn=t("de3e"),Ln=t("La40"),In=t("/dO6"),Un=t("NYLF"),jn=t("y4qS"),qn=t("BHnd"),En=t("YhbO"),Tn=t("jlZm"),Nn=t("6Wmm"),Rn=t("9It4"),zn=t("PnCX"),An=t("IyAz"),Kn=t("ZYCi"),Yn=t("5uHe"),Vn=t("vfGX"),Gn=t("0/Q6"),Hn=t("jS4w"),Zn=t("u7R8"),Bn=t("NnTW"),Jn=t("Z+uX"),$n=t("Blfk"),Wn=t("7fs6"),Xn=t("YSh2"),Qn=t("6jyQ");t.d(l,"SubstanceFormStructuralUnitsModuleNgFactory",(function(){return nl}));var nl=e.qb(a,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,u.a,i.a,r.a,d.a,c.a,b.a,s.a,p.b,m.a,f.a,g.a,h.a,F.a,_.a,v.a,C.a,y.a,x.a,w.a,_n]],[3,e.j],e.x]),e.Db(4608,S.p,S.o,[e.u,[2,S.G]]),e.Db(4608,$.e,$.e,[]),e.Db(4608,$.w,$.w,[]),e.Db(4608,vn.c,vn.c,[]),e.Db(4608,K.c,K.c,[K.i,K.e,e.j,K.h,K.f,e.r,e.z,S.d,B.b,[2,S.j]]),e.Db(5120,K.j,K.k,[K.c]),e.Db(5120,Cn.c,Cn.j,[K.c]),e.Db(5120,yn.b,yn.c,[K.c]),e.Db(4608,xn.e,Z.e,[[2,Z.i],[2,Z.n]]),e.Db(5120,wn.a,wn.b,[K.c]),e.Db(4608,Z.d,Z.d,[]),e.Db(5120,Dn.b,Dn.c,[K.c]),e.Db(5120,A.c,A.d,[K.c]),e.Db(135680,A.e,A.e,[K.c,e.r,[2,S.j],[2,A.b],A.c,[3,A.e],K.e]),e.Db(5120,Pn.c,Pn.a,[[3,Pn.c]]),e.Db(1073742336,S.c,S.c,[]),e.Db(1073742336,Mn.a,Mn.a,[]),e.Db(1073742336,$.v,$.v,[]),e.Db(1073742336,$.s,$.s,[]),e.Db(1073742336,$.k,$.k,[]),e.Db(1073742336,vn.d,vn.d,[]),e.Db(1073742336,H.e,H.e,[]),e.Db(1073742336,B.a,B.a,[]),e.Db(1073742336,Z.n,Z.n,[[2,Z.f],[2,xn.f]]),e.Db(1073742336,J.b,J.b,[]),e.Db(1073742336,Z.x,Z.x,[]),e.Db(1073742336,On.g,On.g,[]),e.Db(1073742336,Sn.c,Sn.c,[]),e.Db(1073742336,K.g,K.g,[]),e.Db(1073742336,Cn.i,Cn.i,[]),e.Db(1073742336,Cn.f,Cn.f,[]),e.Db(1073742336,kn.d,kn.d,[]),e.Db(1073742336,kn.c,kn.c,[]),e.Db(1073742336,L.c,L.c,[]),e.Db(1073742336,q.c,q.c,[]),e.Db(1073742336,I.a,I.a,[]),e.Db(1073742336,yn.e,yn.e,[]),e.Db(1073742336,Ln.l,Ln.l,[]),e.Db(1073742336,P.b,P.b,[]),e.Db(1073742336,Z.v,Z.v,[]),e.Db(1073742336,Z.s,Z.s,[]),e.Db(1073742336,wn.d,wn.d,[]),e.Db(1073742336,X.c,X.c,[]),e.Db(1073742336,W.c,W.c,[]),e.Db(1073742336,In.f,In.f,[]),e.Db(1073742336,Dn.e,Dn.e,[]),e.Db(1073742336,Un.a,Un.a,[]),e.Db(1073742336,A.k,A.k,[]),e.Db(1073742336,jn.p,jn.p,[]),e.Db(1073742336,qn.m,qn.m,[]),e.Db(1073742336,En.c,En.c,[]),e.Db(1073742336,Tn.d,Tn.d,[]),e.Db(1073742336,Nn.b,Nn.b,[]),e.Db(1073742336,Rn.d,Rn.d,[]),e.Db(1073742336,zn.a,zn.a,[]),e.Db(1073742336,An.a,An.a,[]),e.Db(1073742336,Kn.p,Kn.p,[[2,Kn.u],[2,Kn.m]]),e.Db(1073742336,Yn.a,Yn.a,[]),e.Db(1073742336,Vn.a,Vn.a,[]),e.Db(1073742336,Z.o,Z.o,[]),e.Db(1073742336,Gn.d,Gn.d,[]),e.Db(1073742336,Hn.b,Hn.b,[]),e.Db(1073742336,Zn.e,Zn.e,[]),e.Db(1073742336,Bn.b,Bn.b,[]),e.Db(1073742336,Jn.c,Jn.c,[]),e.Db(1073742336,$n.c,$n.c,[]),e.Db(1073742336,Wn.a,Wn.a,[]),e.Db(1073742336,Pn.d,Pn.d,[]),e.Db(1073742336,a,a,[]),e.Db(256,In.a,{separatorKeyCodes:[Xn.g]},[]),e.Db(1024,Kn.j,(function(){return[[]]}),[]),e.Db(256,Qn.a,bn,[])])}))},"n67+":function(n,l,t){"use strict";t.d(l,"a",(function(){return a}));var e=t("CcnG"),a=function(){return function(){this.menuLabelUpdate=new e.n,this.hiddenStateUpdate=new e.n,this.canAddItemUpdate=new e.n,this.componentDestroyed=new e.n}}()}}]);
//# sourceMappingURL=24.815b0484a1c77c27f01a.js.map