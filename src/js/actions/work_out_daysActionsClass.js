/**
 * Prototype of Excercices Actions.
 *
 * @author Frank Quero querof@gmail.com
 */

var work_out_daysActionsClass = function() {


  /**
   * Create list items.
   *
   */

  this.list = function() {
    response = caller('list');
    utility.changeScreen('../../src/views/work_out_days/list.html div#card-body', [getList, response]);
  }


  /**
   * Add a record.
   *
   */
  this.new = function(planId, userPlanId) {
    planId = planId || null;

    form = new work_out_daysFormClass({
      formData: [planId],
      userPlanId: userPlanId
    });
    utility.changeScreen('../../src/views/work_out_days/form.html div#card-body', [form.hidrate]);
    return "create";
  }


  /**
   * Edit records.
   *
   */
  this.get = function(id, userPlanId) {
    planId = planId || null;
    response = this.getObj(id);
    form = new work_out_daysFormClass({
      formData: response,
      userPlanId: userPlanId
    });
    utility.changeScreen('../../src/views/work_out_days/form.html div#card-body', [form.hidrate]);
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
      controller = "user_plan";
      action = "get";
      user_planActions.get($('#userPlanId').val());
    }
    return action;
  }


  /**
   * Delete records.
   *
   */
  this.del = function(id) {
    response = caller(action, 'id=' + id);
    utility.messages(response);
    if (response.response.status == 200) {
      $('#workout_days_' + id).hide();
    }

  }

  /**
   * Call API.
   *
   */
  var caller = function(action, data) {
    router.setVars({
      formData: data,
      route: 'work_out_days_' + action
    });
    return router.send();
  }

  /**
   * Generate list elementes
   */

  var getList = function(response) {
    response.response.json.forEach(function(row, index) {
      $(".list-group").append('<div id="row-' + row.id + '"" class="list-group-item list-group-item-action list-group-item-action" dbId="' + row.id + '">' + row.name + ' </div>');
    });

  }
}
