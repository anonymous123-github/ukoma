import { CONFIG } from './config'

export const VALIDGUESSES = [
  'AHĄKE',
  'AHĄKU',
  'AHĄLĄ',
  'AHĄNA',
  'AHĄPE',
  'AHĄRO',
  'AHĄTA',
  'AHĄWI',
  'AHĄXA',
  'AHĄŁE',
  'AHĄŁO',
  'AHĄNGA',
  'AHĄNGU',
  'AHĄŘU',
  'AMANGI',
  'AMĄKE',
  'AMĄKU',
  'AMĄLĄ',
  'AMĄPE',
  'AMĄRO',
  'AMĄTA',
  'AMĄWI',
  'AMĄXA',
  'AMĄŁE',
  'AMĄŁO',
  'AMĄNGA',
  'AMĄNGU',
  'AMĄŘU',
  'AMNGAY',
  'ANAHA',
  'ANAMA',
  'ANARI',
  'ANATA',
  'ANAYI',
  'ANANGA',
  'ANEHĄ',
  'ANEMĄ',
  'ANERI',
  'ANETĄ',
  'ANENGĄ',
  'ANUMI',
  'APAHĄ',
  'APAMĄ',
  'APARI',
  'APATĄ',
  'APAYĄ',
  'APANGĄ',
  'ARIKE',
  'ARIKU',
  'ARILĄ',
  'ARIPE',
  'ARIRO',
  'ARITA',
  'ARIWI',
  'ARIXA',
  'ARIŁE',
  'ARIŁO',
  'ARINGA',
  'ARINGU',
  'ARIŘU',
  'ARYAM',
  'ARYAN',
  'ARYAY',
  'ARYEK',
  'ARYĄX',
  'ATUKE',
  'ATUKU',
  'ATULĄ',
  'ATUPE',
  'ATURO',
  'ATUTA',
  'ATUWI',
  'ATUXA',
  'ATUŁE',
  'ATUŁO',
  'ATUNGA',
  'ATUNGU',
  'ATUŘU',
  'ATWAM',
  'ATWAN',
  'ATWAY',
  'ATWEK',
  'ATWĄX',
  'AWAHĄ',
  'AWAMĄ',
  'AWARI',
  'AWATĄ',
  'AWANGĄ',
  'AWHĄN',
  'AWĄHĄ',
  'AWĄMĄ',
  'AWĄNĄ',
  'AWĄTĄ',
  'AWĄNGĄ',
  'AXAHI',
  'AYAŁĄ',
  'AYHING',
  'AYHUR',
  'AYHĄX',
  'AYIKE',
  'AYIME',
  'AYIMĄ',
  'AYINE',
  'AYINĄ',
  'AYIPE',
  'AYITI',
  'AYIWI',
  'AYIYĄ',
  'AYIZO',
  'AYIZĄ',
  'AYIŁA',
  'AYIŁI',
  'AYKUN',
  'AYKWI',
  'AYKWĄ',
  'AYLĄR',
  'AYLĄW',
  'AYMĄNG',
  'AYNANG',
  'AYNUM',
  'AYNUN',
  'AYOKA',
  'AYORI',
  'AYPĄK',
  'AYTXE',
  'AYTXĄ',
  'AYTĄM',
  'AYXAN',
  'AYXĄŁ',
  'AYXĄNG',
  'AYZANG',
  'AYĄNA',
  'AYNGANG',
  'AYNGWĄ',
  'AYŘĄW',
  'ANGEKE',
  'ANGEKU',
  'ANGELĄ',
  'ANGEPE',
  'ANGERO',
  'ANGETA',
  'ANGEWI',
  'ANGEXA',
  'ANGEŁE',
  'ANGEŁO',
  'ANGENGA',
  'ANGENGU',
  'ANGEŘU',
  'ANGMĄY',
  'ANGOKE',
  'ANGOKU',
  'ANGOLĄ',
  'ANGOPE',
  'ANGORO',
  'ANGOTA',
  'ANGOWI',
  'ANGOXA',
  'ANGOŁE',
  'ANGOŁO',
  'ANGONGA',
  'ANGONGU',
  'ANGOŘU',
  'ANGĄKE',
  'ANGĄKU',
  'ANGĄLĄ',
  'ANGĄPE',
  'ANGĄRO',
  'ANGĄTA',
  'ANGĄWI',
  'ANGĄXA',
  'ANGĄŁE',
  'ANGĄŁO',
  'ANGĄNGA',
  'ANGĄNGU',
  'ANGĄŘU',
  'BENGWĄ',
  'BĄBĄK',
  'DĄDĄK',
  'DĄHĄN',
  'DĄNMA',
  'EHĄKE',
  'EHĄME',
  'EHĄNE',
  'EHĄPE',
  'EHĄTI',
  'EHĄWI',
  'EHĄYĄ',
  'EHĄZO',
  'EHĄZĄ',
  'EHĄŁA',
  'EHĄŁI',
  'EKTWĄ',
  'ENUKE',
  'ENUME',
  'ENUNE',
  'ENUPE',
  'ENUTI',
  'ENUWI',
  'ENUYĄ',
  'ENUZO',
  'ENUZĄ',
  'ENUŁA',
  'ENUŁI',
  'ENĄHĄ',
  'ENĄMĄ',
  'ENĄRI',
  'ENĄTĄ',
  'ENĄNGĄ',
  'ERIKE',
  'ERIME',
  'ERINE',
  'ERIPE',
  'ERITI',
  'ERIWI',
  'ERIYĄ',
  'ERIZO',
  'ERIZĄ',
  'ERIŁA',
  'ERIŁI',
  'ETUKE',
  'ETUME',
  'ETUNE',
  'ETUPE',
  'ETUTI',
  'ETUWI',
  'ETUYĄ',
  'ETUZO',
  'ETUZĄ',
  'ETUŁA',
  'ETUŁI',
  'ETĄHĄ',
  'ETĄMĄ',
  'ETĄNĄ',
  'ETĄTĄ',
  'ETĄNGĄ',
  'EYIKE',
  'EYIME',
  'EYINE',
  'EYIPE',
  'EYITI',
  'EYIWI',
  'EYIYĄ',
  'EYIZO',
  'EYIZĄ',
  'EYIŁA',
  'EYIŁI',
  'EZIHĄ',
  'EZIMĄ',
  'EZIRI',
  'EZITĄ',
  'EZINGĄ',
  'ENGAŘU',
  'ENGIŁĄ',
  'ENGOYE',
  'ENGOYO',
  'ENGULU',
  'ENGURO',
  'ENGĄZI',
  'ENGĄZO',
  'EŘIHA',
  'EŘIMA',
  'EŘIRI',
  'EŘITA',
  'EŘIYI',
  'EŘINGA',
  'GOZOX',
  'HANĄY',
  'HIHIY',
  'HIPUN',
  'HIWUY',
  'HUNMĄ',
  'HUNUM',
  'HUYKĄ',
  'HĄTUNG',
  'IHAMĄ',
  'IHENĄ',
  'IHIRI',
  'IHIYĄ',
  'IHĄKE',
  'IHĄME',
  'IHĄNE',
  'IHĄPE',
  'IHĄTI',
  'IHĄTĄ',
  'IHĄWI',
  'IHĄYĄ',
  'IHĄZO',
  'IHĄZĄ',
  'IHĄŁA',
  'IHĄŁI',
  'IKETĄ',
  'IKEYO',
  'IKEŁU',
  'IKODE',
  'IKUYO',
  'IKUŁU',
  'IKĄTU',
  'ILĄYO',
  'ILĄŁU',
  'IMAŘU',
  'IMENU',
  'IMEYU',
  'IMUKI',
  'INAHI',
  'INAMĄ',
  'INAŁI',
  'INEHI',
  'INIHĄ',
  'INIMĄ',
  'ININĄ',
  'INITĄ',
  'INIYA',
  'INIYĄ',
  'ININGĄ',
  'INNĄNG',
  'INUKE',
  'INUMA',
  'INUME',
  'INUNE',
  'INUPE',
  'INUTI',
  'INUWI',
  'INUYĄ',
  'INUZO',
  'INUZĄ',
  'INUŁA',
  'INUŁI',
  'INĄXE',
  'INĄNGĄ',
  'IPERI',
  'IPEYO',
  'IPEŁU',
  'IRIKE',
  'IRIME',
  'IRINE',
  'IRIPE',
  'IRITI',
  'IRIWI',
  'IRIYĄ',
  'IRIZO',
  'IRIZĄ',
  'IRIŁA',
  'IRIŁI',
  'IROYO',
  'IROŁU',
  'ITAMU',
  'ITAYO',
  'ITAŁI',
  'ITAŁU',
  'ITUKE',
  'ITUME',
  'ITUNE',
  'ITUPE',
  'ITUTI',
  'ITUWI',
  'ITUYĄ',
  'ITUZO',
  'ITUZĄ',
  'ITUŁA',
  'ITUŁI',
  'IWIHI',
  'IWIYO',
  'IWIŁU',
  'IXAYO',
  'IXAŁU',
  'IXERI',
  'IXĄTI',
  'IYAPE',
  'IYIKE',
  'IYIME',
  'IYINE',
  'IYIPE',
  'IYITI',
  'IYIWI',
  'IYIYĄ',
  'IYIZO',
  'IYIZĄ',
  'IYIŁA',
  'IYIŁI',
  'IYĄTI',
  'IZERĄ',
  'IZUHĄ',
  'IZUMA',
  'IZUMĄ',
  'IZUNĄ',
  'IZUTĄ',
  'IZUNGĄ',
  'IŁAHA',
  'IŁAMI',
  'IŁAXE',
  'IŁEYO',
  'IŁEŁU',
  'IŁOYO',
  'IŁOŁU',
  'INGAHĄ',
  'INGAMĄ',
  'INGARI',
  'INGATĄ',
  'INGAYO',
  'INGAŁU',
  'INGANGĄ',
  'INGAŘU',
  'INGIŁĄ',
  'INGOYE',
  'INGOYO',
  'INGUKĄ',
  'INGULU',
  'INGURO',
  'INGUYO',
  'INGUŁU',
  'INGĄXĄ',
  'INGĄZI',
  'INGĄZO',
  'IŘEXA',
  'IŘOHI',
  'IŘUYO',
  'IŘUŁU',
  'IŘĄŘU',
  'KAMAY',
  'KANMĄ',
  'KARAŁ',
  'KAYKĄ',
  'KANGZĄ',
  'KEXTĄ',
  'KONANG',
  'KOTXĄ',
  'KUNEY',
  'KUREN',
  'KUZĄŁ',
  'KUŘIP',
  'KWIHĄ',
  'KWIMĄ',
  'KWINĄ',
  'KWITĄ',
  'KWINGĄ',
  'KWĄTI',
  'KWĄXE',
  'KĄNMĄ',
  'KĄYKĄ',
  'LANMĄ',
  'LIHING',
  'LIHUR',
  'LIHĄX',
  'LIKUN',
  'LIKWI',
  'LIKWĄ',
  'LILĄR',
  'LILĄW',
  'LIMĄNG',
  'LINANG',
  'LINUM',
  'LINUN',
  'LIPĄK',
  'LITXE',
  'LITXĄ',
  'LITĄM',
  'LIXAN',
  'LIXĄŁ',
  'LIXĄNG',
  'LIYĄT',
  'LIZANG',
  'LINGANG',
  'LINGWĄ',
  'LIŘĄW',
  'LUHIY',
  'LUNMĄ',
  'LUŁING',
  'LYAŁĄ',
  'LYIHĄ',
  'LYIMĄ',
  'LYINĄ',
  'LYIRI',
  'LYITĄ',
  'LYINGĄ',
  'LYĄNA',
  'LĄKĄP',
  'MANNĄ',
  'MAXĄW',
  'MANGAY',
  'MANGRU',
  'METING',
  'MEŁĄW',
  'MENGUŁ',
  'MENGWĄ',
  'MIHĄNG',
  'MITEY',
  'MONMĄ',
  'MUNGUY',
  'MUŘĄW',
  'MYUNGĄ',
  'MYĄXE',
  'MĄHING',
  'MĄHUR',
  'MĄHĄX',
  'MĄKUN',
  'MĄKUNG',
  'MĄKWI',
  'MĄKWĄ',
  'MĄLWI',
  'MĄLĄK',
  'MĄLĄR',
  'MĄLĄW',
  'MĄMANG',
  'MĄMĄP',
  'MĄMĄNG',
  'MĄNANG',
  'MĄNIŁ',
  'MĄNMĄ',
  'MĄNUM',
  'MĄNUN',
  'MĄPIT',
  'MĄPUN',
  'MĄPĄK',
  'MĄRWU',
  'MĄRĄP',
  'MĄRĄT',
  'MĄTEY',
  'MĄTUNG',
  'MĄTXE',
  'MĄTXĄ',
  'MĄTĄM',
  'MĄTĄP',
  'MĄXAN',
  'MĄXUT',
  'MĄXĄŁ',
  'MĄXĄNG',
  'MĄYĄT',
  'MĄZANG',
  'MĄŁUŁ',
  'MĄŁĄK',
  'MĄŁĄT',
  'MĄNGAM',
  'MĄNGAN',
  'MĄNGAY',
  'MĄNGANG',
  'MĄNGWĄ',
  'MĄŘAP',
  'MĄŘWĄ',
  'MĄŘXA',
  'MĄŘYI',
  'MĄŘYĄ',
  'MĄŘĄW',
  'NAMIY',
  'NAMTI',
  'NANING',
  'NANMĄ',
  'NARAP',
  'NAWĄY',
  'NAYKĄ',
  'NANGUY',
  'NANGĄY',
  'NEKMA',
  'NIHĄN',
  'NINIY',
  'NINMĄ',
  'NINĄNG',
  'NIYENG',
  'NIYIŁ',
  'NIYĄN',
  'NINGAM',
  'NINGAN',
  'NINGAY',
  'NINGLA',
  'NINGNĄ',
  'NINGŁĄ',
  'NOYENG',
  'NOYIŁ',
  'NOYĄN',
  'NUNMĄ',
  'NUNNĄ',
  'NUNUM',
  'NUWONG',
  'NUWĄP',
  'NUYKĄ',
  'NUŁIY',
  'NUNGAY',
  'NUNGĄP',
  'NĄKIY',
  'NĄLĄK',
  'NĄMAY',
  'NĄMBA',
  'NĄMUT',
  'NĄMĄNG',
  'NĄNIM',
  'NĄNUX',
  'NĄRĄY',
  'NĄYENG',
  'NĄYIŁ',
  'NĄYĄN',
  'NĄNGAY',
  'OHĄHĄ',
  'OHĄMĄ',
  'OHĄRI',
  'OHĄTĄ',
  'OHĄNGĄ',
  'OKIHA',
  'OKIMA',
  'OKIRI',
  'OKITA',
  'OKIYI',
  'OKINGA',
  'OROKI',
  'OTĄHA',
  'OTĄMA',
  'OTĄRI',
  'OTĄTA',
  'OTĄYI',
  'OTĄNGA',
  'OŁAHA',
  'OŁAMA',
  'OŁARI',
  'OŁATA',
  'OŁAYI',
  'OŁANGA',
  'ONGTĄY',
  'PEHEK',
  'PELĄR',
  'PEMANG',
  'PENUM',
  'PENĄY',
  'PEPUNG',
  'PERĄT',
  'PETĄŁ',
  'PEXUT',
  'PEXĄN',
  'PEŁĄR',
  'PENGAY',
  'PENGRI',
  'PEŘAP',
  'PIYĄR',
  'PIŁĄNG',
  'PUNMĄ',
  'PUYAT',
  'PUYKĄ',
  'PWĄZI',
  'PYINY',
  'PĄHĄY',
  'PĄTĄP',
  'PĄYEM',
  'RANMĄ',
  'RAYKĄ',
  'RINMĄ',
  'RUNMĄ',
  'RĄHĄP',
  'TANĄK',
  'TEMBI',
  'TEYOK',
  'TENGTĄ',
  'TINĄK',
  'TIXIN',
  'TIYĄY',
  'TIŘUY',
  'TUHING',
  'TUHUR',
  'TUHĄX',
  'TUKUN',
  'TUKWI',
  'TUKWĄ',
  'TULĄR',
  'TULĄW',
  'TUMĄNG',
  'TUNANG',
  'TUNTO',
  'TUNUM',
  'TUNUN',
  'TUNĄY',
  'TUPĄK',
  'TUTXE',
  'TUTXĄ',
  'TUTĄM',
  'TUXAN',
  'TUXĄŁ',
  'TUXĄNG',
  'TUYĄT',
  'TUZANG',
  'TUŁIY',
  'TUNGAM',
  'TUNGAN',
  'TUNGAY',
  'TUNGANG',
  'TUNGWĄ',
  'TUŘĄW',
  'TWAŁĄ',
  'TWEHĄ',
  'TWEMĄ',
  'TWENĄ',
  'TWETĄ',
  'TWENGĄ',
  'TWIHĄ',
  'TWIMĄ',
  'TWINĄ',
  'TWITĄ',
  'TWINGĄ',
  'TWĄHĄ',
  'TWĄMĄ',
  'TWĄNA',
  'TWĄNĄ',
  'TWĄRI',
  'TWĄTĄ',
  'TWĄNGĄ',
  'TXAŁA',
  'TXINU',
  'TĄMEY',
  'TĄNMA',
  'TĄNYA',
  'TĄRĄT',
  'TŁEHA',
  'TŁEMA',
  'TŁERI',
  'TŁETA',
  'TŁEYI',
  'TŁENGA',
  'UKEHI',
  'UKEHĄ',
  'UKEMĄ',
  'UKERI',
  'UKETĄ',
  'UKENGĄ',
  'ULĄHĄ',
  'ULĄMĄ',
  'ULĄRI',
  'ULĄTĄ',
  'ULĄNGĄ',
  'UMIHA',
  'UMIMA',
  'UMIRI',
  'UMITA',
  'UMIYI',
  'UMINGA',
  'UMUHI',
  'UMUHĄ',
  'UMUMĄ',
  'UMUNI',
  'UMUNĄ',
  'UMURI',
  'UMUTĄ',
  'UMUYĄ',
  'UMUNGO',
  'UMUNGĄ',
  'UNAHĄ',
  'UNAMĄ',
  'UNANĄ',
  'UNATĄ',
  'UNANGĄ',
  'UNIHI',
  'UNIHĄ',
  'UNIKĄ',
  'UNIMĄ',
  'UNIRI',
  'UNITĄ',
  'UNIYĄ',
  'UNINGO',
  'UNINGĄ',
  'UNĄHĄ',
  'UNĄMĄ',
  'UNĄNĄ',
  'UNĄTĄ',
  'UNĄNGĄ',
  'URIHA',
  'URIMA',
  'URIRI',
  'URITA',
  'URIYI',
  'URINGA',
  'URONGA',
  'URUWĄ',
  'UXEHĄ',
  'UXEMĄ',
  'UXENĄ',
  'UXETĄ',
  'UXENGĄ',
  'UZĄHĄ',
  'UZĄMĄ',
  'UZĄNĄ',
  'UZĄTĄ',
  'UZĄNGĄ',
  'UŁAHĄ',
  'UŁAMĄ',
  'UŁARI',
  'UŁATĄ',
  'UŁANGĄ',
  'UŁOŁU',
  'UŁĄTĄ',
  'UNGAHĄ',
  'UNGAMĄ',
  'UNGANĄ',
  'UNGATĄ',
  'UNGANGĄ',
  'UNGIKĄ',
  'UŘUHĄ',
  'UŘUMĄ',
  'UŘURI',
  'UŘUTĄ',
  'UŘUNGĄ',
  'WUXEY',
  'WĄDĄY',
  'WĄNAŁ',
  'WĄNMĄ',
  'WĄXKU',
  'WĄYKĄ',
  'XANING',
  'XANGAY',
  'XEKUY',
  'XEXĄY',
  'XINGNĄ',
  'XOYIY',
  'XUNMĄ',
  'XUNUNG',
  'XĄTXE',
  'YARĄŁ',
  'YAXĄY',
  'YAZANG',
  'YEPĄP',
  'YENGYO',
  'YENGŁU',
  'YIMMĄ',
  'YINĄY',
  'YITUŁ',
  'YIŁIN',
  'YIŁYO',
  'YIŁĄP',
  'YUNMĄ',
  'YUYKĄ',
  'YĄHĄŁ',
  'YĄNYO',
  'YĄNŁU',
  'YĄWĄK',
  'YĄNGŁE',
  'ZAHANG',
  'ZAMBĄ',
  'ZAMING',
  'ZAMRĄ',
  'ZINMĄ',
  'ZINĄNG',
  'ZIYKĄ',
  'ZONGAY',
  'ZWETE',
  'ZĄTIN',
  'ĄHAMĄ',
  'ĄHENĄ',
  'ĄHIHĄ',
  'ĄHIMĄ',
  'ĄHINĄ',
  'ĄHIRI',
  'ĄHITĄ',
  'ĄHIYĄ',
  'ĄHINGĄ',
  'ĄHĄPE',
  'ĄHĄTĄ',
  'ĄKETĄ',
  'ĄKEYO',
  'ĄKEŁU',
  'ĄKUYO',
  'ĄKUŁU',
  'ĄKĄTU',
  'ĄLĄYO',
  'ĄLĄŁU',
  'ĄMAŘU',
  'ĄMENU',
  'ĄMEYU',
  'ĄMUKI',
  'ĄNAHI',
  'ĄNAHĄ',
  'ĄNAMĄ',
  'ĄNARI',
  'ĄNATĄ',
  'ĄNAŁI',
  'ĄNANGĄ',
  'ĄNEHI',
  'ĄNIMĄ',
  'ĄNIYA',
  'ĄNIYĄ',
  'ĄNNANG',
  'ĄNUMA',
  'ĄNĄXE',
  'ĄNĄNGĄ',
  'ĄPEYO',
  'ĄPEŁU',
  'ĄRAHĄ',
  'ĄRAMĄ',
  'ĄRARI',
  'ĄRATĄ',
  'ĄRANGĄ',
  'ĄROYO',
  'ĄROŁU',
  'ĄTAHĄ',
  'ĄTAMU',
  'ĄTAMĄ',
  'ĄTANĄ',
  'ĄTATĄ',
  'ĄTAYO',
  'ĄTAŁI',
  'ĄTAŁU',
  'ĄTANGĄ',
  'ĄTEHĄ',
  'ĄTEMĄ',
  'ĄTERI',
  'ĄTETĄ',
  'ĄTENGĄ',
  'ĄTIKĄ',
  'ĄTUHA',
  'ĄTUMA',
  'ĄTURI',
  'ĄTUTA',
  'ĄTUYI',
  'ĄTUNGA',
  'ĄWIHI',
  'ĄWIYO',
  'ĄWIŁU',
  'ĄXAHĄ',
  'ĄXAMĄ',
  'ĄXARI',
  'ĄXATĄ',
  'ĄXAYO',
  'ĄXAŁU',
  'ĄXANGA',
  'ĄXANGĄ',
  'ĄXERI',
  'ĄXKAW',
  'ĄXĄTI',
  'ĄYAPE',
  'ĄYĄTI',
  'ĄZERĄ',
  'ĄŁAHA',
  'ĄŁAHĄ',
  'ĄŁAMI',
  'ĄŁAMĄ',
  'ĄŁANĄ',
  'ĄŁATĄ',
  'ĄŁAXE',
  'ĄŁANGĄ',
  'ĄŁEYO',
  'ĄŁEŁU',
  'ĄŁIKĄ',
  'ĄŁOYO',
  'ĄŁOŁU',
  'ĄNGAHA',
  'ĄNGAHĄ',
  'ĄNGAMA',
  'ĄNGAMĄ',
  'ĄNGANĄ',
  'ĄNGAPI',
  'ĄNGARI',
  'ĄNGATA',
  'ĄNGATĄ',
  'ĄNGAYI',
  'ĄNGAYO',
  'ĄNGAŁU',
  'ĄNGANGA',
  'ĄNGANGĄ',
  'ĄNGIKĄ',
  'ĄNGUKĄ',
  'ĄNGUYO',
  'ĄNGUŁU',
  'ĄNGĄXĄ',
  'ĄŘEXA',
  'ĄŘOHI',
  'ĄŘUYO',
  'ĄŘUŁU',
  'ĄŘĄŘU',
  'ŁANĄY',
  'ŁAYDĄ',
  'ŁIYIY',
  'ŁUNMA',
  'ŁUREN',
  'ŁYĄHĄ',
  'ŁYĄMĄ',
  'ŁYĄRI',
  'ŁYĄTĄ',
  'ŁYĄNGĄ',
  'ŁĄNMĄ',
  'ŁĄTĄY',
  'NGANWA',
  'NGAPĄT',
  'NGARUY',
  'NGARĄY',
  'NGARĄŁ',
  'NGEHING',
  'NGEHUR',
  'NGEHĄX',
  'NGEKUN',
  'NGEKWI',
  'NGEKWĄ',
  'NGELĄR',
  'NGELĄW',
  'NGEMĄNG',
  'NGENANG',
  'NGENUM',
  'NGENUN',
  'NGEPĄK',
  'NGETXE',
  'NGETXĄ',
  'NGETĄM',
  'NGEXAN',
  'NGEXĄŁ',
  'NGEXĄNG',
  'NGEYĄT',
  'NGEZANG',
  'NGENGANG',
  'NGENGWĄ',
  'NGEŘĄW',
  'NGINING',
  'NGMANI',
  'NGOHING',
  'NGOHUR',
  'NGOHĄX',
  'NGOKUN',
  'NGOKUNG',
  'NGOKWI',
  'NGOKWĄ',
  'NGOLWI',
  'NGOLĄR',
  'NGOLĄW',
  'NGOMANG',
  'NGOMĄNG',
  'NGONANG',
  'NGONMĄ',
  'NGONUM',
  'NGONUN',
  'NGOPUN',
  'NGOPĄK',
  'NGORWU',
  'NGORĄP',
  'NGORĄT',
  'NGOTUNG',
  'NGOTXE',
  'NGOTXĄ',
  'NGOTĄM',
  'NGOTĄP',
  'NGOXAN',
  'NGOXUT',
  'NGOXĄŁ',
  'NGOXĄNG',
  'NGOYĄT',
  'NGOZANG',
  'NGOŁUŁ',
  'NGOŁĄK',
  'NGOŁĄT',
  'NGONGANG',
  'NGONGWĄ',
  'NGOŘAP',
  'NGOŘWĄ',
  'NGOŘYI',
  'NGOŘYĄ',
  'NGOŘĄW',
  'NGUNAM',
  'NGUNAN',
  'NGUNAY',
  'NGUNIM',
  'NGUNING',
  'NGUNRĄ',
  'NGUNŁI',
  'NGUŁUNG',
  'NGWAHĄ',
  'NGWAXĄ',
  'NGĄHING',
  'NGĄHUR',
  'NGĄHĄX',
  'NGĄKUN',
  'NGĄKUNG',
  'NGĄKWI',
  'NGĄKWĄ',
  'NGĄLWI',
  'NGĄLĄR',
  'NGĄLĄW',
  'NGĄMANG',
  'NGĄMĄNG',
  'NGĄNANG',
  'NGĄNUM',
  'NGĄNUN',
  'NGĄPUN',
  'NGĄPĄK',
  'NGĄRWU',
  'NGĄRĄP',
  'NGĄRĄT',
  'NGĄTUNG',
  'NGĄTXE',
  'NGĄTXĄ',
  'NGĄTĄM',
  'NGĄTĄP',
  'NGĄXAN',
  'NGĄXUT',
  'NGĄXĄŁ',
  'NGĄXĄNG',
  'NGĄYĄT',
  'NGĄZANG',
  'NGĄZUY',
  'NGĄŁUŁ',
  'NGĄŁĄK',
  'NGĄŁĄT',
  'NGĄNGANG',
  'NGĄNGWĄ',
  'NGĄNGĄK',
  'NGĄŘAP',
  'NGĄŘWĄ',
  'NGĄŘYI',
  'NGĄŘYĄ',
  'NGĄŘĄW',
  'ŘINMĄ',
  'ŘUNMĄ',
  'ŘUWANG',
  'ŘUYKĄ',
  'ŘUZUY',
  'ŘĄHĄP',
  'ŘĄZĄW',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
