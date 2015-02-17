import Ember from 'ember';

export default Ember.Controller.extend({
  autocompleteData: function(){
    return {
      categories: {
        data: this.get('model.categories'),
        key: 'name',
        action: 'showCategory'
      },
      addons: {
        data: this.get('model.addons'),
        key: 'name',
        action: 'showAddon'
      }
    }
  }.property('model.categories', 'model.addons')
});
