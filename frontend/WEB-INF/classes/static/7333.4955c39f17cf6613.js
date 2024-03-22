"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[7333],{27333:function(ut,f,i){i.r(f),i.d(f,{SubstanceFormStructureModule:function(){return it}});var h=i(48047),S=i(78069),d=i(36362),T=i(10853),M=i(98568),b=i(20265),F=i(24582),I=i(79223),O=i(33567),U=i(1790),C=i(69093),A=i(45592),_=i(40104),k=i(99146),E=i(12570),z=i(34470),N=i(27336),t=i(76442),J=i(83448),P=i(95758),L=i(54244),R=i(98002),D=i(82835),y=i(87317),x=i(65590),g=i(82796),Y=i(17537);function Q(s,a){if(1&s){var o=t.EpF();t.TgZ(0,"div",6),t._UZ(1,"span",7),t.TgZ(2,"span",8),t.TgZ(3,"button",9),t.NdJ("click",function(){return t.CHM(o),t.oxw().openStructureImportDialog()}),t._UZ(4,"mat-icon",10),t._uU(5," Import "),t.qZA(),t.TgZ(6,"button",11),t.NdJ("click",function(){return t.CHM(o),t.oxw().openStructureExportDialog()}),t._UZ(7,"mat-icon",12),t._uU(8," Export "),t.qZA(),t.TgZ(9,"button",13),t.NdJ("click",function(){return t.CHM(o),t.oxw().openStructureImageModal()}),t._UZ(10,"mat-icon",14),t._uU(11," View stereochemistry "),t.qZA(),t.qZA(),t.qZA()}}function w(s,a){if(1&s){var o=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"span",15),t.TgZ(2,"button",16),t.NdJ("click",function(){return t.CHM(o),t.oxw().duplicateCheck()}),t._UZ(3,"mat-icon",17),t._uU(4," Check for duplicates "),t.qZA(),t.qZA(),t._UZ(5,"span",7),t.TgZ(6,"span",8),t.TgZ(7,"button",18),t._UZ(8,"mat-icon",10),t._uU(9," Import \u25bc "),t.qZA(),t.TgZ(10,"button",11),t.NdJ("click",function(){return t.CHM(o),t.oxw().openStructureExportDialog()}),t._UZ(11,"mat-icon",12),t._uU(12," Export "),t.qZA(),t.TgZ(13,"button",13),t.NdJ("click",function(){return t.CHM(o),t.oxw().openStructureImageModal()}),t._UZ(14,"mat-icon",14),t._uU(15," View stereochemistry "),t.qZA(),t.qZA(),t.TgZ(16,"mat-menu",null,19),t.TgZ(18,"button",20),t.NdJ("click",function(){return t.CHM(o),t.oxw().openStructureImportDialog()}),t._uU(19," Import Structure "),t.qZA(),t.TgZ(20,"button",20),t.NdJ("click",function(){return t.CHM(o),t.oxw().openNameResolverDialog()}),t._uU(21," Resolve name "),t.qZA(),t.qZA(),t.qZA()}if(2&s){var r=t.MAs(17);t.xp6(7),t.Q6J("matMenuTriggerFor",r)}}function j(s,a){if(1&s&&(t.TgZ(0,"span"),t._UZ(1,"br"),t.TgZ(2,"a",29),t._uU(3),t.qZA(),t.qZA()),2&s){var o=a.$implicit,r=t.oxw(3);t.xp6(2),t.Q6J("href",r.fixLink(o.href),t.LSH),t.xp6(1),t.hij(" ",o.text," ")}}function V(s,a){if(1&s){var o=t.EpF();t.TgZ(0,"div",23),t.TgZ(1,"div",24),t._uU(2),t.qZA(),t.TgZ(3,"div",25),t._uU(4),t.YNc(5,j,4,2,"span",26),t.qZA(),t.TgZ(6,"button",27),t.NdJ("click",function(){var u=t.CHM(o).index;return t.oxw(2).dismissErrorMessage(u)}),t._UZ(7,"mat-icon",28),t.qZA(),t.qZA()}if(2&s){var r=a.$implicit;t.xp6(1),t.Q6J("ngClass",r.messageType),t.xp6(1),t.Oqu(r.messageType),t.xp6(2),t.Oqu(r.message),t.xp6(1),t.Q6J("ngForOf",r.links)}}function B(s,a){if(1&s&&(t.TgZ(0,"div",21),t.YNc(1,V,8,4,"div",22),t.qZA()),2&s){var o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.structureErrorsArray)}}function W(s,a){if(1&s){var o=t.EpF();t.TgZ(0,"div",30),t.TgZ(1,"button",31),t.NdJ("click",function(){return t.CHM(o),t.oxw().generateSRU()}),t._uU(2,"Generate SRUs"),t.qZA(),t.qZA()}}var X=function(a,o){return{"messages-container":!0,collapsed:a,expanded:o}},$=function(){var s=function(a){function o(r,e,n,u,l,p,v,m,ot,st){var c;return(0,S.Z)(this,o),c=function H(s,a,o){return a=(0,b.Z)(a),(0,T.Z)(s,(0,M.Z)()?Reflect.construct(a,o||[],(0,b.Z)(s).constructor):a.apply(s,o))}(this,o),c.substanceFormService=r,c.substanceFormStructureService=e,c.structureService=n,c.loadingService=u,c.dialog=l,c.overlayContainerService=p,c.gaService=v,c.substanceService=m,c.substanceFormStructuralUnitsService=ot,c.activatedRoute=st,c.isInitializing=!0,c.subscriptions=[],c}return(0,F.Z)(o,a),(0,h.Z)(o,[{key:"ngOnInit",value:function(){var e=this;this.overlayContainer=this.overlayContainerService.getContainerElement();var n=this.substanceFormService.definition.subscribe(function(l){if(e.substanceType=l.substanceClass,"polymer"===e.substanceType){e.menuLabelUpdate.emit("Idealized Structure");var p=e.substanceFormStructureService.substanceIdealizedStructure.subscribe(function(m){m&&(e.structure=m),e.loadStructure()});e.subscriptions.push(p)}else{e.menuLabelUpdate.emit("Structure");var v=e.substanceFormStructureService.substanceStructure.subscribe(function(m){e.structure=m,e.loadStructure()});e.subscriptions.push(v)}});this.subscriptions.push(n),this.substanceFormService.resolvedMol.subscribe(function(l){null!=l&&""!==l&&(e.updateStructureForm(l),e.structureEditor.setMolecule(l))})}},{key:"ngAfterViewInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){e.unsubscribe()})}},{key:"editorOnLoad",value:function(e){var n=this;this.loadingService.setLoading(!1),this.structureEditor=e,this.loadStructure(),this.structureEditor.structureUpdated().subscribe(function(u){n.updateStructureForm(u),n.smiles=n.structure&&n.structure.smiles||null,n.mol=n.structure&&n.structure.molfile||null}),this.isInitializing=!1}},{key:"startInitializing",value:function(){this.isInitializing=!0}},{key:"endInitializing",value:function(){this.isInitializing=!1}},{key:"loadStructure",value:function(){var e=this;this.structure&&this.structureEditor&&this.structure.molfile&&(this.isInitializing=!0,this.structureEditor.setMolecule(this.structure.molfile),this.smiles=this.structure.smiles,this.mol=this.structure.molfile,this.activatedRoute&&this.activatedRoute.snapshot.queryParams&&this.activatedRoute.snapshot.queryParams.importStructure&&setTimeout(function(){e.updateStructureForm(e.structure.molfile)}),this.isInitializing=!1)}},{key:"molvecUpdate",value:function(e){this.updateStructureForm(e),this.structureEditor.setMolecule(e)}},{key:"updateStructureForm",value:function(e){var n=this;this.isInitializing||(this.structure.molfile=e,this.structureService.interpretStructure(e).subscribe(function(u){n.processStructurePostResponse(u)}))}},{key:"processStructurePostResponse",value:function(e){var n=this;e&&e.structure&&("polymer"===this.substanceType||this.structure.hash!==e.structure.hash||this.structure.charge!==e.structure.charge)&&(this.smiles=e.structure.smiles,this.mol=e.structure.molfile,Object.keys(e.structure).forEach(function(u){"molfile"!==u&&(n.structure[u]=e.structure[u])}),this.structure.uuid="",this.substanceFormStructureService.updateMoieties(e.moieties),"polymer"!==this.substanceType&&e.moieties&&e.moieties.length>1&&(clearTimeout(this.userMessageTimer),this.userMessage="Certain moieties may have been updated and/or deleted. Please check that the changes are correct.",this.userMessageTimer=setTimeout(function(){n.userMessage=null},2e4)))}},{key:"openStructureImportDialog",value:function(){var e=this;this.gaService.sendEvent("structureForm","button:import","import structure");var n=this.dialog.open(C.Nt,{height:"auto",width:"650px",data:{}});this.overlayContainer.style.zIndex="1002",n.afterClosed().subscribe(function(u){e.overlayContainer.style.zIndex=null,null!=u&&(u&&u.structure&&u.structure.molfile&&e.structureEditor.setMolecule(u.structure.molfile),e.processStructurePostResponse(u))},function(){})}},{key:"generateSRU",value:function(){var e=this;this.loadingService.setLoading(!0),this.structureService.interpretStructure(this.structure.molfile).subscribe(function(n){n.structuralUnits&&n.structuralUnits.length>0&&e.substanceFormStructuralUnitsService.updateSRUs(n.structuralUnits),e.loadingService.setLoading(!1)},function(n){e.loadingService.setLoading(!1)})}},{key:"openStructureExportDialog",value:function(){var e=this,n=this.dialog.open(A.g,{height:"auto",width:"650px",data:{molfile:this.mol,smiles:this.smiles,type:this.substanceType}});this.overlayContainer.style.zIndex="1002",n.afterClosed().subscribe(function(){e.overlayContainer.style.zIndex=null},function(){e.overlayContainer.style.zIndex=null})}},{key:"openNameResolverDialog",value:function(){var e=this;this.gaService.sendEvent("structureForm","button:resolveName","resolve name");var n=this.dialog.open(k.a,{height:"auto",width:"800px",data:{}});this.overlayContainer.style.zIndex="1002",n.afterClosed().subscribe(function(u){e.overlayContainer.style.zIndex=null,null!=u&&""!==u&&(e.updateStructureForm(u),e.structureEditor.setMolecule(u))},function(){})}},{key:"openStructureImageModal",value:function(){var e=this,n=this.dialog.open(C.oV,{height:"90%",width:"650px",panelClass:"structure-image-panel",data:{structure:this.structure.id}});this.overlayContainer.style.zIndex="1002",n.afterClosed().subscribe(function(){e.overlayContainer.style.zIndex=null},function(){e.overlayContainer.style.zIndex=null})}},{key:"duplicateCheck",value:function(){var e=this;this.structureErrorsArray=[],this.substanceFormService.structureDuplicateCheck().subscribe(function(n){n.forEach(function(u){u.messageType&&"INFO"!==u.messageType&&e.structureErrorsArray.push(u)})})}},{key:"dismissErrorMessage",value:function(e){this.structureErrorsArray.splice(e,1)}},{key:"fixLink",value:function(e){return this.substanceService.oldLinkFix(e)}}])}(I.o);return s.\u0275fac=function(o){return new(o||s)(t.Y36(O.B),t.Y36(N.p),t.Y36(U.D),t.Y36(J.b),t.Y36(P.uw),t.Y36(L.Xj),t.Y36(_.$),t.Y36(E.d),t.Y36(z.Z),t.Y36(R.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-substance-form-structure-card"]],features:[t.qOj],decls:11,vars:11,consts:[[2,"z-index","9999",3,"loadedMolfile","editorOnLoad"],[3,"ngClass"],["class","button-row",4,"ngIf"],["class","submission-messages",4,"ngIf"],["showSettings","true",3,"structure","type"],["class","button-container",4,"ngIf"],[1,"button-row"],[1,"middle-fill"],[1,"right-buttons"],["mat-button","","color","primary","matTooltip","Import options",3,"click"],["svgIcon","cloud_upload"],["mat-button","","color","primary","matTooltip","export structure",3,"click"],["svgIcon","get_app"],["mat-button","","color","primary","matTooltip","preview structure stereochemistry",3,"click"],["svgIcon","zoom_in"],[1,"left-buttons"],["matTooltip","check the database for duplicate structures","mat-button","","color","primary",1,"dupe-check",3,"click"],["svgIcon","search"],["mat-button","","color","primary","matTooltip","Import options",3,"matMenuTriggerFor"],["importMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"submission-messages"],["class","validation-message",4,"ngFor","ngForOf"],[1,"validation-message"],[1,"message-type",3,"ngClass"],[1,"message"],[4,"ngFor","ngForOf"],["mat-icon-button","","matTooltip","Dismiss",3,"click"],["svgIcon","close"],["target","_blank",1,"internal-link",3,"href"],[1,"button-container"],["color","primary","matTooltip","generate structural units for this structure",1,"mat-flat-button","mat-primary",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div"),t.TgZ(2,"div"),t.TgZ(3,"app-structure-editor",0),t.NdJ("loadedMolfile",function(n){return r.molvecUpdate(n)})("editorOnLoad",function(n){return r.editorOnLoad(n)}),t.qZA(),t.qZA(),t.TgZ(4,"div",1),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,Q,12,0,"div",2),t.YNc(7,w,22,1,"div",2),t.YNc(8,B,2,1,"div",3),t._UZ(9,"app-structure-form",4),t.YNc(10,W,3,0,"div",5),t.qZA()),2&o&&(t.xp6(4),t.Q6J("ngClass",t.WLB(8,X,!r.userMessage,r.userMessage)),t.xp6(1),t.hij(" ",r.userMessage," "),t.xp6(1),t.Q6J("ngIf",r.structure&&"polymer"===r.substanceType),t.xp6(1),t.Q6J("ngIf",r.structure&&"structure"===r.substanceType),t.xp6(1),t.Q6J("ngIf",r.structureErrorsArray&&r.structureErrorsArray.length>0),t.xp6(1),t.Q6J("structure",r.structure)("type",r.substanceType),t.xp6(1),t.Q6J("ngIf","polymer"===r.substanceType))},directives:[D.K,d.mk,d.O5,y.lW,x.Hw,g.p6,g.VK,g.OP,d.sg,Y.h],styles:[".messages-container[_ngcontent-%COMP%]{text-align:center;font-weight:500;font-size:1.05em;transition:all .5s ease-out;overflow:hidden}.messages-container.collapsed[_ngcontent-%COMP%]{max-height:0}.messages-container.expanded[_ngcontent-%COMP%]{max-height:500px;padding:10px 0 5px}.button-container[_ngcontent-%COMP%]{margin-top:-50px}.button-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin-bottom:10px}.button-row[_ngcontent-%COMP%]   .right-buttons[_ngcontent-%COMP%]{-ms-flex-line-pack:end;align-content:flex-end;display:-ms-flexbox;display:flex;margin-right:-8px}.button-row[_ngcontent-%COMP%]   .left-buttons[_ngcontent-%COMP%]{-ms-flex-line-pack:start;align-content:flex-start;display:-ms-flexbox;display:flex}.SUCCESS[_ngcontent-%COMP%]{color:var(--success-green-color);background-color:var(--success-green-bg-color)}.submission-messages[_ngcontent-%COMP%]{overflow:hidden;height:auto;transition:all .5s ease-out;max-width:1028px;width:100%;background-color:var(--regular-white-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-height:500px;overflow-y:auto;padding:10px}.submission-messages[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;padding:5px 0;-ms-flex-align:center;align-items:center}.submission-messages[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%]   .message-type[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:500;margin-right:20px;padding:10px;border-radius:3px}.submission-messages[_ngcontent-%COMP%]   .dismiss-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.WARNING[_ngcontent-%COMP%]{color:var(--warning-dialog-color);background-color:var(--warning-dialog-bg-color)}.ERROR[_ngcontent-%COMP%]{color:var(--error-dialog-color);background-color:var(--error-dialog-bg-color)}.dupe-check[_ngcontent-%COMP%]{margin-bottom:5px}.internal-link[_ngcontent-%COMP%]{color:var(--link-primary-color)}.z-index[_ngcontent-%COMP%]{z-index:9999!important}"]}),s}(),G=i(64061),K=i(56473),q=i(44770),tt=i(43365),Z=i(90587),et=i(91434),rt=i(7168),nt=i(96769),it=function(){var s=(0,h.Z)(function a(){(0,S.Z)(this,a)});return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[d.ez,G.o.forChild($),K.h,q.lN,tt.c,Z.UX,Z.u5,et.LD,rt.O,nt.O,g.Tx,x.Ps,y.ot]]}),s}()}}]);
//# sourceMappingURL=7333.4955c39f17cf6613.js.map