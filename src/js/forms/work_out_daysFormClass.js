/**
 * Prototype representing the router object class; used to manage
 * comunication with the backend.
 *
 * @author Frank Quero querof@gmail.com
 */

var work_out_daysFormClass = function(options) {


  /**
   * @var vars
   */

  var vars = {
    formData: [],
    userPlanId: null
  };



  /**
   * Constructor of the Class
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

    if ((vars.formData instanceof Array) === false) {
      dataObj = vars.formData.response.json[0];
      $('#id').val(dataObj.id);
      $('#planId').val(dataObj.planid);
      $('#name').val(dataObj.name);
      $('#description').val(dataObj.description);
      $("#weekday").val(dataObj.weekday);
    } else {
      $('#planId').val(vars.formData[0]);
    }
    $('#userPlanId').val(vars.userPlanId);

    getPlans();
    return vars;
  }

  /**
   * Hidrate plans
   *
   * @return Hidrate form fields.
   */

  var getPlans = function() {
    var options = '';
    var selected = '';

    plans = router.get('plan');
    plans.forEach(function(row, index) {
      if (row.id == $('#planId').val()) {
        selected = 'selected';
      }
      options += '<option ' + selected + ' value="' + row.id + '">' + row.name + '</option>';
      selected = '';
    });
    $('#plan_id').append('<option value"">Select</option>' + options);
  }
  /*
   * Constructor call
   */

  this.construct(options);

};
