"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[3127],{93127:function(nt,p,e){e.r(p),e.d(p,{SubstanceFormLinksModule:function(){return q}});var d=e(48047),m=e(78069),u=e(36362),L=e(75143),y=e(7168),f=e(19975),v=e(65590),g=e(87317),S=e(94673),Z=e(44770),h=e(90587),T=e(26439),x=e(43365),k=e(40089),F=e(31959),I=e(80206),A=e(98568),C=e(20265),D=e(24582),O=e(79550),b=e(33567),U=e(40104),M=e(21109),t=e(76442),N=e(78444),E=e(51279),J=e(18291),P=e(63169),R=e(39401),Y=e(59295),Q=e(95758),j=e(54244),V=e(16667),$=e(14900);function G(o,a){if(1&o){var i=t.EpF();t.TgZ(0,"div",16),t._uU(1," Deleted\xa0 "),t.TgZ(2,"button",17),t.NdJ("click",function(){return t.CHM(i),t.oxw().undoDelete()}),t._UZ(3,"mat-icon",18),t.qZA(),t.qZA()}}function z(o,a){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",19),t.qZA()),2&o){var i=t.oxw();t.xp6(1),t.Q6J("src",i.structure,t.LSH)}}var K=function(){var o=function(){function a(i,n,s,c,l){(0,m.Z)(this,a),this.cvService=i,this.dialog=n,this.utilsService=s,this.overlayContainerService=c,this.substanceFormService=l,this.linkDeleted=new t.vpe,this.subscriptions=[],this.structure=null}return(0,d.Z)(a,[{key:"ngOnInit",value:function(){this.getVocabularies(),this.overlayContainer=this.overlayContainerService.getContainerElement(),this.updateDisplay()}},{key:"getStructure",value:function(){var n=this;this.smiles=this.vocabulary[this.privateLink.linkage],this.smiles&&this.smiles.fragmentStructure?this.structure=this.cvService.getStructureUrlFragment(this.smiles.fragmentStructure):this.cvService.getDomainVocabulary("NUCLEIC_ACID_LINKAGE").pipe((0,Y.q)(1)).subscribe(function(s){var l=!1;s.NUCLEIC_ACID_LINKAGE.list.forEach(function(r){r.value===n.privateLink.linkage&&(n.smiles=r,l=!0,n.structure=n.cvService.getStructureUrlFragment(n.smiles.fragmentStructure))}),l||(n.structure=null)})}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(n){n.unsubscribe()})}},{key:"link",get:function(){return this.updateDisplay(),this.privateLink},set:function(n){this.privateLink=n,this.getStructure()}},{key:"updateLinkage",value:function(n){this.privateLink.linkage=n,this.getStructure()}},{key:"addRemainingSites",value:function(){this.privateLink.sites=this.privateLink.sites?this.privateLink.sites.concat(this.remaining):this.remaining,this.updateDisplay(),this.substanceFormService.emitLinkUpdate()}},{key:"updateDisplay",value:function(){this.privateLink&&(this.siteDisplay=this.substanceFormService.siteString(this.privateLink.sites))}},{key:"deleteLink",value:function(){var n=this;this.privateLink.$$deletedCode=this.utilsService.newUUID(),this.deleteTimer=setTimeout(function(){n.linkDeleted.emit(n.link),n.substanceFormService.emitLinkUpdate()},2e3)}},{key:"undoDelete",value:function(){clearTimeout(this.deleteTimer),delete this.privateLink.$$deletedCode}},{key:"getVocabularies",value:function(){var n=this,s=this.cvService.getDomainVocabulary("NUCLEIC_ACID_LINKAGE").subscribe(function(c){n.linkageTypes=c.NUCLEIC_ACID_LINKAGE.list,n.vocabulary=c.NUCLEIC_ACID_LINKAGE.dictionary,n.smiles=n.vocabulary[n.privateLink.linkage],n.getStructure()});this.subscriptions.push(s)}},{key:"openDialog",value:function(){var n=this,s=this.dialog.open(R.r,{data:{card:"link",link:this.privateLink.sites},width:"1040px"});this.overlayContainer.style.zIndex="1002";var c=s.afterClosed().subscribe(function(l){n.overlayContainer.style.zIndex=null,l&&(n.privateLink.sites=l),n.updateDisplay(),n.substanceFormService.emitLinkUpdate()});this.subscriptions.push(c)}}]),a}();return o.\u0275fac=function(i){return new(i||o)(t.Y36(J.I),t.Y36(Q.uw),t.Y36(P.FW),t.Y36(j.Xj),t.Y36(b.B))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-link-form"]],inputs:{remaining:"remaining",link:"link"},outputs:{linkDeleted:"linkDeleted"},decls:19,vars:8,consts:[[1,"link-form-container"],["class","notification-backdrop",4,"ngIf"],[1,"form-row"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete link",3,"click"],["svgIcon","delete_forever"],[4,"ngIf"],[1,"type"],["domain","NUCLEIC_ACID_LINKAGE","title","Sequence Type",3,"model","valueChange"],[1,"addRemaining"],["mat-flat-button","","mat-primary","",3,"matTooltip","disabled","click"],[1,"links"],[1,"label"],["mat-icon-button","","matTooltip","Select sites from display",3,"click"],["svgIcon","edit"],[3,"source"],[1,"notification-backdrop"],["mat-icon-button","","matTooltip","Undo",3,"click"],["svgIcon","undo"],[1,"structure-image",3,"src"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.YNc(1,G,4,0,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return n.deleteLink()}),t._UZ(5,"mat-icon",5),t.qZA(),t.qZA(),t.YNc(6,z,2,1,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"app-cv-input",8),t.NdJ("valueChange",function(c){return n.updateLinkage(c)}),t.qZA(),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"button",10),t.NdJ("click",function(){return n.addRemainingSites()}),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",11),t.TgZ(13,"div",12),t._uU(14,"link"),t.qZA(),t._uU(15),t.TgZ(16,"button",13),t.NdJ("click",function(){return n.openDialog()}),t._UZ(17,"mat-icon",14),t.qZA(),t.qZA(),t.qZA(),t._UZ(18,"app-audit-info",15),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",n.link.$$deletedCode),t.xp6(5),t.Q6J("ngIf",n.structure),t.xp6(2),t.Q6J("model",n.privateLink.linkage),t.xp6(2),t.MGl("matTooltip","Add remaining ",n.remaining.length," sites"),t.Q6J("disabled",0===n.remaining.length),t.xp6(1),t.hij(" add remaining ",n.remaining.length," sites "),t.xp6(4),t.hij(" ",n.siteDisplay," "),t.xp6(3),t.Q6J("source",n.privateLink))},directives:[u.O5,g.lW,k.gM,v.Hw,V.S,$.n],styles:[".link-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;display:-ms-flexbox;display:flex;z-index:10;background-color:var(--notif-backdrop-bg-color);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:var(--notif-backdrop-color)}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{width:30%;margin-right:5px}.form-row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{width:40%}.form-row[_ngcontent-%COMP%]   .addRemaining[_ngcontent-%COMP%]{width:20%}.selectedSite[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px}.structure-image[_ngcontent-%COMP%]{margin-bottom:-20px;margin-left:-10px}"]}),o}();function X(o,a){1&o&&t._UZ(0,"mat-divider",10),2&o&&t.Q6J("inset",!0)}function B(o,a){if(1&o){var i=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"app-link-form",8),t.NdJ("linkDeleted",function(_){return t.CHM(i),t.oxw().deleteLink(_)}),t.qZA(),t.YNc(2,X,1,1,"mat-divider",9),t.qZA()}if(2&o){var n=a.$implicit,s=a.last,c=a.index,l=t.oxw();t.Q6J("id","substance-other-links-"+c),t.xp6(1),t.Q6J("link",n)("remaining",l.remainingSites),t.xp6(1),t.Q6J("ngIf",!s)}}var W=function(){var o=function(a){function i(n,s,c,l){var r;return(0,m.Z)(this,i),r=function H(o,a,i){return a=(0,C.Z)(a),(0,I.Z)(o,(0,A.Z)()?Reflect.construct(a,i||[],(0,C.Z)(o).constructor):a.apply(o,i))}(this,i,[l]),r.substanceFormLinksService=n,r.substanceFormService=s,r.scrollToService=c,r.gaService=l,r.remainingSites=[],r.invalidSites=0,r.subscriptions=[],r.analyticsEventCategory="substance form links",r}return(0,D.Z)(i,a),(0,d.Z)(i,[{key:"ngOnInit",value:function(){this.canAddItemUpdate.emit(!0),this.menuLabelUpdate.emit("Links")}},{key:"ngAfterViewInit",value:function(){var s=this,c=this.substanceFormLinksService.substanceLinks.subscribe(function(r){s.links=r,s.getRemainingSites()});this.subscriptions.push(c);var l=this.substanceFormService.substanceSubunits.subscribe(function(r){s.subunits=r,s.getRemainingSites()});this.subscriptions.push(l)}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(s){s.unsubscribe()})}},{key:"getRemainingSites",value:function(){var s=[],c=[];this.subunits&&this.links&&(this.subunits.forEach(function(l){if(null!=l.sequence&&l.sequence.length>0)for(var r=2;r<=l.sequence.length;r++)c.push({subunitIndex:l.subunitIndex,residueIndex:r})}),this.links.forEach(function(l){s=s.concat(l.sites)})),this.remainingSites=c.filter(function(l){return!s.some(function(r){return l.subunitIndex===r.subunitIndex&&l.residueIndex===r.residueIndex})}),this.invalidSites=c.length-s.length}},{key:"addItem",value:function(){this.addOtherLink()}},{key:"addOtherLink",value:function(){var s=this;this.substanceFormLinksService.addSubstanceLink(),setTimeout(function(){s.scrollToService.scrollToElement("substance-other-links-0","center")})}},{key:"deleteLink",value:function(s){this.substanceFormLinksService.deleteSubstanceLink(s)}}]),i}(O.u);return o.\u0275fac=function(i){return new(i||o)(t.Y36(M.e),t.Y36(b.B),t.Y36(N.i),t.Y36(U.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-substance-form-links"]],features:[t.qOj],decls:10,vars:3,consts:[[1,"responsive"],[1,"form-row"],[1,"form-row",3,"ngClass"],["class","alternate-backgrounds","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],[1,"middle-fill"],["mat-button","",3,"click"],["svgIcon","add_circle_outline"],["appScrollToTarget","",1,"alternate-backgrounds",3,"id"],[3,"link","remaining","linkDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.YNc(4,B,3,4,"div",3),t.TgZ(5,"div",1),t._UZ(6,"span",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.addOtherLink()}),t._uU(8," Add linkage "),t._UZ(9,"mat-icon",6),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(2),t.Q6J("ngClass",0===n.invalidSites?"":"too-many"),t.xp6(1),t.hij("Remaining Links: ",0===n.invalidSites?n.remainingSites.length:n.invalidSites,""),t.xp6(1),t.Q6J("ngForOf",n.links))},directives:[u.mk,u.sg,E.P,K,u.O5,f.d,g.lW,v.Hw],styles:[".form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:5 10px;-ms-flex-align:end;align-items:flex-end;font-size:18px;margin-bottom:5px}.too-many[_ngcontent-%COMP%]{color:var(--regular-red-color)}"]}),o}(),w=e(91434),q=(e(64061),function(){var o=(0,d.Z)(function a(){(0,m.Z)(this,a)});return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,L.o0.forChild(W),y.O,f.t,v.Ps,g.ot,S.w,Z.lN,h.UX,h.u5,T.TU,k.AV,F.vV,x.c,w.LD]]}),o}())}}]);
//# sourceMappingURL=3127.983e70d313a54cad.js.map