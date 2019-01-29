var response;
var controller = 'login';
var action = 'sigin_auth';
var router;
var api_server ='';
var utility = new utilityClass();
var authActions = new authActionsClass();
var userActions = new userActionsClass();
var planActions = new planActionsClass();
var excercisesActions = new excercisesActionsClass();
var user_planActions = new user_planActionsClass();
var work_out_daysActions = new work_out_daysActionsClass();
var work_out_days_excercisesActions = new work_out_days_excercisesActionsClass();

$('.alert').hide();
$('.navbar').hide();
$(".alert").animate({
  top: '-200px',
  opacity: '0.25'
});
