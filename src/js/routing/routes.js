var routes;
var r = $.getJSON("../../conf/routes.json").done(function(json) {
    routes = $.parseJSON(r.responseText);
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    $('.alert').removeClass("alert-primary").addClass("alert-danger");
    $('.alert-text').text("Request Failed: " + err);
  });

var server;
var s = $.getJSON("../../conf/api.json").done(function(json) {
    api_conf = $.parseJSON(s.responseText);
    server = api_conf.api_server;
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    $('.alert').removeClass("alert-primary").addClass("alert-danger");
    $('.alert-text').text("Request Failed: " + err);
  });
