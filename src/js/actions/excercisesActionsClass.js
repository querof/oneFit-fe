/**
 * Prototype of Excercices Actions.
 *
 * @author Frank Quero querof@gmail.com
 */

var excercisesActionsClass = function() {


  /**
   * Create list items.
   *
   */

  this.list = function() {
    response = caller('list');
    utility.changeScreen('../../src/views/excercises/list.html div#card-body', [getList, response]);
  }


  /**
   * Create/update records.
   *
   */
  this.new = function() {
    utility.changeScreen('../../src/views/excercises/form.html div#card-body');
    return "create";
  }


  /**
   * Edit records.
   *
   */
  this.get = function(id) {
    response = this.getObj(id);
    form = new excercisesFormClass({
      formData: response
    });
    utility.changeScreen('../../src/views/excercises/form.html div#card-body', [form.hidrate]);
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
    response = caller(action, data);
    utility.messages(response);
    if (response.response.status == 200) {
      action = 'list';
      utility.changeScreen('../../src/views/excercises/list.html div#card-body');
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
    router.setVars({
      formData: data,
      route: 'excercises_' + action
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
