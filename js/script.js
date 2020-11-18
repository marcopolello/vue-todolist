// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
var app = new Vue ({
  el: '#app',
  data: {
    input: null, //variabile,
    edit: false,
    toDoList: [{'text': this.input, 'edit': this.edit}], //array in cui pusho input
  },
  methods: {
    printodo: function () {
      //al click del bottone pusho l'input nell'array
      if (!this.input) {
        this.toDoList.push('Beato te che non hai nulla da fare');
      } else {
        this.toDoList.push(this.input);
      }
      this.input = ''; //resetto il mio input
    },
    deletetodo: function (i) {
      //al click dell'icona mi cancella il list item
      this.toDoList.splice(i, 1);
    },
    // editodo: function(i) {
    //   this.toDoList[i] =
    // }
  }
})
