function start() {
  alert('расставили противников')
  let enemy1 = new Enemy(8, 20,);
  let enemy2 = new Enemy(3, 7);
  let enemy3 = new Enemy(6, 8);
  let enemy4 = new Enemy(16, 2);
  let enemy5 = new Enemy(2, 28);
  let enemy6 = new Enemy(12, 9);

  let r1 = Math.floor(Math.random() * 11);
  let r2 = Math.floor(Math.random() * 11);
  let r3 = Math.floor(Math.random() * 11);
  let r4 = Math.floor(Math.random() * 11);
  let r5 = Math.floor(Math.random() * 11);
  let r6 = Math.floor(Math.random() * 11);

  app1.$set(app1.field, r1, enemy2)
  app1.$set(app1.field, r2, enemy3)
  app1.$set(app1.field, r3, enemy5)
  app1.$set(app1.field, r4, enemy4)
  app1.$set(app1.field, r5, enemy1)
  app1.$set(app1.field, r6, enemy6)

  let hand1 = new Player(5, 1, 'bronze')
  let hand2 = new Player(15,1, 'gold')
  let hand3 = new Player(4, 2, 'bronze')
  let hand4 = new Player(2, 1, 'bronze')
  let hand5 = new Player(8, 2, 'silver')
  let hand6 = new Player(3, 3, 'bronze')
  let hand = [hand1, hand2, hand3, hand4, hand5, hand6]
  for (let i = 0; i < hand.length; i++) {
    app1.$set(app1.hand, i, hand[i])
  }

  this.beginning = false  // удалить кнопку начала игры

  // вот здесь можно решать кто первый ход, у кого тру - тот и первый ходит
  // this.ai_move_bool = true  // появить кнопку ход компа
  this.player_move_bool = true
}
