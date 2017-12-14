
new Vue({
    el: "#m-info",
    data: {
        currentView: 'word'
    },
    components: {
        word: {
            template: '#view1'
        },
        history: {
            template: '#view2'
        },
        other: {
            template: '#view3'
        }
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})

// register modal component
Vue.component('modal', {
    template: '#modal-template'
  })
  
  // start app
  new Vue({
    el: '#app',
    data: {
      showModal: false
    }
  })