(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{o3Qv:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),i=t("pMnS"),a=t("YBVn"),r=t("6E2U"),o=t("ZYCi"),c=t("Ip0R"),s=t("mrSG"),b=t("K9Ia"),p=function(n){function l(){var l=n.call(this)||this;return l.substanceUpdated=new b.a,l}return s.a(l,n),l.prototype.ngOnInit=function(){var n=this;this.substanceUpdated.subscribe((function(l){var t,u;if(n.alternatives=[],n.substance=l,null!=n.substance&&n.substance.relationships){try{for(var e=s.d(n.substance.relationships),i=e.next();!i.done;i=e.next()){var a=i.value;"SUBSTANCE->SUB_ALTERNATE"===a.type&&n.alternatives.push(a.relatedSubstance)}}catch(r){t={error:r}}finally{try{i&&!i.done&&(u=e.return)&&u.call(e)}finally{if(t)throw t.error}}n.countUpdate.emit(n.alternatives.length)}}))},l}(t("EfhQ").a),f=u.rb({encapsulation:0,styles:[[".form-row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}"]],data:{}});function d(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,9,"div",[["class","thumb-col"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u.Nb(2,null,[" "," "])),(n()(),u.tb(3,0,null,null,1,"img",[["appSubstanceImage",""],["class","image-thumb"],["size","400"]],null,null,null,null,null)),u.sb(4,4210688,null,0,a.a,[u.k,r.a],{entityId:[0,"entityId"],size:[1,"size"]},null),(n()(),u.tb(5,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(6,0,null,null,3,"a",[["class","substance-name"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Fb(n,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e}),null,null)),u.sb(7,671744,null,0,o.o,[o.m,o.a,c.k],{routerLink:[0,"routerLink"]},null),u.Gb(8,2),(n()(),u.Nb(9,null,[" "," "]))],(function(n,l){n(l,4,0,l.context.$implicit.refuuid,"400");var t=n(l,8,0,"/substances",l.context.$implicit.refuuid);n(l,7,0,t)}),(function(n,l){n(l,2,0,l.context.$implicit.approvalID?l.context.$implicit.approvalID:l.context.$implicit.refuuid),n(l,6,0,u.Fb(l,7).target,u.Fb(l,7).href),n(l,9,0,l.context.$implicit.name)}))}function v(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,2,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),u.jb(16777216,null,null,1,null,d)),u.sb(2,278528,null,0,c.m,[u.P,u.M,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.alternatives)}),null)}function m(n){return u.Pb(0,[(n()(),u.jb(16777216,null,null,1,null,v)),u.sb(1,16384,null,0,c.n,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.alternatives)}),null)}function w(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"app-substance-alternative-definition",[],null,null,null,m,f)),u.sb(1,114688,null,0,p,[],null,null)],(function(n,l){n(l,1,0)}),null)}var x=u.pb("app-substance-alternative-definition",p,w,{},{countUpdate:"countUpdate"},[]),y=t("EtvR"),h=t("5uHe"),k=t("6jyQ");t.d(l,"SubstanceAlternativeDefinitionModuleNgFactory",(function(){return g}));var g=u.qb(e,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[i.a,x]],[3,u.j],u.x]),u.Db(4608,c.p,c.o,[u.u,[2,c.G]]),u.Db(1073742336,c.c,c.c,[]),u.Db(1073742336,y.a,y.a,[]),u.Db(1073742336,o.p,o.p,[[2,o.u],[2,o.m]]),u.Db(1073742336,h.a,h.a,[]),u.Db(1073742336,e,e,[]),u.Db(1024,o.j,(function(){return[[]]}),[]),u.Db(256,k.a,p,[])])}))}}]);
//# sourceMappingURL=30.ea4877bee0ece2b7703f.js.map