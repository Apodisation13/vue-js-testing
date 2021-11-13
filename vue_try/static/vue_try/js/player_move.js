var card_number = null


function player_move() {
  alert('ход игрока, выберите карту')
  this.player_cards_active = true  // теперь можно тыкать на карты игрока
}

function chose_player_card(id) {
  if (this.player_cards_active) {
    card_number = id

    // сюда пойдём только если там есть вообще карта
    if (this.hand[card_number]) {
      alert('УРОН ' + this.hand[card_number].dmg + '  заряды ' + this.hand[card_number].charges)
      this.ai_cards_active = true  // только теперь можно тыкать на карты противника
    }
  }
}


function damage_ai_card(id) {
  if (this.ai_cards_active) {
    let i = id

    if (this.field[i]) {
      // сюда заходим если там есть враг

      alert('ЖИЗНИ ' + this.field[i].hp + '  дамаг ' + this.field[i].dmg + ' до урона')
      this.field[i].hp -= this.hand[card_number].dmg  // нанесли урон и-тому элементу от конкретной карты
      this.hand[card_number].charges -= 1  // вычитаем 1 заряд у карты игрока
      alert('ЖИЗНИ ' + this.field[i].hp + '  дамаг ' + this.field[i].dmg + ' после урона')

      // если враг убит, убираем его с поля
      if (this.field[i].hp <= 0) {
        this.field[i] = ''

        // после убийства, если не осталось ни одного врага, перезагружаем страницу пока что
        is_field_empty(this.field)
      }

      // убираем карту игрока, если в ней не осталось зарядов
      if (this.hand[card_number].charges === 0) {
        this.hand[card_number] = ''
      }

      this.player_cards_active = false  // больше нельзя тыкать в ничьи карты
      this.ai_cards_active = false

      this.player_move_bool = false  // переход хода компу
      this.ai_move_bool = true

    }
  }
}
