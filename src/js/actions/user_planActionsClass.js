/**
 * Prototype of Plans Actions.
 *
 * @author Frank Quero querof@gmail.com
 */

var user_planActionsClass = function() {


  /**
   * Create list items.
   *
   */

  this.list = function() {
    response = router.search('{"user_plan":{"id":{},"planid":{},"userid":{}},"plan":{"name":{"order":"asc"}},"user":{"name":{"order":"asc"},"lastname":{"order":"asc"}}}');

    utility.changeScreen('../../src/views/user_plan/list.html div#card-body', [getList, response]);
  }


  /**
   * Create/update records.
   *
   */


  this.new = function() {
    // response = caller('get');
    form = new user_planFormClass({
      formData: null
    });
    utility.changeScreen('../../src/views/user_plan/form.html div#card-body',[form.hidrate]);
    return "create";
  }


  /**
   * Edit records.
   *
   */
  this.get = function(id) {
    response = this.getObj(id);
    form = new user_planFormClass({
      formData: response
    });
    utility.changeScreen('../../src/views/user_plan/form.html div#card-body', [form.hidrate]);
  }

  /**
   * Return excercises record.
   *
   */
  this.getObj = function(id) {
    return caller('get', 'id=' + id);
  }

  /**
   * Create/update records.form
   *
   */
  this.save = function(action, data) {
    response = caller(action, data);
    utility.messages(response);
    if (response.response.status == 200) {
      if (action == 'create') {
        $('#id').val(response.response.json.id);
        action = 'update';
      }
    }
    return action;
  }


  /**
   * Delete records.
   *
   */
  this.del = function(id) {
    response = caller(action);
    utility.messages(response);
    if (response.response.status == 200) {
      action = 'list';
      utility.changeScreen('../../src/views/user_plan/list.html div#card-body');
    } else {
      if (id != '') return 'update';
      action = 'create';
    }
    return action;
  }




  /**
   * Call API.
   *
   */
  var caller = function(action, data) {
    data = data || null;
    router.setVars({
      formData: data,
      route: 'user_plan_' + action
    });
    return router.send();
  }

  /**
   * Generate list elementes
   */

  var getList = function(response) {
    response.response.json.forEach(function(row, index) {
      $(".list-group").append('<div id="row-' + row.id + '"" class="list-group-item list-group-item-action list-group-item-action" dbId="' + row.user_plan_id + '">' + row.user_name + ' ' + row.user_lastname + ' - ' + row.plan_name + ' </div>');
    });

  }
}
