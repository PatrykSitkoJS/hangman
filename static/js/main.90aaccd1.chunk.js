(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(8),o=n.n(a),s=n(9),l=n(1),c=n(2),u=n(4),p=n(3),d=n(5),m=(n(16),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.progress,n=e.done;return r.a.createElement("div",{className:"hangman-container"},r.a.createElement("svg",{width:"400",height:"400",xmlns:"http://www.w3.org/2000/svg",className:"hangman"},r.a.createElement("g",{id:"stand"},r.a.createElement("title",null,"stand"),r.a.createElement("line",{fill:"none",stroke:"#ff0000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"161",y1:"25",x2:"161",y2:"49",id:"svg_20"}),r.a.createElement("line",{fill:"none",stroke:"#ff0000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"161",y1:"26",x2:"61",y2:"28",id:"svg_21"}),r.a.createElement("line",{fill:"none",stroke:"#ff0000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"61",y1:"26",x2:"62",y2:"316",id:"svg_23"}),r.a.createElement("line",{fill:"none",stroke:"#ff0000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"25",y1:"315",x2:"371",y2:"315",id:"svg_24"})),r.a.createElement("g",{id:"head",display:t>0?"":"none"},r.a.createElement("title",null,"head"),r.a.createElement("ellipse",{fill:"#fcf9f9",stroke:"#000000",strokeWidth:"5",cx:"160",cy:"77",id:"svg_1",rx:"25",ry:"26"})),r.a.createElement("g",{id:"torso",display:t>1?"":"none"},r.a.createElement("title",null,"torso"),r.a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinejoin:"null",strokeLinecap:"null",x1:"157",y1:"100",x2:"157",y2:"190",id:"svg_9"})),r.a.createElement("g",{id:"rightarm",display:t>2?"":"none"},r.a.createElement("title",null,"rightarm"),r.a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"158",y1:"130",x2:"204",y2:"107",id:"svg_13"})),r.a.createElement("g",{id:"leftarm",display:t>3?"":"none"},r.a.createElement("title",null,"leftarm"),r.a.createElement("line",{strokeWidth:"3",id:"svg_32",y2:"108",x2:"113",y1:"129",x1:"157",strokeLinecap:"null",strokeLinejoin:"null",stroke:"#000000",fill:"none"})),r.a.createElement("g",{id:"leftleg",display:t>4?"":"none"},r.a.createElement("title",null,"leftleg"),r.a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"156",y1:"188",x2:"109",y2:"229",id:"svg_14"})),r.a.createElement("g",{id:"rightleg",display:t>5?"":"none"},r.a.createElement("title",null,"rightleg"),r.a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:"3",strokeLinejoin:"null",strokeLinecap:"null",x1:"157",y1:"187",x2:"189",y2:"233",id:"svg_16"})),r.a.createElement("g",{id:"lost",display:t>5&&n?"":"none"},r.a.createElement("title",null,"lost"),r.a.createElement("text",{x:"75",y:"310",fill:"red",stroke:"black",style:{fontSize:"50px",color:"red"}},"YOU DIED !"),r.a.createElement("text",{x:"75",y:"355",fill:"red",stroke:"black",style:{fontSize:"50px",color:"red"}},"VERY SAD !!")),r.a.createElement("g",{id:"won",display:t<6&&n?"":"none"},r.a.createElement("title",null,"won"),r.a.createElement("text",{x:"75",y:"310",fill:"green",stroke:"black",style:{fontSize:"50px",color:"green"}},"GRATS !"),r.a.createElement("text",{x:"75",y:"355",fill:"green",stroke:"black",style:{fontSize:"50px",color:"green"}},"YOU WON !!"))))}}]),t}(i.PureComponent)),g=n(6),y=function(){return g[Math.floor(Math.random()*g.length)].toLowerCase()},h=function(e,t){return k(e).map(function(e){return t.includes(e)?e:"_ "}).join("")},f=function(e,t){var n=w(e),i=v(e,t);return b(e,t).length===n.length||i.length>=6},v=function(e,t){var n=k(e);return t?t.filter(function(e){return!n.includes(e)}):[]},b=function(e,t){var n=k(e);return t?t.filter(function(e){return n.includes(e)}):[]},w=function(e){var t=k(e);return t.filter(function(e,n){return t.indexOf(e)===n})};function k(e){switch(typeof e){case"string":return e.split("");case"object":return"function"===typeof e.filter?e:Object.keys(e);default:throw new Error("Error: word to guess if of type:".concat(typeof e,", allowed: string | object"))}}function x(e){var t=this,n=e.guesses,i=e.wordToGuess,a=e.clickHandler,o="abcdefghijklmnopqrstuvwxyz".split("");return r.a.createElement("div",{className:"buttons-container"},o.map(function(e){var o=n.includes(e),s=o?{color:i.includes(e)?"green":"red"}:{};return r.a.createElement("button",{key:e,disabled:o,onClick:a.bind(t,e),style:s},e)}))}function E(e){var t=e.resetGame;return r.a.createElement("div",{key:"new-game-button-container",className:"new-game-button-container"},r.a.createElement("button",{key:"new-game-button",onClick:t},"New Game"))}function j(e){var t=e.guesses,n=e.wordToGuess,i=e.clickHandler,a=e.resetGame;return r.a.createElement("div",null,f(n,t)?"":r.a.createElement(q,{guesses:t,wordToGuess:n}),f(n,t)?[z(n,t)?r.a.createElement(q,{key:"Word",guesses:t,wordToGuess:n}):r.a.createElement(G,{key:"Answer",wordToGuess:n}),r.a.createElement(E,{key:"NewGameButton",resetGame:a})]:r.a.createElement(x,{guesses:t,wordToGuess:n,clickHandler:i}))}function q(e){var t=e.guesses,n=e.wordToGuess;return r.a.createElement("div",{key:"word-to-guess-container",className:"word-to-guess-container"},r.a.createElement("span",{className:"word-to-guess"},h(n,t)))}function G(e){var t=e.wordToGuess;return r.a.createElement("div",{key:"answer-container",className:"answer-container"},r.a.createElement("span",{key:"answer-prefix",className:"answer-prefix"},"The word was: "),r.a.createElement("span",{key:"answer",className:"answer"},t))}function z(e,t){var n=w(e);return b(n,t).length===n.length}var L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).done=function(){var e=n.state,t=e.guesses,i=e.wordToGuess;return!!t&&f(i,t)},n.progress=function(){var e=n.state,t=e.guesses,i=e.wordToGuess;return t?v(i,t).length:0},n.clickHandler=function(e){var t=Object(s.a)(n.state.guesses);t.includes(e)||(t.push(e),n.setState({guesses:t}))},n.resetGame=function(){var e=y();console.log(e),n.setState({guesses:[],wordToGuess:e})},n.state={guesses:void 0,wordToGuess:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.guesses,n=e.wordToGuess;return r.a.createElement("div",{className:"app"},r.a.createElement(m,{progress:this.progress(),done:this.done()}),r.a.createElement("div",{className:"ui-container"},this.state.guesses?r.a.createElement(j,{guesses:t,wordToGuess:n,clickHandler:this.clickHandler,resetGame:this.resetGame}):r.a.createElement(E,{resetGame:this.resetGame})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=["abandon","ability","abortion","abroad","absence","absolute","absolutely","absorb","academic","accept","access","accident","accompany","accomplish","according","account","accurate","accuse","achieve","achievement","acknowledge","acquire","across","action","active","activist","activity","actress","actual","actually","addition","additional","address","adequate","adjust","adjustment","administration","administrator","admire","admission","adolescent","advance","advanced","advantage","adventure","advertising","advice","advise","adviser","advocate","affair","affect","afford","afraid","African","African-American","afternoon","against","agency","agenda","aggressive","agreement","agricultural","aircraft","airline","airport","alcohol","alliance","almost","already","alternative","although","always","amazing","American","amount","analysis","analyst","analyze","ancient","animal","anniversary","announce","annual","another","answer","anticipate","anxiety","anybody","anymore","anyone","anything","anyway","anywhere","apartment","apparent","apparently","appeal","appear","appearance","application","appoint","appointment","appreciate","approach","appropriate","approval","approve","approximately","architect","argument","around","arrange","arrangement","arrest","arrival","arrive","article","artist","artistic","asleep","aspect","assault","assert","assess","assessment","assign","assignment","assist","assistance","assistant","associate","association","assume","assumption","assure","athlete","athletic","atmosphere","attach","attack","attempt","attend","attention","attitude","attorney","attract","attractive","attribute","audience","author","authority","available","average","awareness","background","balance","barely","barrel","barrier","baseball","basically","basket","basketball","bathroom","battery","battle","beautiful","beauty","because","become","bedroom","before","beginning","behavior","behind","belief","believe","belong","beneath","benefit","beside","besides","better","between","beyond","billion","biological","birthday","blanket","bombing","border","borrow","bother","bottle","bottom","boundary","boyfriend","branch","breakfast","breast","breath","breathe","bridge","briefly","bright","brilliant","British","broken","brother","budget","building","bullet","burden","business","butter","button","cabinet","calculate","camera","campaign","campus","Canadian","cancer","candidate","capability","capable","capacity","capital","captain","capture","carbon","career","careful","carefully","carrier","category","Catholic","ceiling","celebrate","celebration","celebrity","center","central","century","ceremony","certain","certainly","chairman","challenge","chamber","champion","championship","chance","change","changing","channel","chapter","character","characteristic","characterize","charge","charity","cheese","chemical","chicken","childhood","Chinese","chocolate","choice","cholesterol","choose","Christian","Christmas","church","cigarette","circle","circumstance","citizen","civilian","classic","classroom","clearly","client","climate","clinic","clinical","closely","closer","clothes","clothing","cluster","coalition","coffee","cognitive","collapse","colleague","collect","collection","collective","college","colonial","column","combination","combine","comedy","comfort","comfortable","command","commander","comment","commercial","commission","commit","commitment","committee","common","communicate","communication","community","company","compare","comparison","compete","competition","competitive","competitor","complain","complaint","complete","completely","complex","complicated","component","compose","composition","comprehensive","computer","concentrate","concentration","concept","concern","concerned","concert","conclude","conclusion","concrete","condition","conduct","conference","confidence","confident","confirm","conflict","confront","confusion","Congress","congressional","connect","connection","consciousness","consensus","consequence","conservative","consider","considerable","consideration","consist","consistent","constant","constantly","constitute","constitutional","construct","construction","consultant","consume","consumer","consumption","contact","contain","container","contemporary","content","contest","context","continue","continued","contract","contrast","contribute","contribution","control","controversial","controversy","convention","conventional","conversation","convert","conviction","convince","cookie","cooking","cooperation","corner","corporate","corporation","correct","correspondent","cotton","council","counselor","counter","country","county","couple","courage","course","cousin","coverage","create","creation","creative","creature","credit","criminal","crisis","criteria","critic","critical","criticism","criticize","crucial","cultural","culture","curious","current","currently","curriculum","custom","customer","damage","danger","dangerous","darkness","daughter","dealer","debate","decade","decide","decision","declare","decline","decrease","deeply","defeat","defend","defendant","defense","defensive","deficit","define","definitely","definition","degree","deliver","delivery","demand","democracy","Democrat","democratic","demonstrate","demonstration","department","depend","dependent","depending","depict","depression","deputy","derive","describe","description","desert","deserve","design","designer","desire","desperate","despite","destroy","destruction","detail","detailed","detect","determine","develop","developing","development","device","devote","dialogue","differ","difference","different","differently","difficult","difficulty","digital","dimension","dining","dinner","direct","direction","directly","director","disability","disagree","disappear","disaster","discipline","discourse","discover","discovery","discrimination","discuss","discussion","disease","dismiss","disorder","display","dispute","distance","distant","distinct","distinction","distinguish","distribute","distribution","district","diverse","diversity","divide","division","divorce","doctor","document","domestic","dominant","dominate","double","downtown","dramatic","dramatically","drawing","driver","during","earnings","easily","eastern","economic","economics","economist","economy","edition","editor","educate","education","educational","educator","effect","effective","effectively","efficiency","efficient","effort","either","elderly","election","electric","electricity","electronic","element","elementary","eliminate","elsewhere","e-mail","embrace","emerge","emergency","emission","emotion","emotional","emphasis","emphasize","employ","employee","employer","employment","enable","encounter","encourage","energy","enforcement","engage","engine","engineer","engineering","English","enhance","enormous","enough","ensure","enterprise","entertainment","entire","entirely","entrance","environment","environmental","episode","equally","equipment","escape","especially","essential","essentially","establish","establishment","estate","estimate","ethics","ethnic","European","evaluate","evaluation","evening","eventually","everybody","everyday","everyone","everything","everywhere","evidence","evolution","evolve","exactly","examination","examine","example","exceed","excellent","except","exception","exchange","exciting","executive","exercise","exhibit","exhibition","existence","existing","expand","expansion","expect","expectation","expense","expensive","experience","experiment","expert","explain","explanation","explode","explore","explosion","expose","exposure","express","expression","extend","extension","extensive","extent","external","extraordinary","extreme","extremely","fabric","facility","factor","factory","faculty","failure","fairly","familiar","family","famous","fantasy","farmer","fashion","father","favorite","feature","federal","feeling","fellow","female","fiction","fifteen","fighter","fighting","figure","finally","finance","financial","finding","finger","finish","fishing","fitness","flavor","flight","flower","follow","following","football","foreign","forest","forever","forget","formal","formation","former","formula","fortune","forward","foundation","founder","fourth","framework","freedom","freeze","French","frequency","frequent","frequently","friend","friendly","friendship","frustration","function","fundamental","funding","funeral","furniture","furthermore","future","galaxy","gallery","garage","garden","garlic","gather","gender","general","generally","generate","generation","genetic","gentleman","gently","German","gesture","gifted","girlfriend","glance","global","golden","government","governor","gradually","graduate","grandfather","grandmother","greatest","grocery","ground","growing","growth","guarantee","guideline","guilty","habitat","handful","handle","happen","hardly","headline","headquarters","health","healthy","hearing","heaven","heavily","height","helicopter","helpful","heritage","herself","highlight","highly","highway","himself","historian","historic","historical","history","holiday","homeless","honest","horizon","horror","hospital","household","housing","however","hundred","hungry","hunter","hunting","husband","hypothesis","identification","identify","identity","ignore","illegal","illness","illustrate","imagination","imagine","immediate","immediately","immigrant","immigration","impact","implement","implication","importance","important","impose","impossible","impress","impression","impressive","improve","improvement","incentive","incident","include","including","income","incorporate","increase","increased","increasing","increasingly","incredible","indeed","independence","independent","Indian","indicate","indication","individual","industrial","industry","infant","infection","inflation","influence","inform","information","ingredient","initial","initially","initiative","injury","innocent","inquiry","inside","insight","insist","inspire","install","instance","instead","institution","institutional","instruction","instructor","instrument","insurance","intellectual","intelligence","intend","intense","intensity","intention","interaction","interest","interested","interesting","internal","international","Internet","interpret","interpretation","intervention","interview","introduce","introduction","invasion","invest","investigate","investigation","investigator","investment","investor","invite","involve","involved","involvement","Islamic","island","Israeli","Italian","itself","jacket","Japanese","Jewish","journal","journalist","journey","judgment","junior","justice","justify","killer","killing","kitchen","knowledge","laboratory","landscape","language","largely","latter","launch","lawsuit","lawyer","leader","leadership","leading","league","learning","leather","legacy","legend","legislation","legitimate","length","lesson","letter","liberal","library","license","lifestyle","lifetime","likely","limitation","limited","listen","literally","literary","literature","little","living","locate","location","long-term","lovely","machine","magazine","mainly","maintain","maintenance","majority","makeup","manage","management","manager","manner","manufacturer","manufacturing","margin","market","marketing","marriage","married","massive","master","material","matter","meaning","meanwhile","measure","measurement","mechanism","medical","medication","medicine","medium","meeting","member","membership","memory","mental","mention","merely","message","method","Mexican","middle","military","million","minister","minority","minute","miracle","mirror","missile","mission","mistake","mixture","mm-hmm","moderate","modern","modest","moment","monitor","moreover","morning","mortgage","mostly","mother","motion","motivation","mountain","movement","multiple","murder","muscle","museum","musical","musician","Muslim","mutual","myself","mystery","narrative","narrow","nation","national","native","natural","naturally","nature","nearby","nearly","necessarily","necessary","negative","negotiate","negotiation","neighbor","neighborhood","neither","nervous","network","nevertheless","newspaper","nobody","nomination","nonetheless","normal","normally","northern","nothing","notice","notion","nowhere","nuclear","number","numerous","object","objective","obligation","observation","observe","observer","obtain","obvious","obviously","occasion","occasionally","occupation","occupy","offense","offensive","office","officer","official","Olympic","ongoing","online","opening","operate","operating","operation","operator","opinion","opponent","opportunity","oppose","opposite","opposition","option","orange","ordinary","organic","organization","organize","orientation","origin","original","originally","others","otherwise","ourselves","outcome","outside","overall","overcome","overlook","package","painful","painter","painting","Palestinian","parent","parking","participant","participate","participation","particular","particularly","partly","partner","partnership","passage","passenger","passion","patient","pattern","payment","penalty","people","pepper","perceive","percentage","perception","perfect","perfectly","perform","performance","perhaps","period","permanent","permission","permit","person","personal","personality","personally","personnel","perspective","persuade","phenomenon","philosophy","photograph","photographer","phrase","physical","physically","physician","picture","planet","planning","plastic","platform","player","please","pleasure","plenty","pocket","poetry","police","policy","political","politically","politician","politics","pollution","popular","population","portion","portrait","portray","position","positive","possess","possibility","possible","possibly","potato","potential","potentially","poverty","powder","powerful","practical","practice","prayer","precisely","predict","prefer","preference","pregnancy","pregnant","preparation","prepare","prescription","presence","present","presentation","preserve","president","presidential","pressure","pretend","pretty","prevent","previous","previously","priest","primarily","primary","principal","principle","priority","prison","prisoner","privacy","private","probably","problem","procedure","proceed","process","produce","producer","product","production","profession","professional","professor","profile","profit","program","progress","project","prominent","promise","promote","prompt","proper","properly","property","proportion","proposal","propose","proposed","prosecutor","prospect","protect","protection","protein","protest","provide","provider","province","provision","psychological","psychologist","psychology","public","publication","publicly","publish","publisher","punishment","purchase","purpose","pursue","qualify","quality","quarter","quarterback","question","quickly","quietly","racial","radical","rapidly","rarely","rather","rating","reaction","reader","reading","reality","realize","really","reason","reasonable","recall","receive","recent","recently","recipe","recognition","recognize","recommend","recommendation","record","recording","recover","recovery","recruit","reduce","reduction","reference","reflect","reflection","reform","refugee","refuse","regard","regarding","regardless","regime","region","regional","register","regular","regularly","regulate","regulation","reinforce","reject","relate","relation","relationship","relative","relatively","release","relevant","relief","religion","religious","remain","remaining","remarkable","remember","remind","remote","remove","repeat","repeatedly","replace","report","reporter","represent","representation","representative","Republican","reputation","request","require","requirement","research","researcher","resemble","reservation","resident","resist","resistance","resolution","resolve","resort","resource","respect","respond","respondent","response","responsibility","responsible","restaurant","restore","restriction","result","retain","retire","retirement","return","reveal","revenue","review","revolution","rhythm","romantic","roughly","routine","running","Russian","sacred","safety","salary","sample","sanction","satellite","satisfaction","satisfy","saving","scandal","scared","scenario","schedule","scheme","scholar","scholarship","school","science","scientific","scientist","scream","screen","script","search","season","second","secret","secretary","section","sector","secure","security","segment","select","selection","Senate","senator","senior","sensitive","sentence","separate","sequence","series","serious","seriously","service","session","setting","settle","settlement","several","severe","sexual","shadow","shelter","shooting","shopping","shortly","should","shoulder","shower","signal","significance","significant","significantly","silence","silent","silver","similar","similarly","simple","simply","singer","single","sister","situation","slight","slightly","slowly","smooth","so-called","soccer","social","society","software","soldier","solution","somebody","somehow","someone","something","sometimes","somewhat","somewhere","sophisticated","source","southern","Soviet","Spanish","speaker","special","specialist","species","specific","specifically","speech","spending","spirit","spiritual","spokesman","spread","spring","square","squeeze","stability","stable","standard","standing","statement","station","statistics","status","steady","stomach","storage","straight","strange","stranger","strategic","strategy","stream","street","strength","strengthen","stress","stretch","strike","string","stroke","strong","strongly","structure","struggle","student","studio","stupid","subject","submit","subsequent","substance","substantial","succeed","success","successful","successfully","sudden","suddenly","suffer","sufficient","suggest","suggestion","suicide","summer","summit","supply","support","supporter","suppose","supposed","Supreme","surely","surface","surgery","surprise","surprised","surprising","surprisingly","surround","survey","survival","survive","survivor","suspect","sustain","switch","symbol","symptom","system","tablespoon","tactic","talent","target","taxpayer","teacher","teaching","teaspoon","technical","technique","technology","teenager","telephone","telescope","television","temperature","temporary","tendency","tennis","tension","terrible","territory","terror","terrorism","terrorist","testify","testimony","testing","thanks","theater","themselves","theory","therapy","therefore","thinking","thirty","though","thought","thousand","threat","threaten","throat","through","throughout","ticket","tissue","tobacco","together","tomato","tomorrow","tongue","tonight","totally","tourist","tournament","toward","towards","tradition","traditional","traffic","tragedy","training","transfer","transform","transformation","transition","translate","transportation","travel","treatment","treaty","tremendous","trouble","tunnel","twelve","twenty","typical","typically","ultimate","ultimately","unable","undergo","understand","understanding","unfortunately","uniform","unique","United","universal","universe","university","unknown","unless","unlike","unlikely","unusual","useful","usually","utility","vacation","valley","valuable","variable","variation","variety","various","vegetable","vehicle","venture","version","versus","vessel","veteran","victim","victory","viewer","village","violate","violation","violence","violent","virtually","virtue","visible","vision","visitor","visual","volume","volunteer","vulnerable","wander","warning","wealth","wealthy","weapon","weather","wedding","weekend","weekly","weight","welcome","welfare","western","whatever","whenever","whereas","whether","whisper","widely","widespread","willing","window","winner","winter","wisdom","withdraw","within","without","witness","wonder","wonderful","wooden","worker","working","workshop","worried","writer","writing","yellow","yesterday","yourself"]}},[[10,1,2]]]);
//# sourceMappingURL=main.90aaccd1.chunk.js.map