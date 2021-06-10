var app = new Vue({
    el:"#app",
    data:{
        seen:true
    }
});

app.seen = false;//can set seen to false

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })