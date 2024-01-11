"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[4952],{14952:function(R,v,a){a.r(v),a.d(v,{SubstanceFormStructurallyDiverseSourceModule:function(){return k}});var f=a(48047),p=a(78069),m=a(36362),S=a(75143),g=a(44770),D=a(43365),d=a(90587),C=a(91434),y=a(7168),T=a(96769),M=a(3311),b=a(80206),x=a(98568),h=a(20265),Z=a(24582),O=a(40104),A=a(18291),F=a(79223),P=a(88619),e=a(76442),$=a(16667),o=a(68390),E=a(14900);function U(i,u){if(1&i){var l=e.EpF();e.TgZ(0,"app-cv-input",13),e.NdJ("valueChange",function(n){return e.CHM(l),e.oxw(2).update("state",n)}),e.qZA()}if(2&i){var r=e.oxw(2);e.Q6J("model",r.structurallyDiverse.sourceMaterialState)}}function I(i,u){if(1&i){var l=e.EpF();e.TgZ(0,"div",14),e.TgZ(1,"div"),e._uU(2,"Changes made to the now hidden form will still be submitted "),e.TgZ(3,"button",15),e.NdJ("click",function(){return e.CHM(l),e.oxw(2).clean()}),e._uU(4,"clean hidden fields"),e.qZA(),e.qZA(),e.qZA()}}function J(i,u){if(1&i){var l=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"app-cv-input",3),e.NdJ("valueChange",function(n){return e.CHM(l),e.oxw().update("class",n)}),e.qZA(),e.TgZ(3,"app-cv-input",4),e.NdJ("valueChange",function(n){return e.CHM(l),e.oxw().update("type",n)}),e.qZA(),e.YNc(4,U,1,1,"app-cv-input",5),e.TgZ(5,"div",6),e.TgZ(6,"mat-radio-group",7),e.NdJ("change",function(n){return e.CHM(l),e.oxw().updateType(n)}),e.TgZ(7,"mat-radio-button",8),e._uU(8,"Whole"),e.qZA(),e.TgZ(9,"mat-radio-button",9),e._uU(10,"Part/ Fraction"),e.qZA(),e.TgZ(11,"mat-radio-button",10),e._uU(12,"Full Fields"),e.qZA(),e.qZA(),e.qZA(),e._UZ(13,"div"),e.qZA(),e.YNc(14,I,5,0,"div",11),e.TgZ(15,"div",2),e._UZ(16,"app-audit-info",12),e.qZA(),e.qZA()}if(2&i){var r=e.oxw();e.xp6(2),e.Q6J("model",r.structurallyDiverse.sourceMaterialClass),e.xp6(1),e.Q6J("model",r.structurallyDiverse.sourceMaterialType),e.xp6(1),e.Q6J("ngIf","ORGANISM"===r.structurallyDiverse.sourceMaterialClass),e.xp6(3),e.Q6J("checked",r.part&&"whole"===r.part),e.xp6(2),e.Q6J("checked",r.part&&"fraction"===r.part),e.xp6(2),e.Q6J("checked",r.part&&"full_fields"===r.part),e.xp6(3),e.Q6J("ngIf",r.confirm),e.xp6(2),e.Q6J("source",r.structurallyDiverse)}}var L=function(){var i=function(u){function l(r,t,n){var s;return(0,p.Z)(this,l),s=function N(i,u,l){return u=(0,h.Z)(u),(0,b.Z)(i,(0,x.Z)()?Reflect.construct(u,l||[],(0,h.Z)(i).constructor):u.apply(i,l))}(this,l),s.substanceFormStructurallyDiverseService=r,s.gaService=t,s.cvService=n,s.confirm=!1,s.subscriptions=[],s.analyticsEventCategory="substance form Source Material",s}return(0,Z.Z)(l,u),(0,f.Z)(l,[{key:"ngOnInit",value:function(){var t=this;this.menuLabelUpdate.emit("Source Material");var n=this.substanceFormStructurallyDiverseService.substanceStructurallyDiverse.subscribe(function(s){if(t.structurallyDiverse=s,!t.structurallyDiverse.$$diverseType)if(1===t.structurallyDiverse.part.length&&"WHOLE"===t.structurallyDiverse.part[0].toUpperCase())!1===t.checkParts()?(t.structurallyDiverse.$$diverseType="full_fields",t.part="full_fields"):(t.structurallyDiverse.$$diverseType="whole",t.part="whole");else{!1===t.checkWhole()?(t.structurallyDiverse.$$diverseType="full_fields",t.part="full_fields"):(t.structurallyDiverse.$$diverseType="fraction",t.part="fraction");for(var c=0;c<t.structurallyDiverse.part.length;c++)t.structurallyDiverse.part[c].toUpperCase()}});this.subscriptions.push(n)}},{key:"ngAfterViewInit",value:function(){}},{key:"updateAccess",value:function(t){this.structurallyDiverse.access=t}},{key:"update",value:function(t,n){"type"===t?this.structurallyDiverse.sourceMaterialType=n:"class"===t?(this.structurallyDiverse.sourceMaterialClass=n,this.substanceFormStructurallyDiverseService.emitStructurallyDiverseUpdate()):"state"===t&&(this.structurallyDiverse.sourceMaterialState=n)}},{key:"checkParts",value:function(){return!(this.structurallyDiverse.partLocation&&null!==this.structurallyDiverse.partLocation&&""!==this.structurallyDiverse.partLocation||this.structurallyDiverse.fractionName&&null!==this.structurallyDiverse.fractionName&&""!==this.structurallyDiverse.fractionName||this.structurallyDiverse.fractionMaterialType&&null!==this.structurallyDiverse.fractionMaterialType&&""!==this.structurallyDiverse.fractionMaterialType)}},{key:"checkWhole",value:function(){var t=this,s=!0;return["organismFamily","organismGenus","organismSpecies","organismAuthor","infraSpecificType","infraSpecificName","hybridSpeciesMaternalOrganism","hybridSpeciesPaternalOrganism"].forEach(function(c){t.structurallyDiverse[c]&&null!==t.structurallyDiverse[c]&&""!==t.structurallyDiverse[c]&&t.structurallyDiverse[c]!=={}&&(s=!1)}),s}},{key:"updateType",value:function(t){this.confirm=!1,t.value&&""!==t.value&&null!==t.value&&(this.part=t.value),"whole"===t.value?(this.confirm=!this.checkParts(),"fraction"===this.structurallyDiverse.$$diverseType&&(this.structurallyDiverse.$$storedPart=this.structurallyDiverse.part),this.structurallyDiverse.part=["WHOLE"]):"full_fields"===t.value?this.structurallyDiverse.$$diverseType=t.value:(this.confirm=!this.checkWhole(),this.structurallyDiverse.$$diverseType=t.value,this.structurallyDiverse.$$storedPart&&(this.structurallyDiverse.part=this.structurallyDiverse.$$storedPart)),this.structurallyDiverse.$$diverseType=t.value,this.substanceFormStructurallyDiverseService.emitStructurallyDiverseUpdate()}},{key:"clean",value:function(){var t=this;"fraction"===this.structurallyDiverse.$$diverseType?["organismFamily","organismGenus","organismSpecies","organismAuthor","infraSpecificType","infraSpecificName","hybridSpeciesMaternalOrganism","hybridSpeciesPaternalOrganism"].forEach(function(s){t.structurallyDiverse[s]&&null!==t.structurallyDiverse[s]&&""!==t.structurallyDiverse[s]&&delete t.structurallyDiverse[s]}):(this.structurallyDiverse.partLocation&&null!==this.structurallyDiverse.partLocation&&delete this.structurallyDiverse.partLocation,this.structurallyDiverse.fractionName&&null!==this.structurallyDiverse.fractionName&&delete this.structurallyDiverse.fractionName,this.structurallyDiverse.fractionMaterialType&&null!==this.structurallyDiverse.fractionMaterialType&&delete this.structurallyDiverse.fractionMaterialType,this.structurallyDiverse.parentSubstance&&null!==this.structurallyDiverse.parentSubstance&&delete this.structurallyDiverse.fractionMaterialType),this.confirm=!1}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(t){t.unsubscribe()})}}]),l}(F.o);return i.\u0275fac=function(l){return new(l||i)(e.Y36(P.r),e.Y36(O.$),e.Y36(A.I))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-substance-form-structurally-diverse-source"]],features:[e.qOj],decls:1,vars:1,consts:[["class","source-container",4,"ngIf"],[1,"source-container"],[1,"form-row"],["domain","SOURCE_MATERIAL_CLASS","title","Source Material Class",1,"cv-input",3,"model","valueChange"],["domain","SOURCE_MATERIAL_TYPE","title","Source Material Type",1,"cv-input",3,"model","valueChange"],["class","cv-input","domain","SOURCE_MATERIAL_STATE","title","Source Material State",3,"model","valueChange",4,"ngIf"],[1,"column-radio"],[1,"type",3,"change"],["value","whole",3,"checked"],["value","fraction",3,"checked"],["value","full_fields",3,"checked"],["class","form-row-alt",4,"ngIf"],[3,"source"],["domain","SOURCE_MATERIAL_STATE","title","Source Material State",1,"cv-input",3,"model","valueChange"],[1,"form-row-alt"],[1,"mat-button","mat-primary","mat-flat-button",3,"click"]],template:function(l,r){1&l&&e.YNc(0,J,17,8,"div",0),2&l&&e.Q6J("ngIf",r.structurallyDiverse)},directives:[m.O5,$.S,o.VQ,o.U0,E.n],styles:[".source-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative}.form-row-alt[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding:10px;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%]{padding-bottom:18px}.form-row[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]{padding-right:15px}.form-row[_ngcontent-%COMP%]   .cv-input[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.column-radio[_ngcontent-%COMP%]     .mat-radio-label{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.column-radio[_ngcontent-%COMP%]     .mat-radio-label-content{padding-left:0;font-size:11px;padding-bottom:4px;color:var(--dark-label-color);font-weight:400;font-family:Roboto,Helvetica Neue,sans-serif}  .related-substance img{max-width:125px!important;margin:auto}.type[_ngcontent-%COMP%]     mat-radio-button{padding-right:15px}"]}),i}(),k=(a(64061),function(){var i=(0,f.Z)(function u(){(0,p.Z)(this,u)});return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,S.o0.forChild(L),g.lN,D.c,d.UX,d.u5,C.LD,y.O,T.O,M.ZQ,o.Fk,y.O]]}),i}())}}]);
//# sourceMappingURL=4952.529eebf4c3664708.js.map