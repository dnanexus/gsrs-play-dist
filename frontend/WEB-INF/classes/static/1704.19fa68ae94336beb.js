"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[1704],{51704:function(ce,v,a){a.r(v),a.d(v,{SubstanceFormRelationshipsModule:function(){return re}});var u=a(48047),m=a(78069),c=a(36362),F=a(80206),y=a(98568),g=a(20265),S=a(24582),M=a(79550),O=a(24874),I=a(96238),e=a(76442),w=a(78444),C=a(44770),_=a(43365),p=a(90587),h=a(87317),x=a(26439),A=a(51279),P=a(42827),J=a(52149),b=a(40089),f=a(65590),U=a(24459),Q=a(16667),N=a(84577),D=a(33662),k=a(48302),E=a(14900);function Y(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"div",21),e._uU(1," Deleted\xa0 "),e.TgZ(2,"button",22),e.NdJ("click",function(){return e.CHM(i),e.oxw().undoDelete()}),e._UZ(3,"mat-icon",23),e.qZA(),e.qZA()}}function z(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"app-cv-input",24),e.NdJ("valueChange",function(l){return e.CHM(i),e.oxw().relationship.qualification=l}),e.qZA(),e.TgZ(2,"app-cv-input",25),e.NdJ("valueChange",function(l){return e.CHM(i),e.oxw().relationship.interactionType=l}),e.qZA(),e.qZA()}if(2&n){var t=e.oxw();e.xp6(1),e.Q6J("model",t.relationship.qualification),e.xp6(1),e.Q6J("model",t.relationship.interactionType)}}function H(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"div",26),e.TgZ(2,"div",27),e._uU(3,"Comments"),e.qZA(),e.TgZ(4,"textarea",28),e.NdJ("ngModelChange",function(l){return e.CHM(i),e.oxw().relationship.comments=l}),e._uU(5,"        "),e.qZA(),e.qZA(),e.qZA()}if(2&n){var t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.relationship.comments)}}function q(n,s){1&n&&e._UZ(0,"mat-icon",29)}function j(n,s){1&n&&e._UZ(0,"mat-icon",30)}function $(n,s){if(1&n&&(e.TgZ(0,"div",9),e.TgZ(1,"div",35),e._UZ(2,"app-domain-references",36,37),e.qZA(),e.qZA()),2&n){var i=e.oxw(2);e.xp6(2),e.Q6J("referencesUuids",i.relationship.references)}}function L(n,s){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",31),e.TgZ(2,"div",32),e._uU(3,"Amount"),e.qZA(),e._UZ(4,"app-amount-form",33),e.qZA(),e.YNc(5,$,4,1,"div",13),e.TgZ(6,"div",9),e._UZ(7,"app-audit-info",34),e.qZA(),e.qZA()),2&n){var i=e.oxw();e.xp6(4),e.Q6J("substanceAmount",i.relationship.amount),e.xp6(1),e.Q6J("ngIf",i.viewFull),e.xp6(2),e.Q6J("source",i.relationship)}}var V=function(){var n=function(){function s(i,t){(0,m.Z)(this,s),this.cvService=i,this.utilsService=t,this.relationshipDeleted=new e.vpe,this.viewFull=!0}return(0,u.Z)(s,[{key:"ngOnInit",value:function(){}},{key:"show",get:function(){return this.viewFull||null},set:function(t){null!=t&&(this.viewFull=t)}},{key:"relationship",get:function(){return this.privateRelationship},set:function(t){this.privateRelationship=t,null==this.privateRelationship.amount&&(this.privateRelationship.amount={}),this.relatedSubstanceUuid=this.privateRelationship.relatedSubstance&&this.privateRelationship.relatedSubstance.refuuid||"",this.mediatorSubstanceUuid=this.privateRelationship.mediatorSubstance&&this.privateRelationship.mediatorSubstance.refuuid||"",this.name=this.privateRelationship.relatedSubstance.refPname?this.privateRelationship.relatedSubstance.refPname:this.privateRelationship.relatedSubstance.name}},{key:"deleteRelationship",value:function(){var t=this;this.privateRelationship.$$deletedCode=this.utilsService.newUUID(),(!this.privateRelationship.relatedSubstance||!this.privateRelationship.relatedSubstance.refuuid)&&!this.privateRelationship.type&&(this.deleteTimer=setTimeout(function(){t.relationshipDeleted.emit(t.relationship)},2e3))}},{key:"undoDelete",value:function(){clearTimeout(this.deleteTimer),delete this.privateRelationship.$$deletedCode}},{key:"updateAccess",value:function(t){this.relationship.access=t}},{key:"relatedSubstanceUpdated",value:function(t){this.relationship.relatedSubstance=null!==t?{refPname:t._name,name:t._name,refuuid:t.uuid,substanceClass:"reference",approvalID:t.approvalID}:{}}},{key:"mediatorSubstanceUpdated",value:function(t){this.relationship.mediatorSubstance=null!==t?{refPname:t._name,refuuid:t.uuid,substanceClass:"reference",approvalID:t.approvalID}:{}}}]),s}();return n.\u0275fac=function(i){return new(i||n)(e.Y36(P.I),e.Y36(J.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-relationship-form"]],inputs:{show:"show",relationship:"relationship"},outputs:{relationshipDeleted:"relationshipDeleted"},decls:22,vars:13,consts:[[1,"relationship-form-container"],["class","notification-backdrop",4,"ngIf"],[1,"flex-column","delete-column"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete relationship",3,"click"],["svgIcon","delete_forever"],[1,"flex-column","related-substance"],["eventCategory","substanceRelationshipRelatedSub","placeholder","Related Substance","header","Related Substance",3,"hideImage","subuuid","name","selectionUpdated"],[1,"flex-column","form-content"],[1,"form-row"],["required","true","domain","RELATIONSHIP_TYPE","title","Type","name","type",1,"type",3,"model","valueChange"],[3,"access","accessOut"],["class","form-row ",4,"ngIf"],["class","form-row",4,"ngIf"],[1,"flex-column","mediator-substance"],["eventCategory","substanceFormDefinitionType","placeholder","Mediator Substance","header","Mediator Substance",3,"hideImage","subuuid","selectionUpdated"],["matTooltip","Expand / collapse rows",1,"chevron"],["mat-icon-button","",1,"chevron-button",3,"click"],["svgIcon","chevron_up",4,"ngIf"],["svgIcon","chevron_down",4,"ngIf"],[4,"ngIf"],[1,"notification-backdrop"],["mat-icon-button","","matTooltip","Undo",3,"click"],["svgIcon","undo"],["key","Relationship Qualification","title","Qualification","name","Qualification",1,"qualification",3,"model","valueChange"],["key","Relationship Interaction Type","title","Interaction Type","name","Interaction Type",1,"interaction-type",3,"model","valueChange"],[1,"comments"],[1,"textarea-label"],["placeholder","Enter text here","name","comments",3,"ngModel","ngModelChange"],["svgIcon","chevron_up"],["svgIcon","chevron_down"],[1,"amount-form-container"],[1,"amount-title"],[3,"substanceAmount"],[3,"source"],[1,"references-container"],[3,"referencesUuids"],["references",""]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e.YNc(1,Y,4,0,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return t.deleteRelationship()}),e._UZ(5,"mat-icon",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"app-substance-selector",7),e.NdJ("selectionUpdated",function(l){return t.relatedSubstanceUpdated(l)}),e.qZA(),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"div",9),e.TgZ(10,"app-cv-input",10),e.NdJ("valueChange",function(l){return t.relationship.type=l}),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"app-access-manager",11),e.NdJ("accessOut",function(l){return t.updateAccess(l)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,z,3,2,"div",12),e.YNc(14,H,6,1,"div",13),e.qZA(),e.TgZ(15,"div",14),e.TgZ(16,"app-substance-selector",15),e.NdJ("selectionUpdated",function(l){return t.mediatorSubstanceUpdated(l)}),e.qZA(),e.qZA(),e.TgZ(17,"div",16),e.TgZ(18,"button",17),e.NdJ("click",function(){return t.viewFull=!t.viewFull}),e.YNc(19,q,1,0,"mat-icon",18),e.YNc(20,j,1,0,"mat-icon",19),e.qZA(),e.qZA(),e.qZA(),e.YNc(21,L,8,3,"div",20)),2&i&&(e.xp6(1),e.Q6J("ngIf",t.relationship.$$deletedCode),e.xp6(6),e.Q6J("hideImage",!t.viewFull)("subuuid",t.relatedSubstanceUuid)("name",t.name),e.xp6(3),e.Q6J("model",t.relationship.type),e.xp6(2),e.Q6J("access",t.relationship.access),e.xp6(1),e.Q6J("ngIf",t.viewFull),e.xp6(1),e.Q6J("ngIf",t.viewFull),e.xp6(2),e.Q6J("hideImage",!t.viewFull)("subuuid",t.mediatorSubstanceUuid),e.xp6(3),e.Q6J("ngIf",t.viewFull),e.xp6(1),e.Q6J("ngIf",!t.viewFull),e.xp6(1),e.Q6J("ngIf",!t.relationship.$$deletedCode&&t.viewFull))},directives:[c.O5,h.lW,b.gM,f.Hw,U.Q,Q.S,N.h,p.Fj,p.JJ,p.On,D.f,k.V,E.n],styles:[".relationship-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative;display:-ms-flexbox;display:flex}.type[_ngcontent-%COMP%]     mat-form-field, .name[_ngcontent-%COMP%]     mat-form-field, .property-name[_ngcontent-%COMP%]     mat-form-field{width:100%}.collapse[_ngcontent-%COMP%]{padding:20px 10px 12px;position:relative}.chevron[_ngcontent-%COMP%]{width:20px;line-height:67px;color:var(--chevron-color)}.chevron-button[_ngcontent-%COMP%]{width:20px}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;display:-ms-flexbox;display:flex;z-index:10;background-color:var(--notif-backdrop-bg-color);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:var(--notif-backdrop-color)}.related-substance[_ngcontent-%COMP%], .mediator-substance[_ngcontent-%COMP%]{max-width:25%;width:25%}.form-content[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .qualification[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .interaction-type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.key-value-pair[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:start;align-self:flex-start}.key-value-pair[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{font-size:11px;padding-bottom:3.5px;line-height:11px}.key-value-pair[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:15.5px}.references-container[_ngcontent-%COMP%]{width:100%}.amount-title[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700}.amount-form-container[_ngcontent-%COMP%]{padding:0 7px}@media (max-width: 990px){.form-content[_ngcontent-%COMP%]{width:100%}.mediator-substance[_ngcontent-%COMP%]{-ms-flex-order:-1;order:-1;width:40%;max-width:40%}.related-substance[_ngcontent-%COMP%]{-ms-flex-order:-2;order:-2;width:40%;max-width:40%}.delete-column[_ngcontent-%COMP%]{-ms-flex-order:-3;order:-3;width:5%}.relationship-form-container[_ngcontent-%COMP%]{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}}"]}),n}(),Z=a(19975);function W(n,s){if(1&n&&(e.TgZ(0,"mat-form-field",7),e._UZ(1,"input",8),e.qZA()),2&n){var i=e.oxw();e.Q6J("floatLabel","never"),e.xp6(1),e.Q6J("formControl",i.searchControl)}}function X(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(i),e.oxw().collapse()}),e._uU(1),e.qZA()}if(2&n){var t=e.oxw();e.xp6(1),e.hij("",t.expanded?"Collapse":"Expand"," All")}}var T=function(){return[5,10,25,100]};function K(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"mat-paginator",10),e.NdJ("page",function(l){e.CHM(i);var r=e.oxw();return r.pageChange(l,r.analyticsEventCategory)}),e.qZA()}if(2&n){var t=e.oxw();e.Q6J("length",t.filtered&&t.filtered.length||0)("pageIndex",t.page)("pageSize",5)("pageSizeOptions",e.DdM(4,T))}}function G(n,s){1&n&&e._UZ(0,"mat-divider",14),2&n&&e.Q6J("inset",!0)}function ee(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"app-relationship-form",12),e.NdJ("relationshipDeleted",function(d){return e.CHM(i),e.oxw().deleteRelationship(d)}),e.qZA(),e.YNc(2,G,1,1,"mat-divider",13),e.qZA()}if(2&n){var t=s.$implicit,o=s.last,l=s.index,r=e.oxw();e.Q6J("id","substance-relationship-"+l),e.xp6(1),e.Q6J("relationship",t)("show",r.expanded),e.xp6(1),e.Q6J("ngIf",!o)}}function te(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"mat-paginator",10),e.NdJ("page",function(l){e.CHM(i);var r=e.oxw();return r.pageChange(l,r.analyticsEventCategory)}),e.qZA()}if(2&n){var t=e.oxw();e.Q6J("length",t.filtered&&t.filtered.length||0)("pageIndex",t.page)("pageSize",5)("pageSizeOptions",e.DdM(4,T))}}function ne(n,s){if(1&n){var i=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"span",2),e.TgZ(2,"button",16),e.NdJ("click",function(){return e.CHM(i),e.oxw().addRelationship()}),e._uU(3," Add relationship "),e._UZ(4,"mat-icon",17),e.qZA(),e.qZA()}}var ie=function(){var n=function(s){function i(t,o,l){var r;return(0,m.Z)(this,i),r=function B(n,s,i){return s=(0,g.Z)(s),(0,F.Z)(n,(0,y.Z)()?Reflect.construct(s,i||[],(0,g.Z)(n).constructor):s.apply(n,i))}(this,i,[l]),r.substanceFormRelationshipsService=t,r.scrollToService=o,r.gaService=l,r.subscriptions=[],r.expanded=!0,r}return(0,S.Z)(i,s),(0,u.Z)(i,[{key:"ngOnInit",value:function(){this.canAddItemUpdate.emit(!0),this.menuLabelUpdate.emit("Relationships"),this.analyticsEventCategory="substance form relationships"}},{key:"ngAfterViewInit",value:function(){var o=this,l=this.substanceFormRelationshipsService.substanceRelationships.subscribe(function(r){o.relationships=r,o.filtered=r;var R=o.searchControl.valueChanges.subscribe(function(d){o.filterList(d,o.relationships,o.analyticsEventCategory)},function(d){});o.subscriptions.push(R),o.page=0,o.pageChange()});this.subscriptions.push(l)}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(o){o.unsubscribe()})}},{key:"collapse",value:function(){this.expanded=!this.expanded}},{key:"addItem",value:function(){this.addRelationship()}},{key:"addRelationship",value:function(){var o=this;this.substanceFormRelationshipsService.addSubstanceRelationship(),setTimeout(function(){o.scrollToService.scrollToElement("substance-relationship-0","center")})}},{key:"deleteRelationship",value:function(o){this.substanceFormRelationshipsService.deleteSubstanceRelationship(o)}}]),i}(M.u);return n.\u0275fac=function(i){return new(i||n)(e.Y36(I.F),e.Y36(w.i),e.Y36(O.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-substance-form-relationships-card"]],features:[e.qOj],decls:8,vars:6,consts:[[1,"flex-row"],["class","search",3,"floatLabel",4,"ngIf"],[1,"middle-fill"],["class","standardize","mat-button","",3,"click",4,"ngIf"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page",4,"ngIf"],["class","relationship","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],["style","display: flex;",4,"ngIf"],[1,"search",3,"floatLabel"],["matInput","","placeholder","Search",3,"formControl"],["mat-button","",1,"standardize",3,"click"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["appScrollToTarget","",1,"relationship",3,"id"],[3,"relationship","show","relationshipDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"],[2,"display","flex"],["mat-button","",3,"click"],["svgIcon","add_circle_outline"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e.YNc(1,W,2,2,"mat-form-field",1),e._UZ(2,"span",2),e.YNc(3,X,2,1,"button",3),e.qZA(),e.YNc(4,K,1,5,"mat-paginator",4),e.YNc(5,ee,3,4,"div",5),e.YNc(6,te,1,5,"mat-paginator",4),e.YNc(7,ne,5,0,"div",6)),2&i&&(e.xp6(1),e.Q6J("ngIf",t.relationships&&t.relationships.length>t.pageSize),e.xp6(2),e.Q6J("ngIf",t.relationships&&t.relationships.length>0),e.xp6(1),e.Q6J("ngIf",t.relationships&&t.relationships.length>5),e.xp6(1),e.Q6J("ngForOf",t.paged),e.xp6(1),e.Q6J("ngIf",t.relationships&&t.relationships.length>5),e.xp6(1),e.Q6J("ngIf",t.relationships&&t.relationships.length>0))},directives:[c.O5,C.KE,_.Nt,p.Fj,p.JJ,p.oH,h.lW,x.NW,c.sg,A.P,V,Z.d,f.Hw],styles:[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:var(--text-color)}.relationship[_ngcontent-%COMP%]:nth-child(odd){background-color:var(--nth-child-color-2)}.relationship[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:var(--nth-child-color-3)}.relationship[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:var(--nth-child-color-1)}.relationship[_ngcontent-%COMP%]     .mat-expansion-panel, .relationship[_ngcontent-%COMP%]     .mat-table, .relationship[_ngcontent-%COMP%]     textarea{background-color:var(--regular-transparent-color)}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]}),n}(),oe=a(64061),ae=a(7168),se=a(94673),le=a(63200),re=function(){var n=(0,u.Z)(function s(){(0,m.Z)(this,s)});return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,oe.o.forChild(ie),ae.O,Z.t,f.Ps,h.ot,se.w,C.lN,p.UX,p.u5,x.TU,_.c,le.U,b.AV]]}),n}()}}]);
//# sourceMappingURL=1704.19fa68ae94336beb.js.map