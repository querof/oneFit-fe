$('#main').on('click', '#users', {}, function(e) {
  controller = 'user';
  action = "list";
  userActions.list();
});
$('#main').on('click', '#plans', {}, function(e) {
  controller = 'plan';
  action = "list";
  planActions.list();
});
$('#main').on('click', '#days', {}, function(e) {
  controller = 'work_out_days';
  action = "list";
  work_out_daysActions.list();
});
$('#main').on('click', '#user_plan', {}, function(e) {
  controller = 'user_plan';
  action = "list";
  user_planActions.list();
});
$('#main').on('click', '#excercises', {}, function(e) {
  controller = 'excercises';
  action = "list";
  excercisesActions.list();
});

$('#main').on('click', '#new', {}, function(e) {
  action = 'create';
  act = eval(controller + 'Actions');
  act.new(action);
});

$('#main').on('click', '#saveForm', {}, function(e) {
  action = 'create';
  if ($('#id').val() != '') action = 'update'
  act = eval(controller + 'Actions');
  action = act.save(action, $('#form-crud').serialize());
});

$('#main').on('click', '#delete', {}, function(e) {
  action = "delete";
  act = eval(controller + 'Actions');
  action = act.save(action, $('#form-crud').serialize());
  act.list();
});

$('#main').on('click', '#search', {}, function(e) {
  action = "list";
  act = eval(controller + 'Actions');
  act.list();
});
$('#main').on('click', '.list-group-item', {}, function(e) {
  action = "get";
  act = eval(controller + 'Actions');
  act.get($(this).attr('dbId'));
});
