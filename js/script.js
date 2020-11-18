// un toDo permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
var app = new Vue ({
  el: '#app',
  data: {
    todo: '', //variabile,
    toDoList: [], //array in cui pusho toDo
    newtodo: '',
  },
  methods: {
    printodo: function () {
      //al click del bottone pusho l'toDo nell'array
      if (!this.todo) {
        this.toDoList.push('Beato te che non hai nulla da fare');
      } else {
        this.toDoList.push(this.todo);
      }
      this.todo = ''; //resetto il mio toDo
    },
    deletetodo: function (i) {
      //al click dell'icona mi cancella il list item
      this.toDoList.splice(i, 1);
    }
  }
})
