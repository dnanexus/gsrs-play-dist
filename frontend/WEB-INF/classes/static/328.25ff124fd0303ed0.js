"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[328],{70328:function(ce,_,a){a.r(_),a.d(_,{SubstanceFormCodesModule:function(){return de}});var u=a(48047),g=a(78069),p=a(36362),F=a(10853),M=a(98568),x=a(20265),O=a(24582),A=a(79550),J=a(33567),I=a(24874),w=a(66452),e=a(76442),P=a(78444),v=a(44770),f=a(43365),l=a(90587),C=a(87317),h=a(40089),Z=a(26439),N=a(51279),E=a(42827),Q=a(52149),y=a(65590),U=a(16667),D=a(84577),k=a(14521),Y=a(14900);function z(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"div",18),e._uU(1," Deleted\xa0 "),e.TgZ(2,"button",19),e.NdJ("click",function(){return e.CHM(n),e.oxw().undoDelete()}),e._UZ(3,"mat-icon",20),e.qZA(),e.qZA()}}function H(o,d){if(1&o&&(e.TgZ(0,"div",21),e.TgZ(1,"div",22),e._uU(2," Code System Type "),e.qZA(),e.TgZ(3,"div",23),e._uU(4),e.qZA(),e.qZA()),2&o){var n=e.oxw();e.xp6(4),e.hij(" ",n.codeSystemType," ")}}function L(o,d){1&o&&e._UZ(0,"mat-icon",24)}function q(o,d){1&o&&e._UZ(0,"mat-icon",25)}function $(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",2),e.TgZ(2,"mat-form-field",26),e.TgZ(3,"input",27),e.NdJ("ngModelChange",function(c){return e.CHM(n),e.oxw().trimWhitespace(c)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"div",28),e.TgZ(6,"div",29),e._uU(7,"Code text"),e.qZA(),e.TgZ(8,"textarea",30),e.NdJ("ngModelChange",function(c){return e.CHM(n),e.oxw().code.comments=c}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",2),e.TgZ(10,"div",28),e.TgZ(11,"div",29),e._uU(12,"Comments"),e.qZA(),e.TgZ(13,"textarea",31),e.NdJ("ngModelChange",function(c){return e.CHM(n),e.oxw().code.codeText=c}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",2),e.TgZ(15,"div",32),e._UZ(16,"app-domain-references",33,34),e.qZA(),e.qZA(),e.qZA()}if(2&o){var t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.code.url),e.xp6(5),e.Q6J("ngModel",t.code.comments),e.xp6(5),e.Q6J("ngModel",t.code.codeText),e.xp6(3),e.Q6J("referencesUuids",t.code.references)}}function j(o,d){if(1&o&&e._UZ(0,"app-audit-info",35),2&o){var n=e.oxw();e.Q6J("source",n.code)}}var V=function(){var o=function(){return(0,u.Z)(function d(n,t){(0,g.Z)(this,d),this.cvService=n,this.utilsService=t,this.codeDeleted=new e.vpe,this.codeSystemList=[],this.codeTypeList=[],this.viewFull=!0},[{key:"ngOnInit",value:function(){this.getVocabularies()}},{key:"code",get:function(){return this.privateCode},set:function(t){this.privateCode=t}},{key:"show",get:function(){return this.viewFull||null},set:function(t){null!=t&&(this.viewFull=t)}},{key:"getVocabularies",value:function(){var t=this;this.cvService.getDomainVocabulary("CODE_SYSTEM","CODE_TYPE").subscribe(function(i){t.codeSystemList=i.CODE_SYSTEM.list,t.codeSystemDictionary=i.CODE_SYSTEM.dictionary,t.setCodeSystemType(),t.codeTypeList=i.CODE_TYPE.list})}},{key:"deleteCode",value:function(){var t=this;this.privateCode.$$deletedCode=this.utilsService.newUUID(),!this.privateCode.codeSystem&&!this.privateCode.type&&!this.privateCode.code&&(this.deleteTimer=setTimeout(function(){t.codeDeleted.emit(t.privateCode)},2e3))}},{key:"trimWhitespace",value:function(t){this.code.url=t,this.privateCode.url=this.privateCode.url.replace(/[\u200A|\u2009|\u2006|\u2008]/g," ").trim(),this.privateCode.url=t.trim().trim().trim()}},{key:"undoDelete",value:function(){clearTimeout(this.deleteTimer),delete this.privateCode.$$deletedCode}},{key:"setCodeSystemType",value:function(t){t&&(this.code.codeSystem=t),null!=this.privateCode&&null!=this.codeSystemDictionary&&(this.codeSystemType=this.codeSystemDictionary[this.privateCode.codeSystem]&&this.codeSystemDictionary[this.privateCode.codeSystem].systemCategory||"")}},{key:"updateAccess",value:function(t){this.code.access=t}}])}();return o.\u0275fac=function(n){return new(n||o)(e.Y36(E.I),e.Y36(Q.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-code-form"]],inputs:{code:"code",show:"show"},outputs:{codeDeleted:"codeDeleted"},decls:19,vars:11,consts:[[1,"code-form-container",3,"ngClass"],["class","notification-backdrop",4,"ngIf"],[1,"form-row"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete code",3,"click"],["svgIcon","delete_forever"],["required","true","key","Code System","title","Code System","name","code",1,"code-system",3,"model","valueChange"],["class","key-value-pair code-system-type",4,"ngIf"],["domain","CODE_TYPE","title","Type","name","type",1,"type",3,"model","valueChange"],[1,"code"],["matInput","","placeholder","Code","required","","name","code",3,"ngModel","ngModelChange"],[3,"access","accessOut"],[1,"chevron"],["mat-icon-button","","matTooltip","Expand / collapse rows",1,"chevron-button",3,"click"],["svgIcon","chevron_up",4,"ngIf"],["svgIcon","chevron_down",4,"ngIf"],[4,"ngIf"],[3,"source",4,"ngIf"],[1,"notification-backdrop"],["mat-icon-button","","matTooltip","Undo",3,"click"],["svgIcon","undo"],[1,"key-value-pair","code-system-type"],[1,"key"],[1,"value"],["svgIcon","chevron_up"],["svgIcon","chevron_down"],[1,"url"],["matInput","","placeholder","Url","name","url",3,"ngModel","ngModelChange"],[1,"code-text"],[1,"textarea-label"],["placeholder","Enter text here","name","comments",3,"ngModel","ngModelChange"],["placeholder","Enter text here","name","codeText",3,"ngModel","ngModelChange"],[1,"references-container"],[3,"referencesUuids"],["references",""],[3,"source"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,z,4,0,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return t.deleteCode()}),e._UZ(5,"mat-icon",5),e.qZA(),e.qZA(),e.TgZ(6,"app-cv-input",6),e.NdJ("valueChange",function(c){return t.setCodeSystemType(c)}),e.qZA(),e.YNc(7,H,5,1,"div",7),e.TgZ(8,"app-cv-input",8),e.NdJ("valueChange",function(c){return t.code.type=c}),e.qZA(),e.TgZ(9,"mat-form-field",9),e.TgZ(10,"input",10),e.NdJ("ngModelChange",function(c){return t.code.code=c}),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"app-access-manager",11),e.NdJ("accessOut",function(c){return t.updateAccess(c)}),e.qZA(),e.qZA(),e.TgZ(13,"div",12),e.TgZ(14,"button",13),e.NdJ("click",function(){return t.viewFull=!t.viewFull}),e.YNc(15,L,1,0,"mat-icon",14),e.YNc(16,q,1,0,"mat-icon",15),e.qZA(),e.qZA(),e.qZA(),e.YNc(17,$,18,4,"div",16),e.YNc(18,j,1,1,"app-audit-info",17),e.qZA()),2&n&&(e.Q6J("ngClass",t.viewFull?"code-form-container":"collapse"),e.xp6(1),e.Q6J("ngIf",t.code.$$deletedCode),e.xp6(5),e.Q6J("model",t.code.codeSystem),e.xp6(1),e.Q6J("ngIf",t.code.codeSystem),e.xp6(1),e.Q6J("model",t.code.type),e.xp6(2),e.Q6J("ngModel",t.code.code),e.xp6(2),e.Q6J("access",t.code.access),e.xp6(3),e.Q6J("ngIf",t.viewFull),e.xp6(1),e.Q6J("ngIf",!t.viewFull),e.xp6(1),e.Q6J("ngIf",!t.code.$$deletedCode&&t.viewFull),e.xp6(1),e.Q6J("ngIf",t.viewFull))},directives:[p.mk,p.O5,C.lW,h.gM,y.Hw,U.S,v.KE,f.Nt,l.Fj,l.Q7,l.JJ,l.On,D.h,k.V,Y.n],styles:[".code-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative}.collapse[_ngcontent-%COMP%]{padding:20px 10px 12px;position:relative}.resolve[_ngcontent-%COMP%]{padding:0 20px 20px 0;color:var(--primary-color)}.chevron[_ngcontent-%COMP%]{width:20px;line-height:67px;color:var(--chevron-color)}.chevron-button[_ngcontent-%COMP%]{width:20px}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;display:-ms-flexbox;display:flex;z-index:10;background-color:var(--notif-backdrop-bg-color);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:var(--notif-backdrop-color)}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .code-system[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .code-system-type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .code-text[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}.key-value-pair[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:start;align-self:flex-start}.key-value-pair[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{font-size:11px;padding-bottom:3.5px;line-height:11px;color:var(--dark-label-color);font-weight:400;font-family:Roboto,Helvetica Neue,sans-serif}.key-value-pair[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:15.5px}.references-container[_ngcontent-%COMP%]{width:100%}"]}),o}(),b=a(19975);function R(o,d){if(1&o&&(e.TgZ(0,"mat-form-field",7),e._UZ(1,"input",8),e.qZA()),2&o){var n=e.oxw();e.Q6J("floatLabel","never"),e.xp6(1),e.Q6J("formControl",n.searchControl)}}function B(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(n),e.oxw().collapse()}),e._uU(1),e.qZA()}if(2&o){var t=e.oxw();e.xp6(1),e.hij("",t.expanded?"Collapse":"Expand"," All")}}var S=function(){return[5,10,25,100]};function X(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"mat-paginator",10),e.NdJ("page",function(c){e.CHM(n);var r=e.oxw();return r.pageChange(c,r.analyticsEventCategory)}),e.qZA()}if(2&o){var t=e.oxw();e.Q6J("length",t.filtered&&t.filtered.length||0)("pageIndex",t.page)("pageSize",10)("pageSizeOptions",e.DdM(4,S))}}function K(o,d){1&o&&e._UZ(0,"mat-divider",14),2&o&&e.Q6J("inset",!0)}function G(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"app-code-form",12),e.NdJ("codeDeleted",function(T){return e.CHM(n),e.oxw().deleteCode(T)}),e.qZA(),e.YNc(2,K,1,1,"mat-divider",13),e.qZA()}if(2&o){var t=d.$implicit,i=d.last,c=d.index,r=e.oxw();e.Q6J("id","substance-code-"+c),e.xp6(1),e.Q6J("code",t)("show",r.expanded),e.xp6(1),e.Q6J("ngIf",!i)}}function ee(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"mat-paginator",10),e.NdJ("page",function(c){e.CHM(n);var r=e.oxw();return r.pageChange(c,r.analyticsEventCategory)}),e.qZA()}if(2&o){var t=e.oxw();e.Q6J("length",t.filtered&&t.filtered.length||0)("pageIndex",t.page)("pageSize",10)("pageSizeOptions",e.DdM(4,S))}}function te(o,d){if(1&o){var n=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"span",2),e.TgZ(2,"button",16),e.NdJ("click",function(){return e.CHM(n),e.oxw().addCode()}),e._uU(3," Add code "),e._UZ(4,"mat-icon",17),e.qZA(),e.qZA()}if(2&o){var t=e.oxw();e.xp6(2),e.Q6J("disabled",t.isAlternative)}}var oe=function(){var o=function(d){function n(t,i,c,r){var s;return(0,g.Z)(this,n),s=function W(o,d,n){return d=(0,x.Z)(d),(0,F.Z)(o,(0,M.Z)()?Reflect.construct(d,n||[],(0,x.Z)(o).constructor):d.apply(o,n))}(this,n,[r]),s.substanceFormCodesService=t,s.substanceFormService=i,s.scrollToService=c,s.gaService=r,s.subscriptions=[],s.pageSize=10,s.expanded=!0,s.validate=!1,s.analyticsEventCategory="substance form codes",s}return(0,O.Z)(n,d),(0,u.Z)(n,[{key:"ngOnInit",value:function(){this.menuLabelUpdate.emit("Codes")}},{key:"collapse",value:function(){this.expanded=!this.expanded}},{key:"ngAfterViewInit",value:function(){var i=this,c=this.substanceFormService.definition.subscribe(function(s){s.definitionType&&"ALTERNATIVE"===s.definitionType?i.hiddenStateUpdate.emit(!0):(i.canAddItemUpdate.emit(!0),i.hiddenStateUpdate.emit(!1))});this.subscriptions.push(c);var r=this.substanceFormCodesService.substanceCodes.subscribe(function(s){i.codes=s,i.filtered=s;var T=i.searchControl.valueChanges.subscribe(function(m){i.filterList(m,i.codes,i.analyticsEventCategory)},function(m){console.log(m)});i.subscriptions.push(T),i.page=0,i.pageChange()});this.subscriptions.push(r)}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(i){i.unsubscribe()})}},{key:"addItem",value:function(){this.addCode()}},{key:"addCode",value:function(){var i=this;this.substanceFormCodesService.addSubstanceCode(),setTimeout(function(){i.scrollToService.scrollToElement("substance-code-0","center")})}},{key:"deleteCode",value:function(i){this.substanceFormCodesService.deleteSubstanceCode(i)}}])}(A.u);return o.\u0275fac=function(n){return new(n||o)(e.Y36(w.W),e.Y36(J.B),e.Y36(P.i),e.Y36(I.$))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-substance-form-codes-card"]],features:[e.qOj],decls:8,vars:6,consts:[[1,"flex-row"],["class","search",3,"floatLabel",4,"ngIf"],[1,"middle-fill"],["class","standardize","mat-button","","matTooltip","expand / collapse code view rows",3,"click",4,"ngIf"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page",4,"ngIf"],["class","code","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],["style","display: flex;",4,"ngIf"],[1,"search",3,"floatLabel"],["matInput","","placeholder","Search",3,"formControl"],["mat-button","","matTooltip","expand / collapse code view rows",1,"standardize",3,"click"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["appScrollToTarget","",1,"code",3,"id"],[3,"code","show","codeDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"],[2,"display","flex"],["mat-button","",3,"disabled","click"],["svgIcon","add_circle_outline"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,R,2,2,"mat-form-field",1),e._UZ(2,"span",2),e.YNc(3,B,2,1,"button",3),e.qZA(),e.YNc(4,X,1,5,"mat-paginator",4),e.YNc(5,G,3,4,"div",5),e.YNc(6,ee,1,5,"mat-paginator",4),e.YNc(7,te,5,1,"div",6)),2&n&&(e.xp6(1),e.Q6J("ngIf",t.codes&&t.codes.length>t.pageSize),e.xp6(2),e.Q6J("ngIf",t.codes&&t.codes.length>0),e.xp6(1),e.Q6J("ngIf",t.codes&&t.codes.length>5),e.xp6(1),e.Q6J("ngForOf",t.paged),e.xp6(1),e.Q6J("ngIf",t.codes&&t.codes.length>5),e.xp6(1),e.Q6J("ngIf",t.codes&&t.codes.length>0))},directives:[p.O5,v.KE,f.Nt,l.Fj,l.JJ,l.oH,C.lW,h.gM,Z.NW,p.sg,N.P,V,b.d,y.Hw],styles:[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:var(--text-color)}.code[_ngcontent-%COMP%]:nth-child(odd){background-color:var(--nth-child-color-2)}.code[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:var(--nth-child-color-3)}.code[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:var(--nth-child-color-1)}.code[_ngcontent-%COMP%]     .mat-expansion-panel, .code[_ngcontent-%COMP%]     .mat-table, .code[_ngcontent-%COMP%]     textarea{background-color:var(--regular-transparent-color)}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]}),o}(),ne=a(64061),ie=a(7168),ae=a(94673),de=function(){var o=(0,u.Z)(function d(){(0,g.Z)(this,d)});return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,ne.o.forChild(oe),ie.O,b.t,y.Ps,C.ot,ae.w,v.lN,l.UX,l.u5,Z.TU,f.c,h.AV]]}),o}()}}]);
//# sourceMappingURL=328.25ff124fd0303ed0.js.map