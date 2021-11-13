// Uncaught SyntaxError: import declarations may only appear at top level of a module
// import { someClass, some_const } from '/home/james/PycharmProjects/vuejs_testing/vue_try/static/vue_try/js/const_and_classes.js'


// HEALTH = document.getElementById('health').innerHTML
// вот так брать параметр из Джанго, с бэкэнда, а вот как достать объект из БД - пока хз


var app1 = new Vue({
  delimiters: ['[[', ']]'],
  el: '#field',
  data: {
    field: FIELD,
    health: HEALTH,
    hand: HAND,
    beginning: true,  // переменная начала игры, один раз меняется и всё
    ai_move_bool: false,  // переменная хода компа
    player_move_bool: false,  // переменная хода игрока
    player_cards_active: false,  // переменная что карты игрока активны
    ai_cards_active: false,  // переменная что карты игрока активны
  },
  methods: {
    start,  // описывает стартовые расклады
    ai_move,
    player_move,
    chose_player_card,
    damage_ai_card
  }
})


// первой вызывется функция start
