  /**
   * Prototype representing the router object class; used to manage
   * comunication with the backend.
   *
   * @author Frank Quero querof@gmail.com
   */

  var routerClass = function(options) {


    /**
     * @var vars
     */

    var vars = {
      formData: [],
      route: null,
      response: {},
    };

    /**
     * @var root its represent this object
     */

    var root = this;

    var route;

    // var server = "http://localhost/jobs/virtuagym/web/index.php";


    /**
     * Constructorof the Class
     */

    this.construct = function(options) {
      $.extend(vars, options);
      setRouteObj();
    };


    /**
     * Retorna objeto Json a partir de la variable vars.
     *
     */

    this.send = function() {
      return callJson();
    };

    /**
     * Returns vars.
     *
     */

    this.getVars = function() {
      return vars;
    };

    /**
     * Returns vars.
     *
     */

    this.setVars = function(options) {
      $.extend(vars, options);
      setRouteObj();
    };


    /**
     * Instancia los objetos input file, y controla todo el proceso de upload de archivos,
     * utilizando para ello el componente Upload file de Jquery.
     *
     * @return retorna el resultado del proceso durante su ejecución y actualiza la variable vars.
     */

    var setRouteObj = function() {
      route = eval('routes.' + vars.route);
    }

    /**
     * Instancia los objetos input file, y controla todo el proceso de upload de archivos,
     * utilizando para ello el componente Upload file de Jquery.
     *
     * @return retorna el resultado del proceso durante su ejecución y actualiza la variable vars.
     */

    var callJson = function() {
      dataObj = utility.parseParams(vars.formData);
      $.ajax({
        type: route.method || 'GET',
        url: server + route.path.replace("{id}", dataObj.id),
        async: false,
        crossDomain: true,
        data: vars.formData + '&token=' + utility.getCookie('auth_token'),
        dataType: "json",
        complete: function(xhr, textStatus) {
          $.extend(vars, {
            response: {
              status: xhr.status,
              json: xhr.responseJSON
            }
          });
        }
      });
      return vars;
    }

    this.get = function(pth, id) {
      id = id || null;
      $.ajax({
        type: 'GET',
        url: server + '/' + pth.replace("{id}", id),
        async: false,
        crossDomain: true,
        data: 'token=' + utility.getCookie('auth_token'),
        dataType: "json",
        complete: function(xhr, textStatus) {
          $.extend(vars, {
            response: {
              status: xhr.status,
              json: xhr.responseJSON
            }
          });
        }
      });
      return vars.response.json;
    }

    this.search = function(params) {
      obj = new routerClass({
        formData: "params=" + params,
        route: controller + '_search'
      });
      return obj.send();
    }


    /*
     * Constructor call
     */

    this.construct(options);

  };
