var boxWidth = $("#main").width();


$("#usersA").click(function(e) {
  e.preventDefault();
  controller = 'user';
  action = "list";
  userActions.list();
  $('.navbar-collapse').collapse('hide');
});

$("#plansA").click(function(e) {
  e.preventDefault();
  controller = 'plan';
  action = "list";
  planActions.list();
  $('.navbar-collapse').collapse('hide');
});

$("#work_out_daysA").click(function(e) {
  e.preventDefault();
  controller = 'work_out_days';
  action = "list";
  work_out_daysActions.list();
  $('.navbar-collapse').collapse('hide')
});

$("#user_plansA").click(function(e) {
  e.preventDefault();
  controller = 'user_plan';
  action = "list";
  user_planActions.list();
  $('.navbar-collapse').collapse('hide');
});

$("#excercisesA").click(function(e) {
  e.preventDefault();
  controller = 'excercises';
  action = "list";
  excercisesActions.list();
  $('.navbar-collapse').collapse('hide');
});
