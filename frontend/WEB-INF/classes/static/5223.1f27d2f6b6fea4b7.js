"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[5223],{75223:function(M,c,e){e.r(c),e.d(c,{SubstanceDisulfideLinksModule:function(){return F}});var f=e(48047),r=e(78069),v=e(36362),h=e(95106),C=e(80206),D=e(98568),m=e(20265),Z=e(24582),S=e(2756),b=e(50253),t=e(76442),u=e(97217);function g(n,s){1&n&&(t.TgZ(0,"th",8),t._uU(1," To "),t.qZA())}function y(n,s){if(1&n&&(t.TgZ(0,"td",9),t._uU(1),t.qZA()),2&n){var i=s.$implicit;t.xp6(1),t.hij(" ",i.start," ")}}function T(n,s){1&n&&(t.TgZ(0,"th",8),t._uU(1," From "),t.qZA())}function x(n,s){if(1&n&&(t.TgZ(0,"td",9),t._uU(1),t.qZA()),2&n){var i=s.$implicit;t.xp6(1),t.hij(" ",i.end," ")}}function k(n,s){1&n&&t._UZ(0,"tr",10)}function U(n,s){1&n&&t._UZ(0,"tr",11)}var I=function(){var n=function(s){function i(){var o;return(0,r.Z)(this,i),o=function L(n,s,i){return s=(0,m.Z)(s),(0,C.Z)(n,(0,D.Z)()?Reflect.construct(s,i||[],(0,m.Z)(n).constructor):s.apply(n,i))}(this,i),o.formatted=[],o.displayedColumns=["to","from"],o.substanceUpdated=new b.x,o}return(0,Z.Z)(i,s),(0,f.Z)(i,[{key:"ngOnInit",value:function(){var a=this;this.substanceUpdated.subscribe(function(O){if(a.substance=O,a.formatted=[],null!=a.substance&&null!=a.substance.protein&&null!=a.substance.protein.disulfideLinks&&a.substance.protein.disulfideLinks.length){a.disulfideLinks=a.substance.protein.disulfideLinks;var p,d=(0,h.Z)(a.disulfideLinks);try{for(d.s();!(p=d.n()).done;){var l=p.value;l.sites&&l.sites.length>1&&a.formatted.push({start:l.sites[0].subunitIndex+"_"+l.sites[0].residueIndex,end:l.sites[1].subunitIndex+"_"+l.sites[1].residueIndex})}}catch(H){d.e(H)}finally{d.f()}a.countUpdate.emit(a.disulfideLinks.length)}})}},{key:"getFullSite",value:function(a){return a.subunitIndex+"_"+a.residueIndex}}]),i}(S.B);return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-substance-disulfide-links"]],features:[t.qOj],decls:10,vars:3,consts:[[1,"responsive"],["mat-table","",3,"dataSource"],["matColumnDef","to"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","from"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"table",1),t.ynx(2,2),t.YNc(3,g,2,0,"th",3),t.YNc(4,y,2,1,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,T,2,0,"th",3),t.YNc(7,x,2,1,"td",4),t.BQk(),t.YNc(8,k,1,0,"tr",6),t.YNc(9,U,1,0,"tr",7),t.qZA(),t.qZA()),2&i&&(t.xp6(1),t.Q6J("dataSource",o.formatted),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},directives:[u.BZ,u.w1,u.fO,u.ge,u.Dz,u.ev,u.as,u.XQ,u.nj,u.Gk],styles:[""]}),n}(),R=e(64061),A=e(98002),N=e(43365),j=e(26439),B=e(33865),F=function(){var n=(0,f.Z)(function s(){(0,r.Z)(this,s)});return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.ez,R.o.forChild(I),A.Bz,u.p0,B.HT,j.TU,N.c]]}),n}()}}]);
//# sourceMappingURL=5223.1f27d2f6b6fea4b7.js.map