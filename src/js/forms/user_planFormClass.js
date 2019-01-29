/**
 * Prototype representing the router object class; used to manage
 * comunication with the backend.
 *
 * @author Frank Quero querof@gmail.com
 */

var user_planFormClass = function(options) {


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
    if (vars.formData !== null) {
      dataObj = vars.formData.response.json[0];
      $('#id').val(dataObj.id);
      $('#userId').val(dataObj.userid);
      $('#planId').val(dataObj.planid);
      getWorkoutDays(dataObj.planid);
    }
    getUsers();
    getPlans();

  }


  /**
   * Hidrate users
   *
   * @return Hidrate form fields.
   */

  var getUsers = function() {
    var options = '';
    var selected = '';

    users = router.get('user');
    users.forEach(function(row, index) {
      if (row.id == $('#userId').val()) {
        selected = 'selected';
      }
      options += '<option ' + selected + ' value="' + row.id + '">' + row.name + ' ' + row.lastname + '</option>';
      selected = '';

    });
    $('#user_id').append('<option value"">Select</option>' + options);
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

  /**
   * Generate list Workout Days
   */

  var getWorkoutDays = function(planId) {
    wdId = 0;
    response = router.search('{"excercises":{"name":{}},"workout_days_excercises":{"id":{},"repetitions":{},"excercisesid":{"outer":"LEFT"},"workoutdaysid":{"outer":"RIGHT"}},"workout_days":{"id":{},"name":{"order":"asc"},"planid":{"value":' + planId + '}}}');

    response.response.json.forEach(function(row, index) {

      if (row.workout_days_id != wdId) {
        if (index != 0) {
          workday += '</div> </div> </div>';
          $("#work_out_days_list").append(workday);
        }
        workday = '<div id="workout_days_' + row.workout_days_id + '" class="card"><div class="card-header" id="heading' + row.workout_days_id + '"><div><button id="close_delete_workout_days" type="button"class="close float-right" aria-label="Close" workoutDaysId="' + row.workout_days_id + '">  <spanaria-hidden="true">&times;</span> </button><div><button class="btn fas fa-plus" type="button" data-toggle="collapse" data-target="#collapse' + row.workout_days_id + '" aria-expanded="true" aria-controls="collapse' + row.workout_days_id + '">  ' + row.workout_days_name + '    </button>    <button id="edit_workout_days" type="button" class="btn far fa-edit float-right" dbId="' + row.workout_days_id + '" >Edit</button> <button id="work_out_days_excercises_create" type="button" class="btn far fa-file float-right" planId="' + row.workout_days_planid + '" workoutDaysId="' + row.workout_days_id + '" >Add Ex</button></div><div id="collapse' + row.workout_days_id + '" class="collapse collapsed" aria-labelledby="heading' + row.workout_days_id + '" data-parent="#work_out_days_list"> <div class="card-body">';

        wdId = row.workout_days_id;
      }

      if (row.workout_days_excercises_id !== null) {
        workday += '<div id="workout_days_excercises_' + row.workout_days_excercises_id + '" class="border-bottom" ><div class="row"> <button id="edit_workout_days_excercises" type="button" class="btn far fa-edit float-right" dbId="' + row.workout_days_excercises_id + '" >Edit</button> <button id="close_delete_workout_days_excercises" type="button"class="close float-right" aria-label="Close" workoutDaysExcercisesId="' + row.workout_days_excercises_id + '">  <spanaria-hidden="true">&times;</span> </button></div><div class="form-group row"><label for="name_' + row.workout_days_excercises_id + '" class="col-sm-2 col-form-label">Name</label>  <div class="col-sm-10"> <input class="form-control" type="text" value="' + row.excercises_name + '" readonly></div></div> <div class="form-group row"><label for="repetitions_' + row.workout_days_excercises_id + '" class="col-sm-2 col-form-label">Repetitions</label>  <div class="col-sm-10"> <input class="form-control" type="text" value="' + row.workout_days_excercises_repetitions + '" readonly></div></div></div>';
      }

    });
    $("#work_out_days_list").append(workday);
  }

  /*
   * Constructor call
   */

  this.construct(options);

};
