(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[4874],{54874:function(y,T,n){"use strict";n.r(T),n.d(T,{SubstanceFormSubunitsModule:function(){return Ct}});var a=n(48047),l=n(78069),f=n(36362),h=n(75143),b=n(80206),S=n(98568),x=n(20265),_=n(24582),Z=n(33567),F=n(40104),u=(n(27299),n(79550)),p=n(18291),d=n(39401),m=n(39233),t=n(76442),U=n(78444),q=n(95758),M=n(54244),D=n(87317),I=n(65590),k=n(31959),E=n(51279),Y=n(15541),j=n(21109);function B(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(o);var r=t.oxw(2).$implicit;return t.oxw(2).select(r.subunitIndex)}),t._uU(1),t.qZA()}if(2&s){var e=t.oxw(2).$implicit;t.xp6(1),t.hij(" Copy From Subunit ",e.subunitIndex," ")}}function L(s,c){if(1&s&&(t.TgZ(0,"div",10),t.YNc(1,B,2,1,"button",11),t.qZA()),2&s){var o=t.oxw().$implicit,e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.subunitIndex!==e.unit)}}function z(s,c){if(1&s&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&s){var o=t.oxw().$implicit;t.xp6(1),t.hij(" Subunit ",o.subunitIndex," is not applicable ")}}function V(s,c){if(1&s&&(t.TgZ(0,"div",8),t.YNc(1,L,2,1,"div",9),t.YNc(2,z,2,1,"div",9),t.qZA()),2&s){var o=c.$implicit,e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.sequence==e.sequence),t.xp6(1),t.Q6J("ngIf",o.sequence!==e.sequence)}}function G(s,c){if(1&s&&(t.TgZ(0,"span"),t.YNc(1,V,3,2,"div",7),t.qZA()),2&s){var o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.units)}}function X(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",13),t._uU(2),t.qZA(),t.TgZ(3,"div",13),t.TgZ(4,"button",12),t.NdJ("click",function(){return t.CHM(o),t.oxw().confirm()}),t._uU(5,"Confirm"),t.qZA(),t._UZ(6,"span",6),t.TgZ(7,"button",12),t.NdJ("click",function(){return t.CHM(o),t.oxw().cancel()}),t._uU(8,"Cancel"),t.qZA(),t.qZA(),t.qZA()}if(2&s){var e=t.oxw();t.xp6(2),t.lnq(" Are you sure you want to copy the disulfide links from subunit ",e.selected," to subunit ",e.unit,"? Any disulfide links on subunit ",e.unit," will be erased and overwritten. ")}}function W(s,c){if(1&s&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&s){var o=t.oxw();t.xp6(1),t.hij(" ",o.message,"\n")}}var K=function(){var s=function(){function c(o,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,l.Z)(this,c),this.dialogRef=o,this.subService=e,this.data=i,this.showButtons=!0,o.disableClose=!0}return(0,a.Z)(c,[{key:"ngOnInit",value:function(){var e=this;this.unit=this.data.unit,this.sequence=this.data.full.sequence,this.subService.substanceSubunits.subscribe(function(i){e.units=i})}},{key:"select",value:function(e){this.selected=e,this.showButtons=!1}},{key:"confirm",value:function(){var e=this;this.subService.copyDisulfideLinks(this.unit,this.selected),this.selected=null,this.message="Copying...",setTimeout(function(){e.message="Links successfully copied over."},500)}},{key:"cancel",value:function(){this.selected=null,this.showButtons=!0}}]),c}();return s.\u0275fac=function(o){return new(o||s)(t.Y36(q.so),t.Y36(Z.B),t.Y36(q.WI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-copy-disulfide-dialog"]],decls:12,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"form-row","desc"],[4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","","color","primary","matDialogClose",""],[1,"middle-fill"],["class","form-column",4,"ngFor","ngForOf"],[1,"form-column"],["class","option",4,"ngIf"],[1,"option"],["mat-button","",3,"click",4,"ngIf"],["mat-button","",3,"click"],[1,"form-row"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t._uU(1," Copy Disulfide Links "),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t._uU(4," Copy intra-connected disulfide links from one subunit to another with an identical sequence. "),t.qZA(),t.YNc(5,G,2,1,"span",3),t.qZA(),t.YNc(6,X,9,3,"div",3),t.YNc(7,W,2,1,"div",3),t.TgZ(8,"div",4),t.TgZ(9,"button",5),t._uU(10,"Close"),t.qZA(),t._UZ(11,"span",6),t.qZA()),2&o&&(t.xp6(5),t.Q6J("ngIf",e.showButtons),t.xp6(1),t.Q6J("ngIf",e.selected),t.xp6(1),t.Q6J("ngIf",e.message))},directives:[q.uh,q.xY,f.O5,f.sg,D.lW,q.H8,q.ZT],styles:[".form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:row;flex-direction:row;margin-bottom:15px}.option[_ngcontent-%COMP%]{padding:10px}.desc[_ngcontent-%COMP%]{margin-bottom:30px}"]}),s}(),tt=n(98002),R=n(40089),$=n(90587),et=n(14900);function nt(s,c){1&s&&(t.TgZ(0,"div",24),t._uU(1," Deleted\xa0 "),t.qZA())}function it(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(o),t.oxw().convertSequence()}),t._uU(1," convert"),t.qZA()}}function ot(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(o),t.oxw().copyDisulfides()}),t._uU(1," copy disulfide links"),t.qZA()}}function st(s,c){if(1&s&&(t.TgZ(0,"span",36),t.TgZ(1,"span",37),t._uU(2),t.qZA(),t.qZA()),2&s){var o=c.$implicit,e=t.oxw(4);t.xp6(1),t.s9C("matTooltip",e.getTooltipMessage(e.subunitSequence.subunitIndex,o.unitIndex,o.unitValue,o.class||"").join("\n")),t.Q6J("ngClass",o.class),t.xp6(1),t.Oqu(o.unitValue)}}function rt(s,c){if(1&s&&(t.TgZ(0,"div",32),t.TgZ(1,"div",33),t._uU(2),t.qZA(),t.TgZ(3,"div",34),t.YNc(4,st,3,3,"span",35),t.qZA(),t.qZA()),2&s){var o=c.$implicit,e=c.last,i=t.oxw().last,r=t.oxw(2);t.Q6J("ngClass",i&&e?"last-section":""),t.xp6(2),t.Oqu(o[1]),t.xp6(2),t.Q6J("ngForOf",r.subunitSequence.subunits.slice(o[0],o[1]))}}function ut(s,c){if(1&s&&(t.TgZ(0,"div",30),t.YNc(1,rt,5,3,"div",31),t.qZA()),2&s){var o=c.$implicit;t.xp6(1),t.Q6J("ngForOf",o)}}function at(s,c){if(1&s&&(t.TgZ(0,"div",27),t.TgZ(1,"div",28),t.YNc(2,ut,2,1,"div",29),t.qZA(),t.qZA()),2&s){var o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.subunitSequence.subsections)}}function ct(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"div"),t._uU(1),t.TgZ(2,"button",38),t.NdJ("click",function(){return t.CHM(o),t.oxw().generateSites("DNA")}),t._uU(3,"DNA"),t.qZA(),t.TgZ(4,"button",38),t.NdJ("click",function(){return t.CHM(o),t.oxw().generateSites("RNA")}),t._uU(5,"RNA"),t.qZA(),t._uU(6," sequence "),t.qZA()}if(2&s){var e=t.oxw();t.xp6(1),t.hij(" Generate",e.sequenceType?"d":""," links and sugars for this subunit as a "),t.xp6(1),t.Q6J("ngClass","DNA"===e.sequenceType?"generated":""),t.xp6(2),t.Q6J("ngClass","RNA"===e.sequenceType?"generated":"")}}var lt=function(){var s=function(){function c(o,e,i,r,g,v,O,A){(0,l.Z)(this,c),this.substanceFormService=o,this.substanceFormLinksService=e,this.scrollToService=i,this.gaService=r,this.cvService=g,this.dialog=v,this.overlayContainerService=O,this.router=A,this.subunitDeleted=new t.vpe,this.vocabulary={},this.subscriptions=[],this.toggle={},this.allSites=[],this.features=[],this.sequenceSites=[],this.sequenceType="",this.validArray=[]}return(0,a.Z)(c,[{key:"ngOnInit",value:function(){var e=this;this.allSites=[],this.overlayContainer=this.overlayContainerService.getContainerElement(),""===this.subunit.sequence&&(this.toggle[this.subunit.subunitIndex]=!0),this.substanceFormService.definition.subscribe(function(r){e.substanceType=r.substanceClass,e.searchType="protein"===e.substanceType?"Protein":"Nucleicacid",e.getVocabularies()}).unsubscribe()}},{key:"ngAfterViewInit",value:function(){var e=this;setTimeout(function(){var r=e.substanceFormService.subunitDisplaySequences.subscribe(function(g){var v=g.filter(function(O){return O.subunitIndex===e.subunit.subunitIndex})[0];(!e.subunitSequence||!Y(e.subunitSequence,v))&&(e.subunitSequence&&JSON.stringify(e.subunitSequence)!==JSON.stringify(v)?(e.subunitSequence=v,setTimeout(function(){e.allSites&&e.addStyle()})):e.subunitSequence=v)});e.subscriptions.push(r)});var i=this.substanceFormService.allSites.subscribe(function(r){var g=[];r.forEach(function(v){v.subunit===e.subunit.subunitIndex&&g.push(v)}),e.allSites&&e.allSites!==g?(e.allSites=g,setTimeout(function(){e.subunitSequence&&e.addStyle()})):e.allSites||(e.allSites=g)});this.subscriptions.push(i),setTimeout(function(){})}},{key:"ngOnChanges",value:function(e){}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){e.unsubscribe()})}},{key:"getVocabularies",value:function(){var e=this,i={value:"X",display:"Non-standard Residue"};"protein"===this.substanceType?this.cvService.getDomainVocabulary("AMINO_ACID_RESIDUE").subscribe(function(r){for(var g in e.vocabulary=r.AMINO_ACID_RESIDUE.dictionary,e.vocabulary.X=i,e.vocabulary)e.validArray.push(e.vocabulary[g].value)},function(r){}):this.cvService.getDomainVocabulary("NUCLEIC_ACID_BASE").subscribe(function(r){for(var g in e.vocabulary=r.NUCLEIC_ACID_BASE.dictionary,e.vocabulary.X=i,e.vocabulary)e.validArray.push(e.vocabulary[g].value)},function(r){})}},{key:"addStyle",value:function(){var e=this;this.subunitSequence&&this.subunitSequence.subunits&&this.allSites.forEach(function(i){e.subunitSequence.subunits&&(e.subunitSequence.subunits[i.residue-1].class=e.subunitSequence.subunits[i.residue-1].class&&e.subunitSequence.subunits[i.residue-1].class!==i.type?e.subunitSequence.subunits[i.residue-1].class+" "+i.type:i.type)})}},{key:"getTooltipMessage",value:function(e,i,r,g){var v=void 0===this.vocabulary[r.toUpperCase()]?"UNDEFINED":this.vocabulary[r.toUpperCase()].display,O=[],A={modification:"Structural Modification",other:"Other Link","C-Glycosylation":"C-Glycosylation","N-Glycosylation":"N-Glycosylation","O-Glycosylation":"O-Glycosylation",feature:this.substanceType.toUpperCase()+" Feature",disulfide:"Disulfide Link"};return O.push("".concat(e," - ").concat(i,": ").concat(r.toUpperCase()," (").concat(v,")")),g.split(" ").forEach(function(w){O.push(A[w]||"")}),O}},{key:"copyDisulfides",value:function(){var e=this,i=this.dialog.open(K,{data:{unit:this.subunit.subunitIndex,full:this.subunit},width:"600px"});this.overlayContainer.style.zIndex="1002",i.afterClosed().subscribe(function(g){e.overlayContainer.style.zIndex=null})}},{key:"search",value:function(){var e=this.makeRandom();sessionStorage.setItem("gsrs_edit_sequence_"+e,JSON.stringify(this.subunit.sequence));var r=window.location.href.replace(this.router.url,"")+this.router.serializeUrl(this.router.createUrlTree(["/sequence-search"],{queryParams:{seq_type:this.searchType,source:"edit",source_id:e}}));window.open(r,"_blank")}},{key:"makeRandom",value:function(){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",r=0;r<6;r++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}},{key:"editSubunit",value:function(e,i){this.toggle[e.subunitIndex]=!this.toggle[e.subunitIndex],!1===this.toggle[e.subunitIndex]?(this.subunit.sequence=i.trim().replace(/\s/g,""),this.substanceFormService.emitSubunitUpdate(),this.substanceFormService.recalculateCysteine()):(this.editSequence=this.preformatSeq(this.subunit.sequence),setTimeout(function(){var r=document.getElementsByClassName("sequence-textarea");[].forEach.call(r,function(g){g.style.height=g.scrollHeight+10+"px"})}))}},{key:"change",value:function(e){!1===this.toggle[this.subunit.subunitIndex]&&(e.target.value=this.subunit.sequence)}},{key:"deleteSubunit",value:function(){this.subunitDeleted.emit(this.subunit)}},{key:"preformatSeq",value:function(e){var i="";if(e)for(var r=0;r<e.length;r+=10)r%50==0&&(i+="\n"),i+=e.substr(r,10)+"     ";return i.trim()}},{key:"cleanSequence",value:function(){var e=this;if(this.toggle[this.subunit.subunitIndex]){var v=this.editSequence.replace(/\s/g,"").split("").filter(function(O){return e.validArray.indexOf(O.toUpperCase())>=0}).toString().replace(/,/g,"").trim();"protein"!==this.substanceType&&(v=v.toUpperCase()),this.editSequence=this.preformatSeq(v)}else{var r=this.subunit.sequence.split("").filter(function(O){return e.validArray.indexOf(O.toUpperCase())>=0}).toString().replace(/,/g,"").trim();"protein"!==this.substanceType&&(r=r.toUpperCase()),r!==this.subunit.sequence&&(this.subunit.sequence=r,this.substanceFormService.emitSubunitUpdate(),this.substanceFormService.recalculateCysteine())}}},{key:"convertSequence",value:function(){var r=[],g={},v="";r="A\tAla;C\tCys;D\tAsp;E\tGlu;F\tPhe;G\tGly;H\tHis;I\tIle;K\tLys;L\tLeu;M\tMet;N\tAsn;P\tPro;Q\tGln;R\tArg;S\tSer;T\tThr;V\tVal;W\tTrp;Y\tTyr".split(";");for(var O=0;O<r.length;O++){var A=[];g[(A=r[O].split("\t"))[0]]=A[1],g[A[1].toUpperCase()]=A[0]}var C=[];C=this.toggle[this.subunit.subunitIndex]?this.editSequence.replace(/[ ]/g,"-").split("-"):this.subunit.sequence.replace(/[ ]/g,"-").split("-");for(var w=0;w<C.length;w++){var J=g[C[w].toUpperCase()];C[w].length>3?v+=C[w]:(void 0===J&&(J="X"),v+=J)}this.toggle[this.subunit.subunitIndex]?this.editSequence=v:(this.subunit.sequence=v,this.substanceFormService.emitSubunitUpdate(),this.substanceFormService.recalculateCysteine())}},{key:"generateSites",value:function(e){var i=this;this.sequenceType=e;var v,r=this.substanceFormService.substanceSugars.subscribe(function(N){i.sugars=N}),g=this.substanceFormLinksService.substanceLinks.subscribe(function(N){i.links=N});v="DNA"===e?"dR":"R",this.sugars.forEach(function(N){N.sites=N.sites.filter(function(Q){return Q.subunitIndex!==i.subunit.subunitIndex})});var O=[];if(null!=this.subunit&&null!=this.subunit.sequence)for(var A=1;A<=this.subunit.sequence.length;A++)O.push({subunitIndex:this.subunit.subunitIndex,residueIndex:A});this.sugars.push({sugar:v,sites:O}),this.links.forEach(function(N){N.sites=N.sites.filter(function(Q){return Q.subunitIndex!==i.subunit.subunitIndex})});var w=[];if(null!=this.subunit&&null!=this.subunit.sequence)for(var J=2;J<=this.subunit.sequence.length;J++)w.push({subunitIndex:this.subunit.subunitIndex,residueIndex:J});this.links.push({linkage:"P",sites:w}),this.substanceFormService.emitSugarUpdate(),this.substanceFormService.emitLinkUpdate(),g.unsubscribe(),r.unsubscribe()}}]),c}();return s.\u0275fac=function(o){return new(o||s)(t.Y36(Z.B),t.Y36(j.e),t.Y36(U.i),t.Y36(F.$),t.Y36(p.I),t.Y36(q.uw),t.Y36(M.Xj),t.Y36(tt.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-subunit-form"]],inputs:{subunit:"subunit",view:"view",sites:"sites"},outputs:{subunitDeleted:"subunitDeleted"},features:[t.TTD],decls:30,vars:12,consts:[[1,"subunit-container"],["class","notification-backdrop",4,"ngIf"],[1,"form-row"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete link",3,"click"],["svgIcon","delete_forever"],[1,"subunit-label"],[1,"buttons"],[1,"mat-button","mat-primary","action-button",3,"click"],[1,"mat-button","action-button","mat-primary",3,"click"],[1,"spacer"],["class","mat-button action-button mat-primary convert","matTooltip","convert 3 letter sequence to 1 letter",3,"click",4,"ngIf"],["matTooltip","search for sequence in a new tab",1,"button-link",3,"click"],["class","mat-button action-button mat-primary","matTooltip","copy disulfides from another subunit",3,"click",4,"ngIf"],[1,"subunit-edit",3,"ngClass"],["cdkAutosizeMinRows","3","placeholder","Enter sequence here","name","edit",1,"sequence-textarea",3,"ngModel","ngModelChange","change"],["sequence",""],[3,"ngClass"],[1,"nest"],[1,"subunit"],[1,"raw-sequence"],["class","subunit-sequence",4,"ngIf"],[4,"ngIf"],[3,"source"],[1,"notification-backdrop"],["matTooltip","convert 3 letter sequence to 1 letter",1,"mat-button","action-button","mat-primary","convert",3,"click"],["matTooltip","copy disulfides from another subunit",1,"mat-button","action-button","mat-primary",3,"click"],[1,"subunit-sequence"],[1,"responsive"],["class","sequence-section-group",4,"ngFor","ngForOf"],[1,"sequence-section-group"],["class","sequence-section",3,"ngClass",4,"ngFor","ngForOf"],[1,"sequence-section",3,"ngClass"],[1,"section-number"],[1,"section-units-container"],["class","section-unit",4,"ngFor","ngForOf"],[1,"section-unit"],["matTooltipClass","unit-tooltip",1,"selectedSite","siteref",3,"matTooltip","ngClass"],["mat-button","",3,"ngClass","click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,nt,2,0,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return e.deleteSubunit()}),t._UZ(5,"mat-icon",5),t.qZA(),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.qZA(),t.TgZ(8,"div",7),t.TgZ(9,"button",8),t.NdJ("click",function(){return e.editSubunit(e.subunit,e.editSequence)}),t._uU(10),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return e.cleanSequence()}),t._uU(12," clean"),t.qZA(),t._UZ(13,"span",10),t.YNc(14,it,2,0,"button",11),t.TgZ(15,"a",12),t.NdJ("click",function(){return e.search()}),t._uU(16,"sequence search"),t.qZA(),t.YNc(17,ot,2,0,"button",13),t.qZA(),t.qZA(),t.TgZ(18,"div",14),t.TgZ(19,"textarea",15,16),t.NdJ("ngModelChange",function(r){return e.editSequence=r})("change",function(){return e.editSubunit(e.subunit,e.editSequence)}),t.qZA(),t.qZA(),t.TgZ(21,"div",17),t.TgZ(22,"div",18),t.TgZ(23,"div",19),t.TgZ(24,"div",20),t._uU(25),t.qZA(),t.qZA(),t.qZA(),t.YNc(26,at,3,1,"div",21),t.qZA(),t.TgZ(27,"div",2),t.YNc(28,ct,7,3,"div",22),t.qZA(),t._UZ(29,"app-audit-info",23),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.subunit.$$deletedCode),t.xp6(6),t.hij("Subunit ",e.subunit.subunitIndex,""),t.xp6(3),t.hij(" ",e.toggle[e.subunit.subunitIndex]?"save":"edit",""),t.xp6(4),t.Q6J("ngIf","nucleicAcid"!==e.substanceType),t.xp6(3),t.Q6J("ngIf","protein"===e.substanceType),t.xp6(1),t.Q6J("ngClass",e.toggle[e.subunit.subunitIndex]?"show":"hide"),t.xp6(1),t.Q6J("ngModel",e.editSequence),t.xp6(2),t.Q6J("ngClass",e.toggle[e.subunit.subunitIndex]?"hide":"show"),t.xp6(4),t.Oqu(e.subunit.sequence),t.xp6(1),t.Q6J("ngIf",e.subunitSequence),t.xp6(2),t.Q6J("ngIf","nucleicAcid"===e.substanceType),t.xp6(1),t.Q6J("source",e.subunit))},directives:[f.O5,D.lW,R.gM,I.Hw,f.mk,$.Fj,$.JJ,$.On,f.sg,et.n],styles:[".details[_ngcontent-%COMP%]   .subunit[_ngcontent-%COMP%]{display:none}.details[_ngcontent-%COMP%]   .subunit-sequence[_ngcontent-%COMP%]{display:block}.sequence-textarea[_ngcontent-%COMP%]{font-size:14px;letter-spacing:2px}.show[_ngcontent-%COMP%]{display:block}.hide[_ngcontent-%COMP%]{display:none}.raw[_ngcontent-%COMP%]   .subunit[_ngcontent-%COMP%]{display:block}.raw[_ngcontent-%COMP%]   .subunit-sequence[_ngcontent-%COMP%]{display:none}.subunit-sequence[_ngcontent-%COMP%]{margin-bottom:30px}.sequence-section-group[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex;margin-bottom:10px}.section-number[_ngcontent-%COMP%]{text-align:right;padding:0 10px;font-size:.8em}.sequence-section[_ngcontent-%COMP%]{-ms-flex-positive:0;flex-grow:0;padding:0 10px;-ms-flex-preferred-size:20%;flex-basis:20%;-ms-flex-negative:0;flex-shrink:0}.section-units-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.section-units-container[_ngcontent-%COMP%]   .section-unit[_ngcontent-%COMP%]:hover{cursor:default}.subunit[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:20px}.subunit[_ngcontent-%COMP%]:not(:last-child){border-bottom:solid 1px var(--box-shadow-color-3)}.raw-sequence[_ngcontent-%COMP%]{word-break:break-all;line-height:26px}.filters-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.subunit-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;display:-ms-flexbox;display:flex;z-index:10;background-color:var(--notif-backdrop-bg-color);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:var(--notif-backdrop-color)}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;margin-top:20px}.delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0;width:30px}.subunit-label[_ngcontent-%COMP%]{font-size:18px;font-weight:400;padding-top:0;margin-top:10px;padding-left:30px;width:20%}.buttons[_ngcontent-%COMP%]{width:75%;display:-ms-flexbox;display:flex}.action-button[_ngcontent-%COMP%]{margin:5px}.glycosylation[_ngcontent-%COMP%]{color:var(--regular-white-color);background-color:var(--regular-darkgreen-color)}.disulfide[_ngcontent-%COMP%]{color:#fff;background-color:#cca300}.other[_ngcontent-%COMP%]{color:var(--regular-white-color);background-color:var(--regular-darkslateblue-color)}.glycosylation[_ngcontent-%COMP%]{color:#fff;background-color:#608000}.N-Glycosylation[_ngcontent-%COMP%]{color:#fff;background-color:#06c}.C-Glycosylation[_ngcontent-%COMP%]{color:#fff;background-color:gray}.O-Glycosylation[_ngcontent-%COMP%]{color:#fff;background-color:#f66}.feature[_ngcontent-%COMP%]{border-top:1px solid var(--regular-magenta-color);border-bottom:1px solid var(--regular-magenta-color)}.modification[_ngcontent-%COMP%]{color:var(--regular-white-color);background-color:var(--regular-darkolivegreen-color)}.selectedSite[_ngcontent-%COMP%]{display:block;text-align:center}.last-section[_ngcontent-%COMP%]{-ms-flex-preferred-size:0!important;flex-basis:0!important}.siteref[_ngcontent-%COMP%]{display:block;width:15.5px!important;text-align:center}.generated[_ngcontent-%COMP%]{background-color:var(--box-shadow-color-2)}.subunit-container[_ngcontent-%COMP%]{padding:5px}.button-link[_ngcontent-%COMP%]{color:var(--primary-color);text-decoration:none;vertical-align:middle;font-weight:500;text-align:center;line-height:46px}.convert[_ngcontent-%COMP%]{padding-right:40px}.spacer[_ngcontent-%COMP%]{width:15%}.error[_ngcontent-%COMP%]{color:var(--regular-red-color)}"]}),s}(),H=n(19975);function pt(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"button",2),t.NdJ("click",function(){return t.CHM(o),t.oxw().openAnyDialog()}),t._uU(2," Add Any Site Type "),t._UZ(3,"mat-icon",3),t.qZA(),t.qZA()}}function dt(s,c){1&s&&t._UZ(0,"mat-divider",18),2&s&&t.Q6J("inset",!0)}function gt(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"div",15),t.TgZ(1,"app-subunit-form",16),t.NdJ("subunitDeleted",function(O){return t.CHM(o),t.oxw().deleteSubunit(O)}),t.qZA(),t.YNc(2,dt,1,1,"mat-divider",17),t.qZA()}if(2&s){var e=c.$implicit,i=c.last,r=c.index,g=t.oxw();t.Q6J("id","substance-subunit-"+r),t.xp6(1),t.Q6J("subunit",e)("view",g.substanceType),t.xp6(1),t.Q6J("ngIf",!i)}}function vt(s,c){if(1&s){var o=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return t.CHM(o),t.oxw().addSubunit()}),t._uU(3," Add Subunit "),t._UZ(4,"mat-icon",3),t.qZA(),t.qZA(),t.qZA()}}var bt=function(){var s=function(c){function o(e,i,r,g,v,O,A){var C;return(0,l.Z)(this,o),C=function ft(s,c,o){return c=(0,x.Z)(c),(0,b.Z)(s,(0,S.Z)()?Reflect.construct(c,o||[],(0,x.Z)(s).constructor):c.apply(s,o))}(this,o,[r]),C.substanceFormService=e,C.scrollToService=i,C.gaService=r,C.cvService=g,C.dialog=v,C.overlayContainerService=O,C.substanceFormPropertiesService=A,C.subunits=[],C.subunitSequences=[],C.vocabulary={},C.subscriptions=[],C.toggle={},C.view="details",C.sequenceType="",C.allSites=[],C.subcount=0,C.sequenceSites=[],C.analyticsEventCategory="substance form subunits",C}return(0,_.Z)(o,c),(0,a.Z)(o,[{key:"ngOnInit",value:function(){this.menuLabelUpdate.emit("Subunits"),this.overlayContainer=this.overlayContainerService.getContainerElement()}},{key:"ngAfterViewInit",value:function(){var i=this;this.substanceFormService.definition.subscribe(function(v){i.substanceType=v.substanceClass}).unsubscribe(),this.canAddItemUpdate.emit(!0);var g=this.substanceFormService.substanceSubunits.subscribe(function(v){i.subunits=v,i.filtered=v,i.subunits.forEach(function(O){i.allSites[O.subunitIndex]=[]})});this.subscriptions.push(g)}},{key:"getSites",value:function(i){return this.subcount=this.subcount+1,this.allSites[i]}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(i){i.unsubscribe()})}},{key:"updateView",value:function(i){this.gaService.sendEvent(this.analyticsEventCategory,"button:view-update",i.value),this.view=i.value}},{key:"addItem",value:function(){this.addSubunit()}},{key:"addSubunit",value:function(){var i=this;this.substanceFormService.addSubstanceSubunit();var r="substance-subunit-"+(this.subunits.length-1);setTimeout(function(){i.scrollToService.scrollToElement(r,"center")}),this.substanceFormService.emitSubunitUpdate()}},{key:"deleteSubunit",value:function(i){this.substanceFormService.deleteSubstanceSubunit(i)}},{key:"getSequence",value:function(i){var r={};return this.subunitSequences.forEach(function(g){g.subunitIndex===i+1&&(r=g)}),r}},{key:"openDialog",value:function(){var i=this,r=this.dialog.open(d.r,{data:{card:"feature",link:[]},width:"1040px",panelClass:"subunit-dialog"});this.overlayContainer.style.zIndex="1002";var g=r.afterClosed().subscribe(function(v){v&&(i.substanceFormPropertiesService.addSubstancePropertyFromFeature(v),setTimeout(function(){alert('Feature added under "Properties"')})),i.overlayContainer.style.zIndex=null});this.subscriptions.push(g)}},{key:"openAnyDialog",value:function(){var i=this,r=this.dialog.open(d.r,{data:{card:"any",link:[]},width:"1040px",panelClass:"subunit-dialog"});this.overlayContainer.style.zIndex="1002";var g=r.afterClosed().subscribe(function(v){v&&("feature"===v.siteType?i.substanceFormPropertiesService.addSubstancePropertyFromFeature(v.sentFeature):i.substanceFormService.addAnySiteType(v))});this.subscriptions.push(g)}}]),o}(u.u);return s.\u0275fac=function(o){return new(o||s)(t.Y36(Z.B),t.Y36(U.i),t.Y36(F.$),t.Y36(p.I),t.Y36(q.uw),t.Y36(M.Xj),t.Y36(m.S))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-substance-form-subunits"]],features:[t.qOj],decls:16,vars:5,consts:[[1,"add-container"],[1,"add-button"],["mat-button","",3,"click"],["svgIcon","add_circle_outline"],["class","add-button",4,"ngIf"],[1,"middle-fill"],[1,"filters-container"],[3,"value","change"],["value","details"],["svgIcon","list"],["value","raw"],["svgIcon","view_stream"],[3,"ngClass"],["appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],["class","add-container-bottom",4,"ngIf"],["appScrollToTarget","",3,"id"],[3,"subunit","view","subunitDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"],[1,"add-container-bottom"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return e.openDialog()}),t._uU(3," Add Feature "),t._UZ(4,"mat-icon",3),t.qZA(),t.qZA(),t.YNc(5,pt,4,0,"div",4),t._UZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"mat-button-toggle-group",7),t.NdJ("change",function(r){return e.updateView(r)}),t.TgZ(9,"mat-button-toggle",8),t._UZ(10,"mat-icon",9),t.qZA(),t.TgZ(11,"mat-button-toggle",10),t._UZ(12,"mat-icon",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",12),t.YNc(14,gt,3,4,"div",13),t.qZA(),t.YNc(15,vt,5,0,"div",14)),2&o&&(t.xp6(5),t.Q6J("ngIf","protein"===e.substanceType),t.xp6(3),t.Q6J("value",e.view),t.xp6(5),t.Q6J("ngClass",e.view),t.xp6(1),t.Q6J("ngForOf",e.subunits),t.xp6(1),t.Q6J("ngIf",e.subunits&&e.subunits.length>0))},directives:[D.lW,I.Hw,f.O5,k.A9,k.Yi,f.mk,f.sg,E.P,lt,H.d],styles:[".details[_ngcontent-%COMP%]   .subunit[_ngcontent-%COMP%]{display:none}.details[_ngcontent-%COMP%]   .subunit-sequence[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]{display:block}.hide[_ngcontent-%COMP%]{display:none}.raw[_ngcontent-%COMP%]   .subunit[_ngcontent-%COMP%]{display:block}.raw[_ngcontent-%COMP%]   .subunit-sequence[_ngcontent-%COMP%]{display:none}.subunit-sequence[_ngcontent-%COMP%]{margin-bottom:30px}.sequence-section-group[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex;margin-bottom:10px}.section-number[_ngcontent-%COMP%]{text-align:right;padding:0 10px;font-size:.8em}.sequence-section[_ngcontent-%COMP%]{-ms-flex-positive:0;flex-grow:0;padding:0 10px;-ms-flex-preferred-size:20%;flex-basis:20%;-ms-flex-negative:0;flex-shrink:0}.section-units-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.section-units-container[_ngcontent-%COMP%]   .section-unit[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}.section-units-container[_ngcontent-%COMP%]   .section-unit[_ngcontent-%COMP%]:hover{cursor:default}.subunit[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:20px}.subunit[_ngcontent-%COMP%]:not(:last-child){border-bottom:solid 1px var(--box-shadow-color-3)}.raw-sequence[_ngcontent-%COMP%]{word-break:break-all;line-height:26px}.add-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.add-button[_ngcontent-%COMP%]{margin-right:10px}.add-container-bottom[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;margin-top:10px;-ms-flex-pack:end;justify-content:flex-end}"]}),s}(),mt=n(7168),yt=n(94673),ht=n(44770),St=n(26439),xt=n(43365),Ct=(n(64061),function(){var s=(0,a.Z)(function c(){(0,l.Z)(this,c)});return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[f.ez,h.o0.forChild(bt),mt.O,H.t,I.Ps,D.ot,yt.w,ht.lN,$.UX,$.u5,St.TU,R.AV,k.vV,xt.c]]}),s}())},15541:function(y,T,n){var a=n(62093),l=n(9102),f=n(25734),h=n(6687),b=n(18704),S=n(94666),x=Date.prototype.getTime;function Z(u){return null==u}function F(u){return!(!u||"object"!=typeof u||"number"!=typeof u.length||"function"!=typeof u.copy||"function"!=typeof u.slice||u.length>0&&"number"!=typeof u[0])}y.exports=function _(u,p,d){var m=d||{};return!!(m.strict?f(u,p):u===p)||(!u||!p||"object"!=typeof u&&"object"!=typeof p?m.strict?f(u,p):u==p:function P(u,p,d){var m,t;if(typeof u!=typeof p||Z(u)||Z(p)||u.prototype!==p.prototype||l(u)!==l(p))return!1;var U=h(u),q=h(p);if(U!==q)return!1;if(U||q)return u.source===p.source&&b(u)===b(p);if(S(u)&&S(p))return x.call(u)===x.call(p);var M=F(u),D=F(p);if(M!==D)return!1;if(M||D){if(u.length!==p.length)return!1;for(m=0;m<u.length;m++)if(u[m]!==p[m])return!1;return!0}if(typeof u!=typeof p)return!1;try{var I=a(u),k=a(p)}catch(E){return!1}if(I.length!==k.length)return!1;for(I.sort(),k.sort(),m=I.length-1;m>=0;m--)if(I[m]!=k[m])return!1;for(m=I.length-1;m>=0;m--)if(!_(u[t=I[m]],p[t],d))return!1;return!0}(u,p,m))}},11790:function(y,T,n){"use strict";var a=n(62093),l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),f=Object.prototype.toString,h=Array.prototype.concat,b=n(95403),x=n(19006)(),_=function(P,u,p,d){if(u in P)if(!0===d){if(P[u]===p)return}else if(!function(P){return"function"==typeof P&&"[object Function]"===f.call(P)}(d)||!d())return;x?b(P,u,p,!0):b(P,u,p)},Z=function(P,u){var p=arguments.length>2?arguments[2]:{},d=a(u);l&&(d=h.call(d,Object.getOwnPropertySymbols(u)));for(var m=0;m<d.length;m+=1)_(P,d[m],u[d[m]],p[d[m]])};Z.supportsDescriptors=!!x,y.exports=Z},13677:function(y){"use strict";var T=function(){return"string"==typeof function(){}.name},n=Object.getOwnPropertyDescriptor;if(n)try{n([],"length")}catch(l){n=null}T.functionsHaveConfigurableNames=function(){if(!T()||!n)return!1;var f=n(function(){},"name");return!!f&&!!f.configurable};var a=Function.prototype.bind;T.boundFunctionsHaveNames=function(){return T()&&"function"==typeof a&&""!==function(){}.bind().name},y.exports=T},94666:function(y,T,n){"use strict";var a=Date.prototype.getDay,f=Object.prototype.toString,b=n(13261)();y.exports=function(x){return"object"==typeof x&&null!==x&&(b?function(x){try{return a.call(x),!0}catch(_){return!1}}(x):"[object Date]"===f.call(x))}},6687:function(y,T,n){"use strict";var f,h,b,S,a=n(4263),l=n(13261)();if(l){f=a("Object.prototype.hasOwnProperty"),h=a("RegExp.prototype.exec"),b={};var x=function(){throw b};S={toString:x,valueOf:x},"symbol"==typeof Symbol.toPrimitive&&(S[Symbol.toPrimitive]=x)}var _=a("Object.prototype.toString"),Z=Object.getOwnPropertyDescriptor;y.exports=l?function(u){if(!u||"object"!=typeof u)return!1;var p=Z(u,"lastIndex");if(!p||!f(p,"value"))return!1;try{h(u,S)}catch(m){return m===b}}:function(u){return!(!u||"object"!=typeof u&&"function"!=typeof u)&&"[object RegExp]"===_(u)}},56872:function(y){"use strict";var T=function(a){return a!=a};y.exports=function(a,l){return 0===a&&0===l?1/a==1/l:!!(a===l||T(a)&&T(l))}},25734:function(y,T,n){"use strict";var a=n(11790),l=n(3855),f=n(56872),h=n(3306),b=n(67715),S=l(h(),Object);a(S,{getPolyfill:h,implementation:f,shim:b}),y.exports=S},3306:function(y,T,n){"use strict";var a=n(56872);y.exports=function(){return"function"==typeof Object.is?Object.is:a}},67715:function(y,T,n){"use strict";var a=n(3306),l=n(11790);y.exports=function(){var h=a();return l(Object,{is:h},{is:function(){return Object.is!==h}}),h}},91149:function(y,T,n){"use strict";var a;if(!Object.keys){var l=Object.prototype.hasOwnProperty,f=Object.prototype.toString,h=n(55185),b=Object.prototype.propertyIsEnumerable,S=!b.call({toString:null},"toString"),x=b.call(function(){},"prototype"),_=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Z=function(d){var m=d.constructor;return m&&m.prototype===d},F={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},P=function(){if("undefined"==typeof window)return!1;for(var p in window)try{if(!F["$"+p]&&l.call(window,p)&&null!==window[p]&&"object"==typeof window[p])try{Z(window[p])}catch(d){return!0}}catch(d){return!0}return!1}();a=function(d){var m=null!==d&&"object"==typeof d,t="[object Function]"===f.call(d),U=h(d),q=m&&"[object String]"===f.call(d),M=[];if(!m&&!t&&!U)throw new TypeError("Object.keys called on a non-object");var D=x&&t;if(q&&d.length>0&&!l.call(d,0))for(var I=0;I<d.length;++I)M.push(String(I));if(U&&d.length>0)for(var k=0;k<d.length;++k)M.push(String(k));else for(var E in d)(!D||"prototype"!==E)&&l.call(d,E)&&M.push(String(E));if(S)for(var Y=function(d){if("undefined"==typeof window||!P)return Z(d);try{return Z(d)}catch(m){return!1}}(d),j=0;j<_.length;++j)(!Y||"constructor"!==_[j])&&l.call(d,_[j])&&M.push(_[j]);return M}}y.exports=a},62093:function(y,T,n){"use strict";var a=Array.prototype.slice,l=n(55185),f=Object.keys,h=f?function(x){return f(x)}:n(91149),b=Object.keys;h.shim=function(){if(Object.keys){var x=function(){var _=Object.keys(arguments);return _&&_.length===arguments.length}(1,2);x||(Object.keys=function(Z){return l(Z)?b(a.call(Z)):b(Z)})}else Object.keys=h;return Object.keys||h},y.exports=h},55185:function(y){"use strict";var T=Object.prototype.toString;y.exports=function(a){var l=T.call(a),f="[object Arguments]"===l;return f||(f="[object Array]"!==l&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===T.call(a.callee)),f}},44040:function(y,T,n){"use strict";var a=n(14091),l=Object,f=TypeError;y.exports=a(function(){if(null!=this&&this!==l(this))throw new f("RegExp.prototype.flags getter called on non-object");var b="";return this.hasIndices&&(b+="d"),this.global&&(b+="g"),this.ignoreCase&&(b+="i"),this.multiline&&(b+="m"),this.dotAll&&(b+="s"),this.unicode&&(b+="u"),this.unicodeSets&&(b+="v"),this.sticky&&(b+="y"),b},"get flags",!0)},18704:function(y,T,n){"use strict";var a=n(11790),l=n(3855),f=n(44040),h=n(49783),b=n(29369),S=l(h());a(S,{getPolyfill:h,implementation:f,shim:b}),y.exports=S},49783:function(y,T,n){"use strict";var a=n(44040),l=n(11790).supportsDescriptors,f=Object.getOwnPropertyDescriptor;y.exports=function(){if(l&&"gim"===/a/gim.flags){var b=f(RegExp.prototype,"flags");if(b&&"function"==typeof b.get&&"boolean"==typeof RegExp.prototype.dotAll&&"boolean"==typeof RegExp.prototype.hasIndices){var S="",x={};if(Object.defineProperty(x,"hasIndices",{get:function(){S+="d"}}),Object.defineProperty(x,"sticky",{get:function(){S+="y"}}),"dy"===S)return b.get}}return a}},29369:function(y,T,n){"use strict";var a=n(11790).supportsDescriptors,l=n(49783),f=Object.getOwnPropertyDescriptor,h=Object.defineProperty,b=TypeError,S=Object.getPrototypeOf,x=/a/;y.exports=function(){if(!a||!S)throw new b("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var Z=l(),F=S(x),P=f(F,"flags");return(!P||P.get!==Z)&&h(F,"flags",{configurable:!0,enumerable:!1,get:Z}),Z}},14091:function(y,T,n){"use strict";var a=n(95403),l=n(19006)(),f=n(13677).functionsHaveConfigurableNames(),h=TypeError;y.exports=function(S,x){if("function"!=typeof S)throw new h("`fn` is not a function");var _=arguments.length>2&&!!arguments[2];return(!_||f)&&(l?a(S,"name",x,!0,!0):a(S,"name",x)),S}}}]);
//# sourceMappingURL=4874.7ab30f73ed59d467.js.map