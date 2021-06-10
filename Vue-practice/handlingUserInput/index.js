var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'//this.message
    },
    methods: {
      reverseMessage: function () {
          //all DOM maniipulations are handled by vue
        this.message = this.message.split('').reverse().join('')//splits the message and reverses the order then joins
      }
    }
});

var app6 = new Vue({
el: '#app-6',
data: {
    message: 'WOW LOOK AT THAT RIGHT IN THE DOM'
}
})