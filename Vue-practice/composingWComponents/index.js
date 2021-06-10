
// component is in essence a vue instance with predefined options
//
Vue.component('todo-item', {//register the component by doing vue.component. 
    //Pass in the name as defined in html' <todo-item>'
    //options object as a second paramenter
    //in it we want to define the template for this component. 
    //you could put anyhtml here and it will render over the  <todo-item>
    template: '<li>This is a todo</li>'
  });
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
//In a large application, it is necessary to divide the whole app into components to make development manageable
var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})
  //root view instance
  var app = new Vue({
    el: '#app'
  });//the div that surrounds the rendering data