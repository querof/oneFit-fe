/**
 * Prototype representing the router object class; used to manage
 * comunication with the backend.
 *
 * @author Frank Quero querof@gmail.com
 */

var work_out_days_excercisesFormClass = function(options) {


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
      $('#excercisesId').val(dataObj.excercisesid);
      $('#workoutDaysId').val(dataObj.workoutdaysid);
      $('#repetitions').val(dataObj.repetitions);
    } else {
      $('#workoutDaysId').val(vars.formData[0]);
    }
    $('#userPlanId').val(vars.userPlanId);

    getExcercises();
    getWorkoutDays();
    return vars;
  }

  /**
   * Hidrate plans
   *
   * @return Hidrate form fields.
   */

  var getExcercises = function() {
    var options = '';
    var selected = '';

    excercises = router.get('excercises');

    excercises.forEach(function(row, index) {
      if (row.id == $('#excercisesId').val()) {
        selected = 'selected';
      }
      options += '<option ' + selected + ' value="' + row.id + '">' + row.name + '</option>';
      selected = '';
    });
    $('#excercises_id').append('<option value"">Select</option>' + options);
  }

  /**
   * Hidrate plans
   *
   * @return Hidrate form fields.
   */

  var getWorkoutDays = function() {
    var options = '';
    var selected = '';

    work_out_days = router.get('workoutdays');
    work_out_days.forEach(function(row, index) {
      if (row.id == $('#workoutDaysId').val()) {
        selected = 'selected';
      }
      options += '<option ' + selected + ' value="' + row.id + '">' + row.name + '</option>';
      selected = '';
    });
    $('#workout_days_id').append('<option value"">Select</option>' + options);
  }

  /*
   * Constructor call
   */

  this.construct(options);

};
