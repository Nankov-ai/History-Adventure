// History Adventure — data.js
// Content extracted from "HGP em Ação 5" (Porto Editora, Eliseu Alves · Elisabete Jesus)
// Unit keys follow the manual's own codes: A1-A2 (Geografia), B1-B4 e C1-C3 (História)

const gameData = {

  // ============================================================
  // A1 — A Península Ibérica: Localização
  // ============================================================
  peninsulaLocalizacao: {
    name: 'A1 · Localização',
    matchWords: {
      'Europa': '🌍',
      'Oceano Atlântico': '🌊',
      'Mar Mediterrâneo': '⛵',
      'Pirenéus': '⛰️',
      'Portugal': '🇵🇹',
      'Espanha': '🇪🇸',
      'Continente': '🌎',
      'Globo': '🌐',
    },
    translations: {
      'continente': 'grande extensão de terra rodeada por água',
      'oceano': 'grande extensão de água salgada',
      'planisfério': 'mapa que representa toda a Terra numa superfície plana',
      'pirenéus': 'cadeia de montanhas que separa a Península Ibérica do resto da Europa',
      'península': 'terra rodeada de água por quase todos os lados',
    },
    quizQuestions: [
      { question: 'Quantos continentes existem na Terra?', options: ['6', '5', '7', '4'], correct: 0, emoji: '🌍', hint: 'Conta: América, Europa, África, Ásia, Oceânia e...' },
      { question: 'Quantos oceanos existem na Terra?', options: ['5', '4', '6', '3'], correct: 0, emoji: '🌊', hint: 'São os que rodeiam todos os continentes.' },
      { question: 'Em que continente se situa a Península Ibérica?', options: ['Europa', 'África', 'Ásia', 'América'], correct: 0, emoji: '🗺️', hint: 'É o continente onde também fica Portugal.', img: 'mapaContinentes' },
      { question: 'Que oceano fica a oeste da Península Ibérica?', options: ['Oceano Atlântico', 'Oceano Pacífico', 'Oceano Índico', 'Oceano Glacial Ártico'], correct: 0, emoji: '🌊', hint: 'É o mesmo oceano que banha a costa portuguesa.' },
      { question: 'Que montanhas separam a Península Ibérica do resto da Europa?', options: ['Pirenéus', 'Alpes', 'Andes', 'Himalaias'], correct: 0, emoji: '⛰️', hint: 'Ficam a norte, entre Espanha e França.' },
      { question: 'Que mar limita a Península Ibérica a sul e a leste?', options: ['Mar Mediterrâneo', 'Mar do Norte', 'Mar Negro', 'Mar Báltico'], correct: 0, emoji: '🌊', hint: 'É um mar quente, muito visitado no verão.' },
    ],
    unscrambleWords: [
      { scrambled: 'TENCONETIN', answer: 'continente', emoji: '🌎', hint: 'Grande extensão de terra rodeada por água.' },
      { scrambled: 'ONAECO', answer: 'oceano', emoji: '🌊', hint: 'Grande extensão de água salgada.' },
      { scrambled: 'ORFISENIPLÉ', answer: 'planisfério', emoji: '🗺️', hint: 'Mapa que representa toda a Terra.' },
      { scrambled: 'BOLGO', answer: 'globo', emoji: '🌐', hint: 'Representação esférica da Terra.' },
      { scrambled: 'SUNEIRÉP', answer: 'pirenéus', emoji: '⛰️', hint: 'Montanhas a norte da Península.' },
    ],
    completeSentences: [
      { sentence: 'A Península Ibérica situa-se no extremo ___ do continente europeu.', blank: 'sudoeste', options: ['sudoeste', 'nordeste', 'centro', 'norte'], emoji: '🧭', hint: 'É o canto inferior-esquerdo da Europa no mapa.' },
      { sentence: 'Os limites naturais da Península são o Oceano Atlântico, o Mar Mediterrâneo e os ___.', blank: 'Pirenéus', options: ['Pirenéus', 'Alpes', 'Andes', 'Himalaias'], emoji: '⛰️', hint: 'São montanhas que separam a Península da França.' },
      { sentence: 'Na Terra existem 6 continentes e ___ oceanos.', blank: '5', options: ['5', '4', '6', '3'], emoji: '🌊', hint: 'Um a menos que o número de continentes.' },
      { sentence: 'Os globos e os ___ representam a superfície terrestre.', blank: 'planisférios', options: ['planisférios', 'livros', 'atlas mudos', 'calendários'], emoji: '🗺️', hint: 'Mapas planos que mostram o mundo todo.' },
    ],
    mapLabels: [
      { term: 'Título', definition: 'Diz qual é o assunto do mapa.' },
      { term: 'Legenda', definition: 'Explica o que significam as cores e os símbolos usados no mapa.' },
      { term: 'Escala', definition: 'Mostra a relação entre o tamanho do desenho e o tamanho real.' },
      { term: 'Orientação', definition: 'Mostra onde fica o Norte, para nos orientarmos no mapa.' },
      { term: 'Fonte', definition: 'Diz quem elaborou o mapa.' },
    ],
  },

  // ============================================================
  // A2 — A Península Ibérica: Quadro Natural
  // ============================================================
  peninsulaQuadroNatural: {
    name: 'A2 · Quadro Natural',
    matchWords: {
      'Montanha': '⛰️',
      'Planície': '🌾',
      'Rio': '🏞️',
      'Floresta laurissilva': '🌳',
      'Dragoeiro': '🌴',
      'Vale': '🏔️',
      'Planalto': '🗻',
      'Clima': '☀️',
    },
    translations: {
      'relevo': 'as formas da superfície da Terra: montanhas, planícies, vales, planaltos',
      'planície': 'terreno plano e baixo',
      'planalto': 'terreno plano e alto',
      'bacia hidrográfica': 'toda a área de terreno drenada por um rio e os seus afluentes',
      'laurissilva': 'floresta típica da Madeira, com árvores muito antigas',
    },
    quizQuestions: [
      { question: 'Que forma de relevo predomina no Sudoeste da Península Ibérica?', options: ['Planície', 'Montanha', 'Planalto', 'Vale'], correct: 0, emoji: '🌾', hint: 'É um terreno plano e baixo.', img: 'mapaRelevoEsquema' },
      { question: 'Onde há mais rios, e mais caudalosos, na Península?', options: ['No Norte', 'No Sul', 'No Este', 'No Oeste'], correct: 0, emoji: '🏞️', hint: 'É onde chove mais.' },
      { question: 'Que clima permite o desenvolvimento da floresta laurissilva, na Madeira?', options: ['Temperado mediterrâneo', 'Tropical', 'Polar', 'Desértico'], correct: 0, emoji: '🌳', hint: 'É o mesmo tipo de clima do sul de Portugal continental.' },
      { question: 'Como se chama a árvore típica da Madeira mostrada no manual?', options: ['Dragoeiro', 'Pinheiro', 'Carvalho', 'Eucalipto'], correct: 0, emoji: '🌴', hint: 'Tem uma copa larga em forma de guarda-chuva.' },
      { question: 'Na Ibéria húmida predominam as espécies de folha...', options: ['Caduca', 'Persistente', 'Espinhosa', 'Nenhuma'], correct: 0, emoji: '🍂', hint: 'Caduca = cai no outono/inverno.' },
      { question: 'Que arquipélago tem clima temperado marítimo, com elevada precipitação?', options: ['Açores', 'Baleares', 'Canárias', 'Cabo Verde'], correct: 0, emoji: '🏝️', hint: 'É português e fica no meio do Oceano Atlântico.' },
    ],
    unscrambleWords: [
      { scrambled: 'VOLERE', answer: 'relevo', emoji: '⛰️', hint: 'Formas da superfície da Terra.' },
      { scrambled: 'ICEÍPLANA', answer: 'planície', emoji: '🌾', hint: 'Terreno plano e baixo.' },
      { scrambled: 'AMONHATN', answer: 'montanha', emoji: '⛰️', hint: 'Forma de relevo muito alta.' },
      { scrambled: 'MACIL', answer: 'clima', emoji: '☀️', hint: 'Conjunto de condições atmosféricas de uma região.' },
      { scrambled: 'OTAGEÇÃVE', answer: 'vegetação', emoji: '🌳', hint: 'Conjunto das plantas de uma região.' },
    ],
    completeSentences: [
      { sentence: 'Montanhas, vales, planícies e ___ são as formas de relevo mais comuns.', blank: 'planaltos', options: ['planaltos', 'rios', 'oceanos', 'ilhas'], emoji: '🗻', hint: 'É um terreno plano, mas alto.' },
      { sentence: 'Há mais rios, e mais caudalosos, no ___ do que no Sul da Península.', blank: 'Norte', options: ['Norte', 'Sul', 'Centro', 'Sudeste'], emoji: '🏞️', hint: 'É onde chove mais.' },
      { sentence: 'Na Ibéria húmida predominam as espécies de folha ___.', blank: 'caduca', options: ['caduca', 'persistente', 'espinhosa', 'aquática'], emoji: '🍂', hint: 'Perdem as folhas no outono/inverno.' },
      { sentence: 'O arquipélago da Madeira tem um clima temperado ___.', blank: 'mediterrâneo', options: ['mediterrâneo', 'polar', 'tropical', 'desértico'], emoji: '🌳', hint: 'É o mesmo nome do mar que banha o sul de Espanha.' },
    ],
    mapLabels: [
      { term: 'Altitude', definition: 'A legenda de cores que mostra a altura do relevo, em metros.' },
      { term: 'Rios', definition: 'Linhas azuis que mostram os cursos de água no mapa.' },
      { term: 'Cidades capitais', definition: 'Assinaladas normalmente com um losango vermelho no mapa.' },
      { term: 'Escala', definition: 'Mostra a relação entre a distância no mapa e a distância real.' },
      { term: 'Orientação', definition: 'A rosa-dos-ventos que indica Norte, Sul, Este e Oeste.' },
    ],
  },

  // ============================================================
  // B1 — As primeiras comunidades humanas da Península Ibérica
  // ============================================================
  primeirasComunidades: {
    name: 'B1 · Primeiras Comunidades',
    matchWords: {
      'Recoletor': '🏹',
      'Nómada': '🚶',
      'Agropastoril': '🌾',
      'Sedentário': '🏠',
      'Celta': '⚔️',
      'Fenício': '⛵',
      'Metal': '🔨',
      'Comércio': '💰',
    },
    translations: {
      'recoletor': 'pessoa que recolhia da Natureza tudo o que precisava para viver',
      'nómada': 'que muda de local de vida em vida, sem se fixar',
      'sedentário': 'que vive sempre no mesmo local',
      'agropastoril': 'relativo à agricultura e à criação de gado',
    },
    quizQuestions: [
      { question: 'Como eram chamados os primeiros habitantes, que recolhiam tudo da Natureza?', options: ['Recoletores', 'Agricultores', 'Pastores', 'Comerciantes'], correct: 0, emoji: '🏹', hint: '"Recoletor" vem de "recolher".' },
      { question: 'Porque eram nómadas os recoletores?', options: ['Procuravam novas regiões quando os recursos se esgotavam', 'Gostavam de viajar por diversão', 'Fugiam sempre de animais', 'Eram exploradores por profissão'], correct: 0, emoji: '🚶', hint: 'Quando a comida acabava numa região...' },
      { question: 'Que atividades tornaram as comunidades sedentárias?', options: ['Agricultura e pastorícia', 'Apenas caça', 'Apenas pesca', 'Apenas comércio'], correct: 0, emoji: '🏠', hint: 'Produzir o próprio alimento permite ficar no mesmo sítio.' },
      { question: 'Que povos chegaram à Península a partir de 1000 a.C. e sabiam trabalhar os metais?', options: ['Iberos e Celtas', 'Romanos e Gregos', 'Visigodos e Suevos', 'Árabes e Berberes'], correct: 0, emoji: '🔨', hint: 'Um destes povos deu nome à própria Península.' },
      { question: 'Que povos do Mediterrâneo vinham fazer trocas comerciais com a Península?', options: ['Gregos, Fenícios e Cartagineses', 'Romanos e Visigodos', 'Ingleses e Franceses', 'Vikings e Normandos'], correct: 0, emoji: '⛵', hint: 'Vinham de barco, do outro lado do Mar Mediterrâneo.' },
      { question: 'Além de produtos, o que trouxeram estes povos à Península?', options: ['Novos conhecimentos, como o alfabeto', 'Apenas armas', 'Apenas animais', 'Nada de novo'], correct: 0, emoji: '📜', hint: 'Olha para o quadro com o alfabeto fenício no manual.' },
    ],
    unscrambleWords: [
      { scrambled: 'ADAMÓN', answer: 'nómada', emoji: '🚶', hint: 'Não vive sempre no mesmo sítio.' },
      { scrambled: 'RIOÁTENDES', answer: 'sedentário', emoji: '🏠', hint: 'Vive sempre no mesmo local.' },
      { scrambled: 'RAULCUTIGRA', answer: 'agricultura', emoji: '🌾', hint: 'Cultivar a terra para produzir alimentos.' },
      { scrambled: 'LATME', answer: 'metal', emoji: '🔨', hint: 'Material como o ferro ou o bronze.' },
      { scrambled: 'RÉICOMOC', answer: 'comércio', emoji: '💰', hint: 'Trocar ou vender produtos.' },
    ],
    completeSentences: [
      { sentence: 'Os primeiros habitantes da Península Ibérica eram ___, porque recolhiam da Natureza tudo o que necessitavam.', blank: 'recoletores', options: ['recoletores', 'agricultores', 'romanos', 'comerciantes'], emoji: '🏹', hint: 'Recolhiam frutos, caçavam e pescavam.' },
      { sentence: 'As comunidades de agricultores e pastores passaram a viver sempre no mesmo local: eram ___.', blank: 'sedentários', options: ['sedentários', 'nómadas', 'viajantes', 'exploradores'], emoji: '🏠', hint: 'O oposto de nómada.' },
      { sentence: 'Chegaram à Península os Iberos e os ___, povos que sabiam trabalhar os metais.', blank: 'Celtas', options: ['Celtas', 'Romanos', 'Visigodos', 'Mouros'], emoji: '⚔️', hint: 'Deram origem ao nome de vários povos europeus.' },
      { sentence: 'Gregos, Fenícios e Cartagineses vinham fazer trocas ___.', blank: 'comerciais', options: ['comerciais', 'militares', 'religiosas', 'desportivas'], emoji: '⛵', hint: 'Vinham vender e comprar produtos.' },
    ],
    timelineEvents: [
      { event: 'Primeiros recoletores na Península Ibérica', year: 'há c. 400 000 anos', sortYear: -400000, emoji: '🏹' },
      { event: 'Primeiras comunidades agropastoris sedentárias', year: 'há c. 7000 anos', sortYear: -7000, emoji: '🏠' },
      { event: 'Chegada dos Iberos e dos Celtas', year: 'a partir de 1000 a.C.', sortYear: -1000, emoji: '⚔️' },
      { event: 'Povos do Mediterrâneo (Gregos, Fenícios, Cartagineses) chegam à Península', year: 'c. 700 a.C.', sortYear: -700, emoji: '⛵' },
    ],
  },

  // ============================================================
  // B2 — Os Romanos na Península Ibérica
  // ============================================================
  romanos: {
    name: 'B2 · Os Romanos',
    matchWords: {
      'Império': '🏛️',
      'Legionário': '⚔️',
      'Aqueduto': '🌉',
      'Estrada': '🛣️',
      'Cristianismo': '✝️',
      'Lusitano': '🗡️',
      'Mosaico': '🎨',
      'Latim': '📜',
    },
    translations: {
      'romanização': 'o processo em que os povos da Península adotaram a língua, as leis e os costumes romanos',
      'império': 'conjunto de territórios governados por um só poder, o de um imperador',
      'aqueduto': 'construção romana para transportar água',
      'lusitanos': 'povo da Península que resistiu à conquista romana',
    },
    quizQuestions: [
      { question: 'Em que ano os Romanos invadiram a Península Ibérica?', options: ['218 a.C.', '753 a.C.', '313', '409'], correct: 0, emoji: '⚔️', hint: 'É uma data "antes de Cristo".' },
      { question: 'Que povo peninsular resistiu à conquista romana?', options: ['Lusitanos', 'Visigodos', 'Celtas', 'Mouros'], correct: 0, emoji: '🗡️', hint: 'O seu nome está muito próximo de "Lusitânia".' },
      { question: 'Quantos anos, aproximadamente, durou a romanização?', options: ['c. 700 anos', '100 anos', '50 anos', '1000 anos'], correct: 0, emoji: '🏛️', hint: 'Foi um processo muito longo, de vários séculos.' },
      { question: 'Que imperador deu liberdade de culto aos cristãos?', options: ['Constantino', 'Teodósio', 'Júlio César', 'Augusto'], correct: 0, emoji: '✝️', hint: 'Isto aconteceu em 313.' },
      { question: 'Que imperador tornou o cristianismo a religião oficial do Império?', options: ['Teodósio', 'Constantino', 'Nero', 'Adriano'], correct: 0, emoji: '✝️', hint: 'Isto aconteceu em 380, depois de Constantino.' },
      { question: 'Que povos ocuparam a Hispânia em 409, pondo fim ao domínio romano?', options: ['Suevos e Visigodos', 'Iberos e Celtas', 'Mouros e Berberes', 'Francos e Anglos'], correct: 0, emoji: '🛡️', hint: 'São chamados "povos bárbaros" no manual.' },
      { question: 'Quem unificou toda a Península Ibérica num só reino, em 585?', options: ['Os Visigodos', 'Os Suevos', 'Os Romanos', 'Os Cartagineses'], correct: 0, emoji: '👑', hint: 'Conquistaram o Reino dos Suevos.' },
    ],
    unscrambleWords: [
      { scrambled: 'RIÉPIOM', answer: 'império', emoji: '🏛️', hint: 'Território governado por um imperador.' },
      { scrambled: 'TUEQOADU', answer: 'aqueduto', emoji: '🌉', hint: 'Construção romana para transportar água.' },
      { scrambled: 'MANOÇÃOZARI', answer: 'romanização', emoji: '📜', hint: 'Adotar a cultura e a língua romanas.' },
      { scrambled: 'IONSITIRACMS', answer: 'cristianismo', emoji: '✝️', hint: 'Religião que surgiu na Judeia.' },
      { scrambled: 'RÁOGEINILO', answer: 'legionário', emoji: '⚔️', hint: 'Soldado do exército romano.' },
    ],
    completeSentences: [
      { sentence: 'Em 218 a.C., os Romanos invadiram a Península Ibérica, mas encontraram resistência dos ___.', blank: 'Lusitanos', options: ['Lusitanos', 'Visigodos', 'Celtas', 'Mouros'], emoji: '🗡️', hint: 'Povo peninsular famoso pela sua resistência.' },
      { sentence: 'A romanização efetuou-se ao longo de cerca de ___ anos.', blank: '700', options: ['700', '100', '50', '1000'], emoji: '🏛️', hint: 'Um número com 3 algarismos.' },
      { sentence: 'O imperador ___ deu liberdade de culto aos cristãos, em 313.', blank: 'Constantino', options: ['Constantino', 'Teodósio', 'Nero', 'Adriano'], emoji: '✝️', hint: 'Foi antes de Teodósio.' },
      { sentence: 'Dois povos bárbaros ocuparam a Hispânia: os Suevos e os ___.', blank: 'Visigodos', options: ['Visigodos', 'Romanos', 'Cartagineses', 'Mouros'], emoji: '🛡️', hint: 'Acabaram por conquistar também o Reino dos Suevos.' },
    ],
    timelineEvents: [
      { event: 'Fundação de Roma (segundo a tradição)', year: '753 a.C.', sortYear: -753, emoji: '🏛️' },
      { event: 'Os Romanos invadem a Península Ibérica', year: '218 a.C.', sortYear: -218, emoji: '⚔️' },
      { event: 'Constantino dá liberdade de culto aos cristãos', year: '313', sortYear: 313, emoji: '✝️' },
      { event: 'Teodósio torna o cristianismo religião oficial do Império', year: '380', sortYear: 380, emoji: '✝️' },
      { event: 'Suevos e Visigodos ocupam a Hispânia', year: '409', sortYear: 409, emoji: '🛡️' },
      { event: 'Os Visigodos unificam toda a Península Ibérica', year: '585', sortYear: 585, emoji: '👑' },
    ],
  },

  // ============================================================
  // B3 — Os Muçulmanos na Península Ibérica
  // ============================================================
  muculmanos: {
    name: 'B3 · Os Muçulmanos',
    matchWords: {
      'Islão': '☪️',
      'Corão': '📖',
      'Al-Andalus': '🗺️',
      'Mesquita': '🕌',
      'Noria': '💧',
      'Califa': '👳',
      'Herança': '🏺',
      'Agricultura': '🌾',
    },
    translations: {
      'islamismo': 'religião fundada por Maomé, cujo livro sagrado é o Corão',
      'corão': 'livro sagrado dos Muçulmanos',
      'al-andalus': 'nome dado pelos Muçulmanos ao território da Península Ibérica que ocupavam',
    },
    quizQuestions: [
      { question: 'Quem fundou o Islamismo?', options: ['Maomé', 'Alá', 'Alcorão', 'Omar'], correct: 0, emoji: '☪️', hint: 'Também nasceu na Península Arábica.' },
      { question: 'Como se chama o livro sagrado dos Muçulmanos?', options: ['Corão', 'Bíblia', 'Torá', 'Talmude'], correct: 0, emoji: '📖', hint: 'Tem os 5 princípios fundamentais do Islão.' },
      { question: 'Em que ano os Muçulmanos chegaram à Península Ibérica?', options: ['711', '218', '1492', '1085'], correct: 0, emoji: '🕌', hint: 'É uma data do século VIII.' },
      { question: 'Como os Muçulmanos chamavam ao território da Península que ocupavam?', options: ['Al-Andalus', 'Hispânia', 'Lusitânia', 'Ibéria'], correct: 0, emoji: '🕌', hint: 'A palavra "Andaluzia" vem daqui.' },
      { question: 'Durante quantos anos, aproximadamente, viveram Cristãos e Muçulmanos na Península?', options: ['c. 800 anos', '100 anos', '50 anos', '1000 anos'], correct: 0, emoji: '⏳', hint: 'De 711 até 1492.' },
      { question: 'Onde é visível a herança dos Muçulmanos na Península?', options: ['Em monumentos, no vocabulário e em técnicas agrícolas', 'Apenas na comida', 'Apenas na roupa', 'Nada restou'], correct: 0, emoji: '🏺', hint: 'Pensa em palavras portuguesas que começam por "al-".' },
    ],
    unscrambleWords: [
      { scrambled: 'MÃOISL', answer: 'islão', emoji: '☪️', hint: 'Nome da religião fundada por Maomé.' },
      { scrambled: 'ATIQUESM', answer: 'mesquita', emoji: '🕌', hint: 'Edifício religioso dos Muçulmanos.' },
      { scrambled: 'ÃOCOR', answer: 'corão', emoji: '📖', hint: 'Livro sagrado dos Muçulmanos.' },
      { scrambled: 'NAÇHREA', answer: 'herança', emoji: '🏺', hint: 'O que ficou de uma cultura para o futuro.' },
      { scrambled: 'RAULCUTIGRA', answer: 'agricultura', emoji: '🌾', hint: 'Os Muçulmanos trouxeram novas técnicas para esta atividade.' },
    ],
    completeSentences: [
      { sentence: 'Maomé fundou o islamismo e registou os seus princípios no ___.', blank: 'Corão', options: ['Corão', 'Bíblia', 'Torá', 'Talmude'], emoji: '📖', hint: 'É o livro sagrado dos Muçulmanos.' },
      { sentence: 'Os Muçulmanos ocuparam quase toda a Península, a que chamaram ___.', blank: 'Al-Andalus', options: ['Al-Andalus', 'Hispânia', 'Lusitânia', 'Ibéria'], emoji: '🕌', hint: 'Deu origem ao nome de uma região de Espanha.' },
      { sentence: 'Durante cerca de 800 anos, Cristãos e Muçulmanos viveram momentos de paz e de ___.', blank: 'conflito', options: ['conflito', 'música', 'desporto', 'viagens'], emoji: '⚔️', hint: 'O oposto de paz.' },
      { sentence: 'A herança dos Muçulmanos é visível em monumentos, no vocabulário e em técnicas de ___.', blank: 'agricultura', options: ['agricultura', 'pesca', 'caça', 'mineração'], emoji: '🌾', hint: 'Trouxeram novos sistemas de rega.' },
    ],
    timelineEvents: [
      { event: 'Maomé funda o Islamismo na Península Arábica', year: 'início do séc. VII', sortYear: 610, emoji: '☪️' },
      { event: 'Os Muçulmanos chegam à Península Ibérica', year: '711', sortYear: 711, emoji: '🕌' },
      { event: 'Fim da presença muçulmana na Península Ibérica', year: '1492', sortYear: 1492, emoji: '🏰' },
    ],
  },

  // ============================================================
  // B4 — A formação do Reino de Portugal
  // ============================================================
  formacaoPortugal: {
    name: 'B4 · Formação de Portugal',
    matchWords: {
      'Reconquista': '🐎',
      'Condado': '🏰',
      'Batalha': '⚔️',
      'Fronteira': '🚧',
      'Rei': '👑',
      'Tratado': '📜',
      'Algarve': '🌊',
      'Cavaleiro': '🛡️',
    },
    translations: {
      'reconquista': 'a luta dos reinos cristãos para retomar o território ocupado pelos Muçulmanos',
      'condado': 'território governado por um conde, em nome do rei',
      'foral': 'documento que dava direitos e deveres a uma povoação',
    },
    quizQuestions: [
      { question: 'Que batalha, em 722, foi o ponto de partida da Reconquista Cristã?', options: ['Batalha de Covadonga', 'Batalha de Ourique', 'Batalha de Aljubarrota', 'Batalha de S. Mamede'], correct: 0, emoji: '⚔️', hint: 'Aconteceu nas Astúrias, no norte de Espanha.' },
      { question: 'Quem recebeu o Condado Portucalense, por casamento com D. Teresa?', options: ['D. Henrique', 'D. Afonso Henriques', 'D. Afonso III', 'D. João I'], correct: 0, emoji: '🏰', hint: 'É o pai de D. Afonso Henriques.' },
      { question: 'Em que batalha D. Afonso Henriques reclamou o governo do Condado?', options: ['Batalha de S. Mamede', 'Batalha de Ourique', 'Batalha de Aljubarrota', 'Batalha de Covadonga'], correct: 0, emoji: '⚔️', hint: 'Aconteceu em 1128.' },
      { question: 'Quem conquistou o Algarve aos Muçulmanos, em 1249?', options: ['D. Afonso III', 'D. Afonso Henriques', 'D. Dinis', 'D. João I'], correct: 0, emoji: '🌊', hint: 'Com esta conquista terminou a Reconquista em território português.', img: 'mapaReconquista' },
      { question: 'Que tratado definiu as fronteiras de Portugal a leste, em 1297?', options: ['Tratado de Alcanises', 'Tratado de Tordesilhas', 'Tratado de Zamora', 'Tratado de Windsor'], correct: 0, emoji: '📜', hint: 'Foi assinado entre os reis de Portugal e de Castela.' },
      { question: 'Como conseguiu D. Afonso Henriques tornar o Condado num reino independente?', options: ['Com confrontos militares e diplomacia', 'Só com guerra', 'Só com negociação', 'Não fez nada, foi automático'], correct: 0, emoji: '👑', hint: 'Usou duas estratégias diferentes, ao mesmo tempo.' },
    ],
    unscrambleWords: [
      { scrambled: 'TAQUISCONER', answer: 'reconquista', emoji: '⚔️', hint: 'Luta dos cristãos para retomar território.' },
      { scrambled: 'DODACON', answer: 'condado', emoji: '🏰', hint: 'Território governado por um conde.' },
      { scrambled: 'LABATHA', answer: 'batalha', emoji: '⚔️', hint: 'Combate entre exércitos.' },
      { scrambled: 'ARIFOTREN', answer: 'fronteira', emoji: '🗺️', hint: 'Linha que separa dois países.' },
      { scrambled: 'DOTATRA', answer: 'tratado', emoji: '📜', hint: 'Acordo assinado entre dois reinos.' },
    ],
    completeSentences: [
      { sentence: 'A vitória na Batalha de ___, no ano 722, foi o ponto de partida da Reconquista Cristã.', blank: 'Covadonga', options: ['Covadonga', 'Ourique', 'Aljubarrota', 'Alcanises'], emoji: '⚔️', hint: 'Aconteceu nas Astúrias.' },
      { sentence: 'D. Afonso Henriques reclamou o governo do Condado na Batalha de S. ___.', blank: 'Mamede', options: ['Mamede', 'Jorge', 'Tiago', 'Pedro'], emoji: '🏰', hint: 'Aconteceu em 1128.' },
      { sentence: 'D. Afonso III conquistou o ___ em 1249, completando a Reconquista em Portugal.', blank: 'Algarve', options: ['Algarve', 'Alentejo', 'Minho', 'Douro'], emoji: '🌊', hint: 'É a região mais a sul de Portugal.' },
      { sentence: 'Em 1297, as fronteiras de Portugal a leste ficaram definidas no Tratado de ___.', blank: 'Alcanises', options: ['Alcanises', 'Tordesilhas', 'Zamora', 'Windsor'], emoji: '📜', hint: 'Assinado entre os reis de Portugal e de Castela.' },
    ],
    timelineEvents: [
      { event: 'Batalha de Covadonga — início da Reconquista Cristã', year: '722', sortYear: 722, emoji: '⚔️' },
      { event: 'D. Henrique recebe o Condado Portucalense', year: 'final do séc. XI', sortYear: 1096, emoji: '🏰' },
      { event: 'Batalha de S. Mamede — D. Afonso Henriques reclama o Condado', year: '1128', sortYear: 1128, emoji: '👑' },
      { event: 'D. Afonso III conquista o Algarve', year: '1249', sortYear: 1249, emoji: '🌊' },
      { event: 'Tratado de Alcanises define a fronteira leste de Portugal', year: '1297', sortYear: 1297, emoji: '📜' },
    ],
  },

  // ============================================================
  // C1 — Portugal nos séculos XIII e XIV
  // ============================================================
  portugalXIII_XIV: {
    name: 'C1 · Séc. XIII-XIV',
    matchWords: {
      'Nobreza': '👑',
      'Clero': '✝️',
      'Povo': '🌾',
      'Foral': '📜',
      'Gótico': '⛪',
      'Cortes': '🏛️',
      'Peste': '☠️',
      'Fome': '🍞',
    },
    translations: {
      'privilegiados': 'grupos com direitos especiais na sociedade medieval — a nobreza e o clero',
      'concelho': 'território com uma carta de foral, onde o povo tinha mais direitos',
      'foral': 'documento que dava direitos e deveres à população de um concelho',
    },
    quizQuestions: [
      { question: 'Em que 3 grupos se organizava a sociedade portuguesa medieval?', options: ['Nobreza, clero e povo', 'Reis, soldados e camponeses', 'Ricos e pobres', 'Cristãos e mouros'], correct: 0, emoji: '👑', hint: 'Dois grupos eram privilegiados e um não.' },
      { question: 'O que registavam as cartas de foral?', options: ['Os direitos do povo num concelho', 'Os impostos do rei', 'As leis da Igreja', 'Os tratados com Espanha'], correct: 0, emoji: '📜', hint: 'Davam mais liberdade ao povo dos concelhos.' },
      { question: 'Que estilo arquitetónico, com arcos em ogiva, surgiu depois do românico?', options: ['Gótico', 'Barroco', 'Moderno', 'Renascentista'], correct: 0, emoji: '⛪', hint: 'O Mosteiro da Batalha é um exemplo.' },
      { question: 'O que provocou a crise de 1383-85 em Portugal?', options: ['A morte de D. Fernando sem herdeiro homem', 'Uma guerra com a França', 'Apenas uma peste', 'Um terramoto'], correct: 0, emoji: '👑', hint: 'Vários candidatos disputaram o trono.' },
      { question: 'Quem foi aclamado rei nas Cortes de Coimbra, em 1385?', options: ['D. João, Mestre de Avis', 'D. Fernando', 'D. Pedro I', 'D. Dinis'], correct: 0, emoji: '👑', hint: 'Deu origem à Dinastia de Avis.' },
      { question: 'Que batalha confirmou a independência de Portugal face a Castela?', options: ['Batalha de Aljubarrota', 'Batalha de Ourique', 'Batalha de S. Mamede', 'Batalha de Covadonga'], correct: 0, emoji: '⚔️', hint: 'Aconteceu em 1385, o mesmo ano das Cortes de Coimbra.' },
    ],
    unscrambleWords: [
      { scrambled: 'ZERBAON', answer: 'nobreza', emoji: '👑', hint: 'Grupo privilegiado, junto com o clero.' },
      { scrambled: 'LECHONOC', answer: 'concelho', emoji: '🏘️', hint: 'Território com carta de foral.' },
      { scrambled: 'TICOGÓ', answer: 'gótico', emoji: '⛪', hint: 'Estilo arquitetónico com arcos em ogiva.' },
      { scrambled: 'STORCE', answer: 'cortes', emoji: '🏛️', hint: 'Assembleia onde D. João foi aclamado rei.' },
      { scrambled: 'ROTABRAJUALJ', answer: 'aljubarrota', emoji: '⚔️', hint: 'Batalha que confirmou a independência de Portugal.' },
    ],
    completeSentences: [
      { sentence: 'A sociedade organizava-se em 3 grupos: a nobreza, o clero e o ___.', blank: 'povo', options: ['povo', 'exército', 'clero', 'rei'], emoji: '🌾', hint: 'Era o grupo não privilegiado.' },
      { sentence: 'Nos concelhos, o povo gozava de mais direitos, registados nas cartas de ___.', blank: 'foral', options: ['foral', 'lei', 'cortes', 'tratado'], emoji: '📜', hint: 'Documento próprio de um concelho.' },
      { sentence: 'A crise de 1383-85 foi provocada pela morte de D. ___ sem herdeiro homem.', blank: 'Fernando', options: ['Fernando', 'Dinis', 'Afonso', 'Pedro'], emoji: '👑', hint: 'O último rei da 1ª Dinastia.' },
      { sentence: 'A vitória na Batalha de ___ confirmou a independência de Portugal.', blank: 'Aljubarrota', options: ['Aljubarrota', 'Ourique', 'Covadonga', 'S. Mamede'], emoji: '⚔️', hint: 'Aconteceu em 1385.' },
    ],
    timelineEvents: [
      { event: 'Desenvolvimento da arquitetura românica, depois gótica', year: 'séc. XIII-XIV', sortYear: 1300, emoji: '⛪' },
      { event: 'Morte de D. Fernando — início da crise dinástica', year: '1383', sortYear: 1383, emoji: '👑' },
      { event: 'D. João, Mestre de Avis, é aclamado rei nas Cortes de Coimbra', year: '1385', sortYear: 1385, emoji: '👑' },
      { event: 'Batalha de Aljubarrota', year: '1385', sortYear: 1385.5, emoji: '⚔️' },
    ],
  },

  // ============================================================
  // C2 — Portugal nos séculos XV e XVI (Expansão Marítima)
  // ============================================================
  expansaoMaritima: {
    name: 'C2 · Expansão Marítima',
    matchWords: {
      'Caravela': '⛵',
      'Feitoria': '🏬',
      'Especiarias': '🌶️',
      'Navegador': '🧭',
      'Colónia': '🌍',
      'Tordesilhas': '📜',
      'Império': '🌐',
      'Mapa-múndi': '🗺️',
    },
    translations: {
      'expansão marítima': 'o período em que os Portugueses exploraram novos mares e territórios',
      'feitoria': 'entreposto comercial fundado pelos portugueses noutros territórios',
      'capitania-donataria': 'forma de exploração do território do Brasil, entregue a um donatário',
      'aculturação': 'quando uma sociedade adota valores culturais de outra, com quem está em contacto',
    },
    quizQuestions: [
      { question: 'Em que ano os Portugueses conquistaram Ceuta, o primeiro passo da Expansão?', options: ['1415', '1492', '1498', '1500'], correct: 0, emoji: '⛵', hint: 'É a data mais antiga desta lista.', img: 'mapaExpansaoMaritima' },
      { question: 'Quem comandou a primeira fase da Expansão portuguesa?', options: ['O Infante D. Henrique', 'D. Manuel I', 'D. João II', 'D. Afonso Henriques'], correct: 0, emoji: '🧭', hint: 'É conhecido como "o Navegador".' },
      { question: 'Em que ano Bartolomeu Dias chegou ao Cabo da Boa Esperança?', options: ['1488', '1498', '1500', '1415'], correct: 0, emoji: '⛵', hint: 'Fica no extremo sul de África.' },
      { question: 'Quem chegou à Índia por mar, em 1498?', options: ['Vasco da Gama', 'Cristóvão Colombo', 'Pedro Álvares Cabral', 'Fernão de Magalhães'], correct: 0, emoji: '🧭', hint: 'Contornou toda a costa de África.' },
      { question: 'Quem chegou ao Brasil em 1500?', options: ['Pedro Álvares Cabral', 'Vasco da Gama', 'Cristóvão Colombo', 'Fernão de Magalhães'], correct: 0, emoji: '🌴', hint: 'Foi 2 anos depois de Vasco da Gama chegar à Índia.' },
      { question: 'Que tratado dividiu o mundo entre Portugal e Espanha?', options: ['Tratado de Tordesilhas', 'Tratado de Alcanises', 'Tratado de Windsor', 'Tratado de Zamora'], correct: 0, emoji: '📜', hint: 'Foi assinado depois de Colombo chegar à América.' },
      { question: 'Como se chamava a forma de exploração usada no Brasil?', options: ['Capitanias-donatárias', 'Feitorias', 'Vice-reinado', 'Califado'], correct: 0, emoji: '🌴', hint: 'O território era dividido e entregue a donatários.' },
      { question: 'Além de especiarias, ouro e marfim, que prática trágica também fez parte da Expansão?', options: ['A captura e escravização de pessoas', 'A caça a animais raros', 'A pesca em alto mar', 'A construção de igrejas'], correct: 0, emoji: '⛓️', hint: 'Foi uma parte muito injusta e dolorosa desta história, que hoje reconhecemos como errada.' },
    ],
    unscrambleWords: [
      { scrambled: 'LEVACARA', answer: 'caravela', emoji: '⛵', hint: 'Navio usado pelos Portugueses na Expansão.' },
      { scrambled: 'ROATIEF', answer: 'feitoria', emoji: '🏬', hint: 'Entreposto comercial português noutros territórios.' },
      { scrambled: 'SILHATORDES', answer: 'tordesilhas', emoji: '📜', hint: 'Tratado que dividiu o mundo em duas partes.' },
      { scrambled: 'GAVORDENA', answer: 'navegador', emoji: '🧭', hint: 'Pessoa que explora os mares.' },
      { scrambled: 'CIARIESAPES', answer: 'especiarias', emoji: '🌶️', hint: 'Produtos muito valiosos vindos do Oriente.' },
    ],
    completeSentences: [
      { sentence: '___ foi o primeiro passo da grande aventura da Expansão portuguesa, em 1415.', blank: 'Ceuta', options: ['Ceuta', 'Lisboa', 'Goa', 'Macau'], emoji: '🏰', hint: 'Fica no norte de África.' },
      { sentence: 'Bartolomeu Dias chegou ao Cabo da Boa ___, em 1488.', blank: 'Esperança', options: ['Esperança', 'Fortuna', 'Sorte', 'Vitória'], emoji: '⛵', hint: 'Fica no extremo sul de África.' },
      { sentence: 'Vasco da Gama chegou à ___, em 1498.', blank: 'Índia', options: ['Índia', 'China', 'América', 'Austrália'], emoji: '🌏', hint: 'Foi o objetivo principal da rota do Cabo.' },
      { sentence: 'O Tratado de ___ dividiu o mundo entre Portugal e Espanha.', blank: 'Tordesilhas', options: ['Tordesilhas', 'Alcanises', 'Windsor', 'Zamora'], emoji: '📜', hint: 'É também o nome de uma cidade espanhola.' },
    ],
    timelineEvents: [
      { event: 'Conquista de Ceuta', year: '1415', sortYear: 1415, emoji: '⛵' },
      { event: 'Bartolomeu Dias chega ao Cabo da Boa Esperança', year: '1488', sortYear: 1488, emoji: '🌊' },
      { event: 'Cristóvão Colombo chega à América', year: '1492', sortYear: 1492, emoji: '🌎' },
      { event: 'Tratado de Tordesilhas', year: '1494', sortYear: 1494, emoji: '📜' },
      { event: 'Vasco da Gama chega à Índia', year: '1498', sortYear: 1498, emoji: '🧭' },
      { event: 'Pedro Álvares Cabral chega ao Brasil', year: '1500', sortYear: 1500, emoji: '🌴' },
      { event: 'Fernão de Magalhães inicia a 1ª viagem à volta do mundo', year: '1519', sortYear: 1519, emoji: '🌍' },
    ],
  },

  // ============================================================
  // C3 — Portugal: da União Ibérica à Restauração da Independência
  // ============================================================
  uniaoIberica: {
    name: 'C3 · União Ibérica',
    matchWords: {
      'União Ibérica': '🤝',
      'Duque de Bragança': '🏰',
      'D. João IV': '🤴',
      'Independência': '🎉',
      'Filipe II': '🇪🇸',
      'Coroa': '👑',
      'Guerra': '⚔️',
      'Restauração': '🎊',
    },
    translations: {
      'união ibérica': 'período de 60 anos em que Portugal e Espanha tiveram o mesmo rei',
      'restauração': 'o momento em que Portugal recuperou a sua independência, em 1640',
      'crise dinástica': 'quando não há um herdeiro claro para o trono, o que gera disputa',
    },
    quizQuestions: [
      { question: 'Onde morreu D. Sebastião, sem deixar descendentes?', options: ['Alcácer Quibir', 'Aljubarrota', 'Ourique', 'Covadonga'], correct: 0, emoji: '⚔️', hint: 'Foi em Marrocos, no norte de África.' },
      { question: 'Quem se tornou rei de Portugal e Espanha ao mesmo tempo, a partir de 1580?', options: ['Filipe II de Espanha', 'D. João IV', 'D. Henrique', 'D. Sebastião'], correct: 0, emoji: '👑', hint: 'Deu início à Dinastia Filipina.' },
      { question: 'Como se chama o período de 60 anos em que Portugal e Espanha tiveram o mesmo rei?', options: ['União Ibérica', 'Reconquista', 'Romanização', 'Expansão'], correct: 0, emoji: '🤝', hint: 'Junta os dois reinos da Península.' },
      { question: 'Em que dia se restaurou a independência de Portugal, em 1640?', options: ['1 de dezembro', '25 de abril', '10 de junho', '5 de outubro'], correct: 0, emoji: '🎊', hint: 'É feriado nacional em Portugal.' },
      { question: 'Quem foi aclamado rei de Portugal na Restauração de 1640?', options: ['D. João IV, Duque de Bragança', 'D. Sebastião', 'Filipe III', 'D. Henrique'], correct: 0, emoji: '👑', hint: 'Deu início a uma nova dinastia.' },
      { question: 'Que dinastia teve início com D. João IV?', options: ['Dinastia de Bragança', 'Dinastia de Avis', 'Dinastia Filipina', 'Dinastia de Borgonha'], correct: 0, emoji: '👑', hint: 'Tem o mesmo nome do título do rei antes de subir ao trono.' },
    ],
    unscrambleWords: [
      { scrambled: 'ÇÃORATSUARE', answer: 'restauração', emoji: '🎊', hint: 'Recuperar algo que se tinha perdido.' },
      { scrambled: 'ÇANAGARB', answer: 'bragança', emoji: '👑', hint: 'Nome da dinastia que começou em 1640.' },
      { scrambled: 'DÊNCIANEDEPIN', answer: 'independência', emoji: '🎉', hint: 'Deixar de estar sob o domínio de outro país.' },
      { scrambled: 'IÃOUN', answer: 'união', emoji: '🤝', hint: 'Juntar dois reinos sob o mesmo rei.' },
      { scrambled: 'ROAOC', answer: 'coroa', emoji: '👑', hint: 'Símbolo do poder de um rei.' },
    ],
    completeSentences: [
      { sentence: 'D. Sebastião morreu em Alcácer ___ sem deixar descendentes.', blank: 'Quibir', options: ['Quibir', 'Ceuta', 'Tânger', 'Fez'], emoji: '⚔️', hint: 'Cidade em Marrocos.' },
      { sentence: 'Portugal e Espanha tiveram o mesmo rei durante 60 anos: a ___ Ibérica.', blank: 'União', options: ['União', 'Guerra', 'Fronteira', 'Aliança'], emoji: '🤝', hint: 'Junta os dois reinos.' },
      { sentence: 'No dia 1 de dezembro de 1640, um grupo de revoltosos restaurou a ___ de Portugal.', blank: 'independência', options: ['independência', 'economia', 'fronteira', 'religião'], emoji: '🎉', hint: 'É o que Portugal tinha perdido em 1580.' },
      { sentence: 'Com D. João IV teve início a Dinastia de ___.', blank: 'Bragança', options: ['Bragança', 'Avis', 'Borgonha', 'Áustria'], emoji: '👑', hint: 'Era Duque desse título antes de ser rei.' },
    ],
    timelineEvents: [
      { event: 'Morte de D. Sebastião em Alcácer Quibir', year: '1578', sortYear: 1578, emoji: '⚔️' },
      { event: 'Filipe II de Espanha torna-se rei de Portugal', year: '1580', sortYear: 1580, emoji: '👑' },
      { event: 'Restauração da Independência — D. João IV aclamado rei', year: '1 de dezembro de 1640', sortYear: 1640, emoji: '🎊' },
    ],
  },
};
