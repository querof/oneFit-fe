/**
 * Prototype of Auth Actions.
 *
 * @author Frank Quero querof@gmail.com
 */

var authActionsClass = function() {


  /**
   * Show login screen.
   *
   */

  this.login = function() {
    utility.changeScreen('index.html div#main');
  }

  /**
   * Show login screen.
   *
   */

  this.logout = function() {
    $('.navbar').hide();
    utility.changeScreen('../../public/web/index.html div#main');
  }

  /**
   * Checks Auth users records.
   *
   */
  this.sigin = function(e) {
    e.preventDefault();
    var data = $('#loginForm').serializeArray();
    router = new routerClass();
    router.setVars({
      formData: 'params={"user":{"email":{"value":"' + data[0].value + '"},"password":{"value":"' + data[1].value + '"},"confirmed":{"value":true}}}',
      route: 'auth_signin'
    });
    response = router.send();
    if (response.response.status == 200) {
      utility.setCookie('auth_token', response.response.json.token, 1);
      $('.alert').hide();
      $('.navbar').show();
      controller = 'user_plan';
      action = "list";
      user_planActions.list();
      // $('.navbar-collapse').collapse('hide');
    } else {
      utility.messages(response);
    }
  }


}
