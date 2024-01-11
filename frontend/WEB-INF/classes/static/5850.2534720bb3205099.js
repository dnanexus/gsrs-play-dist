"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[5850],{45850:function(L,r,e){e.r(r),e.d(r,{SubstanceFormPolymerClassificationModule:function(){return I}});var u=e(48047),m=e(78069),f=e(36362),v=e(64061),C=e(44770),g=e(43365),p=e(90587),y=e(91434),P=e(7168),S=e(96769),h=e(80206),b=e(98568),d=e(20265),M=e(24582),O=(e(27299),e(40104)),x=e(18291),Z=e(79223),T=e(88194),t=e(76442),F=e(16667),A=e(15992),U=e(24459),J=e(14900);function R(s,l){if(1&s){var o=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"app-cv-input",5),t.NdJ("valueChange",function(c){return t.CHM(o),t.oxw().updateClass(c)}),t.qZA(),t.TgZ(5,"app-cv-input",6),t.NdJ("valueChange",function(c){return t.CHM(o),t.oxw().updateType(c)}),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"app-tag-selector",7),t.NdJ("tagsUpdate",function(c){return t.CHM(o),t.oxw().update(c)}),t.qZA(),t.TgZ(8,"app-cv-input",8),t.NdJ("valueChange",function(c){return t.CHM(o),t.oxw().updateGeometry(c)}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"app-substance-selector",10),t.NdJ("selectionUpdated",function(c){return t.CHM(o),t.oxw().parentSubstanceUpdated(c)}),t.qZA(),t.qZA(),t.qZA(),t._UZ(11,"app-audit-info",11),t.qZA()}if(2&s){var i=t.oxw();t.xp6(4),t.Q6J("model",i.classification.polymerClass),t.xp6(1),t.Q6J("model",i.classification.sourceType),t.xp6(2),t.Q6J("tags",i.classification.polymerSubclass),t.xp6(1),t.Q6J("model",i.classification.polymerGeometry),t.xp6(2),t.Q6J("subuuid",i.relatedSubstanceUuid),t.xp6(1),t.Q6J("source",i.classification)}}var w=function(){var s=function(l){function o(i,n,c){var a;return(0,m.Z)(this,o),a=function E(s,l,o){return l=(0,d.Z)(l),(0,h.Z)(s,(0,b.Z)()?Reflect.construct(l,o||[],(0,d.Z)(s).constructor):l.apply(s,o))}(this,o),a.substanceFormPolymerClassificationService=i,a.gaService=n,a.cvService=c,a.subscriptions=[],a.dropdownSettings={},a.analyticsEventCategory="substance form Polymer Classification",a}return(0,M.Z)(o,l),(0,u.Z)(o,[{key:"ngOnInit",value:function(){var n=this;this.menuLabelUpdate.emit("Polymer Classification");var c=this.substanceFormPolymerClassificationService.substancePolymerClassification.subscribe(function(a){n.classification=a,n.relatedSubstanceUuid=n.classification.parentSubstance&&n.classification.parentSubstance.refuuid||""});this.subscriptions.push(c),this.dropdownSettings={singleSelection:!1,idField:"value",textField:"display",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0}}},{key:"ngAfterViewInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(n){n.unsubscribe()})}},{key:"update",value:function(n){this.classification.polymerSubclass=n}},{key:"updateType",value:function(n){this.classification.sourceType=n}},{key:"updateGeometry",value:function(n){this.classification.polymerGeometry=n}},{key:"updateClass",value:function(n){this.classification.polymerClass=n}},{key:"parentSubstanceUpdated",value:function(n){if(null!==n){var c={refPname:n._name,name:n._name,refuuid:n.uuid,substanceClass:"reference",approvalID:n.approvalID};this.classification.parentSubstance=c,this.relatedSubstanceUuid=c&&c.refuuid||""}else this.classification.parentSubstance=null,this.relatedSubstanceUuid=null}},{key:"updateAccess",value:function(n){this.classification.access=n}}]),o}(Z.o);return s.\u0275fac=function(o){return new(o||s)(t.Y36(T.D),t.Y36(O.$),t.Y36(x.I))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-substance-form-polymer-classification"]],features:[t.qOj],decls:1,vars:1,consts:[["class","name-form-container",4,"ngIf"],[1,"name-form-container"],[1,"form-row"],[1,"field-container"],[1,"field-row"],["domain","POLYMER_CLASS","title","Polymer Class",1,"class",3,"model","valueChange"],["domain","POLYMER_SOURCE_TYPE","title","Source Type",1,"type",3,"model","valueChange"],["placeholder","polymer subclass","cvDomain","POLYMER_SUBCLASS",1,"tags","subtype",3,"tags","tagsUpdate"],["domain","POLYMER_GEOMETRY","title","Polymer Geometry",1,"geometry",3,"model","valueChange"],[1,"flex-column","related-substance"],["eventCategory","substanceRelationshipRelatedSub","placeholder","Parent Substance","header","Parent Substance",3,"subuuid","selectionUpdated"],[3,"source"]],template:function(o,i){1&o&&t.YNc(0,R,12,6,"div",0),2&o&&t.Q6J("ngIf",i.classification)},directives:[f.O5,F.S,A.C,U.Q,J.n],styles:[".related-substance[_ngcontent-%COMP%]{width:45%}.field-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 10px;-ms-flex-align:start;align-items:flex-start}.form-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]{padding-bottom:18px}.form-row[_ngcontent-%COMP%]   .geometry[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .subtype[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .subtype[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .geometry[_ngcontent-%COMP%]{max-width:250px}.field-container[_ngcontent-%COMP%]{width:55%}"]}),s}(),Y=e(63200),I=function(){var s=(0,u.Z)(function l(){(0,m.Z)(this,l)});return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[f.ez,v.o.forChild(w),C.lN,g.c,p.UX,p.u5,y.LD,P.O,S.O,Y.U]]}),s}()}}]);
//# sourceMappingURL=5850.2534720bb3205099.js.map