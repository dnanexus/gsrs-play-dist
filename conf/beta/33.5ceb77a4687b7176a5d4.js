(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{A4AE:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),i=function(){return function(){}}(),e=t("pMnS"),c=t("YBVn"),o=t("6E2U"),s=t("ZYCi"),a=t("Ip0R"),b=t("mrSG"),r=t("EfhQ"),f=t("K9Ia"),p=function(n){function l(){var l=n.call(this)||this;return l.relationships=[],l.definitions=[],l.substanceUpdated=new f.a,l}return b.a(l,n),l.prototype.ngOnInit=function(){var n=this;this.substanceUpdated.subscribe((function(l){n.substance=l,null!=n.substance&&n.getConceptDefinition()}))},l.prototype.getConceptDefinition=function(){var n=this;this.substance.relationships&&this.substance.relationships.length>0&&(this.substance.relationships.forEach((function(l){"SUBSTANCE->SUB_CONCEPT"===l.type&&n.definitions.push(l.relatedSubstance)})),this.countUpdate.emit(this.definitions.length))},l}(r.a),d=u.rb({encapsulation:0,styles:[[".image-icon[_ngcontent-%COMP%]{width:150px;height:auto}.substance-icon-container[_ngcontent-%COMP%]{text-align:center;padding-left:10px;padding-right:10px;max-width:250px}"]],data:{}});function h(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,7,"div",[["class","thumb-col"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,1,"img",[["appSubstanceImage",""],["class","image-thumb"]],null,null,null,null,null)),u.sb(3,4210688,null,0,c.a,[u.k,o.a],{entityId:[0,"entityId"]},null),(n()(),u.tb(4,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(5,0,null,null,3,"a",[["class","substance-name"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==u.Fb(n,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i}),null,null)),u.sb(6,671744,null,0,s.o,[s.m,s.a,a.k],{routerLink:[0,"routerLink"]},null),u.Gb(7,2),(n()(),u.Nb(8,null,[" "," "]))],(function(n,l){n(l,3,0,l.context.$implicit.refuuid);var t=n(l,7,0,"/substances",l.context.$implicit.refuuid);n(l,6,0,t)}),(function(n,l){n(l,5,0,u.Fb(l,6).target,u.Fb(l,6).href),n(l,8,0,l.context.$implicit.refPname)}))}function g(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,[" This is a Definitional Concept of "])),(n()(),u.jb(16777216,null,null,1,null,h)),u.sb(3,278528,null,0,a.m,[u.P,u.M,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.definitions)}),null)}function m(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["This is a non-substance concept"]))],null,null)}function v(n){return u.Pb(0,[(n()(),u.jb(16777216,null,null,1,null,g)),u.sb(1,16384,null,0,a.n,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u.jb(16777216,null,null,1,null,m)),u.sb(3,16384,null,0,a.n,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.definitions.length>0),n(l,3,0,0==t.definitions.length)}),null)}function C(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"app-substance-concept-definition",[],null,null,null,v,d)),u.sb(1,114688,null,0,p,[],null,null)],(function(n,l){n(l,1,0)}),null)}var D=u.pb("app-substance-concept-definition",p,C,{},{countUpdate:"countUpdate"},[]),P=t("EtvR"),y=t("5uHe"),x=t("6jyQ");t.d(l,"SubstanceConceptDefinitionModuleNgFactory",(function(){return I}));var I=u.qb(i,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[e.a,D]],[3,u.j],u.x]),u.Db(4608,a.p,a.o,[u.u,[2,a.G]]),u.Db(1073742336,a.c,a.c,[]),u.Db(1073742336,P.a,P.a,[]),u.Db(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),u.Db(1073742336,y.a,y.a,[]),u.Db(1073742336,i,i,[]),u.Db(1024,s.j,(function(){return[[]]}),[]),u.Db(256,x.a,p,[])])}))}}]);
//# sourceMappingURL=33.5ceb77a4687b7176a5d4.js.map