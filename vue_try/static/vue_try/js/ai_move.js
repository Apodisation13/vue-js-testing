function ai_move() {
  alert('ход компа')
  for (let i = 0; i < 12; i++) {
    if (app1.field[i]) {

      // ДЛЯ ВРАГОВ КОТОРЫЕ СТОЯТ ВНИЗУ
      if (i < 3) {
        app1.health -= app1.field[i].dmg
        alert('враг внизу нанёс урон')
      }

      // ДЛЯ ОСТАЛЬНЫХ ВРАГОВ
      else {

        // ЕСЛИ У ВРАГА ЕСТЬ ВРАГ ПОД НИМ ВНИЗУ
        if (app1.field[i-3]) {
          app1.health -= app1.field[i].dmg
          alert('враг нанёс урон, потому что ему некуда ходить')
        }

        // ДЛЯ ОСТАЛЬНЫХ, КОМУ ЕСТЬ КУДА ПОХОДИТЬ
        else {
          app1.field[i-3] = app1.field[i]  // типа враг прыгнул на клеточку ниже
          app1.field[i] = ''
          alert('враг походил')
        }

      }
    }
  }
  this.ai_move_bool = false
  this.player_move_bool = true
}
