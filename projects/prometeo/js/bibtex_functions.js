var bibtex_reader = new BibtexDisplay();
var constraints = {};

function add_handler(entry, value) {
  $(".bibtex_template").hide();
  if (value == 'all') delete constraints[entry];
  else constraints[entry] = value;
  bibtex_reader.displayBibtex($("#bibtex_input").val(), $("#bibtex_display"), constraints);
  if (typeof _altmetric != 'undefined') _altmetric.embed_init();
}

function add_projects() {
  var projects = bibtex_reader.get_projects($("#bibtex_input").val(), constraints);
  var n = 0;
  $.each(projects, function (key, value) {
    $('.projects').append('<button class="btn btn-normal btn-projects" type="button" value="' + key + '">' + key + ' <span class="badge">' + value + '</span></button>');
    n++;
  });
  if (n == 0) return;
  $('.btn-projects').click(function() {
    add_handler('PROJECT', $(this).val());
  });
  $('.projects').removeClass('hide');
}

function add_years() {
  var years = bibtex_reader.get_years($("#bibtex_input").val(), constraints);
  var n = 0;
  $.each(years, function (key, value) {
    $('.years').append('<button class="btn btn-primary btn-years" type="button" value="' + key + '"> ' + key + ' <span class="badge">' + value + '</span></button>');
    n++;
  });
  if (n == 0) return;
  $('.btn-years').click(function() {
    add_handler('YEAR', $(this).val());
  });
  $('.years').removeClass('hide');
}

