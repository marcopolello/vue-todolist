// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
var app = new Vue ({
  el: '#app',
  data: {
    input: '', //variabile,
    array: [], //array in cui pusho input
  },
  methods: {
    printodo: function () {
      //al click del bottone pusho l'input nell'array
      this.array.push(this.input);
    }
  }
})
