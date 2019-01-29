$('#main').on('click', '#edit_workout_days', {}, function(e) {
  controller = "work_out_days";
  action = "get";
  work_out_daysActions.get($(this).attr('dbId'), $('#id').val());
});

$('#main').on('click', '#edit_workout_days_excercises', {}, function(e) {
  controller = "work_out_days_excercises";
  action = "get";
  work_out_days_excercisesActions.get($(this).attr('dbId'), $('#id').val());
});

$('#main').on('change', '#user_id', {}, function(e) {
  $('#userId').val($(this).find(":selected").val());
});

$('#main').on('change', '#plan_id', {}, function(e) {
  $('#planId').val($(this).find(":selected").val());
});

$('#main').on('change', '#work_out_days_id', {}, function(e) {
  $('#workoutdaysId').val($(this).find(":selected").val());
});

$('#main').on('change', '#excercises_id', {}, function(e) {
  $('#excercisesId').val($(this).find(":selected").val());
});

$('#main').on('click', '#user_plan_workout_days', {}, function(e) {
  controller = "user_plan";
  action = "get";
  user_planActions.get($('#userPlanId').val());
});

$('#main').on('click', '#work_out_days_create', {}, function(e) {
  controller = 'work_out_days';
  action = "create";
  work_out_daysActions.new($('#planId').val(), $('#id').val());
});

$('#main').on('click', '#work_out_days_excercises_create', {}, function(e) {
  controller = 'work_out_days_excercises';
  action = "create";
  work_out_days_excercisesActions.new($(this).attr('workoutDaysId'), $('#id').val(), $('#planId').val());
});

$('#main').on('click', '#delete_workout_days', {}, function(e) {
  action = "delete";
  action = work_out_daysActions.save(action, $('#form-crud').serialize());
});

$('#main').on('click', '#close_delete_workout_days', {}, function(e) {
  action = "delete";
  work_out_daysActions.del($(this).attr('workoutDaysId'));
});

$('#main').on('click', '#delete_workout_days_excercises', {}, function(e) {
  action = "delete";
  action = work_out_days_excercisesActions.save(action, $('#form-crud').serialize());
});

$('#main').on('click', '#close_delete_workout_days_excercises', {}, function(e) {
  action = "delete";
  work_out_days_excercisesActions.del($(this).attr('workoutDaysExcercisesId'));
});
