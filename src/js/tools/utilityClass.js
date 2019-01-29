/**
 * Utility class
 *
 * @author Frank Quero querof@gmail.com
 */

var utilityClass = function() {


  var re = /([^&=]+)=?([^&]*)/g;


  /**
   * Changue Screen.
   *
   */

  this.changeScreen = function(route, func) {

    func = func || [null, null];
    $("#main").delay(125).animate({
      opacity: '0.4'
    }, 120, function(e) {
      $('#main').load(route, function() {
        if (func[0] === null) return;
        f = func[0];
        f(func[1]);
      });
    });
    $("#main").delay(125).animate({
      opacity: '1'
    }, 125);
  }

  this.setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  this.getCookie = function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  var decode = function(str) {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  };

  this.parseParams = function(query) {
    var params = {},
      e;
    if (query) {
      if (query.substr(0, 1) == '?') {
        query = query.substr(1);
      }

      while (e = re.exec(query)) {
        var k = decode(e[1]);
        var v = decode(e[2]);
        if (params[k] !== undefined) {
          if (!$.isArray(params[k])) {
            params[k] = [params[k]];
          }
          params[k].push(v);
        } else {
          params[k] = v;
        }
      }
    }
    return params;
  };

  this.messages = function(response) {
    $('.alert').show();
    $(".alert").animate({
      top: '3px',
      left: 0,
      opacity: '1'
    }, {duration:1000}).delay(2000);
    if (response.response.status == 200) {
      $('.alert').removeClass("alert-danger").addClass("alert-primary");
      $('.alert-text').text(response.response.json.message);
    } else {
      $('.alert').removeClass("alert-primary").addClass("alert-danger");
      $('.alert-text').text(response.response.json.error);
    }
    $(".alert").animate({
      top: '-550px',
      left: '-100px',
      opacity: '0.25'
    }, {duration:2000});
  }
};