function my_bibtex_js_draw() {
  $(".bibtex_template").hide();
  bibtex_reader.displayBibtex($("#bibtex_input").val(), $("#bibtex_display"), constraints);
  add_projects();
  add_years();
}

  
function decodeLatex(input) {
  if (!input) return ""; // Verifica si la entrada es vacía o nula
  const latexMappings = [
    [/"\\\"a/g, "ä"], [/"\\\"e/g, "ë"], [/"\\\"i/g, "ï"],
    [/"\\\"o/g, "ö"], [/"\\\"u/g, "ü"], [/"\\\"A/g, "Ä"],
    [/"\\\"E/g, "Ë"], [/"\\\"I/g, "Ï"], [/"\\\"O/g, "Ö"],
    [/"\\\"U/g, "Ü"], [/{\\\"{a}}/g, "ä"], [/{\\\"{e}}/g, "ë"],
    [/{\\\"{i}}/g, "ï"], [/{\\\"{o}}/g, "ö"], [/{\\\"{u}}/g, "ü"],
    [/{\\\"{A}}/g, "Ä"], [/{\\\"{E}}/g, "Ë"], [/{\\\"{I}}/g, "Ï"],
    [/{\\\"{O}}/g, "Ö"], [/{\\\"{U}}/g, "Ü"],
    [/\\'e/g, "é"], [/\\'a/g, "á"], [/\\'i/g, "í"],
    [/\\'o/g, "ó"], [/\\'u/g, "ú"], [/\\`a/g, "à"],
    [/\\`e/g, "è"], [/\\`i/g, "ì"], [/\\`o/g, "ò"],
    [/\\`u/g, "ù"], [/\\\\~n/g, "ñ"], [/\\~a/g, "ã"],
    [/\\~o/g, "õ"], [/\\^o/g, "ô"], [/\\^a/g, "â"],
    [/\\^e/g, "ê"], [/\\^i/g, "î"], [/\\^u/g, "û"],
    [/\\c{c}/g, "ç"], [/\\\"a/g, "ä"], [/\\\"e/g, "ë"],
    [/\\\"i/g, "ï"], [/\\\"o/g, "ö"], [/\\\"u/g, "ü"],
    [/\\ss/g, "ß"], [/\\ae/g, "æ"], [/\\AE/g, "Æ"],
    [/\\oe/g, "œ"], [/\\OE/g, "Œ"], [/\\o/g, "ø"],
    [/\\O/g, "Ø"], [/\\l/g, "ł"], [/\\L/g, "Ł"],
    [/{\\'{a}}/g, "á"], [/{\\'{c}}/g, "ć"], [/{\\'{e}}/g, "é"],
    [/{\\'{g}}/g, "ǵ"], [/{\\'{i}}/g, "í"], [/{\\'{n}}/g, "ń"],
    [/{\\'{o}}/g, "ó"], [/{\\'{r}}/g, "ŕ"], [/{\\'{s}}/g, "ś"],
    [/{\\'{u}}/g, "ú"], [/{\\'{w}}/g, "ẃ"], [/{\\'{y}}/g, "ý"],
    [/{\\'{z}}/g, "ź"], [/{\\'{A}}/g, "Á"], [/{\\'{C}}/g, "Ć"],
    [/{\\'{E}}/g, "É"], [/{\\'{G}}/g, "Ǵ"], [/{\\'{I}}/g, "Í"],
    [/{\\'{N}}/g, "Ń"], [/{\\'{O}}/g, "Ó"], [/{\\'{R}}/g, "Ŕ"],
    [/{\\'{S}}/g, "Ś"], [/{\\'{U}}/g, "Ú"], [/{\\'{W}}/g, "Ẃ"],
    [/{\\'{Y}}/g, "Ý"], [/{\\'{Z}}/g, "Ź"], [/{\\`{a}}/g, "à"],
    [/{\\`{e}}/g, "è"], [/{\\`{i}}/g, "ì"], [/{\\`{o}}/g, "ò"],
    [/{\\`{u}}/g, "ù"], [/{\\`{A}}/g, "À"], [/{\\`{E}}/g, "È"],
    [/{\\`{I}}/g, "Ì"], [/{\\`{O}}/g, "Ò"], [/{\\`{U}}/g, "Ù"],
    [/{\\^{a}}/g, "â"], [/{\\^{c}}/g, "ĉ"], [/{\\^{e}}/g, "ê"],
    [/{\\^{g}}/g, "ĝ"], [/{\\^{i}}/g, "î"], [/{\\^{j}}/g, "ĵ"],
    [/{\\^{o}}/g, "ô"], [/{\\^{s}}/g, "ŝ"], [/{\\^{u}}/g, "û"],
    [/{\\^{A}}/g, "Â"], [/{\\^{C}}/g, "Ĉ"], [/{\\^{E}}/g, "Ê"],
    [/{\\^{G}}/g, "Ĝ"], [/{\\^{I}}/g, "Î"], [/{\\^{J}}/g, "Ĵ"],
    [/{\\^{O}}/g, "Ô"], [/{\\^{S}}/g, "Ŝ"], [/{\\^{U}}/g, "Û"],
    [/{\\"{a}}/g, "ä"], [/{\\"{e}}/g, "ë"], [/{\\"{i}}/g, "ï"],
    [/{\\"{o}}/g, "ö"], [/{\\"{u}}/g, "ü"], [/{\\"{A}}/g, "Ä"],
    [/{\\"{E}}/g, "Ë"], [/{\\"{I}}/g, "Ï"], [/{\\"{O}}/g, "Ö"],
    [/{\\"{U}}/g, "Ü"], [/{\\={a}}/g, "ā"], [/{\\={e}}/g, "ē"],
    [/{\\={i}}/g, "ī"], [/{\\={o}}/g, "ō"], [/{\\={u}}/g, "ū"],
    [/{\\={A}}/g, "Ā"], [/{\\={E}}/g, "Ē"], [/{\\={I}}/g, "Ī"],
    [/{\\={O}}/g, "Ō"], [/{\\={U}}/g, "Ū"], [/{\\.a}/g, "ȧ"],
    [/{\\.c}/g, "ċ"], [/{\\.e}/g, "ė"], [/{\\.g}/g, "ġ"],
    [/{\\.o}/g, "ȯ"], [/{\\.z}/g, "ż"], [/{\\.A}/g, "Ȧ"],
    [/{\\.C}/g, "Ċ"], [/{\\.E}/g, "Ė"], [/{\\.G}/g, "Ġ"],
    [/{\\.O}/g, "Ȯ"], [/{\\.Z}/g, "Ż"], [/{\\d{a}}/g, "ạ"],
    [/{\\d{e}}/g, "ẹ"], [/{\\d{h}}/g, "ḥ"], [/{\\d{i}}/g, "ị"],
    [/{\\d{m}}/g, "ṃ"], [/{\\d{n}}/g, "ṇ"], [/{\\d{o}}/g, "ọ"],
    [/{\\d{r}}/g, "ṛ"], [/{\\d{s}}/g, "ṣ"], [/{\\d{u}}/g, "ụ"],
    [/{\\u{a}}/g, "ă"], [/{\\u{e}}/g, "ĕ"], [/{\\u{g}}/g, "ğ"],
    [/{\\u{i}}/g, "ĭ"], [/{\\u{o}}/g, "ŏ"], [/{\\u{u}}/g, "ŭ"],
    [/{\\u{A}}/g, "Ă"], [/{\\u{E}}/g, "Ĕ"], [/{\\u{G}}/g, "Ğ"],
    [/{\\u{I}}/g, "Ĭ"], [/{\\u{O}}/g, "Ŏ"], [/{\\u{U}}/g, "Ŭ"],
    [/{\\~{a}}/g, "ã"], [/{\\~{o}}/g, "õ"], [/{\\~{n}}/g, "ñ"],
    [/{\\~{A}}/g, "Ã"], [/{\\~{O}}/g, "Õ"], [/{\\~{N}}/g, "Ñ"],
    [/{\\c{c}}/g, "ç"], [/{\\c{e}}/g, "ȩ"], [/{\\c{s}}/g, "ş"],
    [/{\\c{C}}/g, "Ç"], [/{\\c{E}}/g, "Ȩ"], [/{\\c{S}}/g, "Ş"],
    [/{a{\v}}/g, "â"], [/{A{\v}}/g, "Â"], [/{\v{a}}/g, "ǎ"],
    [/{\v{\a}}/g, "ǎ"], [/{\v a}/g, "ǎ"], [/{\va}/g, "ǎ"],
    [/\\v{a}/g, "ǎ"], [/\\va/g, "ǎ"], [/\\v{\a}/g, "ǎ"],
    [/{\v{A}}/g, "Ǎ"], [/{\v{\a}}/g, "Ǎ"], [/{\v A}/g, "Ǎ"],
    [/{\vA}/g, "Ǎ"], [/\\v{A}/g, "Ǎ"], [/\\vA/g, "Ǎ"],
    [/\\v{\a}/g, "Ǎ"], [/{\v{c}}/g, "č"], [/{\v{\c}}/g, "č"],
    [/{\v c}/g, "č"], [/{\vc}/g, "č"], [/\\v{c}/g, "č"],
    [/\\vc/g, "č"], [/\\v{\c}/g, "č"], [/{\v{C}}/g, "Č"],
    [/{\v{\c}}/g, "Č"], [/{\v C}/g, "Č"], [/{\vC}/g, "Č"],
    [/\\v{C}/g, "Č"], [/\\vC/g, "Č"], [/\\v{\c}/g, "Č"],
    [/{e{\v}}/g, "ê"], [/{\v{e}}/g, "ě"], [/{\v{\e}}/g, "ě"],
    [/{\v e}/g, "ě"], [/{\ve}/g, "ě"], [/\\v{e}/g, "ě"],
    [/\\ve/g, "ě"], [/\\v{\e}/g, "ě"], [/{E{\v}}/g, "Ê"],
    [/{\v{E}}/g, "Ě"], [/{\v{\e}}/g, "Ě"], [/{\v E}/g, "Ě"],
    [/{\vE}/g, "Ě"], [/\\v{E}/g, "Ě"], [/\\vE/g, "Ě"],
    [/\\v{\e}/g, "Ě"], [/{\v{j}}/g, "ǰ"], [/{\v{\j}}/g, "ǰ"],
    [/{\v j}/g, "ǰ"], [/{\vj}/g, "ǰ"], [/\\v{j}/g, "ǰ"],
    [/\\vj/g, "ǰ"], [/\\v{\j}/g, "ǰ"], [/{\v{r}}/g, "ř"],
    [/{\v{\r}}/g, "ř"], [/{\v r}/g, "ř"], [/{\vr}/g, "ř"],
    [/\\v{r}/g, "ř"], [/\\vr/g, "ř"], [/\\v{\r}/g, "ř"],
    [/{\v{R}}/g, "Ř"], [/{\v{\r}}/g, "Ř"], [/{\v R}/g, "Ř"],
    [/{\vR}/g, "Ř"], [/\\v{R}/g, "Ř"], [/\\vR/g, "Ř"],
    [/\\v{\r}/g, "Ř"], [/{\v{s}}/g, "š"], [/{\v{\s}}/g, "š"],
    [/{\v s}/g, "š"], [/{\vs}/g, "š"], [/\\v{s}/g, "š"],
    [/\\vs/g, "š"], [/\\v{\s}/g, "š"], [/{\v{S}}/g, "Š"],
    [/{\v S}/g, "Š"], [/{\vS}/g, "Š"], [/{\v{\S}}/g, "Š"],
    [/\\v{S}/g, "Š"], [/\\vS/g, "Š"], [/\\v{\S}/g, "Š"],
    [/{\v{z}}/g, "ž"], [/{\v{\z}}/g, "ž"], [/{\v z}/g, "ž"],
    [/{\vz}/g, "ž"], [/\\v{z}/g, "ž"], [/\\vz/g, "ž"],
    [/\\v{\z}/g, "ž"], [/{\v{Z}}/g, "Ž"], [/{\v{\Z}}/g, "Ž"],
    [/{\v Z}/g, "Ž"], [/{\vZ}/g, "Ž"], [/\\v{Z}/g, "Ž"],
    [/\\vZ/g, "Ž"], [/\\v{\Z}/g, "Ž"], [/{\\textquotedblright}/g, '"'],
    [/{\\textquotedblleft}/g, '"'], [/{\\textquoteleft}/g, "'"],
    [/{\\textquoteright}/g, "'"], [/{\\textemdash}/g, "—"],
    [/{\\textendash}/g, "–"], [/{\\textless}/g, "<"],
    [/{\\textgreater}/g, ">"],
    [/{\\ss}/g, "ß"], [/{\\ae}/g, "æ"], [/{\\aE}/g, "Æ"],
    [/{\\oe}/g, "œ"], [/{\\OE}/g, "Œ"], [/{\\o}/g, "ø"],
    [/{\\O}/g, "Ø"], [/{\\r{a}}/g, "å"], [/{\\r{u}}/g, "ů"],
    [/{\\r{A}}/g, "Å"], [/{\\r{U}}/g, "Ů"], [/{\\i}/g, "ı"],
    [/{\\l}/g, "ł"], [/{\\L}/g, "Ł"], [/{\\aa}/g, "å"],
    [/{\\aA}/g, "Å"], [/{\\H{o}}/g, "ő"], [/{\\H{u}}/g, "ű"],
    [/{\\H{O}}/g, "Ő"], [/{\\H{U}}/g, "Ű"], [/{\\.{z}}/g, "ż"],
    [/{\\.{c}}/g, "ċ"], [/{\\.{e}}/g, "ė"], [/{\\.{o}}/g, "ȯ"],
    [/{\\.{g}}/g, "ġ"], [/{\\.{Z}}/g, "Ż"], [/{\\.{C}}/g, "Ċ"],
    [/{\\.{E}}/g, "Ė"], [/{\\.{O}}/g, "Ȯ"], [/{\\.{G}}/g, "Ġ"],
    [/{\\textquotesingle}/g, "'"], [/{\\textemdash}/g, "—"],
    [/{\\textendash}/g, "–"], [/{\\textless}/g, "<"],
    [/{\\textgreater}/g, ">"], [/{\\textquoteright}/g, "'"],
    [/{\\textquoteleft}/g, "'"], [/{\\textquotedblright}/g, '"'],
    [/{\\textquotedblleft}/g, '"']
  ];

  // Reemplazar patrones LaTeX en la entrada
  latexMappings.forEach(([regex, replacement]) => {
    input = input.replace(regex, replacement);
  });

  return input; // Retorna el texto decodificado
}