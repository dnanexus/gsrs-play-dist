(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Un4N:function(e,n,l){"use strict";l.r(n);var t=l("CcnG"),a=function(){return function(){}}(),r=l("NcP4"),o=l("t68o"),i=l("pMnS"),u=l("+lnl"),c=l("EJ7M"),b=l("ap0P"),s=l("HE/B"),d=l("ThfK"),f=l("ldJ0"),p=l("OvbY"),g=l("Ok+c"),h=l("Pj+I"),m=l("Cka/"),D=l("UMU1"),v=l("dCG0"),F=l("B/2v"),C=l("S1Kd"),S=l("4z0a"),y=l("nFVu"),_=l("HfPH"),w=l("dJrM"),L=l("seP3"),I=l("Wf4p"),x=l("Fzqc"),P=l("dWZg"),j=l("wFw1"),z=l("gIcY"),k=l("b716"),E=l("/VYK"),M=l("b1+6"),R=l("4epT"),O=l("TtEo"),U=l("LC5p"),T=l("xZkp"),q=l("hifq"),B=l("6DzZ"),G=l("jcVb"),Y=l("YLZ7"),A=l("EdIQ"),N=l("6E2U"),Z=l("cbEn"),H=l("o3x0"),K=l("eDkP"),J=l("Jj5M"),V=l("Ip0R"),Q=l("mrSG"),W=l("j/Lz"),X=l("1vlQ"),$=function(e){function n(n,l,t,a,r){var o=e.call(this,a)||this;return o.substanceFormReferencesService=n,o.dialog=l,o.scrollToService=t,o.gaService=a,o.overlayContainerService=r,o.subscriptions=[],o.analyticsEventCategory="substance form references",o}return Q.a(n,e),n.prototype.ngOnInit=function(){this.canAddItemUpdate.emit(!0),this.menuLabelUpdate.emit("References"),this.overlayContainer=this.overlayContainerService.getContainerElement()},n.prototype.ngAfterViewInit=function(){var e=this,n=this.substanceFormReferencesService.substanceReferences.subscribe((function(n){e.references=n,e.filtered=n;var l=e.searchControl.valueChanges.subscribe((function(n){e.filterList(n,e.references,e.analyticsEventCategory)}),(function(e){console.log(e)}));e.subscriptions.push(l),e.page=0,e.pageChange()}));this.subscriptions.push(n)},n.prototype.ngOnDestroy=function(){this.componentDestroyed.emit(),this.subscriptions.forEach((function(e){e.unsubscribe()}))},n.prototype.openReferenceFormDialog=function(e){var n=this;void 0===e&&(e={access:[]});var l=this.dialog.open(X.a,{data:e,width:"900px"});this.overlayContainer.style.zIndex="1002";var t=l.afterClosed().subscribe((function(e){n.overlayContainer.style.zIndex=null,null!=e&&e.doctype&&e.citation&&n.substanceFormReferencesService.addSubstanceReference(e)}));this.subscriptions.push(t)},n.prototype.addItem=function(){this.addSubstanceReference()},n.prototype.addSubstanceReference=function(){var e=this,n=this.substanceFormReferencesService.addSubstanceReference({});setTimeout((function(){e.scrollToService.scrollToElement(n.uuid,"center")}),10)},n.prototype.deleteReference=function(e){this.substanceFormReferencesService.deleteSubstanceReference(e)},n}(W.a),ee=l("HECD"),ne=t.rb({encapsulation:0,styles:[[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.5)}.reference[_ngcontent-%COMP%]:nth-child(odd){background-color:rgba(68,138,255,.07)}.reference[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:rgba(68,138,255,.15)}.reference[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:rgba(128,128,128,.15)}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]],data:{}});function le(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,18,"mat-form-field",[["class","search mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,w.b,w.a)),t.sb(1,7520256,null,9,L.c,[t.k,t.h,[2,I.j],[2,x.b],[2,L.a],P.a,t.z,[2,j.a]],{floatLabel:[0,"floatLabel"]},null),t.Lb(603979776,1,{_controlNonStatic:0}),t.Lb(335544320,2,{_controlStatic:0}),t.Lb(603979776,3,{_labelChildNonStatic:0}),t.Lb(335544320,4,{_labelChildStatic:0}),t.Lb(603979776,5,{_placeholderChild:0}),t.Lb(603979776,6,{_errorChildren:1}),t.Lb(603979776,7,{_hintChildren:1}),t.Lb(603979776,8,{_prefixChildren:1}),t.Lb(603979776,9,{_suffixChildren:1}),(e()(),t.tb(11,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Search"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(e,n,l){var a=!0;return"input"===n&&(a=!1!==t.Fb(e,12)._handleInput(l.target.value)&&a),"blur"===n&&(a=!1!==t.Fb(e,12).onTouched()&&a),"compositionstart"===n&&(a=!1!==t.Fb(e,12)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t.Fb(e,12)._compositionEnd(l.target.value)&&a),"blur"===n&&(a=!1!==t.Fb(e,17)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==t.Fb(e,17)._focusChanged(!0)&&a),"input"===n&&(a=!1!==t.Fb(e,17)._onInput()&&a),a}),null,null)),t.sb(12,16384,null,0,z.d,[t.E,t.k,[2,z.a]],null,null),t.Kb(1024,null,z.m,(function(e){return[e]}),[z.d]),t.sb(14,540672,null,0,z.g,[[8,null],[8,null],[6,z.m],[2,z.x]],{form:[0,"form"]},null),t.Kb(2048,null,z.n,null,[z.g]),t.sb(16,16384,null,0,z.o,[[4,z.n]],null,null),t.sb(17,999424,null,0,k.b,[t.k,P.a,[6,z.n],[2,z.q],[2,z.j],I.d,[8,null],E.a,t.z],{placeholder:[0,"placeholder"]},null),t.Kb(2048,[[1,4],[2,4]],L.d,null,[k.b])],(function(e,n){var l=n.component;e(n,1,0,"never"),e(n,14,0,l.searchControl),e(n,17,0,"Search")}),(function(e,n){e(n,0,1,["standard"==t.Fb(n,1).appearance,"fill"==t.Fb(n,1).appearance,"outline"==t.Fb(n,1).appearance,"legacy"==t.Fb(n,1).appearance,t.Fb(n,1)._control.errorState,t.Fb(n,1)._canLabelFloat,t.Fb(n,1)._shouldLabelFloat(),t.Fb(n,1)._hasFloatingLabel(),t.Fb(n,1)._hideControlPlaceholder(),t.Fb(n,1)._control.disabled,t.Fb(n,1)._control.autofilled,t.Fb(n,1)._control.focused,"accent"==t.Fb(n,1).color,"warn"==t.Fb(n,1).color,t.Fb(n,1)._shouldForward("untouched"),t.Fb(n,1)._shouldForward("touched"),t.Fb(n,1)._shouldForward("pristine"),t.Fb(n,1)._shouldForward("dirty"),t.Fb(n,1)._shouldForward("valid"),t.Fb(n,1)._shouldForward("invalid"),t.Fb(n,1)._shouldForward("pending"),!t.Fb(n,1)._animationsEnabled]),e(n,11,1,[t.Fb(n,16).ngClassUntouched,t.Fb(n,16).ngClassTouched,t.Fb(n,16).ngClassPristine,t.Fb(n,16).ngClassDirty,t.Fb(n,16).ngClassValid,t.Fb(n,16).ngClassInvalid,t.Fb(n,16).ngClassPending,t.Fb(n,17)._isServer,t.Fb(n,17).id,t.Fb(n,17).placeholder,t.Fb(n,17).disabled,t.Fb(n,17).required,t.Fb(n,17).readonly&&!t.Fb(n,17)._isNativeSelect||null,t.Fb(n,17)._ariaDescribedby||null,t.Fb(n,17).errorState,t.Fb(n,17).required.toString()])}))}function te(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,2,"mat-paginator",[["class","mat-paginator"],["showFirstLastButtons","true"]],null,[[null,"page"]],(function(e,n,l){var t=!0,a=e.component;return"page"===n&&(t=!1!==a.pageChange(l,a.analyticsEventCategory)&&t),t}),M.b,M.a)),t.sb(1,245760,null,0,R.b,[R.c,t.h],{pageIndex:[0,"pageIndex"],length:[1,"length"],pageSize:[2,"pageSize"],pageSizeOptions:[3,"pageSizeOptions"],showFirstLastButtons:[4,"showFirstLastButtons"]},{page:"page"}),t.Gb(2,4)],(function(e,n){var l=n.component,t=l.page,a=l.filtered&&l.filtered.length||0,r=e(n,2,0,5,10,25,100);e(n,1,0,t,a,5,r,"true")}),null)}function ae(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,1,"mat-divider",[["class","form-divider mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,O.b,O.a)),t.sb(1,49152,null,0,U.a,[],{inset:[0,"inset"]},null)],(function(e,n){e(n,1,0,!0)}),(function(e,n){e(n,0,0,t.Fb(n,1).vertical?"vertical":"horizontal",t.Fb(n,1).vertical,!t.Fb(n,1).vertical,t.Fb(n,1).inset)}))}function re(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,5,"div",[["appScrollToTarget",""],["class","reference"]],[[8,"id",0]],null,null,null,null)),t.sb(1,4341760,null,0,T.a,[t.k,q.a],null,null),(e()(),t.tb(2,0,null,null,1,"app-reference-form",[],null,[[null,"referenceDeleted"]],(function(e,n,l){var t=!0;return"referenceDeleted"===n&&(t=!1!==e.component.deleteReference(l)&&t),t}),B.b,B.a)),t.sb(3,4440064,null,0,G.a,[Y.a,A.a,N.a,Z.a,H.e,K.e,J.a],{reference:[0,"reference"]},{referenceDeleted:"referenceDeleted"}),(e()(),t.jb(16777216,null,null,1,null,ae)),t.sb(5,16384,null,0,V.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],(function(e,n){e(n,3,0,n.context.$implicit),e(n,5,0,!n.context.last)}),(function(e,n){e(n,0,0,n.context.$implicit.uuid)}))}function oe(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,2,"mat-paginator",[["class","mat-paginator"],["showFirstLastButtons","true"]],null,[[null,"page"]],(function(e,n,l){var t=!0,a=e.component;return"page"===n&&(t=!1!==a.pageChange(l,a.analyticsEventCategory)&&t),t}),M.b,M.a)),t.sb(1,245760,null,0,R.b,[R.c,t.h],{pageIndex:[0,"pageIndex"],length:[1,"length"],pageSize:[2,"pageSize"],pageSizeOptions:[3,"pageSizeOptions"],showFirstLastButtons:[4,"showFirstLastButtons"]},{page:"page"}),t.Gb(2,4)],(function(e,n){var l=n.component,t=l.page,a=l.filtered&&l.filtered.length||0,r=e(n,2,0,5,10,25,100);e(n,1,0,t,a,5,r,"true")}),null)}function ie(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,3,"div",[["class","flex-row"]],null,null,null,null,null)),(e()(),t.jb(16777216,null,null,1,null,le)),t.sb(2,16384,null,0,V.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(e()(),t.tb(3,0,null,null,0,"span",[["class","middle-fill"]],null,null,null,null,null)),(e()(),t.jb(16777216,null,null,1,null,te)),t.sb(5,16384,null,0,V.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(e()(),t.jb(16777216,null,null,1,null,re)),t.sb(7,278528,null,0,V.m,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(e()(),t.jb(16777216,null,null,1,null,oe)),t.sb(9,16384,null,0,V.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],(function(e,n){var l=n.component;e(n,2,0,l.references&&l.references.length>l.pageSize),e(n,5,0,l.references&&l.references.length>5),e(n,7,0,l.paged),e(n,9,0,l.references&&l.references.length>5)}),null)}function ue(e){return t.Pb(0,[(e()(),t.tb(0,0,null,null,1,"app-substance-form-references-card",[],null,null,null,ie,ne)),t.sb(1,4440064,null,0,$,[Z.a,H.e,q.a,ee.a,K.e],null,null)],(function(e,n){e(n,1,0)}),null)}var ce=t.pb("app-substance-form-references-card",$,ue,{},{menuLabelUpdate:"menuLabelUpdate",hiddenStateUpdate:"hiddenStateUpdate",canAddItemUpdate:"canAddItemUpdate",componentDestroyed:"componentDestroyed"},[]),be=l("M2Lx"),se=l("mVsa"),de=l("v9Dh"),fe=l("ZYjt"),pe=l("uGex"),ge=l("4tE/"),he=l("EtvR"),me=l("4c35"),De=l("qAlS"),ve=l("de3e"),Fe=l("UodH"),Ce=l("SMsm"),Se=l("lLAP"),ye=l("La40"),_e=l("/dO6"),we=l("NYLF"),Le=l("y4qS"),Ie=l("BHnd"),xe=l("YhbO"),Pe=l("jlZm"),je=l("6Wmm"),ze=l("9It4"),ke=l("PnCX"),Ee=l("IyAz"),Me=l("ZYCi"),Re=l("5uHe"),Oe=l("vfGX"),Ue=l("0/Q6"),Te=l("jS4w"),qe=l("u7R8"),Be=l("NnTW"),Ge=l("Z+uX"),Ye=l("Blfk"),Ae=l("7fs6"),Ne=l("YSh2"),Ze=l("6jyQ");l.d(n,"SubstanceFormReferencesModuleNgFactory",(function(){return He}));var He=t.qb(a,[],(function(e){return t.Cb([t.Db(512,t.j,t.bb,[[8,[r.a,o.a,i.a,u.a,c.a,b.a,s.a,d.a,f.b,p.a,g.a,h.a,m.a,D.a,v.a,F.a,C.a,S.a,y.a,_.a,ce]],[3,t.j],t.x]),t.Db(4608,V.p,V.o,[t.u,[2,V.G]]),t.Db(4608,z.e,z.e,[]),t.Db(4608,z.w,z.w,[]),t.Db(4608,be.c,be.c,[]),t.Db(4608,K.c,K.c,[K.i,K.e,t.j,K.h,K.f,t.r,t.z,V.d,x.b,[2,V.j]]),t.Db(5120,K.j,K.k,[K.c]),t.Db(5120,se.c,se.j,[K.c]),t.Db(5120,de.b,de.c,[K.c]),t.Db(4608,fe.e,I.e,[[2,I.i],[2,I.n]]),t.Db(5120,pe.a,pe.b,[K.c]),t.Db(4608,I.d,I.d,[]),t.Db(5120,ge.b,ge.c,[K.c]),t.Db(5120,H.c,H.d,[K.c]),t.Db(135680,H.e,H.e,[K.c,t.r,[2,V.j],[2,H.b],H.c,[3,H.e],K.e]),t.Db(5120,R.c,R.a,[[3,R.c]]),t.Db(1073742336,V.c,V.c,[]),t.Db(1073742336,he.a,he.a,[]),t.Db(1073742336,z.v,z.v,[]),t.Db(1073742336,z.s,z.s,[]),t.Db(1073742336,z.k,z.k,[]),t.Db(1073742336,be.d,be.d,[]),t.Db(1073742336,L.e,L.e,[]),t.Db(1073742336,x.a,x.a,[]),t.Db(1073742336,I.n,I.n,[[2,I.f],[2,fe.f]]),t.Db(1073742336,P.b,P.b,[]),t.Db(1073742336,I.x,I.x,[]),t.Db(1073742336,me.g,me.g,[]),t.Db(1073742336,De.c,De.c,[]),t.Db(1073742336,K.g,K.g,[]),t.Db(1073742336,se.i,se.i,[]),t.Db(1073742336,se.f,se.f,[]),t.Db(1073742336,ve.d,ve.d,[]),t.Db(1073742336,ve.c,ve.c,[]),t.Db(1073742336,Fe.c,Fe.c,[]),t.Db(1073742336,Ce.c,Ce.c,[]),t.Db(1073742336,Se.a,Se.a,[]),t.Db(1073742336,de.e,de.e,[]),t.Db(1073742336,ye.l,ye.l,[]),t.Db(1073742336,U.b,U.b,[]),t.Db(1073742336,I.v,I.v,[]),t.Db(1073742336,I.s,I.s,[]),t.Db(1073742336,pe.d,pe.d,[]),t.Db(1073742336,E.c,E.c,[]),t.Db(1073742336,k.c,k.c,[]),t.Db(1073742336,_e.f,_e.f,[]),t.Db(1073742336,ge.e,ge.e,[]),t.Db(1073742336,we.a,we.a,[]),t.Db(1073742336,H.k,H.k,[]),t.Db(1073742336,Le.p,Le.p,[]),t.Db(1073742336,Ie.m,Ie.m,[]),t.Db(1073742336,xe.c,xe.c,[]),t.Db(1073742336,Pe.d,Pe.d,[]),t.Db(1073742336,je.b,je.b,[]),t.Db(1073742336,ze.d,ze.d,[]),t.Db(1073742336,ke.a,ke.a,[]),t.Db(1073742336,Ee.a,Ee.a,[]),t.Db(1073742336,Me.p,Me.p,[[2,Me.u],[2,Me.m]]),t.Db(1073742336,Re.a,Re.a,[]),t.Db(1073742336,Oe.a,Oe.a,[]),t.Db(1073742336,I.o,I.o,[]),t.Db(1073742336,Ue.d,Ue.d,[]),t.Db(1073742336,Te.b,Te.b,[]),t.Db(1073742336,qe.e,qe.e,[]),t.Db(1073742336,Be.b,Be.b,[]),t.Db(1073742336,Ge.c,Ge.c,[]),t.Db(1073742336,Ye.c,Ye.c,[]),t.Db(1073742336,Ae.a,Ae.a,[]),t.Db(1073742336,R.d,R.d,[]),t.Db(1073742336,a,a,[]),t.Db(256,_e.a,{separatorKeyCodes:[Ne.g]},[]),t.Db(1024,Me.j,(function(){return[[]]}),[]),t.Db(256,Ze.a,$,[])])}))},"n67+":function(e,n,l){"use strict";l.d(n,"a",(function(){return a}));var t=l("CcnG"),a=function(){return function(){this.menuLabelUpdate=new t.n,this.hiddenStateUpdate=new t.n,this.canAddItemUpdate=new t.n,this.componentDestroyed=new t.n}}()}}]);
//# sourceMappingURL=21.b025f4c23261bc51c98c.js.map