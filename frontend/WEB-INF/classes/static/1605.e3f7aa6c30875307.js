"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[1605],{91605:function(J,c,t){t.r(c),t.d(c,{SubstanceFormMixtureDetailsModule:function(){return j}});var l=t(48047),m=t(78069),v=t(36362),p=t(75143),x=t(44770),S=t(43365),d=t(90587),h=t(91434),b=t(7168),y=t(96769),g=t(3311),M=t(80206),C=t(98568),f=t(20265),Z=t(24582),D=t(18291),F=t(33567),U=t(40104),O=t(79223),e=t(76442),A=t(24459),I=t(14900),T=function(){var s=function(u){function a(r,n,o){var i;return(0,m.Z)(this,a),i=function P(s,u,a){return u=(0,f.Z)(u),(0,M.Z)(s,(0,C.Z)()?Reflect.construct(u,a||[],(0,f.Z)(s).constructor):u.apply(s,a))}(this,a),i.substanceFormService=r,i.gaService=n,i.cvService=o,i.subscriptions=[],i.analyticsEventCategory="substance form Mixture Details",i}return(0,Z.Z)(a,u),(0,l.Z)(a,[{key:"ngOnInit",value:function(){var n=this;this.menuLabelUpdate.emit("Mixture Details");var o=this.substanceFormService.substance.subscribe(function(i){null==i.mixture&&(i.mixture={access:[]}),n.mixture=i.mixture,n.parent=i.mixture.parentSubstance,n.relatedSubstanceUuid=n.mixture.parentSubstance&&n.mixture.parentSubstance.refuuid||"",n.substanceFormService.resetState()});this.subscriptions.push(o)}},{key:"ngAfterViewInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(n){n.unsubscribe()})}},{key:"updateAccess",value:function(n){this.mixture.access=n}},{key:"parentSubstanceUpdated",value:function(n){if(null!==n){var o={refPname:n._name,name:n._name,refuuid:n.uuid,substanceClass:"reference",approvalID:n.approvalID};this.mixture.parentSubstance=o,this.relatedSubstanceUuid=o&&o.refuuid||""}else this.mixture.parentSubstance=null,this.relatedSubstanceUuid=null}}]),a}(O.o);return s.\u0275fac=function(a){return new(a||s)(e.Y36(F.B),e.Y36(U.$),e.Y36(D.I))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-substance-form-mixture-details"]],features:[e.qOj],decls:5,vars:2,consts:[[1,"mixture-details-container"],[1,"flex-column","related-substance"],["eventCategory","substanceRelationshipRelatedSub","placeholder","Parent Substance","header","Parent Substance",3,"subuuid","selectionUpdated"],[1,"form-row"],[3,"source"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"app-substance-selector",2),e.NdJ("selectionUpdated",function(o){return r.parentSubstanceUpdated(o)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(3,"div",3),e._UZ(4,"app-audit-info",4),e.qZA()),2&a&&(e.xp6(2),e.Q6J("subuuid",r.relatedSubstanceUuid),e.xp6(2),e.Q6J("source",r.mixture))},directives:[A.Q,I.n],styles:[".mixture-details-container[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:initial;align-items:initial;padding:20px;-ms-flex-pack:justify;justify-content:space-between}.related-substance[_ngcontent-%COMP%]{max-width:75%;width:60%}"]}),s}(),R=t(63200),j=(t(64061),function(){var s=(0,l.Z)(function u(){(0,m.Z)(this,u)});return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[v.ez,p.o0.forChild(T),x.lN,S.c,d.UX,d.u5,h.LD,b.O,y.O,g.ZQ,R.U]]}),s}())}}]);
//# sourceMappingURL=1605.e3f7aa6c30875307.js.map