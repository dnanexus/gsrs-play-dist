"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[1282],{61282:function(F,g,n){n.r(g),n.d(g,{SubstanceMoietiesModule:function(){return J}});var m=n(48047),v=n(78069),d=n(36362),x=n(80206),p=n(98568),f=n(20265),C=n(24582),h=n(2756),M=n(52149),y=n(50253),Z=n(69093),A=n(53141),e=n(76442),O=n(54244),T=n(95758),b=n(9292);function P(t,a){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.qZA()),2&t){var i=e.oxw().$implicit;e.xp6(2),e.Oqu(i.countAmount.type),e.xp6(2),e.AsE("",i.countAmount.average,"\xa0",i.countAmount.units,"\xa0(average)")}}function q(t,a){if(1&t){var i=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"a",3),e.NdJ("click",function(){var u=e.CHM(i).$implicit;return e.oxw().openImageModal(u)}),e._UZ(3,"img",4),e.qZA(),e.qZA(),e.TgZ(4,"div",5),e.TgZ(5,"div",6),e.TgZ(6,"div",7),e.TgZ(7,"div",8),e._uU(8,"Molecular Formula:"),e.qZA(),e._UZ(9,"div",9),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"div",8),e._uU(12,"Molecular Weight:"),e.qZA(),e.TgZ(13,"div",10),e._uU(14),e.ALo(15,"number"),e.qZA(),e.qZA(),e.TgZ(16,"div",7),e.TgZ(17,"div",8),e._uU(18,"Charge:"),e.qZA(),e.TgZ(19,"div",10),e._uU(20),e.qZA(),e.qZA(),e.TgZ(21,"div",7),e.TgZ(22,"div",8),e._uU(23,"Count:"),e.qZA(),e.TgZ(24,"div",10),e.YNc(25,P,5,3,"div",11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",6),e.TgZ(27,"div",7),e.TgZ(28,"div",8),e._uU(29,"Stereochemistry:"),e.qZA(),e.TgZ(30,"div",10),e._uU(31),e.qZA(),e.qZA(),e.TgZ(32,"div",7),e.TgZ(33,"div",8),e._uU(34,"Additional Stereochemistry:"),e.qZA(),e.TgZ(35,"div",10),e._uU(36),e.qZA(),e.qZA(),e.TgZ(37,"div",7),e.TgZ(38,"div",8),e._uU(39,"Defined Stereocenters:"),e.qZA(),e.TgZ(40,"div",10),e._uU(41),e.qZA(),e.qZA(),e.TgZ(42,"div",7),e.TgZ(43,"div",8),e._uU(44,"E/Z Centers:"),e.qZA(),e.TgZ(45,"div",10),e._uU(46),e.qZA(),e.qZA(),e.TgZ(47,"div",7),e.TgZ(48,"div",8),e._uU(49,"Optical Activity:"),e.qZA(),e.TgZ(50,"div",10),e._uU(51),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){var s=a.$implicit,o=e.oxw();e.xp6(3),e.Q6J("entityId",s.uuid)("stagingId",o.stagingId),e.xp6(6),e.Q6J("innerHTML",s.formula,e.oJD),e.xp6(5),e.Oqu(e.xi3(15,12,s.mwt,o.rounding)),e.xp6(6),e.Oqu(s.charge),e.xp6(5),e.Q6J("ngIf",s.countAmount),e.xp6(6),e.Oqu(s.stereochemistry),e.xp6(5),e.Oqu(s.atropisomerism),e.xp6(5),e.AsE("",s.stereoCenters,"/",s.definedStereo,""),e.xp6(5),e.Oqu(s.ezCenters),e.xp6(5),e.Oqu(s.opticalActivity)}}var U=function(){var t=function(a){function i(s,o,l,r,u){var c;return(0,v.Z)(this,i),c=function S(t,a,i){return a=(0,f.Z)(a),(0,x.Z)(t,(0,p.Z)()?Reflect.construct(a,i||[],(0,f.Z)(t).constructor):a.apply(t,i))}(this,i),c.utilService=s,c.overlayContainerService=o,c.structureService=l,c.dialog=r,c.configService=u,c.moieties=[],c.substanceUpdated=new y.x,c.rounding="1.0-2",c.stagingId=null,c}return(0,C.Z)(i,a),(0,m.Z)(i,[{key:"ngOnInit",value:function(){var o=this;this.substanceUpdated.subscribe(function(l){o.substance=l,o.substance.$$source&&"staging"===o.substance.$$source&&(o.stagingId=o.substance.uuid),null!=o.substance&&null!=o.substance.moieties&&(o.moieties=JSON.parse(JSON.stringify(o.substance.moieties)),o.moieties.forEach(function(r){r.formula=o.structureService.formatFormula(r)})),o.countUpdate.emit(o.moieties.length)}),this.overlayContainer=this.overlayContainerService.getContainerElement(),this.configService.configData&&this.configService.configData.molWeightRounding&&(this.rounding="1.0-"+this.configService.configData.molWeightRounding)}},{key:"openImageModal",value:function(o){var l=this,r=this.dialog.open(Z.oV,{height:"90%",width:"650px",panelClass:"structure-image-panel",data:{structure:o.uuid}});this.overlayContainer.style.zIndex="1002";var u=r.afterClosed().subscribe(function(){l.overlayContainer.style.zIndex=null,u.unsubscribe()},function(){l.overlayContainer.style.zIndex=null,u.unsubscribe()})}}]),i}(h.B);return t.\u0275fac=function(i){return new(i||t)(e.Y36(M.F),e.Y36(O.Xj),e.Y36(Z.De),e.Y36(T.uw),e.Y36(A.E))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-substance-moieties"]],features:[e.qOj],decls:1,vars:1,consts:[["class","moiety",4,"ngFor","ngForOf"],[1,"moiety"],[1,"moiety-image"],["tabindex","0","role","link",1,"zoom",3,"click"],["appSubstanceImage","","stereo","true",1,"structure-image",3,"entityId","stagingId"],[1,"moiety-details-container"],[1,"moiety-details"],[1,"name-value"],[1,"name"],[1,"value",3,"innerHTML"],[1,"value"],[4,"ngIf"]],template:function(i,s){1&i&&e.YNc(0,q,52,15,"div",0),2&i&&e.Q6J("ngForOf",s.moieties)},directives:[d.sg,b.m,d.O5],pipes:[d.JJ],styles:[".structure-image[_ngcontent-%COMP%]{width:100%;height:auto}.moiety[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:20px 0;-ms-flex-align:center;align-items:center}.moiety[_ngcontent-%COMP%]:not(:last-child){border-bottom:solid 1px var(--box-shadow-color-3)}.zoom[_ngcontent-%COMP%]:hover{cursor:zoom-in}.moiety-image[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:33.333333%;flex-basis:33.333333%;-ms-flex-negative:0;flex-shrink:0}.moiety-details-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-positive:2;flex-grow:2;-ms-flex-preferred-size:66.6%;flex-basis:66.6%;-ms-flex-negative:0;flex-shrink:0}.moiety-details-container[_ngcontent-%COMP%]   .moiety-details[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:50%;flex-basis:50%;-ms-flex-negative:0;flex-shrink:0}.moiety-details-container[_ngcontent-%COMP%]   .moiety-details[_ngcontent-%COMP%]:first-child{padding-right:5px}.moiety-details-container[_ngcontent-%COMP%]   .moiety-details[_ngcontent-%COMP%]:last-child{padding-left:5px}@media (max-width: 900px){.moiety[_ngcontent-%COMP%]{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}.moiety[_ngcontent-%COMP%]   .moiety-image[_ngcontent-%COMP%]{width:100%}.moiety[_ngcontent-%COMP%]   .moiety-image[_ngcontent-%COMP%]{-ms-flex-order:2;order:2;text-align:center}.moiety[_ngcontent-%COMP%]   .moiety-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:400px}.moiety[_ngcontent-%COMP%]   .moiety-details-container[_ngcontent-%COMP%]{-ms-flex-order:1;order:1;width:100%}}@media (max-width: 615px){.moiety[_ngcontent-%COMP%]   .moiety-details-container[_ngcontent-%COMP%]{-ms-flex-direction:column;flex-direction:column}.moiety[_ngcontent-%COMP%]   .moiety-details-container[_ngcontent-%COMP%]   .moiety-details[_ngcontent-%COMP%]:first-child{margin-bottom:20px}}"]}),t}(),I=n(64061),z=n(24054),J=function(){var t=(0,m.Z)(function a(){(0,v.Z)(this,a)});return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,I.o.forChild(U),z.f]]}),t}()}}]);
//# sourceMappingURL=1282.297089f9e86b2f78.js.map