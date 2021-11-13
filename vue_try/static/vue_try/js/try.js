class someClass {
    constructor() {
    }
}


function some_func() {

}




// function move() {
//
//   for (let i = 0; i < 3; i++) {
//     if (FIELD[i]) {
//       this.health -= FIELD[i].dmg
//       alert('враг внизу нанёс урон')
//     }
//
//   }
//   for (let i = 3; i < 12; i++) {
//     if (FIELD[i]) {
//       if (FIELD[i-3]) {
//         alert('врагу некуда ходить и он нанёс урон')
//         this.health -= FIELD[i].dmg
//       }
//       else {
//         let enemy_id = FIELD[i].id
//         // alert(enemy_id)
//         FIELD[i-3] = enemy_list[enemy_id]
//         FIELD[i] = ''
//
//         // FIELD[i-3] = FIELD[i]
//         // ВОТ ЗДЕСЬ ХУЙНЯ
//         app1.$set(app1.field, i-3, FIELD[i-3])
//         // FIELD[i] = ''
//         app1.$set(app1.field, i, '')
//         alert('враг походил')
//       }
//     }
//   }
//   // this.field = FIELD
//   // alert(this.health)
// }
//
//
// b = document.getElementById('bp1')
// c = document.getElementById('bp2')
// d = document.getElementById('bp3')
// e = document.getElementById('bp4')
// f = document.getElementById('bp5')
// b.addEventListener("click", function () {show(b)})
// c.addEventListener("click", function () {show(c)})
// d.addEventListener("click", function () {show(d)})
// e.addEventListener("click", function () {show(e)})
// f.addEventListener("click", function () {show(f)})
//
// function show(name) {
//   let params = name.innerHTML.split('<br>')
//   dmg = params[0]
//   charges = params[1]
//
//   e2 = document.getElementById('b2')
//   e2.addEventListener("click", function () {show_enemy(e2)})
//   // e1 = document.getElementById('b1')
//   // e1.addEventListener("click", function () {show_enemy(e1)})
//
//   function show_enemy(enemy_id) {
//     // ТЕПЕРЬ ВОТ ЗДЕСЬ ХУЙНЯ
//     let idd = enemy_id.id.slice(1)
//     alert(idd)  // номер кнопки сука блять типа у2, значит останется 2
//     if (FIELD[idd]) {
//       let e_params = enemy_id.innerHTML.split('<br>')
//       let e_hp = e_params[0]
//       let e_dmg = e_params[1]
//       alert(e_hp)
//       alert(e_dmg)
//
//       let e_id = FIELD[idd]
//       // alert(e_id)
//
//       enemy_list[e_id].hp = e_hp - e_dmg
//
//       if (enemy_list[e_id].hp <= 0) {
//         // enemy_list.pop(enemy_list[e_id])
//
//         app1.$set(app1.field, idd, '')
//         alert('враг убит')
//       } else {
//         // FIELD[2] = enemy3
//         app1.$set(app1.field, idd, enemy_list[e_id])
//       }
//       // app1.$set(app1.field, idd, enemy_list[e_id] )
//     }
//     // this.field = FIELD
//   }
// }
//
//
// function player_move() {
//   alert('ход игрока')
//
//   let p1 = document.getElementById('p1')
//   p1.addEventListener("click", function () {show(p1)})
//   let p2 = document.getElementById('p2')
//   p2.addEventListener("click", function () {show(p2)})
//   let p3 = document.getElementById('p3')
//   p3.addEventListener("click", function () {show(p3)})
//   let p4 = document.getElementById('p4')
//   p4.addEventListener("click", function () {show(p4)})
//   let p5 = document.getElementById('p5')
//   p5.addEventListener("click", function () {show(p5)})
//
//   function show(name) {
//     name.removeEventListener('click', player_move)
//     let params = name.innerHTML.split('<br>')
//     let dmg = params[0]
//     let charges = params[1]
//     alert('УРОН ' + dmg + '   заряды ' + charges)
//
//     for (let i = 0; i < 12; i++) {
//       let f2 = document.getElementById(`f${i}`)
//       f2.addEventListener("click", function () {damage_enemy(f2)})
//     }
//
//     function damage_enemy(enemy_id) {
//       let field_i = enemy_id.id.slice(1)
//       alert(field_i)
//
//     }
//   }

  // this.ai_move_bool = true
  // this.player_move_bool = false
// }
