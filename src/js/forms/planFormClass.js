/**
 * Prototype representing the router object class; used to manage
 * comunication with the backend.
 *
 * @author Frank Quero querof@gmail.com
 */

var planFormClass = function(options) {


  /**
   * @var vars
   */

  var vars = {
    formData: [],
  };



  /**
   * Constructorof the Class
   */

  this.construct = function(options) {
    $.extend(vars, options);
  };


  /**
   * Returns vars.
   *
   */

  this.returnVarsArray = function() {
    return vars;
  };


  /**
   * Hidrate form
   *
   * @return Hidrate form fields.
   */

  this.hidrate = function() {
    dataObj = vars.formData.response.json[0];

    $('#id').val(dataObj.id);
    $('#name').val(dataObj.name);
    $('#description').val(dataObj.description);

    return vars;
  }


  /*
   * Constructor call
   */

  this.construct(options);

};
