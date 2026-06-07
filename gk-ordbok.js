(function () {
  "use strict";

  var DATA = [
  {
    "letter": "A",
    "title": "Ace",
    "tag": "Når discen går i kurven på første kast",
    "terms": "ace hole in one førsteskudd første kast rett i kurv",
    "paragraphs": [
      "Et ace er når du kaster discen rett i kurven på første kast fra tee. Dette tilsvarer en hole-in-one i vanlig golf og er en av de mest minneverdige tingene du kan oppleve på en discgolfrunde.",
      "Et ace krever ofte en kombinasjon av riktig discvalg, riktig linje, riktig høyde, god fart og litt margin på riktig side. På korte hull kan ace være realistisk for mange spillere, mens på lengre hull er det ofte en sjelden bonus selv for erfarne spillere.",
      "Mange spillere husker sitt første ace veldig godt, og i flere miljøer er det vanlig med ace-pot, signering av discen eller en liten feiring når noen treffer kurven fra tee."
    ]
  },
  {
    "letter": "A",
    "title": "Albatross",
    "tag": "Tre kast under par",
    "terms": "albatross tre under par score",
    "paragraphs": [
      "Albatross betyr at du fullfører et hull på tre kast under par. Dette er svært sjeldent i discgolf, fordi det vanligvis krever et hull med høy par-verdi og et ekstremt godt resultat.",
      "På et par 5-hull får du albatross hvis du bruker bare 2 kast. Det kan for eksempel skje hvis du kaster et langt og presist utkast, og deretter setter innspillet direkte i kurven.",
      "For de fleste spillere er albatross noe man nesten aldri opplever, men det er likevel et begrep som brukes i score-systemet, spesielt på lengre baner og turneringer."
    ]
  },
  {
    "letter": "A",
    "title": "Anhyzer",
    "tag": "Kastvinkel der discen slippes motsatt av hyzer",
    "terms": "anhyzer anny vinkel høyre høyrehendt backhand kastvinkel turnover",
    "paragraphs": [
      "Anhyzer beskriver vinkelen discen har idet du slipper den. For en høyrehendt backhand-kaster betyr det vanligvis at ytterkanten av discen er høyere enn innerkanten, slik at discen starter eller beveger seg mot høyre tidlig i flybanen.",
      "Anhyzer brukes når du ønsker å forme kastet rundt hindringer, holde en høyresving, lage en lang bue eller få en overstabil disc til å fly rettere før den fader tilbake.",
      "Resultatet av en anhyzer avhenger veldig av stabiliteten på discen. En understabil disc kan holde anhyzer-linjen lenge, mens en overstabil disc ofte vil kjempe seg ut av vinkelen og avslutte med tydelig fade."
    ]
  },
  {
    "letter": "A",
    "title": "Approach",
    "tag": "Innspill mot kurven",
    "terms": "approach innspill approachkast kort kast mot kurv upshot",
    "paragraphs": [
      "Approach betyr innspill, og brukes om kastet du tar når du er for langt unna til en komfortabel putt, men nær nok til at du ikke trenger et fullt driverkast.",
      "Et godt approach-kast handler mer om kontroll enn om maksimal lengde. Du prøver ofte å lande discen på riktig side av kurven, unngå farlige områder og gi deg selv en putt du er trygg på å sette.",
      "Puttere og midranger brukes ofte til approach fordi de er enklere å kontrollere og vanligvis lander roligere enn raske drivere."
    ]
  },
  {
    "letter": "B",
    "title": "Backhand",
    "tag": "Den vanligste kasteteknikken i discgolf",
    "terms": "backhand bakhånd vanlig kasteteknikk rhbh lhbh",
    "paragraphs": [
      "Backhand er kasteteknikken der du trekker discen på tvers av kroppen og slipper den med baksiden av hånden vendt fremover. Dette er den mest brukte kasteteknikken i discgolf, og ofte det første kastet nye spillere lærer.",
      "Et backhand-kast kan brukes til nesten alt: korte putterkast, kontrollerte midrange-kast, rette fairway-kast, hyzer, anhyzer, turnover, hyzer flip og lange driverkast.",
      "For en høyrehendt backhand-kaster vil en vanlig disc ofte avslutte mot venstre når den mister fart. For en venstrehendt backhand-kaster blir avslutningen motsatt vei."
    ]
  },
  {
    "letter": "B",
    "title": "Basket",
    "tag": "Kurven du skal treffe",
    "terms": "basket kurv mål chains kjetting",
    "paragraphs": [
      "Basket er det engelske ordet for discgolf-kurv. Kurven består vanligvis av en stolpe, en kurvdel og kjettinger som skal fange discen når du treffer riktig.",
      "Kjettingene er laget for å bremse discen, slik at den faller ned i kurven i stedet for å fly rett gjennom. Når discen ligger i kurven eller er fanget riktig av kurven, er hullet fullført.",
      "På putting er det lurt å ha et tydelig siktepunkt i kurven, for eksempel midten av kjettingene."
    ]
  },
  {
    "letter": "B",
    "title": "Birdie",
    "tag": "Ett kast under par",
    "terms": "birdie ett under par score",
    "paragraphs": [
      "Birdie betyr at du fullfører et hull på ett kast under par. På et par 3-hull får du birdie hvis du bruker 2 kast, og på et par 4-hull får du birdie hvis du bruker 3 kast.",
      "Birdie er ofte målet på hull der du har mulighet til å komme nær kurven på utkastet, eller der du kan legge opp til en enkel putt med et godt innspill.",
      "Etter hvert som du blir bedre, handler mye av spillet om å vite hvilke hull du bør angripe for birdie, og hvilke hull der det er smartere å spille trygt for par."
    ]
  },
  {
    "letter": "B",
    "title": "Bogey",
    "tag": "Ett kast over par",
    "terms": "bogey ett over par score",
    "paragraphs": [
      "Bogey betyr at du bruker ett kast mer enn par på et hull. På et par 3-hull betyr bogey at du bruker 4 kast.",
      "Bogey kan komme av mange ting: et utkast som treffer et tre, et innspill som havner for langt unna, en OB, en vanskelig lie eller en bommet putt. Det er helt normalt, spesielt når du er ny i sporten.",
      "En viktig del av discgolf er å begrense skaden. Hvis du først havner i trøbbel, kan det være bedre å spille smart for bogey enn å prøve et risikabelt kast som kan gi dobbelbogey eller verre."
    ]
  },
  {
    "letter": "B",
    "title": "Brace",
    "tag": "Fotarbeid som hjelper deg å overføre kraft",
    "terms": "brace fotarbeid stopp kraftoverføring kasteteknikk",
    "paragraphs": [
      "Brace handler om hvordan du stopper fremdriften med fremste fot i kastet, slik at kraften fra kroppen kan overføres videre gjennom hofter, overkropp, arm og ut i discen.",
      "Hvis du ikke bracer godt, kan kroppen bare flyte videre fremover, og mye av energien forsvinner i bevegelsen i stedet for å gå inn i kastet. Med bedre brace får du ofte mer kraft uten at du trenger å ta i mer med armen.",
      "Dette er en mer teknisk del av kastet, men veldig viktig for spillere som ønsker mer lengde og bedre kontroll."
    ]
  },
  {
    "letter": "C",
    "title": "C1 / Circle 1",
    "tag": "Området innenfor 10 meter fra kurven",
    "terms": "c1 circle one putting circle 10 meter",
    "paragraphs": [
      "C1 betyr Circle 1 og er området innenfor 10 meter fra kurven. Dette området er viktig fordi det gjelder egne regler for putting når du er innenfor denne avstanden.",
      "Når du putter fra C1, må du vise balanse bak lie etter at discen er sluppet. Det betyr at du ikke kan hoppe, falle eller tråkke ukontrollert fremover mot kurven etter putten.",
      "C1-statistikk brukes ofte for å måle hvor trygg en spiller er på putting. En spiller som setter mange putter i C1, vil ofte score stabilt selv om ikke alle utkast er perfekte."
    ]
  },
  {
    "letter": "C",
    "title": "C2 / Circle 2",
    "tag": "Området fra 10 til 20 meter fra kurven",
    "terms": "c2 circle two 10 20 meter putting",
    "paragraphs": [
      "C2 betyr Circle 2 og brukes vanligvis om området fra 10 til 20 meter fra kurven. Dette er fortsatt en putteavstand, men for de fleste krever det mer kraft og bedre presisjon enn putting fra C1.",
      "Utenfor 10 meter kan du bruke teknikker som jump putt eller step putt, så lenge discen slippes før du passerer lie. Dette gjør at mange spillere kan få mer kraft uten å bryte puttereglene.",
      "Gode C2-putter kan gi mange ekstra birdies, men det er også større risiko for lang returputt hvis du bommer. Derfor må du vurdere hvor aggressiv du vil være."
    ]
  },
  {
    "letter": "C",
    "title": "Chains",
    "tag": "Kjettingene i kurven",
    "terms": "chains kjettinger kurv treff spit out",
    "paragraphs": [
      "Chains betyr kjettingene i kurven. Når du putter, ønsker du som regel å treffe et kontrollert punkt i kjettingene slik at discen bremses og faller ned i kurven.",
      "Hvis noen sier “hit chains”, betyr det at discen traff kjettingene. Det betyr likevel ikke alltid at putten satt, fordi discen kan sprette ut hvis den treffer for hardt, for høyt, for lavt eller for langt på siden.",
      "Å lære hvordan putteren din reagerer i kjettingene kan hjelpe deg med å justere fart, høyde og siktepunkt på puttene dine."
    ]
  },
  {
    "letter": "C",
    "title": "Comebacker",
    "tag": "Returputten etter en bom",
    "terms": "comebacker comeback putt returputt",
    "paragraphs": [
      "Comebacker er putten du får tilbake etter at du har bommet en putt og discen har gått forbi kurven. Jo hardere og mer aggressivt du putter, jo lengre kan comebackeren bli.",
      "Dette er grunnen til at mange vurderer risiko før lange putter. Hvis det er OB, vann eller bratt bakke bak kurven, kan en lang comeback-putt bli veldig kostbar.",
      "Hvis du blir trygg på comeback-putter, tør du ofte å angripe flere putter, fordi du vet at du kan sette returen hvis du bommer."
    ]
  },
  {
    "letter": "D",
    "title": "Death putt",
    "tag": "Putt med høy risiko hvis du bommer",
    "terms": "death putt farlig putt bak kurv ob vann stup",
    "paragraphs": [
      "Death putt er en putt der konsekvensen av en bom kan bli stor. Det kan være vann, OB, bratt nedoverbakke, tett skog eller en lang returputt bak kurven.",
      "En death putt handler derfor ikke bare om avstand til kurven, men om hva som skjer hvis du ikke treffer. En putt på 7 meter kan være ganske enkel på flat mark, men veldig farlig hvis det er bratt bak kurven.",
      "I slike situasjoner må du vurdere risiko og belønning. Noen ganger er det riktig å gå for kurven, mens andre ganger er det smartere å legge opp trygt og sikre neste kast."
    ]
  },
  {
    "letter": "D",
    "title": "Disc",
    "tag": "Utstyret du kaster med",
    "terms": "disc disk frisbee disctype",
    "paragraphs": [
      "Disc er det engelske ordet for disk. I discgolf bruker man spesiallagde discer som er laget for ulike kast, avstander, grep og flybaner.",
      "En discgolf-disc er ikke bare en vanlig frisbee. Den er designet for presisjon og bestemte flyegenskaper, og små forskjeller i form, kant, plast og vekt kan gjøre stor forskjell på hvordan den flyr.",
      "De vanligste disctypene er putter, midrange, fairway-driver og distance-driver. Hver type har sin rolle, og du trenger ikke de raskeste discene for å spille bra."
    ]
  },
  {
    "letter": "D",
    "title": "Distance driver",
    "tag": "Rask driver laget for maksimal lengde",
    "terms": "distance driver distansedriver høy speed lengde",
    "paragraphs": [
      "Distance-driver er den raskeste typen disc og er laget for lange kast. Den har ofte bredere rim og høyere speed enn andre discer, noe som gjør at den kan gå langt når den kastes med nok fart og riktig teknikk.",
      "For nye spillere kan distance-drivere være vanskelige fordi de krever høy kastehastighet. Hvis discen ikke får nok fart, vil den ofte fade tidlig og gå kortere enn en fairway-driver eller midrange.",
      "Derfor anbefaler vi ofte at nybegynnere venter litt med de raskeste driverne. Du får som regel bedre utvikling av å lære kontroll med putter, midrange og fairway-driver først."
    ]
  },
  {
    "letter": "D",
    "title": "Drop zone / DZ",
    "tag": "Bestemt sted for neste kast etter OB eller regelbrudd",
    "terms": "drop zone droppsone dz ob mando straff",
    "paragraphs": [
      "Drop zone er et bestemt område du skal kaste fra etter en spesifikk hendelse, for eksempel OB, missed mando eller en annen lokal regel på hullet.",
      "En drop zone gjør det tydelig hvor spillet skal fortsette, slik at alle spillere følger samme løsning. Den kan være markert med matte, skilt, spray, flagg eller annen merking.",
      "Det er viktig å lese baneskiltet før du kaster, fordi noen hull bruker drop zone, mens andre lar deg spille fra der discen sist var inne eller fra et annet definert punkt."
    ]
  },
  {
    "letter": "E",
    "title": "Eagle",
    "tag": "To kast under par",
    "terms": "eagle to under par score",
    "paragraphs": [
      "Eagle betyr at du fullfører et hull på to kast under par. På et par 4-hull får du eagle hvis du bruker 2 kast, og på et par 5-hull får du eagle hvis du bruker 3 kast.",
      "Eagle er sjeldnere enn birdie og krever som regel et veldig godt utkast, et presist innspill eller en lang putt som sitter. På kortere par 4-hull kan det være et realistisk mål for gode spillere.",
      "For mange er eagle en bonus som kommer når både discvalg, linje, kraft og putting klaffer på samme hull."
    ]
  },
  {
    "letter": "F",
    "title": "Fade",
    "tag": "Discens avslutning når den mister fart",
    "terms": "fade avslutning venstre høyrehendt backhand stabilitet flighttall",
    "paragraphs": [
      "Fade beskriver hva discen gjør på slutten av flybanen når den mister fart. For en høyrehendt backhand-kaster betyr fade vanligvis at discen avslutter mot venstre.",
      "En disc med mye fade vil avslutte hardere og mer forutsigbart, spesielt hvis den er overstabil. Dette kan være nyttig i vind, på forehand-kast, på hyzer-linjer og når du må være sikker på at discen avslutter mot en bestemt side.",
      "Lav fade betyr at discen ofte avslutter rettere og mykere. Det kan være en fordel for nybegynnere fordi discen ikke stuper like tidlig til siden."
    ]
  },
  {
    "letter": "F",
    "title": "Fairway driver",
    "tag": "Driver med god balanse mellom lengde og kontroll",
    "terms": "fairway driver kontroll driver mellomlang lengde",
    "paragraphs": [
      "Fairway-driver er en disctype som gir mer lengde enn midrange, men som vanligvis er enklere å kontrollere enn en distance-driver.",
      "Dette gjør fairway-drivere til et veldig godt steg videre for nye spillere som ønsker mer lengde, men som fortsatt vil ha kontroll og forutsigbarhet.",
      "Erfarne spillere bruker også fairway-drivere mye, spesielt på hull der presisjon er viktigere enn maksimal lengde."
    ]
  },
  {
    "letter": "F",
    "title": "First available",
    "tag": "Det første hinderet du treffer",
    "terms": "first available første tre bomme tidlig hinder",
    "paragraphs": [
      "First available er et uttrykk som ofte brukes litt humoristisk når discen treffer det første treet, den første greinen eller det første hinderet rett foran deg.",
      "Det skjer spesielt ofte på trange skogshull der åpningen fra tee er smal. Selv små feil i vinkel, høyde eller timing kan føre til at discen aldri kommer seg ut på den linjen du hadde planlagt.",
      "Hvis du ofte treffer first available, kan det være smart å velge en roligere disc, redusere kraften, korte ned tilløpet eller velge en enklere og bredere linje."
    ]
  },
  {
    "letter": "F",
    "title": "Flat release",
    "tag": "Når discen slippes flatt",
    "terms": "flat release flat slipp rett vinkel",
    "paragraphs": [
      "Flat release betyr at discen slippes omtrent vannrett, uten tydelig hyzer- eller anhyzer-vinkel. Dette er et viktig utgangspunkt når du skal forstå hvordan en disc egentlig flyr.",
      "Hvis du slipper discen flatt og med ren teknikk, blir det lettere å se om discen er understabil, nøytral eller overstabil.",
      "For nye spillere er det lurt å øve på flat release med putter og midrange før man går videre til raske drivere."
    ]
  },
  {
    "letter": "F",
    "title": "Flight",
    "tag": "Discens flybane",
    "terms": "flight flybane flighttall discens bane",
    "paragraphs": [
      "Flight betyr flybane. Når man snakker om en discs flight, mener man hvordan discen beveger seg fra den forlater hånden til den lander.",
      "Flybanen påvirkes av mange ting samtidig: discens design, flighttall, plasttype, vekt, slitasje, vind, høyde, kastekraft, nesevinkel og slippvinkel.",
      "Derfor kan to spillere oppleve samme disc forskjellig."
    ]
  },
  {
    "letter": "F",
    "title": "Flight numbers / Flighttall",
    "tag": "Tallene som beskriver hvordan discen er ment å fly",
    "terms": "flight numbers flighttall speed glide turn fade tall",
    "paragraphs": [
      "Flighttall er de fire tallene som ofte står på en disc: speed, glide, turn og fade. Disse tallene gir en pekepinn på hvordan discen er designet til å fly når den kastes med riktig fart og teknikk.",
      "Speed forteller hvor raskt discen må kastes. Glide sier hvor godt den holder seg i luften. Turn beskriver hva den gjør tidlig i flybanen når den har høy fart. Fade beskriver hvordan den avslutter når den mister fart.",
      "Tallene er ikke en absolutt fasit, men de er veldig nyttige når du skal sammenligne discer."
    ]
  },
  {
    "letter": "F",
    "title": "Flippy",
    "tag": "Når en disc lett vender over",
    "terms": "flippy understabil flip turn",
    "paragraphs": [
      "Flippy brukes om en disc som lett får turn eller vender over når den kastes. Det betyr ofte at discen er understabil, eller at den har blitt mer understabil etter mye bruk.",
      "For nybegynnere kan en litt flippy disc være positivt, fordi den kan hjelpe discen med å fly rettere og lengre uten at spilleren trenger veldig høy kastehastighet.",
      "For spillere med mye kraft kan en flippy disc bli vanskeligere å kontrollere, spesielt i motvind."
    ]
  },
  {
    "letter": "F",
    "title": "Forehand",
    "tag": "Kasteteknikk også kalt sidearm",
    "terms": "forehand sidearm fh sidekast håndledd",
    "paragraphs": [
      "Forehand er en kasteteknikk der discen kastes fra siden av kroppen, ofte med en bevegelse som kan minne om et sidekast. Mange kaller det også sidearm.",
      "Forehand er nyttig fordi discen får en annen naturlig avslutning enn backhand. For en høyrehendt spiller vil forehand ofte avslutte mot høyre, mens backhand ofte avslutter mot venstre.",
      "Teknikken brukes mye når man skal rundt hindringer, kaste i vind eller velge en linje som er vanskeligere med backhand."
    ]
  },
  {
    "letter": "G",
    "title": "Glide",
    "tag": "Hvor godt discen holder seg i luften",
    "terms": "glide svev flighttall holde seg i luften",
    "paragraphs": [
      "Glide beskriver hvor godt discen svever og holder seg i luften. En disc med mye glide kan gi ekstra lengde fordi den fortsetter å bære fremover selv når farten begynner å avta.",
      "Høy glide er ofte en fordel for nybegynnere og spillere med lavere kastehastighet, fordi discen hjelper mer med lengde uten at man må kaste ekstremt hardt.",
      "Samtidig kan høy glide gjøre discen mer påvirket av vind."
    ]
  },
  {
    "letter": "G",
    "title": "Grenade",
    "tag": "Høyt spesialkast som faller bratt ned",
    "terms": "grenade kast høyt opp ned tommel",
    "paragraphs": [
      "Grenade er et spesialkast der discen kastes høyt opp og faller bratt ned. Kastet brukes ofte når du må over trær, busker eller andre hindringer.",
      "Dette er ikke et kast de fleste trenger å lære først, men det kan være veldig nyttig når du havner i trøbbel.",
      "Grenade krever god kontroll på høyde og vinkel."
    ]
  },
  {
    "letter": "G",
    "title": "Grip",
    "tag": "Hvordan du holder discen",
    "terms": "grip grep power grip fan grip",
    "paragraphs": [
      "Grip betyr grep, altså hvordan du holder discen i hånden. Grepet påvirker både kraft, kontroll, spinn og hvor rent discen slipper fra fingrene.",
      "Power grip brukes ofte til driverkast der man ønsker mer kraft og lengde. Fan grip brukes ofte på putter, midrange og kontrollerte kast der presisjon er viktigere enn maksimal fart.",
      "Et godt grep skal være fast nok til at discen ikke glipper for tidlig, men ikke så anspent at kastet blir stivt."
    ]
  },
  {
    "letter": "H",
    "title": "Headwind",
    "tag": "Motvind",
    "terms": "headwind motvind vind overstabil",
    "paragraphs": [
      "Headwind betyr motvind. Når du kaster i motvind, treffer lufta discen hardere forfra, og discen oppfører seg ofte mer understabilt enn den vanligvis gjør.",
      "Det betyr at discen lettere kan flippe opp, vende over eller bli vanskelig å kontrollere.",
      "Derfor velger mange en mer overstabil disc i motvind."
    ]
  },
  {
    "letter": "H",
    "title": "Hyzer",
    "tag": "Kastvinkel der discen heller nedover på utsiden",
    "terms": "hyzer vinkel venstre høyrehendt backhand",
    "paragraphs": [
      "Hyzer beskriver en kastvinkel der discen slippes med ytterkanten lavere enn innerkanten. For en høyrehendt backhand-kaster vil dette vanligvis gi en linje som avslutter mer mot venstre.",
      "Hyzer brukes mye fordi det gir kontroll og forutsigbarhet.",
      "En overstabil disc på hyzer vil ofte holde vinkelen og avslutte hardt, mens en understabil disc på hyzer kan reise seg opp til flatt og bli en hyzer flip."
    ]
  },
  {
    "letter": "H",
    "title": "Hyzer flip",
    "tag": "Hyzerkast som reiser seg opp til flatt",
    "terms": "hyzer flip understabil rett kast flip",
    "paragraphs": [
      "Hyzer flip er et kast der du slipper en understabil eller nøytral disc på hyzer, og discen reiser seg opp til flat flybane når den får nok fart.",
      "Dette er en veldig nyttig kastetype fordi den kan gi lange, rette og kontrollerte kast.",
      "For å få til hyzer flip må disc, fart og vinkel passe sammen."
    ]
  },
  {
    "letter": "I",
    "title": "Innspill",
    "tag": "Kontrollert kast for å komme nær kurven",
    "terms": "innspill approach upshot kort kast mot kurv",
    "paragraphs": [
      "Innspill er kastet du bruker når du er nær nok til at målet først og fremst er å plassere discen trygt ved kurven.",
      "Et godt innspill handler om kontroll på fart, høyde og landing.",
      "Puttere og midranger er vanlige valg til innspill fordi de er lettere å kontrollere enn raske drivere."
    ]
  },
  {
    "letter": "J",
    "title": "Jump putt",
    "tag": "Putt med hopp utenfor 10 meter",
    "terms": "jump putt hoppeputt utenfor circle 10 meter",
    "paragraphs": [
      "Jump putt er en putt der spilleren bruker et lite hopp eller en fremoverbevegelse for å få mer kraft på lengre putter.",
      "Jump putt er bare tillatt utenfor 10-meter-sirkelen. Discen må være sluppet før du setter foten ned foran lie.",
      "Teknikken kan være nyttig fra C2 eller enda lenger unna, men den krever trening for å bli presis."
    ]
  },
  {
    "letter": "K",
    "title": "Kick",
    "tag": "Når discen spretter av et tre eller hinder",
    "terms": "kick tre sprett treff",
    "paragraphs": [
      "Kick betyr at discen treffer et tre, en gren eller et annet hinder og spretter videre i en ny retning.",
      "På skogsbaner er kick en stor del av spillet.",
      "God banespilling handler derfor ikke bare om å velge den perfekte linjen, men også om å velge linjer der en liten feil ikke straffer deg altfor hardt."
    ]
  },
  {
    "letter": "L",
    "title": "Lay up",
    "tag": "Sikkert kast for å unngå risiko",
    "terms": "lay up legge opp sikker putt innspill",
    "paragraphs": [
      "Lay up betyr å legge opp trygt i stedet for å gå direkte for kurven.",
      "Et lay up-kast er ofte kortere og roligere enn et aggressivt forsøk på å sette putten.",
      "Lay up handler ikke om å være feig. Det handler om å spille smart."
    ]
  },
  {
    "letter": "L",
    "title": "Lie",
    "tag": "Stedet du skal kaste neste kast fra",
    "terms": "lie marker plassering disc mini markør",
    "paragraphs": [
      "Lie er stedet discen ligger etter kastet, og området du skal ta neste kast fra.",
      "Du kan vanligvis bruke discen som markering, eller du kan legge en mini-marker foran discen og deretter plukke opp discen du kastet.",
      "Et lie kan være enkelt eller vanskelig."
    ]
  },
  {
    "letter": "M",
    "title": "Mando / Mandatory",
    "tag": "Påbudt side av et hinder eller punkt",
    "terms": "mando mandatory påbudt side hinder",
    "paragraphs": [
      "Mando betyr mandatory, altså påbudt. Det betyr at discen må passere på riktig side av et markert punkt.",
      "Mando brukes ofte av sikkerhetsgrunner, for eksempel for å hindre spillere i å kaste mot en vei, gangsti eller annen fairway.",
      "Hvis du bommer på mando, får du vanligvis straffekast og må spille videre fra drop zone eller et annet angitt sted."
    ]
  },
  {
    "letter": "M",
    "title": "Marker / Mini",
    "tag": "Liten disc som markerer lie",
    "terms": "marker mini markør lie",
    "paragraphs": [
      "En marker eller mini er en liten disc som brukes til å markere hvor neste kast skal tas fra.",
      "Når du har lagt ned mini-markøren, kan du plukke opp discen du kastet.",
      "Mini brukes ofte i turneringer, men er også praktisk på vanlige runder hvis du vil ha en tydelig og ryddig markering av lie."
    ]
  },
  {
    "letter": "M",
    "title": "Midrange",
    "tag": "Kontroll-disc for mellomlange kast",
    "terms": "midrange mellomdistanse kontroll disc",
    "paragraphs": [
      "Midrange er en disctype som brukes til kontrollerte kast på mellomlange avstander.",
      "Midranger er veldig nyttige for nybegynnere fordi de ofte flyr roligere og mer forutsigbart.",
      "Også erfarne spillere bruker midranger mye, spesielt på rette kast, innspill, skogslinjer og hull der presisjon er viktigere enn maksimal lengde."
    ]
  },
  {
    "letter": "M",
    "title": "Missed mando",
    "tag": "Når discen passerer feil side av mando",
    "terms": "missed mando bommet mandatory drop zone straff",
    "paragraphs": [
      "Missed mando betyr at discen ikke passerte på riktig side av et mandatory-punkt.",
      "Vanligvis får du ett straffekast, og neste kast tas fra en drop zone eller et område som er definert på baneskiltet.",
      "For å unngå missed mando bør du velge en linje som gir god margin på riktig side."
    ]
  },
  {
    "letter": "N",
    "title": "Nose angle",
    "tag": "Vinkelen på fronten av discen",
    "terms": "nose angle nesevinkel nose up nose down",
    "paragraphs": [
      "Nose angle beskriver om fronten av discen peker opp eller ned når den slippes.",
      "Nose up betyr at fronten peker opp. Da vil discen ofte stige, miste fart og fade tidligere enn ønsket.",
      "Nose down betyr at fronten peker mer nedover eller flatt inn i flybanen. Det gir ofte mer effektiv fart, bedre glide og lengre kast."
    ]
  },
  {
    "letter": "N",
    "title": "Nøytral",
    "tag": "Disc som flyr relativt rett",
    "terms": "nøytral stabil stabilitet rett disc",
    "paragraphs": [
      "En nøytral disc er en disc som verken er veldig understabil eller veldig overstabil.",
      "Nøytrale discer er gode til rette kast og teknikktrening fordi de ofte viser hva du faktisk gjør med kastet.",
      "For mange spillere er en nøytral putter, midrange eller fairway-driver noe av det mest nyttige å ha i baggen."
    ]
  },
  {
    "letter": "O",
    "title": "OB / Out of Bounds",
    "tag": "Område utenfor spill",
    "terms": "ob out of bounds utenfor spill straff",
    "paragraphs": [
      "OB betyr out of bounds, altså utenfor spill. Hvis discen lander OB, får du vanligvis ett straffekast i tillegg til kastet du allerede har brukt.",
      "OB kan være vann, vei, jorde, bygning, gjerde eller et område som er markert med tau, pinner, linjer eller skilt.",
      "Et viktig poeng med OB er at du ikke bare må vite om discen er ute, men også hvor du skal spille videre fra."
    ]
  },
  {
    "letter": "O",
    "title": "Overstable / Overstabil",
    "tag": "Disc som motstår turn og fader tydelig",
    "terms": "overstable overstabil fade stabil vind",
    "paragraphs": [
      "En overstabil disc er en disc som motstår turn og som vanligvis avslutter tydelig med fade.",
      "For høyrehendt backhand betyr det ofte at discen vil avslutte mot venstre. For høyrehendt forehand vil den ofte avslutte mot høyre.",
      "Overstabile discer brukes mye til motvind, forehand, hyzer-kast, skip-kast og situasjoner der du trenger en trygg og forutsigbar avslutning."
    ]
  },
  {
    "letter": "P",
    "title": "Par",
    "tag": "Forventet antall kast på hullet",
    "terms": "par forventet kast score",
    "paragraphs": [
      "Par er antall kast en spiller forventes å bruke på et hull. Et par 3-hull er laget for å kunne fullføres på 3 kast.",
      "Hvis du bruker færre kast enn par, får du birdie, eagle eller bedre. Hvis du bruker flere kast enn par, får du bogey, double bogey eller verre.",
      "Par brukes som grunnlag for scoren din gjennom hele runden."
    ]
  },
  {
    "letter": "P",
    "title": "Penalty / Straffekast",
    "tag": "Ekstra kast lagt til scoren",
    "terms": "penalty straff straffekast ob mando",
    "paragraphs": [
      "Penalty betyr straffekast. Det legges til scoren din hvis du bryter en regel eller havner i en situasjon som gir straff.",
      "Et straffekast kan fort endre hele hullet.",
      "Derfor er risikovurdering en viktig del av discgolf."
    ]
  },
  {
    "letter": "P",
    "title": "Power grip",
    "tag": "Grep for mer kraft og lengde",
    "terms": "power grip grep driver kraft",
    "paragraphs": [
      "Power grip er et grep der fingrene ligger godt innunder rimmen på discen.",
      "Grepet gir god kontakt med discen og kan gjøre det lettere å holde discen fast helt frem til slippet.",
      "På putter og midrange bruker mange heller fan grip eller et mer kontrollert grep."
    ]
  },
  {
    "letter": "P",
    "title": "Putt",
    "tag": "Kort kast mot kurven",
    "terms": "putt putting kort kast kurv",
    "paragraphs": [
      "Putt er kastet du bruker når du er nær kurven og prøver å sette discen i mål.",
      "God putting handler ikke bare om teknikk, men også om rutine, selvtillit, balanse og et tydelig siktepunkt.",
      "Mange spillere kan forbedre scoren raskt ved å trene putting."
    ]
  },
  {
    "letter": "P",
    "title": "Putter",
    "tag": "Disc for putting, korte kast og innspill",
    "terms": "putter puttedisc innspill putting kontroll",
    "paragraphs": [
      "Putter er en disctype med lav speed og høy kontroll.",
      "Puttere flyr ofte roligere enn drivere og er lettere å kontrollere på lav fart.",
      "Mange erfarne spillere kaster putter mye lenger enn nye spillere tror."
    ]
  },
  {
    "letter": "R",
    "title": "Reachback",
    "tag": "Tilbaketrekket før kastet",
    "terms": "reachback tilbaketrekk kasteteknikk",
    "paragraphs": [
      "Reachback er delen av kastet der du trekker discen bakover før du akselererer fremover.",
      "En god reachback handler om timing, balanse og kroppskontroll.",
      "For mange nye spillere kan for stor reachback faktisk gjøre kastet dårligere."
    ]
  },
  {
    "letter": "R",
    "title": "Roller",
    "tag": "Kast der discen ruller på bakken",
    "terms": "roller rullekast disc på bakken",
    "paragraphs": [
      "Roller er et kast der discen settes på kant og ruller langs bakken i stedet for å fly hele veien i luften.",
      "En roller kan gi ekstra lengde på riktig underlag, eller hjelpe deg å komme under lave greiner der et vanlig luftkast ikke er mulig.",
      "Underlaget betyr veldig mye."
    ]
  },
  {
    "letter": "S",
    "title": "Scramble",
    "tag": "Å redde seg ut av en vanskelig situasjon",
    "terms": "scramble redning dårlig lie komme seg ut",
    "paragraphs": [
      "Scramble betyr å komme seg ut av trøbbel etter et dårlig kast.",
      "Et godt scramble-kast handler ofte mer om smart valg enn om spektakulær teknikk.",
      "Noen ganger er det beste scramble-kastet bare å kaste trygt ut på fairway."
    ]
  },
  {
    "letter": "S",
    "title": "Shot shape",
    "tag": "Planlagt form på kastet",
    "terms": "shot shape linje kastelinje flight",
    "paragraphs": [
      "Shot shape betyr formen eller linjen du ønsker at kastet skal ha.",
      "Når du planlegger shot shape, vurderer du hindringer, vind, landingssone, discvalg og hvilken side discen bør avslutte på.",
      "Etter hvert som du blir bedre, handler discgolf mindre om å kaste lengst mulig og mer om å velge riktig shot shape for situasjonen."
    ]
  },
  {
    "letter": "S",
    "title": "Skip",
    "tag": "Når discen spretter eller sklir etter landing",
    "terms": "skip sprett bakken fade",
    "paragraphs": [
      "Skip er når discen treffer bakken og spretter eller sklir videre.",
      "Skip kan brukes bevisst for å komme rundt hindringer, få ekstra meter eller lande nærmere kurven etter en kontrollert fade.",
      "Samtidig kan skip være risikabelt nær OB, vann eller bratte skråninger."
    ]
  },
  {
    "letter": "S",
    "title": "Speed",
    "tag": "Hvor raskt discen må kastes",
    "terms": "speed fart flighttall hvor rask disc",
    "paragraphs": [
      "Speed beskriver hvor raskt en disc må kastes for å fly slik den er ment.",
      "En vanlig misforståelse er at høyere speed automatisk gir lengre kast. Hvis du ikke har nok kastehastighet, kan en rask driver fade tidlig og gå kortere enn en roligere disc.",
      "For nybegynnere er det ofte bedre å starte med lavere speed."
    ]
  },
  {
    "letter": "S",
    "title": "Spit out",
    "tag": "Når discen treffer kurven, men spretter ut",
    "terms": "spit out spitout kurv kjetting ut",
    "paragraphs": [
      "Spit out er når discen treffer kjettingene eller kurven, men ikke blir liggende i kurven.",
      "Noen spit outs skyldes uflaks, men det kan også skyldes for hard putt, feil vinkel, for høyt treff eller treff langt ute på siden av kjettingene.",
      "Ved å trene på fartskontroll og siktepunkt kan du redusere risikoen."
    ]
  },
  {
    "letter": "S",
    "title": "Stability / Stabilitet",
    "tag": "Hvordan discen oppfører seg i luften",
    "terms": "stability stabilitet understabil overstabil nøytral",
    "paragraphs": [
      "Stabilitet beskriver om en disc er understabil, nøytral eller overstabil.",
      "En understabil disc vender lettere over og kan være fin for nybegynnere eller hyzer flip. En nøytral disc flyr mer rett og er god til kontroll. En overstabil disc tåler mer kraft og vind.",
      "Stabilitet oppleves forskjellig fra spiller til spiller."
    ]
  },
  {
    "letter": "S",
    "title": "Standstill",
    "tag": "Kast uten tilløp",
    "terms": "standstill kast uten tilløp rolig",
    "paragraphs": [
      "Standstill er et kast uten tilløp. Du står stille og fokuserer på balanse, vinkel, timing og rent slipp.",
      "Dette brukes ofte til innspill, korte hull, teknikktrening og situasjoner der du ikke har plass til tilløp.",
      "Mange spillere får bedre teknikk av å trene standstill."
    ]
  },
  {
    "letter": "S",
    "title": "Straddle putt",
    "tag": "Putt med bred beinstilling",
    "terms": "straddle putt bred beinstilling putting",
    "paragraphs": [
      "Straddle putt er en puttestil der du står med beina bredt fra hverandre, ofte med kroppen mer rett mot kurven.",
      "Denne puttestilen er nyttig når du må putte rundt et tre, fra ujevnt underlag eller når en vanlig puttestilling ikke gir fri linje.",
      "Mange spillere bruker både vanlig putt og straddle putt, avhengig av situasjonen."
    ]
  },
  {
    "letter": "T",
    "title": "Tailwind",
    "tag": "Medvind",
    "terms": "tailwind medvind vind understabil",
    "paragraphs": [
      "Tailwind betyr medvind. Når vinden blåser samme vei som kastet, oppfører discen seg ofte mer overstabilt og kan falle raskere enn den gjør i stille vær.",
      "I medvind kan det være lurt å velge en disc med mer glide eller litt mer understabilitet enn du ville valgt i motvind.",
      "Medvind kan gi lange kast, men det kan også presse discen ned hvis du kaster for lavt eller med feil vinkel."
    ]
  },
  {
    "letter": "T",
    "title": "Tee / Tee pad",
    "tag": "Startområdet på hullet",
    "terms": "tee tee pad utkast start",
    "paragraphs": [
      "Tee eller tee pad er området du kaster første kast fra på et hull.",
      "Fra tee velger du disc, kastetype og linje ut fra hvordan hullet ser ut.",
      "Et godt utkast fra tee gjør resten av hullet enklere."
    ]
  },
  {
    "letter": "T",
    "title": "Thumber",
    "tag": "Overhand-kast med tommelgrep",
    "terms": "thumber tommelkast overhand",
    "paragraphs": [
      "Thumber er et overhand-kast der tommelen plasseres inne i rimmen på discen.",
      "Dette kastet brukes ofte når du må over trær, ut av skogen eller når du ikke har en vanlig backhand- eller forehand-linje.",
      "Thumber kan være hardt for skulder og arm hvis det kastes mye eller for hardt."
    ]
  },
  {
    "letter": "T",
    "title": "Tomahawk",
    "tag": "Overhand-kast med forehand-lignende grep",
    "terms": "tomahawk overhand kast",
    "paragraphs": [
      "Tomahawk er et overhand-kast der discen kastes over hodet med et grep som ligner mer på forehand.",
      "Tomahawk brukes ofte for å komme over hindringer, ut av skog eller rundt situasjoner der du ikke har plass til et vanlig kast.",
      "Tomahawk og thumber ligner fordi begge er overhand-kast, men grepet og flybanen er forskjellig."
    ]
  },
  {
    "letter": "T",
    "title": "Turn",
    "tag": "Discens bevegelse tidlig i flybanen",
    "terms": "turn vende over flighttall understabil",
    "paragraphs": [
      "Turn beskriver hvor mye discen beveger seg i rotasjonsretningen tidlig i flybanen når den har høy fart.",
      "Jo mer negativt turn-tallet er, jo lettere kan discen vende over.",
      "For mye turn kan også bli vanskelig å kontrollere, spesielt i motvind eller for spillere med høy kastekraft."
    ]
  },
  {
    "letter": "T",
    "title": "Turnover",
    "tag": "Kast som holder en vendende linje",
    "terms": "turnover kast anhyzer understabil høyre",
    "paragraphs": [
      "Turnover er et kast der discen vender over og holder den vendende linjen en stund, ofte uten å fade helt tilbake.",
      "For høyrehendt backhand betyr dette vanligvis et kast som beveger seg mot høyre.",
      "Understabile discer brukes ofte til turnover-kast, men også nøytrale discer kan brukes hvis de kastes med riktig anhyzer-vinkel og fart."
    ]
  },
  {
    "letter": "U",
    "title": "Understable / Understabil",
    "tag": "Disc som lettere vender over",
    "terms": "understable understabil flippy turn nybegynner",
    "paragraphs": [
      "En understabil disc er en disc som lettere vender over i høy fart.",
      "Understabile discer kan være veldig gode for nybegynnere, fordi de ofte krever mindre kraft for å få en rett og lang flybane.",
      "De brukes også mye av erfarne spillere til hyzer flip, turnover-kast, rollers og linjer der man ønsker at discen skal holde seg mot høyre for høyrehendt backhand."
    ]
  },
  {
    "letter": "U",
    "title": "Upshot",
    "tag": "Innspill mot kurven",
    "terms": "upshot approach innspill kort kast",
    "paragraphs": [
      "Upshot er et annet ord for approach eller innspill.",
      "Et godt upshot handler om å kontrollere fart, høyde, vinkel og landing.",
      "Dette er en av de viktigste ferdighetene for å få bedre score."
    ]
  },
  {
    "letter": "V",
    "title": "Visualisere kastet",
    "tag": "Se for deg linjen før du kaster",
    "terms": "visualisere kastet visualisering linje planlegge kast",
    "paragraphs": [
      "Å visualisere kastet betyr å se for seg linjen før du kaster.",
      "Dette hjelper deg å velge riktig disc, riktig kastetype og riktig kraft.",
      "Jo bedre du blir til å visualisere kastet, jo enklere blir det å spille smart, velge tryggere linjer og unngå unødvendig risiko."
    ]
  },
  {
    "letter": "X",
    "title": "X-step",
    "tag": "Fotarbeid i tilløpet før kastet",
    "terms": "x-step x step tilløp fotarbeid driverkast",
    "paragraphs": [
      "X-step er et vanlig fotarbeid i discgolf der beina krysser hverandre i tilløpet før kastet.",
      "Målet med X-step er ikke bare å bevege seg fortere. Det handler om å få kroppen i riktig posisjon slik at kraften kan overføres fra beina, gjennom hoftene, overkroppen, armen og ut i discen.",
      "For nye spillere kan det være smart å lære standstill først. Når kastet er mer kontrollert, kan X-step legges til gradvis for å skape mer lengde uten å miste presisjon."
    ]
  }
];

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function injectStyles() {
    if (document.getElementById("gk-ordbok-style")) return;
    var style = document.createElement("style");
    style.id = "gk-ordbok-style";
    style.textContent = [
      "#gk-dg-dictionary{max-width:none;width:100%;margin:0;padding:0 12px 34px;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;color:#e5e7eb;clear:none;float:none}",
      "#gk-dg-dictionary *{box-sizing:border-box}",
      "#gk-dg-dictionary .gk-hero{border-radius:20px;padding:26px 20px;text-align:center;background:linear-gradient(135deg,#0b1220 0%,#111827 100%);border:1px solid rgba(255,255,255,.10);box-shadow:0 14px 34px rgba(0,0,0,.28);margin:0 0 18px}",
      "#gk-dg-dictionary .gk-badge{display:inline-block;padding:7px 12px;margin-bottom:12px;border-radius:999px;background:rgba(250,204,21,.14);color:#facc15;font-size:12px;font-weight:900;letter-spacing:.4px;text-transform:uppercase}",
      "#gk-dg-dictionary h1{margin:0 0 12px;font-size:30px;line-height:1.15;color:#fff;font-weight:900}",
      "#gk-dg-dictionary .gk-hero p{margin:0 auto;color:#d1d5db;font-size:15px;line-height:1.75;max-width:620px}",
      "#gk-dg-dictionary .gk-hero .gk-yellow{margin-top:16px;color:#facc15;font-size:14px;line-height:1.6;font-weight:900}",
      "#gk-dg-dictionary .gk-tools{margin:0 0 16px;padding:14px;border-radius:18px;background:#111827;border:1px solid rgba(255,255,255,.10);box-shadow:0 10px 24px rgba(0,0,0,.22)}",
      "#gk-dg-dictionary .gk-searchrow{display:flex;gap:8px;align-items:center;margin:0 0 12px}",
      "#gk-dg-dictionary input{flex:1;width:100%;padding:13px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:#0b1220;color:#fff;font-size:14px;outline:none}",
      "#gk-dg-dictionary .gk-clear{border:none;cursor:pointer;padding:13px 15px;border-radius:999px;background:#facc15;color:#0b1220;font-weight:900;font-size:13px}",
      "#gk-dg-dictionary .gk-letters{display:flex;flex-wrap:wrap;gap:7px;justify-content:center}",
      "#gk-dg-dictionary .gk-letter{border:1px solid rgba(255,255,255,.12);cursor:pointer;min-width:34px;padding:8px 9px;border-radius:999px;background:rgba(255,255,255,.06);color:#e5e7eb;font-weight:900;font-size:12px}",
      "#gk-dg-dictionary .gk-letter.active{background:#facc15;color:#0b1220;border-color:#facc15}",
      "#gk-dg-dictionary .gk-info{margin:0 0 16px;padding:14px 16px;border-radius:16px;background:rgba(59,130,246,.10);border:1px solid rgba(59,130,246,.24);color:#dbeafe;font-size:14px;line-height:1.65}",
      "#gk-dg-dictionary .gk-info strong{color:#facc15}",
      "#gk-dg-dictionary .gk-empty{display:none;margin:16px 0;padding:16px;border-radius:16px;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.22);color:#fecaca;text-align:center;font-size:14px;line-height:1.7}",
      "#gk-dg-dictionary .gk-title{margin:18px 0 10px;padding:11px 14px;border-radius:14px;background:#0b1220;border:1px solid rgba(255,255,255,.08);color:#fff;font-size:18px;font-weight:900}",
      "#gk-dg-dictionary .gk-list{display:grid;grid-template-columns:1fr;gap:10px;margin:0}",
      "#gk-dg-dictionary details{border-radius:16px;overflow:hidden;background:#111827;border:1px solid rgba(255,255,255,.08);box-shadow:0 8px 20px rgba(0,0,0,.18);margin:0}",
      "#gk-dg-dictionary details[open]{border-color:rgba(250,204,21,.34)}",
      "#gk-dg-dictionary summary{list-style:none;cursor:pointer;padding:16px 17px;display:flex;align-items:center;justify-content:space-between;gap:14px}",
      "#gk-dg-dictionary summary::-webkit-details-marker{display:none}",
      "#gk-dg-dictionary .gk-word{display:flex;flex-direction:column;gap:5px}",
      "#gk-dg-dictionary .gk-word strong{color:#fff;font-size:17px;line-height:1.2}",
      "#gk-dg-dictionary .gk-tag{color:#9ca3af;font-size:13px;line-height:1.4}",
      "#gk-dg-dictionary .gk-plus{flex:0 0 auto;width:32px;height:32px;border-radius:50%;background:rgba(250,204,21,.12);border:1px solid rgba(250,204,21,.22);color:#facc15;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900}",
      "#gk-dg-dictionary .gk-plus:before{content:'+'}",
      "#gk-dg-dictionary details[open] .gk-plus{background:#facc15;color:#0b1220}",
      "#gk-dg-dictionary details[open] .gk-plus:before{content:'−'}",
      "#gk-dg-dictionary .gk-body{padding:0 17px 17px;color:#d1d5db;font-size:14.5px;line-height:1.75}",
      "#gk-dg-dictionary .gk-body p{margin:0 0 12px}",
      "#gk-dg-dictionary .gk-body p:last-child{margin-bottom:0}",
      "#gk-dg-dictionary .gk-cta{margin-top:24px;padding:22px 18px;border-radius:20px;text-align:center;background:linear-gradient(135deg,rgba(59,130,246,.22),rgba(250,204,21,.12));border:1px solid rgba(255,255,255,.10)}",
      "#gk-dg-dictionary .gk-cta h2{margin:0 0 10px;color:#fff;font-size:23px;line-height:1.25}",
      "#gk-dg-dictionary .gk-cta p{margin:0 auto 16px;color:#d1d5db;line-height:1.7;font-size:14.5px;max-width:600px}",
      "#gk-dg-dictionary .gk-buttons{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}",
      "#gk-dg-dictionary .gk-btn{display:inline-block;padding:12px 15px;border-radius:999px;font-weight:900;text-decoration:none;font-size:14px}",
      "#gk-dg-dictionary .gk-primary{background:#facc15;color:#0b1220}",
      "#gk-dg-dictionary .gk-secondary{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.16)}",
      "@media(max-width:760px){#gk-dg-dictionary{max-width:100%;padding:0 10px 28px}#gk-dg-dictionary .gk-searchrow{flex-direction:column}#gk-dg-dictionary .gk-clear{width:100%}#gk-dg-dictionary .gk-buttons{flex-direction:column}#gk-dg-dictionary .gk-btn{text-align:center}}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function render() {
    var mount = document.getElementById("gk-dg-dictionary-app");
    if (!mount) return false;

    injectStyles();

    var letters = ["Alle"].concat(Array.from(new Set(DATA.map(function (e) { return e.letter; }))));
    var html = '<section id="gk-dg-dictionary">';
    html += '<div class="gk-hero"><div class="gk-badge">GolfKongen guide</div><h1>Disc Golf-ordbok</h1><p>Discgolf har mange ord og uttrykk. Noen handler om kasteteknikk, noen handler om regler, noen handler om score, og andre beskriver hvordan discen flyr. Her forklarer vi begrepene enkelt, praktisk og med eksempler.</p><p class="gk-yellow">Søk etter ord, filtrer alfabetisk og trykk på begrepet for å lese forklaringen.</p></div>';
    html += '<div class="gk-tools"><div class="gk-searchrow"><input id="gkDictSearch" type="search" placeholder="Søk etter ord, f.eks. hyzer, birdie, OB, putter..." autocomplete="off"><button id="gkDictClear" class="gk-clear" type="button">Nullstill</button></div><div class="gk-letters">';
    letters.forEach(function (l) {
      var value = l === "Alle" ? "all" : l;
      html += '<button class="gk-letter' + (value === "all" ? " active" : "") + '" type="button" data-letter="' + esc(value) + '">' + esc(l) + '</button>';
    });
    html += '</div></div>';
    html += '<div class="gk-info"><strong>Tips:</strong> Mange discgolf-ord brukes på engelsk selv når vi snakker norsk. Derfor kan du høre spillere si både “approach” og “innspill”, “basket” og “kurv”, eller “OB” og “utenfor spill”.</div>';
    html += '<div id="gkDictEmpty" class="gk-empty">Fant ingen ord som matcher søket ditt. Prøv et annet ord, eller trykk Nullstill.</div>';

    var current = "";
    DATA.forEach(function (e) {
      if (e.letter !== current) {
        if (current) html += "</div>";
        current = e.letter;
        html += '<div class="gk-title" data-section-letter="' + esc(current) + '">' + esc(current) + '</div><div class="gk-list">';
      }
      html += '<details class="gk-item" data-letter="' + esc(e.letter) + '" data-term="' + esc((e.title + " " + e.tag + " " + e.terms).toLowerCase()) + '">';
      html += '<summary><span class="gk-word"><strong>' + esc(e.title) + '</strong><span class="gk-tag">' + esc(e.tag) + '</span></span><span class="gk-plus"></span></summary>';
      html += '<div class="gk-body">';
      e.paragraphs.forEach(function (p) { html += '<p>' + esc(p) + '</p>'; });
      html += '</div></details>';
    });
    if (current) html += "</div>";

    html += '<div class="gk-cta"><h2>Vil du lære mer?</h2><p>Når du forstår ordene blir det lettere å velge riktig disc, forstå flighttall og spille smartere på banen. Se gjerne våre andre guider for å komme enda bedre i gang.</p><div class="gk-buttons"><a class="gk-btn gk-primary" href="https://golfkongen.no/discgolf/laer-mer-om-disc-golf/betydning-av-tallene-pa-discene">Hva betyr tallene?</a><a class="gk-btn gk-secondary" href="https://golfkongen.no/discgolf/laer-mer-om-disc-golf/hvordan-velge-disc">Hvordan velge disc?</a><a class="gk-btn gk-secondary" href="https://golfkongen.no/flight-finder">Bruk Flight Finderen</a></div></div>';
    html += '</section>';

    mount.innerHTML = html;

    var search = document.getElementById("gkDictSearch");
    var clear = document.getElementById("gkDictClear");
    var buttons = Array.prototype.slice.call(mount.querySelectorAll(".gk-letter"));
    var activeLetter = "all";

    function applyFilter() {
      var q = (search.value || "").trim().toLowerCase();
      var any = false;
      var items = Array.prototype.slice.call(mount.querySelectorAll(".gk-item"));
      items.forEach(function (item) {
        var letter = item.getAttribute("data-letter");
        var text = item.getAttribute("data-term") || "";
        var show = q ? text.indexOf(q) !== -1 : (activeLetter === "all" || letter === activeLetter);
        item.style.display = show ? "" : "none";
        if (!show) item.removeAttribute("open");
        if (show) any = true;
      });

      Array.prototype.slice.call(mount.querySelectorAll(".gk-title")).forEach(function (title) {
        var letter = title.getAttribute("data-section-letter");
        var hasVisible = items.some(function (item) {
          return item.getAttribute("data-letter") === letter && item.style.display !== "none";
        });
        title.style.display = hasVisible ? "" : "none";
      });

      document.getElementById("gkDictEmpty").style.display = any ? "none" : "block";
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        activeLetter = btn.getAttribute("data-letter") || "all";
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        if (search.value) search.value = "";
        applyFilter();
      });
    });

    search.addEventListener("input", function () {
      if (search.value.trim()) {
        activeLetter = "all";
        buttons.forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-letter") === "all"); });
      }
      applyFilter();
    });

    clear.addEventListener("click", function () {
      search.value = "";
      activeLetter = "all";
      buttons.forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-letter") === "all"); });
      applyFilter();
    });

    return true;
  }

  function boot() {
    if (render()) return;
    setTimeout(render, 300);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
