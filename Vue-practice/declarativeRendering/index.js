var app = new Vue({//create new Vue
    //pass in options object
    el: '#app',// where we want the app to live. Target DOM node
    data:{// give it a data object, one key with message
        message: "Hello World <- with Vue!"
    }
});

app.message = "Hello world!- with Vue and adjusted the data.";


var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  });