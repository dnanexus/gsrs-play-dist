"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[6558],{16558:function(Te,C,s){s.r(C),s.d(C,{SubstanceFormDefinitionModule:function(){return he}});var S=s(1884),_=s(39117),p=s(36362),E=s(46751),O=s(56101),e=s(86613),M=s(79223),N=s(42827),P=s(12570),U=s(33567),y=s(75939),f=s(90587),L=s(59295),J=s(53141),H=s(54244),h=s(98002),g=s(44770),x=s(91434),Q=s(1130),Y=s(24459),Z=s(61534),w=s(84577),A=s(40089),D=s(65590),m=s(81196),T=s(43188),R=s(48302),k=s(14900),B=s(13821),j=["tagsInput"];function V(n,c){if(1&n&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&n){var a=e.oxw(2);e.xp6(1),e.Oqu(a.definition.approvalID)}}function z(n,c){if(1&n&&(e.TgZ(0,"div",24),e.TgZ(1,"div"),e._uU(2),e.ALo(3,"elementLabel"),e._UZ(4,"span",25),e.qZA(),e.qZA()),2&n){var a=e.oxw(2);e.xp6(2),e.hij("",e.xi3(3,2,"displayNameTitle","substance_names_name"),": "),e.xp6(2),e.Q6J("innerHTML",a.definition._nameHTML?a.definition._nameHTML:a.definition._name,e.oJD)}}function q(n,c){if(1&n&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&n){var a=c.$implicit;e.Q6J("value",a.value),e.xp6(1),e.hij(" ",a.display," ")}}function G(n,c){if(1&n){var a=e.EpF();e.TgZ(0,"mat-form-field",26),e.TgZ(1,"mat-label"),e._uU(2,"Definition Type"),e.qZA(),e.TgZ(3,"mat-select",27),e.NdJ("ngModelChange",function(t){return e.CHM(a),e.oxw(2).definition.definitionType=t})("selectionChange",function(t){return e.CHM(a),e.oxw(2).updateDefinitionType(t)}),e.YNc(4,q,2,2,"mat-option",20),e.qZA(),e.qZA()}if(2&n){var u=e.oxw(2);e.xp6(3),e.Q6J("ngModel",u.definition.definitionType),e.xp6(1),e.Q6J("ngForOf",u.definitionTypes)}}function K(n,c){if(1&n){var a=e.EpF();e.TgZ(0,"div",29),e.TgZ(1,"app-substance-selector",30),e.NdJ("selectionUpdated",function(t){return e.CHM(a),e.oxw(2).primartySubstanceUpdated(t)}),e.qZA(),e.qZA()}if(2&n){var u=e.oxw(2);e.xp6(1),e.Q6J("subuuid",u.primarySubUuid)}}function X(n,c){if(1&n&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&n){var a=c.$implicit;e.Q6J("value",a.value),e.xp6(1),e.hij(" ",a.display," ")}}function $(n,c){if(1&n){var a=e.EpF();e.TgZ(0,"mat-form-field"),e.TgZ(1,"mat-label"),e._uU(2,"Definition Level"),e.qZA(),e.TgZ(3,"mat-select",31),e.NdJ("ngModelChange",function(t){return e.CHM(a),e.oxw(2).definition.definitionLevel=t})("selectionChange",function(){return e.CHM(a),e.oxw(2).updateDefinition()}),e.YNc(4,X,2,2,"mat-option",20),e.qZA(),e.qZA()}if(2&n){var u=e.oxw(2);e.xp6(3),e.Q6J("ngModel",u.definition.definitionLevel),e.xp6(1),e.Q6J("ngForOf",u.definitionLevels)}}function W(n,c){if(1&n&&(e.TgZ(0,"a",36),e._uU(1," Old edit form "),e._UZ(2,"mat-icon",35),e.qZA()),2&n){var a=e.oxw(3);e.Q6J("href",a.getRedirect(),e.LSH)}}var ee=function(c){return["/substances",c]};function te(n,c){if(1&n&&(e.TgZ(0,"div",32),e.YNc(1,W,3,1,"a",33),e._UZ(2,"br"),e.TgZ(3,"a",34),e._uU(4," Details page "),e._UZ(5,"mat-icon",35),e.qZA(),e.qZA()),2&n){var a=e.oxw(2);e.xp6(1),e.Q6J("ngIf",a.oldlink),e.xp6(2),e.Q6J("routerLink",e.VKq(2,ee,a.uuid))}}function ne(n,c){if(1&n){var a=e.EpF();e.TgZ(0,"mat-chip",37),e.NdJ("removed",function(){var i=e.CHM(a).$implicit;return e.oxw(2).removeTag(i)}),e._uU(1),e._UZ(2,"mat-icon",38),e.qZA()}if(2&n){var u=c.$implicit;e.xp6(1),e.hij(" ",u," ")}}function ie(n,c){if(1&n&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&n){var a=c.$implicit;e.Q6J("value",a),e.xp6(1),e.hij(" ",a," ")}}function ae(n,c){if(1&n){var a=e.EpF();e.TgZ(0,"div",5),e.TgZ(1,"div",39),e._UZ(2,"app-domain-references",40,41),e.qZA(),e.TgZ(4,"div",42),e.TgZ(5,"app-access-manager",43),e.NdJ("accessOut",function(t){return e.CHM(a),e.oxw(2).updateDefAccess(t)}),e.qZA(),e.qZA(),e.qZA()}if(2&n){var u=e.oxw(2);e.xp6(2),e.Q6J("referencesUuids",u.definition.references),e.xp6(2),e.MGl("matTooltip","Set ",u.definition.substanceClass," access"),e.xp6(1),e.Q6J("access",u.defAccess)}}function oe(n,c){1&n&&(e.TgZ(0,"div",5),e._uU(1," Concepts have no defining information, but are collections of terms, codes and related information. "),e._UZ(2,"br"),e._uU(3," They can be promoted to a defined substance at a later time, when appropriate. "),e.qZA())}function se(n,c){if(1&n){var a=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",1),e.TgZ(2,"div"),e.TgZ(3,"span",2),e._uU(4),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.ALo(7,"titlecase"),e.qZA(),e.qZA(),e.YNc(8,V,2,1,"span",3),e.qZA(),e.YNc(9,z,5,5,"div",4),e.TgZ(10,"div",5),e.YNc(11,G,5,2,"mat-form-field",6),e.YNc(12,K,2,1,"div",7),e.YNc(13,$,5,2,"mat-form-field",0),e.TgZ(14,"div",8),e.TgZ(15,"mat-checkbox",9),e.NdJ("ngModelChange",function(o){return e.CHM(a),e.oxw().definition.deprecated=o})("change",function(){return e.CHM(a),e.oxw().updateDefinition()}),e._uU(16,"Deprecated"),e.qZA(),e.qZA(),e.TgZ(17,"div"),e.TgZ(18,"app-access-manager",10),e.NdJ("accessOut",function(o){return e.CHM(a),e.oxw().updateAccess(o)}),e.qZA(),e.qZA(),e.YNc(19,te,6,4,"div",11),e.qZA(),e.TgZ(20,"div",5),e.TgZ(21,"mat-form-field",12),e.TgZ(22,"mat-chip-list",13,14),e.YNc(24,ne,3,1,"mat-chip",15),e.TgZ(25,"input",16,17),e.NdJ("matChipInputTokenEnd",function(o){return e.CHM(a),e.oxw().tagAdded(o)})("blur",function(){return e.CHM(a),e.oxw().tagsBlurred()}),e.qZA(),e.qZA(),e.TgZ(27,"mat-autocomplete",18,19),e.NdJ("opened",function(){return e.CHM(a),e.oxw().increaseOverlayZindex()})("closed",function(){return e.CHM(a),e.oxw().tagsAutocompleteClosed()})("optionSelected",function(o){return e.CHM(a),e.oxw().selectedTag(o)}),e.YNc(29,ie,2,2,"mat-option",20),e.qZA(),e.TgZ(30,"mat-hint"),e._uU(31,"Enter new tags (and press Enter after each entry) or select from suggested tags below"),e.qZA(),e.qZA(),e.qZA(),e.YNc(32,ae,6,3,"div",21),e.YNc(33,oe,4,0,"div",21),e._UZ(34,"app-audit-info",22),e.qZA()}if(2&n){var u=e.MAs(23),r=e.MAs(28),t=e.oxw();e.xp6(4),e.Oqu(t.uuid&&!t.imported?"Editing ":"Registering New "),e.xp6(2),e.hij(" ",e.lcZ(7,19,t.substanceClass),""),e.xp6(2),e.Q6J("ngIf",t.definition.approvalID&&""!==t.definition.approvalID),e.xp6(1),e.Q6J("ngIf",t.definition._name),e.xp6(2),e.Q6J("ngIf","concept"!==t.definition.substanceClass),e.xp6(1),e.Q6J("ngIf","ALTERNATIVE"==t.definition.definitionType),e.xp6(1),e.Q6J("ngIf","concept"!==t.definition.substanceClass),e.xp6(2),e.Q6J("ngModel",t.definition.deprecated),e.xp6(3),e.Q6J("access",t.definition.access),e.xp6(1),e.Q6J("ngIf",t.uuid),e.xp6(5),e.Q6J("ngForOf",t.definition.tags),e.xp6(1),e.Q6J("formControl",t.tagsCtrl)("matAutocomplete",r)("matChipInputFor",u)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes),e.xp6(4),e.Q6J("ngForOf",t.filteredSuggestedTags),e.xp6(3),e.Q6J("ngIf","concept"!==t.definition.substanceClass),e.xp6(1),e.Q6J("ngIf","concept"===t.definition.substanceClass),e.xp6(1),e.Q6J("source",t.definition)}}var re=function(){var n=function(c){(0,E.Z)(u,c);var a=(0,O.Z)(u);function u(r,t,i,o,l,v){var d;return(0,_.Z)(this,u),(d=a.call(this)).cvService=r,d.substanceService=t,d.substanceFormService=i,d.overlayContainerService=o,d.configService=l,d.activatedRoute=v,d.separatorKeysCodes=[y.K5,y.OC],d.tagsCtrl=new f.NI({value:"",disabled:!0}),d.usedSuggestedTags=[],d.subscriptions=[],d.imported=!1,d.oldlink=!1,d}return(0,S.Z)(u,[{key:"ngOnInit",value:function(){var t=this;this.overlayContainer=this.overlayContainerService.getContainerElement(),this.menuLabelUpdate.emit("Overview"),this.getVocabularies(),this.substanceService.getTags().subscribe(function(o){t.suggestedTags=o,t.filteredSuggestedTags=o,t.crossCheckTags(),t.tagsCtrl.enable()});var i=this.tagsCtrl.valueChanges.subscribe(function(o){t.filteredSuggestedTags=t.suggestedTags.filter(function(l){return l.toLowerCase().indexOf((o||"").toLowerCase())>-1})});this.subscriptions.push(i),this.configService.configData&&this.configService.configData.showOldLinks&&(this.oldlink=!0)}},{key:"ngAfterViewInit",value:function(){var t=this,i=this.substanceFormService.definition.subscribe(function(o){t.defAccess=t.substanceFormService.getDefinitionForDefRef(),t.definition=o||{},t.crossCheckTags(),t.substanceClass="structure"===t.definition.substanceClass?"chemical":"nucleicAcid"===t.definition.substanceClass?"Nucleic Acid":"structurallyDiverse"===t.definition.substanceClass?"Structurally Diverse":"SPECIFIEDSUBSTANCE"===t.definition.substanceClass.toUpperCase()?"Specified Substance Group 1":"SPECIFIEDSUBSTANCEG3"===t.definition.substanceClass.toUpperCase()?"Specified Substance Group 3":t.definition.substanceClass,t.definition.definitionType||(t.definition.definitionType="PRIMARY"),t.definition.definitionLevel||(t.definition.definitionLevel="COMPLETE"),t.json=t.substanceFormService.getJson(),t.definition.status&&(t.status=t.definition.status),"ALTERNATIVE"===t.definition.definitionType&&t.cvService.getDomainVocabulary("RELATIONSHIP_TYPE").pipe((0,L.q)(1)).subscribe(function(d){var F=d.RELATIONSHIP_TYPE&&d.RELATIONSHIP_TYPE.dictionary["SUB_ALTERNATE->SUBSTANCE"]&&d.RELATIONSHIP_TYPE.dictionary["SUB_ALTERNATE->SUBSTANCE"].value||null;if(F&&t.definition.relationships&&t.definition.relationships.length){var I=t.definition.relationships.find(function(b){return b.type===F});null!=I&&t.substanceService.getSubstanceSummary(I.relatedSubstance.refuuid).subscribe(function(b){t.primarySubstance=b,t.primarySubUuid=t.primarySubstance.uuid})}}),t.uuid=t.substanceFormService.getUuid();var l=t.substanceFormService.getMethod(),v=t.activatedRoute.snapshot.queryParams.source||null;t.imported=!(!l||"import"!==l||v&&"draft"===v)});this.subscriptions.push(i)}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(t){t.unsubscribe()})}},{key:"getRedirect",value:function(){return this.uuid?this.substanceService.oldSiteRedirect("edit",this.substanceFormService.getUuid()):"#"}},{key:"getVocabularies",value:function(){var t=this;this.cvService.getDomainVocabulary("DEFINITION_TYPE","DEFINITION_LEVEL").subscribe(function(i){t.definitionTypes=i.DEFINITION_TYPE.list,t.definitionLevels=i.DEFINITION_LEVEL.list})}},{key:"updateDefinitionType",value:function(t){var i=this;if("PRIMARY"===this.definition.definitionType&&null!=this.definition.relationships&&this.definition.relationships.length){var o=this.definition.relationships.findIndex(function(l){return l.relatedSubstance.refuuid===i.primarySubstance.uuid});o>-1&&this.definition.relationships.splice(o,1),this.primarySubstance=null}this.substanceFormService.updateDefinition(this.definition)}},{key:"primartySubstanceUpdated",value:function(t){null!=t?this.setPrimarySubstance(t):this.removePrimarySubstance()}},{key:"setPrimarySubstance",value:function(t){var i=this;this.primarySubstance=t,this.primarySubUuid=t.uuid,(null==this.definition.relationships||"[object Array]"!==Object.prototype.toString.call(this.definition.relationships))&&(this.definition.relationships=[]),this.cvService.getDomainVocabulary("RELATIONSHIP_TYPE").subscribe(function(o){i.definition.relationships.push({relatedSubstance:{refuuid:i.primarySubstance.uuid,refPname:i.primarySubstance._name,approvalID:i.primarySubstance.approvalID,substanceClass:"reference"},access:[],type:o.RELATIONSHIP_TYPE&&o.RELATIONSHIP_TYPE.dictionary["SUB_ALTERNATE->SUBSTANCE"]&&o.RELATIONSHIP_TYPE.dictionary["SUB_ALTERNATE->SUBSTANCE"].value||""}),i.substanceFormService.updateDefinition(i.definition)})}},{key:"removePrimarySubstance",value:function(){var t=this,i=this.definition.relationships.findIndex(function(o){return o.relatedSubstance.refuuid===t.primarySubUuid});this.definition.relationships.splice(i,1),this.primarySubstance=null,this.substanceFormService.updateDefinition(this.definition)}},{key:"updateAccess",value:function(t){this.definition.access=t,this.substanceFormService.updateDefinition(this.definition)}},{key:"updateDefAccess",value:function(t){this.substanceFormService.setDefinitionFromDefRef(t),this.substanceFormService.updateDefinition(this.definition)}},{key:"updateDefinition",value:function(){this.substanceFormService.updateDefinition(this.definition)}},{key:"crossCheckTags",value:function(){var t=this;if(null!=this.definition&&null!=this.definition.tags&&this.definition.tags.length>0&&null!=this.suggestedTags){this.definition.tags.sort();var o=0;this.definition.tags.forEach(function(l){for(o=o;o<t.suggestedTags.length;o++)if(l.toLowerCase()===t.suggestedTags[o].toLowerCase()){t.suggestedTags.splice(o,1);break}})}}},{key:"tagAdded",value:function(t){if((t.value||"").trim()){var i=t.value.trim();this.addTag(i)}t.input&&(t.input.value="")}},{key:"addTag",value:function(t){this.definition.tags.push(t),this.updateDefinition();for(var i=0;i<this.suggestedTags.length;i++)if(t.toLowerCase()===this.suggestedTags[i].toLowerCase()){this.suggestedTags.splice(i,1);break}}},{key:"removeTag",value:function(t){var i=this.definition.tags.indexOf(t);if(i>-1&&(this.definition.tags.splice(i,1),this.updateDefinition(),this.usedSuggestedTags.length>0))for(var o=0;o<this.usedSuggestedTags.length;o++)if(t.toLowerCase()===this.usedSuggestedTags[o].toLowerCase()){var l=this.usedSuggestedTags.splice(o,1)[0];this.suggestedTags.push(l),this.suggestedTags.sort();break}}},{key:"selectedTag",value:function(t){this.definition.tags.push(t.option.value),this.updateDefinition(),this.tagsCtrl.setValue(null),this.tagsInput.nativeElement.value="",this.usedSuggestedTags.push(t.option.value);var i=this.suggestedTags.indexOf(t.option.value);i>-1&&this.suggestedTags.splice(i,1)}},{key:"tagsAutocompleteClosed",value:function(){this.decreaseOverlayZindex();var t=this.tagsCtrl.value;null!=t&&""!==t&&(t=t.trim(),this.addTag(t),this.tagsCtrl.setValue(null),this.tagsInput.nativeElement.value="")}},{key:"tagsBlurred",value:function(){if(0===this.filteredSuggestedTags.length){var t=this.tagsCtrl.value;null!=t&&""!==t&&(t=t.trim(),this.addTag(t),this.tagsCtrl.setValue(null),this.tagsInput.nativeElement.value="")}}},{key:"increaseOverlayZindex",value:function(){this.overlayContainer.style.zIndex="1002"}},{key:"decreaseOverlayZindex",value:function(){this.overlayContainer.style.zIndex=null}}]),u}(M.o);return n.\u0275fac=function(a){return new(a||n)(e.Y36(N.I),e.Y36(P.d),e.Y36(U.B),e.Y36(H.Xj),e.Y36(J.E),e.Y36(h.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-substance-form-definition"]],viewQuery:function(a,u){var r;1&a&&e.Gf(j,5,e.SBq),2&a&&e.iGM(r=e.CRH())&&(u.tagsInput=r.first)},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[1,"substance-form-row","form-header"],[1,"sub-header"],["class","approval",4,"ngIf"],["class","substance-form-row form-name",4,"ngIf"],[1,"substance-form-row"],["style","margin-right: 5px",4,"ngIf"],["class","primary-substance-container",4,"ngIf"],[1,"checkbox-container"],["name","deprecated",3,"ngModel","ngModelChange","change"],["label","Record Level Access",3,"access","accessOut"],["class","redirect-links",4,"ngIf"],[1,"tag-list"],["aria-label","Tags edit","selectable","false"],["tagList",""],["removable","true",3,"removed",4,"ngFor","ngForOf"],["placeholder","Substance tags",3,"formControl","matAutocomplete","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd","blur"],["tagsInput",""],[3,"opened","closed","optionSelected"],["tagsAuto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["class","substance-form-row",4,"ngIf"],[3,"source"],[1,"approval"],[1,"substance-form-row","form-name"],[1,"name",3,"innerHTML"],[2,"margin-right","5px"],["name","definitionType","required","",3,"ngModel","ngModelChange","selectionChange"],[3,"value"],[1,"primary-substance-container"],["eventCategory","substanceFormDefinitionType","placeholder","Primary Substance","header","Primary Substance",3,"subuuid","selectionUpdated"],["name","definitionLevel",3,"ngModel","ngModelChange","selectionChange"],[1,"redirect-links"],["target","_blank","matTooltip","open old edit form in new tab",3,"href",4,"ngIf"],["target","_blank","matTooltip","open details page in new tab",3,"routerLink"],["svgIcon","open_in_new",1,"icon"],["target","_blank","matTooltip","open old edit form in new tab",3,"href"],["removable","true",3,"removed"],["matChipRemove","","svgIcon","cancel"],[1,"references-container"],["card","definition",3,"referencesUuids"],["references",""],[3,"matTooltip"],["label","Definition Access",3,"access","accessOut"]],template:function(a,u){1&a&&e.YNc(0,se,35,21,"div",0),2&a&&e.Q6J("ngIf",u.definition)},directives:[p.O5,g.KE,g.hX,x.gD,f.Q7,f.JJ,f.On,p.sg,Q.ey,Y.Q,Z.oG,w.h,A.gM,D.Hw,h.yS,m.qn,m.HS,m.qH,f.Fj,T.ZL,m.oH,f.oH,T.XC,g.bx,R.V,k.n],pipes:[p.rS,B.f],styles:[".substance-form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.approval[_ngcontent-%COMP%]{color:var(--pink-span-color);font-size:24px}.primary-substance-container[_ngcontent-%COMP%]{max-width:25%}.section-header[_ngcontent-%COMP%]{color:var(--dark-label-color);font-size:11px;text-align:left;letter-spacing:.005px}.form-header[_ngcontent-%COMP%]{padding-bottom:20px;font-weight:500;font-size:28px}.sub-header[_ngcontent-%COMP%]{font-weight:400;padding-right:5px}.references-container[_ngcontent-%COMP%]{width:100%}.checkbox-container[_ngcontent-%COMP%]{padding-top:10px}.definition-reference[_ngcontent-%COMP%]{margin-bottom:0}.redirect-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-color)!important;float:right;text-decoration:none}.redirect-links[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{-ms-transform:scale(.75);transform:scale(.75)}.icon[_ngcontent-%COMP%]{font-size:10px!important}.set-status[_ngcontent-%COMP%]     .mat-radio-label{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.set-status[_ngcontent-%COMP%]     .mat-radio-label-content{padding-left:5px;font-size:11px;padding-bottom:4px;color:var(--dark-label-color);font-weight:400;font-family:Roboto,Helvetica Neue,sans-serif}.status-label[_ngcontent-%COMP%]{padding-right:10px}.message-field[_ngcontent-%COMP%]{width:50%}.form-name[_ngcontent-%COMP%]{font-size:22px;padding-bottom:15px}.name[_ngcontent-%COMP%]{color:var(--regular-blue-color);padding-left:5px}.tag-list[_ngcontent-%COMP%]{width:100%}"]}),n}(),ce=s(64061),ue=s(82796),le=s(87317),de=s(7168),fe=s(94673),me=s(63200),pe=s(68390),ge=s(60833),ve=s(88547),he=function(){var n=(0,S.Z)(function c(){(0,_.Z)(this,c)});return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,ce.o.forChild(re),f.UX,f.u5,g.lN,x.LD,ue.Tx,Z.p9,le.ot,D.Ps,de.O,fe.w,me.U,A.AV,h.Bz,pe.Fk,m.Hi,T.Bb,ge.Cv,ve.J]]}),n}()}}]);
//# sourceMappingURL=6558.213ac266ccf8454e.js.map