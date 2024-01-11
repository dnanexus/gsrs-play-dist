"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[7441],{57441:function(G,m,t){t.r(m),t.d(m,{SubstanceFormSugarsModule:function(){return $}});var v=t(48047),f=t(78069),g=t(36362),Z=t(75143),C=t(7168),S=t(19975),h=t(65590),p=t(87317),x=t(94673),T=t(44770),b=t(90587),I=t(26439),O=t(43365),A=t(40089),E=t(31959),J=t(91434),M=t(95106),U=t(80206),R=t(98568),y=t(20265),D=t(24582),N=t(79550),Q=(t(27299),t(33567)),Y=t(40104),n=t(76442),P=t(78444),H=t(51279),V=t(1427);function z(e,o){1&e&&n._UZ(0,"mat-divider",7),2&e&&n.Q6J("inset",!0)}function B(e,o){if(1&e){var i=n.EpF();n.TgZ(0,"div",4),n.TgZ(1,"app-sugar-form",5),n.NdJ("sugarDeleted",function(l){return n.CHM(i),n.oxw().deleteSugar(l)}),n.qZA(),n.YNc(2,z,1,1,"mat-divider",6),n.qZA()}if(2&e){var a=o.$implicit,r=o.last,c=o.index,s=n.oxw();n.Q6J("id","substance-sugars-"+c),n.xp6(1),n.Q6J("sugar",a)("remaining",s.remainingSites),n.xp6(1),n.Q6J("ngIf",!r)}}function L(e,o){if(1&e){var i=n.EpF();n.TgZ(0,"div",8),n._UZ(1,"span",9),n.TgZ(2,"div",8),n.TgZ(3,"button",10),n.NdJ("click",function(){return n.CHM(i),n.oxw().addOtherSugar()}),n._uU(4," Add sugar "),n._UZ(5,"mat-icon",11),n.qZA(),n.qZA(),n.qZA()}}var X=function(){var e=function(o){function i(a,r,c){var s;return(0,f.Z)(this,i),s=function j(e,o,i){return o=(0,y.Z)(o),(0,U.Z)(e,(0,R.Z)()?Reflect.construct(o,i||[],(0,y.Z)(e).constructor):o.apply(e,i))}(this,i,[c]),s.substanceFormService=a,s.scrollToService=r,s.gaService=c,s.remainingSites=[],s.invalidSites=0,s.subscriptions=[],s.analyticsEventCategory="substance form sugars",s}return(0,D.Z)(i,o),(0,v.Z)(i,[{key:"ngOnInit",value:function(){this.canAddItemUpdate.emit(!0),this.menuLabelUpdate.emit("Sugars")}},{key:"ngAfterViewInit",value:function(){var r=this,c=this.substanceFormService.substanceSugars.subscribe(function(u){r.sugars=u,r.getRemainingSites()});this.subscriptions.push(c);var s=this.substanceFormService.substanceSubunits.subscribe(function(u){r.subunits=u,r.getRemainingSites()});this.subscriptions.push(s)}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(r){r.unsubscribe()})}},{key:"getRemainingSites",value:function(){var r=[],c=[];this.subunits&&this.sugars&&(this.subunits.forEach(function(s){if(null!=s.sequence&&s.sequence.length>0)for(var u=1;u<=s.sequence.length;u++)c.push({subunitIndex:s.subunitIndex,residueIndex:u})}),this.sugars.forEach(function(s){r=r.concat(s.sites)})),this.remainingSites=c.filter(function(s){return!r.some(function(u){return s.subunitIndex===u.subunitIndex&&s.residueIndex===u.residueIndex})}),this.invalidSites=c.length-r.length}},{key:"addItem",value:function(){this.addOtherSugar()}},{key:"addOtherSugar",value:function(){var r=this;this.substanceFormService.addSubstanceSugar(),setTimeout(function(){r.scrollToService.scrollToElement("substance-sugars-0","center")})}},{key:"deleteSugar",value:function(r){this.substanceFormService.deleteSubstanceSugar(r)}},{key:"findElements",value:function(r,c,s){var d,u=[],l=(0,M.Z)(r);try{for(l.s();!(d=l.n()).done;){var F=d.value;F[c]===s&&u.push(F)}}catch(W){l.e(W)}finally{l.f()}return u}}]),i}(N.u);return e.\u0275fac=function(i){return new(i||e)(n.Y36(Q.B),n.Y36(P.i),n.Y36(Y.$))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-substance-form-sugars"]],features:[n.qOj],decls:5,vars:4,consts:[[1,"responsive"],[1,"form-row",3,"ngClass"],["class","alternate-backgrounds","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],["class","form-row",4,"ngIf"],["appScrollToTarget","",1,"alternate-backgrounds",3,"id"],[3,"sugar","remaining","sugarDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"],[1,"form-row"],[1,"middle-fill"],["mat-button","",3,"click"],["svgIcon","add_circle_outline"]],template:function(i,a){1&i&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._uU(2),n.qZA(),n.YNc(3,B,3,4,"div",2),n.qZA(),n.YNc(4,L,6,0,"div",3)),2&i&&(n.xp6(1),n.Q6J("ngClass",0===a.invalidSites?"":"too-many"),n.xp6(1),n.hij("Remaining Sugars: ",0===a.invalidSites?a.remainingSites.length:a.invalidSites,""),n.xp6(1),n.Q6J("ngForOf",a.sugars),n.xp6(1),n.Q6J("ngIf",a.sugars&&a.sugars.length>0))},directives:[g.mk,g.sg,H.P,V.I,g.O5,S.d,p.lW,h.Hw],styles:[".form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:5px 10px;-ms-flex-align:end;align-items:flex-end;font-size:18px;margin-bottom:5px}.too-many[_ngcontent-%COMP%]{color:var(--regular-red-color)}"]}),e}(),$=(t(64061),function(){var e=(0,v.Z)(function o(){(0,f.Z)(this,o)});return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[g.ez,Z.o0.forChild(X),C.O,S.t,h.Ps,p.ot,x.w,T.lN,b.UX,b.u5,I.TU,A.AV,E.vV,O.c,J.LD]]}),e}())}}]);
//# sourceMappingURL=7441.2e14edbdf6f9d7dc.js.map