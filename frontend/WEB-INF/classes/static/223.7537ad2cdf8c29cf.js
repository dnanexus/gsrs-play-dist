"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[223],{30223:function(le,C,a){a.r(C),a.d(C,{SubstanceFormSimplifiedNamesModule:function(){return ce}});var f=a(48047),g=a(78069),u=a(36362),Z=a(80206),I=a(98568),N=a(20265),J=a(24582),P=a(79550),y=a(33567),A=a(40104),U=a(53141),S=a(39756),e=a(76442),z=a(78444),v=a(44770),h=a(43365),l=a(90587),b=a(26439),D=a(51279),w=a(42827),E=a(52149),k=a(99146),Q=a(95758),Y=a(54244),x=a(87317),F=a(40089),T=a(65590),L=a(16667),j=a(84577);function B(i,s){if(1&i){var n=e.EpF();e.TgZ(0,"div",11),e._uU(1," Deleted\xa0 "),e.TgZ(2,"button",12),e.NdJ("click",function(){return e.CHM(n),e.oxw().undoDelete()}),e._UZ(3,"mat-icon",13),e.qZA(),e.qZA()}}function H(i,s){if(1&i){var n=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){return e.CHM(n),e.oxw().resolve()}),e._uU(1,"resolve"),e.qZA()}}var $=function(){var i=function(){function s(n,t,o,r,c,d){(0,g.Z)(this,s),this.cvService=n,this.utilsService=t,this.dialog=o,this.substanceFormService=r,this.overlayContainerService=c,this.nameFormService=d,this.priorityUpdate=new e.vpe,this.nameDeleted=new e.vpe,this.nameControl=new l.NI(""),this.nameTypeControl=new l.NI(""),this.subscriptions=[],this.substanceType="",this.viewFull=!0,this.showStd=!1}return(0,f.Z)(s,[{key:"ngOnInit",value:function(){var t=this;this.overlayContainer=this.overlayContainerService.getContainerElement(),this.substanceFormService.definition.subscribe(function(r){t.substanceType=r.substanceClass}).unsubscribe(),this.privateName.access=["protected"]}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(t){t.unsubscribe()})}},{key:"show",get:function(){return this.viewFull||null},set:function(t){null!=t&&(this.viewFull=t)}},{key:"standardized",get:function(){return this.showStd},set:function(t){null!=t&&(this.showStd=t)}},{key:"name",get:function(){return this.privateName||{}},set:function(t){null!=t&&(this.privateName=t,(!this.privateName.languages||0===this.privateName.languages.length)&&(this.privateName.languages=["en"]),this.privateName.type||(this.privateName.type="cn"))}},{key:"priorityUpdated",value:function(t){this.privateName.displayName="true"===t.value,this.priorityUpdate.emit(this.privateName)}},{key:"updateAccess",value:function(t){this.privateName.access=t}},{key:"updateLanguages",value:function(t){this.privateName.languages=t}},{key:"updateDomains",value:function(t){this.privateName.domains=t}},{key:"updateJurisdiction",value:function(t){this.privateName.nameJurisdiction=t}},{key:"deleteName",value:function(){var t=this;this.privateName.$$deletedCode=this.utilsService.newUUID(),!this.privateName.name&&!this.privateName.type&&(this.deleteTimer=setTimeout(function(){t.nameDeleted.emit(t.privateName)},2e3))}},{key:"undoDelete",value:function(){clearTimeout(this.deleteTimer),delete this.privateName.$$deletedCode}},{key:"resolve",value:function(){var t=this,o=this.dialog.open(k.a,{height:"auto",width:"800px",data:{name:this.privateName.name}});this.overlayContainer.style.zIndex="1002",o.afterClosed().subscribe(function(r){t.overlayContainer.style.zIndex=null,null!=r&&""!==r&&t.substanceFormService.resolvedName(r)},function(){})}},{key:"getNameOrgs",value:function(t){return t.nameOrgs||(t.nameOrgs=[]),t.nameOrgs}},{key:"preventNewLine",value:function(t){"Enter"===t.key&&t.preventDefault()}}]),s}();return i.\u0275fac=function(n){return new(n||i)(e.Y36(w.I),e.Y36(E.F),e.Y36(Q.uw),e.Y36(y.B),e.Y36(Y.Xj),e.Y36(S.w))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-name-form"]],inputs:{show:"show",standardized:"standardized",name:"name"},outputs:{priorityUpdate:"priorityUpdate",nameDeleted:"nameDeleted"},decls:12,vars:6,consts:[[1,"name-form-container",3,"ngClass"],["class","notification-backdrop",4,"ngIf"],[1,"form-row"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete name",3,"click"],["svgIcon","delete_forever"],[1,"name"],["matInput","","placeholder","Name","required","","name","name",1,"text-area",3,"ngModel","ngModelChange","keypress"],["class","resolve",3,"click",4,"ngIf"],["required","true","key","Name Type Code","title","Type",1,"name-type",3,"model","valueChange"],[3,"access","accessOut"],[1,"notification-backdrop"],["mat-icon-button","","matTooltip","Undo",3,"click"],["svgIcon","undo"],[1,"resolve",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,B,4,0,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return t.deleteName()}),e._UZ(5,"mat-icon",5),e.qZA(),e.qZA(),e.TgZ(6,"mat-form-field",6),e.TgZ(7,"textarea",7),e.NdJ("ngModelChange",function(r){return t.name.name=r})("keypress",function(r){return t.preventNewLine(r)}),e.qZA(),e.qZA(),e.YNc(8,H,2,0,"a",8),e.TgZ(9,"app-cv-input",9),e.NdJ("valueChange",function(r){return t.name.type=r}),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"app-access-manager",10),e.NdJ("accessOut",function(r){return t.updateAccess(r)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngClass",t.viewFull?"name-form-container":"collapse"),e.xp6(1),e.Q6J("ngIf",t.name.$$deletedCode),e.xp6(6),e.Q6J("ngModel",t.name.name),e.xp6(1),e.Q6J("ngIf",t.name.name&&t.name.name.length>0&&"structure"===t.substanceType),e.xp6(1),e.Q6J("model",t.name.type),e.xp6(2),e.Q6J("access",t.name.access))},directives:[u.mk,u.O5,x.lW,F.gM,T.Hw,v.KE,h.Nt,l.Fj,l.Q7,l.JJ,l.On,L.S,j.h],styles:[".name-form-container[_ngcontent-%COMP%]{padding:10px 3px 4px;position:relative}.collapse[_ngcontent-%COMP%]{padding:10px 5px 6px;position:relative}.resolve[_ngcontent-%COMP%]{padding:0 20px 20px 0;color:var(--primary-color)}.text-area[_ngcontent-%COMP%]{height:12px}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;display:-ms-flexbox;display:flex;z-index:10;background-color:var(--notif-backdrop-bg-color);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:var(--notif-backdrop-color)}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%]{padding-bottom:18px}.form-row[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]{padding-right:15px}.form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .domains[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .jurisdiction[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}"]}),i}(),O=a(19975);function V(i,s){if(1&i&&(e.TgZ(0,"mat-form-field",5),e._UZ(1,"input",6),e.qZA()),2&i){var n=e.oxw();e.Q6J("floatLabel","never"),e.xp6(1),e.Q6J("formControl",n.searchControl)}}var M=function(){return[5,10,25,100]};function X(i,s){if(1&i){var n=e.EpF();e.TgZ(0,"mat-paginator",7),e.NdJ("page",function(r){e.CHM(n);var c=e.oxw();return c.pageChange(r,c.analyticsEventCategory)}),e.qZA()}if(2&i){var t=e.oxw();e.Q6J("length",t.filtered&&t.filtered.length||0)("pageIndex",t.page)("pageSize",10)("pageSizeOptions",e.DdM(4,M))}}function K(i,s){1&i&&e._UZ(0,"mat-divider",11),2&i&&e.Q6J("inset",!0)}function W(i,s){if(1&i){var n=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"app-name-form",9),e.NdJ("priorityUpdate",function(m){return e.CHM(n),e.oxw().priorityUpdated(m)})("nameDeleted",function(m){return e.CHM(n),e.oxw().deleteName(m)}),e.qZA(),e.YNc(2,K,1,1,"mat-divider",10),e.qZA()}if(2&i){var t=s.$implicit,o=s.last,r=s.index,c=e.oxw();e.Q6J("id","substance-name-"+r),e.xp6(1),e.Q6J("name",t)("standardized",c.showStd),e.xp6(1),e.Q6J("ngIf",!o)}}function G(i,s){if(1&i){var n=e.EpF();e.TgZ(0,"mat-paginator",7),e.NdJ("page",function(r){e.CHM(n);var c=e.oxw();return c.pageChange(r,c.analyticsEventCategory)}),e.qZA()}if(2&i){var t=e.oxw();e.Q6J("length",t.filtered&&t.filtered.length||0)("pageIndex",t.page)("pageSize",10)("pageSizeOptions",e.DdM(4,M))}}var _=function(){var i=function(s){function n(t,o,r,c,d){var m;return(0,g.Z)(this,n),m=function R(i,s,n){return s=(0,N.Z)(s),(0,Z.Z)(i,(0,I.Z)()?Reflect.construct(s,n||[],(0,N.Z)(i).constructor):s.apply(i,n))}(this,n,[c]),m.substanceFormNamesService=t,m.substanceFormService=o,m.scrollToService=r,m.gaService=c,m.configService=d,m.subscriptions=[],m.pageSize=10,m.showStd=!0,m.standardizeButton=!1,m.analyticsEventCategory="substance form names",m}return(0,J.Z)(n,s),(0,f.Z)(n,[{key:"ngOnInit",value:function(){var o=this;this.menuLabelUpdate.emit("Substance Names"),this.appId=this.configService.environment.appId,this.standardizeButton=this.configService.configData.showNameStandardizeButton||!1;var r=this.substanceFormService.definition.subscribe(function(d){d.definitionType&&"ALTERNATIVE"===d.definitionType?o.hiddenStateUpdate.emit(!0):(o.canAddItemUpdate.emit(!0),o.hiddenStateUpdate.emit(!1))});this.subscriptions.push(r);var c=this.substanceFormNamesService.substanceNames.subscribe(function(d){o.names=d,o.filtered=d;var m=o.searchControl.valueChanges.subscribe(function(p){o.filterList(p,o.names,o.analyticsEventCategory)},function(p){console.log(p)});o.subscriptions.push(m),o.page=0,o.pageChange()});this.subscriptions.push(c)}},{key:"ngAfterViewInit",value:function(){}},{key:"standardize",value:function(){}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(o){o.unsubscribe()})}},{key:"addItem",value:function(){this.addName()}},{key:"addName",value:function(){var o=this;this.substanceFormNamesService.addSubstanceName(),setTimeout(function(){o.scrollToService.scrollToElement("substance-name-0","center")})}},{key:"priorityUpdated",value:function(o){this.names.forEach(function(r){r!==o&&(r.displayName=!1)})}},{key:"deleteName",value:function(o){this.substanceFormNamesService.deleteSubstanceName(o)}}]),n}(P.u);return i.\u0275fac=function(n){return new(n||i)(e.Y36(S.w),e.Y36(y.B),e.Y36(z.i),e.Y36(A.$),e.Y36(U.E))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-substance-form-names-card"]],features:[e.qOj],decls:6,vars:4,consts:[[1,"flex-row"],["class","search",3,"floatLabel",4,"ngIf"],[1,"middle-fill"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page",4,"ngIf"],["class","name","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],[1,"search",3,"floatLabel"],["matInput","","placeholder","Search",3,"formControl"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["appScrollToTarget","",1,"name",3,"id"],[3,"name","standardized","priorityUpdate","nameDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,V,2,2,"mat-form-field",1),e._UZ(2,"span",2),e.qZA(),e.YNc(3,X,1,5,"mat-paginator",3),e.YNc(4,W,3,4,"div",4),e.YNc(5,G,1,5,"mat-paginator",3)),2&n&&(e.xp6(1),e.Q6J("ngIf",t.names&&t.names.length>t.pageSize),e.xp6(2),e.Q6J("ngIf",t.names&&t.names.length>5),e.xp6(1),e.Q6J("ngForOf",t.paged),e.xp6(1),e.Q6J("ngIf",t.names&&t.names.length>5))},directives:[u.O5,v.KE,h.Nt,l.Fj,l.JJ,l.oH,b.NW,u.sg,D.P,$,O.d],styles:[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:var(--text-color)}.name[_ngcontent-%COMP%]:nth-child(odd){background-color:var(--nth-child-color-2)}.name[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:var(--nth-child-color-3)}.name[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:var(--nth-child-color-1)}.name[_ngcontent-%COMP%]     .mat-expansion-panel, .name[_ngcontent-%COMP%]     .mat-table, .name[_ngcontent-%COMP%]     textarea{background-color:var(--regular-transparent-color)}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]}),i}(),q=a(64061),ee=a(7168),te=a(94673),ne=a(68390),ae=a(61534),ie=a(70178),oe=a(16531),re=a(97217),se=a(91434),me=a(88547),ce=function(){var i=(0,f.Z)(function s(){(0,g.Z)(this,s)});return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[u.ez,q.o.forChild(_),ee.O,O.t,T.Ps,x.ot,te.w,v.lN,l.UX,l.u5,b.TU,h.c,ne.Fk,ae.p9,oe.To,re.p0,ie.g,se.LD,F.AV,me.J]]}),i}()}}]);
//# sourceMappingURL=223.7537ad2cdf8c29cf.js.map