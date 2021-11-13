// проверяем всё поле, есть ли там хоть один живой враг, если не одного - возвращаем тру
function is_field_empty(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[i]) return
    }
    alert('ВЫ ПОБЕДИЛИ!')
    document.location.reload()
}


// проверяем жизни игрока
function is_health_zero(health) {
    if (health === 0) {
        alert('ВЫ ПРОИГРАЛИ, СОРРИ :(')
        document.location.reload()
    }
}
