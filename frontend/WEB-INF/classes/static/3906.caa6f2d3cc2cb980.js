"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[3906],{53906:function(le,l,i){i.r(l),i.d(l,{SubstanceDependenciesImageModule:function(){return re}});var p=i(48047),g=i(78069),f=i(36362),b=i(10853),x=i(98568),v=i(20265),I=i(24582),y=i(12570),D=i(40104),N=i(44250),A=i(68756),Y=i(69093),e=i(76442),Q=i(54244),h=i(95758),J=i(9292),d=i(97217),S=i(16259),C=i(26439);function M(t,n){if(1&t){var a=e.EpF();e.TgZ(0,"div",14),e.TgZ(1,"a",15),e.NdJ("click",function(){e.CHM(a);var c=e.oxw();return c.openImageModal(c.uuid)}),e._UZ(2,"img",16),e.qZA(),e._UZ(3,"br"),e.qZA()}if(2&t){var o=e.oxw();e.xp6(2),e.Q6J("entityId",o.uuid)}}function z(t,n){1&t&&(e.TgZ(0,"th",17),e._uU(1," Related Substance "),e.qZA())}var Z=function(n){return["/substances",n]};function R(t,n){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"a",20),e._uU(2),e.qZA(),e.qZA()),2&t){var a=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,Z,a.relatedSubstance.refuuid)),e.xp6(1),e.hij(" ",a.relatedSubstance.name," ")}}function O(t,n){if(1&t&&(e.TgZ(0,"td",18),e.YNc(1,R,3,4,"div",19),e.qZA()),2&t){var a=n.$implicit;e.xp6(1),e.Q6J("ngIf",a.relatedSubstance)}}function $(t,n){1&t&&(e.TgZ(0,"th",17),e._uU(1," Structure "),e.qZA())}function B(t,n){if(1&t){var a=e.EpF();e.TgZ(0,"div",22),e.TgZ(1,"a",15),e.NdJ("click",function(){e.CHM(a);var c=e.oxw(2).$implicit;return e.oxw().openImageModal(c.relatedSubstance.refuuid)}),e._UZ(2,"img",23),e.qZA(),e.qZA()}if(2&t){var o=e.oxw(2).$implicit;e.xp6(2),e.Q6J("entityId",o.relatedSubstance.refuuid)}}function j(t,n){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,B,3,1,"div",21),e.qZA()),2&t){var a=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",a.relatedSubstance.refuuid)}}function E(t,n){if(1&t&&(e.TgZ(0,"td",18),e.YNc(1,j,2,1,"div",19),e.qZA()),2&t){var a=n.$implicit;e.xp6(1),e.Q6J("ngIf",a.relatedSubstance)}}function P(t,n){1&t&&(e.TgZ(0,"th",17),e._uU(1," Relationship Type "),e.qZA())}function H(t,n){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){var a=n.$implicit;e.xp6(1),e.hij(" ",a.relationshipType," ")}}function F(t,n){1&t&&(e.TgZ(0,"th",17),e._uU(1," Interaction Type "),e.qZA())}function L(t,n){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){var a=n.$implicit;e.xp6(1),e.hij(" ",a.interactionType," ")}}function X(t,n){1&t&&(e.TgZ(0,"th",17),e._uU(1," Mediator Substance "),e.qZA())}function V(t,n){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"a",20),e._uU(2),e.qZA(),e.qZA()),2&t){var a=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,Z,a.mediatorSubstance.refuuid)),e.xp6(1),e.hij(" ",a.mediatorSubstance.name," ")}}function w(t,n){if(1&t&&(e.TgZ(0,"td",18),e.YNc(1,V,3,4,"div",19),e.qZA()),2&t){var a=n.$implicit;e.xp6(1),e.Q6J("ngIf",a.mediatorSubstance)}}function K(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Comments "),e.qZA())}function G(t,n){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){var a=n.$implicit;e.xp6(1),e.hij(" ",a.comments," ")}}function W(t,n){1&t&&e._UZ(0,"tr",25)}function q(t,n){1&t&&e._UZ(0,"tr",26)}var k=function(){return[5,10,25,100]},_=function(){var t=function(n){function a(o,m,c,s,r){var u;return(0,g.Z)(this,a),u=function U(t,n,a){return n=(0,v.Z)(n),(0,b.Z)(t,(0,x.Z)()?Reflect.construct(n,a||[],(0,v.Z)(t).constructor):n.apply(t,a))}(this,a,[c]),u.substanceService=o,u.authService=m,u.gaService=c,u.overlayContainerService=s,u.dialog=r,u.references=[],u.displayedColumns=["relatedSubstance","structure","relationshipType","interactionType","mediatorSubtance","comments"],u}return(0,I.Z)(a,n),(0,p.Z)(a,[{key:"ngOnInit",value:function(){this.overlayContainer=this.overlayContainerService.getContainerElement(),this.uuid=this.substance.uuid,this.getSubstanceRelationships()}},{key:"getSubstanceRelationships",value:function(){var m=this,c=this.substance.relationships;c.length>0&&(this.dependencies=[],c.forEach(function(s){null!=s&&s.qualification&&"DEPENDENCY"===s.qualification&&m.dependencies.push({relatedSubstance:s.relatedSubstance,relationshipType:s.type,interactionType:s.interactionType,role:"Relationship",mediatorSubstance:s.mediatorSubstance,comments:s.comments})})),this.filtered=this.dependencies}},{key:"openImageModal",value:function(m){var c=this,s=this.dialog.open(Y.oV,{height:"90%",width:"650px",panelClass:"structure-image-panel",data:{structure:m}});this.overlayContainer.style.zIndex="1002";var r=s.afterClosed().subscribe(function(){c.overlayContainer.style.zIndex=null,r.unsubscribe()},function(){c.overlayContainer.style.zIndex=null,r.unsubscribe()})}}])}(A.uJ);return t.\u0275fac=function(a){return new(a||t)(e.Y36(y.d),e.Y36(N.e),e.Y36(D.$),e.Y36(Q.Xj),e.Y36(h.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-substance-dependencies-image"]],features:[e.qOj],decls:26,vars:8,consts:[["class","divcenter",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","relatedSubstance"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","structure"],["matColumnDef","relationshipType"],["matColumnDef","interactionType"],["matColumnDef","mediatorSubtance"],["matColumnDef","comments"],["mat-header-cell","","class","width110px",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","true",3,"length","pageSize","pageSizeOptions","page"],[1,"divcenter"],["tabindex","0","role","img","aria-label","substance image",1,"zoom",3,"click"],["appSubstanceImage","","size","400",1,"image-icon",3,"entityId"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["target","_blank",1,"substance-name",3,"routerLink"],["class","bordergray width95px",4,"ngIf"],[1,"bordergray","width95px"],["appSubstanceImage","","size","90",1,"image-icon",3,"entityId"],["mat-header-cell","",1,"width110px"],["mat-header-row",""],["mat-row",""]],template:function(a,o){1&a&&(e.YNc(0,M,4,1,"div",0),e.TgZ(1,"div"),e.TgZ(2,"b"),e._uU(3,"Dependencies"),e.qZA(),e.qZA(),e.TgZ(4,"table",1),e.ynx(5,2),e.YNc(6,z,2,0,"th",3),e.YNc(7,O,2,1,"td",4),e.BQk(),e.ynx(8,5),e.YNc(9,$,2,0,"th",3),e.YNc(10,E,2,1,"td",4),e.BQk(),e.ynx(11,6),e.YNc(12,P,2,0,"th",3),e.YNc(13,H,2,1,"td",4),e.BQk(),e.ynx(14,7),e.YNc(15,F,2,0,"th",3),e.YNc(16,L,2,1,"td",4),e.BQk(),e.ynx(17,8),e.YNc(18,X,2,0,"th",3),e.YNc(19,w,2,1,"td",4),e.BQk(),e.ynx(20,9),e.YNc(21,K,2,0,"th",10),e.YNc(22,G,2,1,"td",4),e.BQk(),e.YNc(23,W,1,0,"tr",11),e.YNc(24,q,1,0,"tr",12),e.qZA(),e.TgZ(25,"mat-paginator",13),e.NdJ("page",function(c){return o.pageChange(c,o.analyticsEventCategory)}),e.qZA()),2&a&&(e.Q6J("ngIf",o.uuid),e.xp6(4),e.Q6J("dataSource",o.dependencies),e.xp6(19),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("length",o.filtered&&o.filtered.length||0)("pageSize",5)("pageSizeOptions",e.DdM(7,k)))},directives:[f.O5,J.m,d.BZ,d.w1,d.fO,d.ge,d.Dz,d.ev,S.yS,d.as,d.XQ,d.nj,d.Gk,C.NW],styles:[".divcenter[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.image-icon[_ngcontent-%COMP%]{width:50%;height:50%!important}.zoom[_ngcontent-%COMP%]:hover{cursor:zoom-in}.width95px[_ngcontent-%COMP%]{width:95px}.width110px[_ngcontent-%COMP%]{width:110px}  .structure-image-panel .mat-dialog-container{padding:5px;position:relative;overflow:hidden}  .structure-image-panel .mat-dialog-content{margin:0;padding:0;max-height:100%}  .structure-image-panel .mat-tab-body-content{padding-left:10px;padding-right:10px}"]}),t}(),ee=i(64061),te=i(33865),ne=i(43365),T=i(90587),ae=i(34972),ie=i(65590),oe=i(38277),ce=i(64316),se=i(44770),de=i(91434),ue=i(2711),me=i(24054),re=function(){var t=(0,p.Z)(function n(){(0,g.Z)(this,n)});return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,ee.o.forChild(_),d.p0,te.HT,C.TU,ne.c,se.lN,de.LD,T.UX,T.u5,ae.dp,S.Bz,ie.Ps,oe.V,h.Is,ce.JX,ue.v,me.f]]}),t}()}}]);
//# sourceMappingURL=3906.caa6f2d3cc2cb980.js.map