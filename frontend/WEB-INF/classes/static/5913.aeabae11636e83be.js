"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[5913],{45913:function(P,m,u){u.r(m),u.d(m,{SubstanceStructuralUnitsModule:function(){return K}});var f=u(48047),p=u(78069),g=u(36362),h=u(64061),d=u(43365),v=u(26439),l=u(97217),U=u(33865),c=u(90587),Z=u(98002),C=u(80206),y=u(98568),S=u(20265),T=u(24582),b=u(54025),A=u(52149),x=u(24874),N=u(50253),t=u(76442),D=u(44770),Y=u(9292);function J(n,a){1&n&&(t.TgZ(0,"th",16),t._uU(1," SRU "),t.qZA())}function R(n,a){if(1&n&&(t.TgZ(0,"td",17),t.TgZ(1,"div",18),t._UZ(2,"img",19),t._UZ(3,"div"),t.qZA(),t.qZA()),2&n){var e=a.$implicit;t.xp6(2),t.Q6J("entityId",e.uuid)}}function j(n,a){1&n&&(t.TgZ(0,"th",16),t._uU(1," Label "),t.qZA())}function B(n,a){if(1&n&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&n){var e=a.$implicit;t.xp6(1),t.hij(" ",e.label," ")}}function O(n,a){1&n&&(t.TgZ(0,"th",16),t._uU(1," Amount "),t.qZA())}function z(n,a){if(1&n&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&n){var e=a.$implicit,s=t.oxw();t.xp6(1),t.hij(" ",s.displayAmount(e.amount)," ")}}function M(n,a){1&n&&(t.TgZ(0,"th",16),t._uU(1," Type "),t.qZA())}function I(n,a){if(1&n&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&n){var e=a.$implicit;t.xp6(1),t.hij(" ",e.type," ")}}function $(n,a){1&n&&(t.TgZ(0,"th",16),t._uU(1," Connectivity "),t.qZA())}function F(n,a){if(1&n&&(t.TgZ(0,"td",17),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.qZA()),2&n){var e=a.$implicit,s=t.oxw();t.xp6(2),t.hij("",s.connectivity(e.attachmentMap)," ")}}function H(n,a){1&n&&t._UZ(0,"tr",20)}function L(n,a){1&n&&t._UZ(0,"tr",21)}var E=function(){return[5,10,25,100]},X=function(){var n=function(a){function e(s,i){var o;return(0,p.Z)(this,e),o=function Q(n,a,e){return a=(0,S.Z)(a),(0,C.Z)(n,(0,y.Z)()?Reflect.construct(a,e||[],(0,S.Z)(n).constructor):a.apply(n,e))}(this,e,[i]),o.utilsService=s,o.gaService=i,o.displayedColumns=["SRU","label","amount","type","connectivity"],o.substanceUpdated=new N.x,o}return(0,T.Z)(e,a),(0,f.Z)(e,[{key:"ngOnInit",value:function(){var i=this;this.substanceUpdated.subscribe(function(o){i.substance=o,null!=i.substance&&(i.structuralUnits=i.substance.polymer.structuralUnits,i.countUpdate.emit(i.structuralUnits.length),i.filtered=i.substance.polymer.structuralUnits,i.pageChange(),i.searchControl.valueChanges.subscribe(function(r){i.filterList(r,i.structuralUnits,i.analyticsEventCategory)},function(r){console.log(r)}))})}},{key:"displayAmount",value:function(i){return this.utilsService.displayAmount(i)}},{key:"connectivity",value:function(i){var o=JSON.stringify(i);return(o=(o=o.replace(":","=")).replace('"',"")).replace(",",", ")}}]),e}(b.u);return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.F),t.Y36(x.$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-substance-structural-units"]],features:[t.qOj],decls:24,vars:9,consts:[[1,"flex-row"],[1,"middle-fill"],[1,"search",3,"floatLabel"],["matInput","","placeholder","Search",3,"formControl"],[1,"responsive"],["mat-table","",3,"dataSource"],["matColumnDef","SRU"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","label"],["matColumnDef","amount"],["matColumnDef","type"],["matColumnDef","connectivity"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","true",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],[1,"thumb-col"],["appSubstanceImage","",1,"image-icon",3,"entityId"],["mat-header-row",""],["mat-row",""]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"mat-form-field",2),t._UZ(3,"input",3),t.qZA(),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"table",5),t.ynx(6,6),t.YNc(7,J,2,0,"th",7),t.YNc(8,R,4,1,"td",8),t.BQk(),t.ynx(9,9),t.YNc(10,j,2,0,"th",7),t.YNc(11,B,2,1,"td",8),t.BQk(),t.ynx(12,10),t.YNc(13,O,2,0,"th",7),t.YNc(14,z,2,1,"td",8),t.BQk(),t.ynx(15,11),t.YNc(16,M,2,0,"th",7),t.YNc(17,I,2,1,"td",8),t.BQk(),t.ynx(18,12),t.YNc(19,$,2,0,"th",7),t.YNc(20,F,3,1,"td",8),t.BQk(),t.YNc(21,H,1,0,"tr",13),t.YNc(22,L,1,0,"tr",14),t.qZA(),t.qZA(),t.TgZ(23,"mat-paginator",15),t.NdJ("page",function(o){return s.pageChange(o,s.analyticsEventCategory)}),t.qZA()),2&e&&(t.xp6(2),t.Q6J("floatLabel","never"),t.xp6(1),t.Q6J("formControl",s.searchControl),t.xp6(2),t.Q6J("dataSource",s.paged),t.xp6(16),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(1),t.Q6J("length",s.filtered&&s.filtered.length||0)("pageSize",5)("pageSizeOptions",t.DdM(8,E)))},directives:[D.KE,d.Nt,c.Fj,c.JJ,c.oH,l.BZ,l.w1,l.fO,l.ge,l.Dz,l.ev,Y.m,l.as,l.XQ,l.nj,l.Gk,v.NW],styles:[""]}),n}(),G=u(24054),K=function(){var n=(0,f.Z)(function a(){(0,p.Z)(this,a)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,h.o.forChild(X),l.p0,U.HT,v.TU,d.c,c.UX,c.u5,Z.Bz,G.f]]}),n}()}}]);
//# sourceMappingURL=5913.aeabae11636e83be.js.map