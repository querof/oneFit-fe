$('form').submit(function(e) {
  controller = 'login';
  action = 'sigin_auth';
  authActions.sigin(e);
});
$('#main').on('click', '#login', {}, function(e) {
  authActions.login();
});
$("#logout").click(function(e) {
  controller = 'login';
  action = 'sigin_auth';
  authActions.logout();
});
$('#main').on('click', '#register', {}, function(e) {
  controller = 'user'
  action = 'create';
  userActions.register();
});
