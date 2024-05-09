bibtex_reader = new BibtexDisplay();
constraints = {};

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
  years = bibtex_reader.get_years($("#bibtex_input").val(), constraints);
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
