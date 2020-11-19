var todoApp = new Vue({
  el: '#todoApp',
  data: {
    message: 'Benvenuto in ToDo App',
    todoInput: '',
    lists: [],
    hasError: false
  },
  computed: {
    // https://lodash.com/docs/4.17.15#orderBy
    filterLists: function(){
      return _.orderBy(this.lists, ['isComplete', false])
    }
  },
  methods:{
    addTask: function(){
      // error if user non inserisce nulla
      if(!this.todoInput){
        this.hasError = true;
        return;
      }

      this.hasError = false;

      // pusho obj
      this.lists.push({
        id:this.lists.length+1,
        title: this.todoInput,
        isComplete: false
      });

      // reset input field.
      this.todoInput = '';
    },
    // delete del todo
    deleteTask: function (item) { //<--item è il list nella lista

      //al click dell'icona mi cancella il lists item
      var index = _.findIndex(this.lists, item)
      this.lists.splice(index, 1);
    },
    // edit del toDo già printato
    updateTask: function(e, list){
      e.preventDefault();
      list.title = e.target.innerText; //riscrivo la proprietà title riportando l'evento nella function
      e.target.blur(); //<-- perdo il focus dall'elemento selezionato.
    },
    completeTask: function(list){
      list.isComplete = !list.isComplete;
    }
  }
});
