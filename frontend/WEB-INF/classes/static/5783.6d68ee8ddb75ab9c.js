"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[5783],{55783:function(I,d,a){a.r(d),a.d(d,{SubstanceSsgGradeModule:function(){return O}});var l=a(48047),g=a(78069),v=a(36362),m=a(80206),p=a(98568),f=a(20265),Z=a(24582),S=a(2756),b=a(24874),C=a(50253),e=a(76442),u=a(95758),h=a(54244),y=a(73430);function T(n,c){if(1&n&&(e.TgZ(0,"h2",6),e._uU(1,"References"),e.qZA(),e.TgZ(2,"div",7),e._UZ(3,"app-references-manager",8),e.qZA(),e.TgZ(4,"div",9),e._UZ(5,"span",10),e.TgZ(6,"button",11),e._uU(7,"Close"),e.qZA(),e.qZA()),2&n){var t=e.oxw(2);e.xp6(3),e.Q6J("substance",t.substance)("references",t.substance.specifiedSubstanceG3.grade.references)}}function A(n,c){if(1&n){var t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._uU(3,"Grade Name"),e.qZA(),e.TgZ(4,"div",3),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",1),e.TgZ(7,"div",2),e._uU(8,"Grade Type"),e.qZA(),e.TgZ(9,"div",3),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"div",1),e.TgZ(12,"div",2),e._uU(13,"References"),e.qZA(),e.TgZ(14,"div",3),e.TgZ(15,"button",4),e.NdJ("click",function(){e.CHM(t);var r=e.MAs(18);return e.oxw().openModal(r)}),e._uU(16,"View"),e.qZA(),e.YNc(17,T,8,2,"ng-template",null,5,e.W1O),e.qZA(),e.qZA(),e.qZA()}if(2&n){var o=e.oxw();e.xp6(5),e.Oqu(o.substance.specifiedSubstanceG3.grade.name),e.xp6(5),e.Oqu(o.substance.specifiedSubstanceG3.grade.type),e.xp6(5),e.Q6J("disabled",o.substance.specifiedSubstanceG3.grade.references.length<=0)}}var U=function(){var n=function(c){function t(o,s,r){var i;return(0,g.Z)(this,t),i=function G(n,c,t){return c=(0,f.Z)(c),(0,m.Z)(n,(0,p.Z)()?Reflect.construct(c,t||[],(0,f.Z)(n).constructor):c.apply(n,t))}(this,t),i.dialog=o,i.gaService=s,i.overlayContainerService=r,i.grade={},i.substanceUpdated=new C.x,i.count=0,i}return(0,Z.Z)(t,c),(0,l.Z)(t,[{key:"ngOnInit",value:function(){var s=this;this.substanceUpdated.subscribe(function(r){s.substance=r,null!=s.substance&&null!=s.substance.specifiedSubstanceG3&&s.substance.specifiedSubstanceG3.grade&&(s.grade=s.substance.specifiedSubstanceG3.grade,s.count=1),s.countUpdate.emit(s.count)}),this.overlayContainer=this.overlayContainerService.getContainerElement()}},{key:"openModal",value:function(s){var r=this;this.gaService.sendEvent(this.analyticsEventCategory,"button","references view");var i=this.dialog.open(s,{minWidth:"40%",maxWidth:"90%"});this.overlayContainer.style.zIndex="1002",i.afterClosed().subscribe(function(R){r.overlayContainer.style.zIndex=null})}}]),t}(S.B);return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.uw),e.Y36(b.$),e.Y36(h.Xj))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-substance-ssg-grade"]],features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[1,"name-value"],[1,"name"],[1,"value"],[1,"mat-raised-button","mat-primary","dialog-close",3,"disabled","click"],["refTemplate",""],["mat-dialog-title",""],["mat-dialog-content",""],[3,"substance","references"],["mat-dialog-actions",""],[1,"middle-fill"],["mat-dialog-close","",1,"mat-raised-button","mat-primary"]],template:function(t,o){1&t&&e.YNc(0,A,19,3,"div",0),2&t&&e.Q6J("ngIf",o.substance.specifiedSubstanceG3.grade)},directives:[v.O5,u.uh,u.xY,y.C,u.H8,u.ZT],styles:[".name[_ngcontent-%COMP%]{min-width:150px}"]}),n}(),x=a(64061),M=a(38277),O=function(){var n=(0,l.Z)(function c(){(0,g.Z)(this,c)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[v.ez,x.o.forChild(U),M.V,u.Is]]}),n}()}}]);
//# sourceMappingURL=5783.6d68ee8ddb75ab9c.js.map