input.onButtonPressed(Button.A, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    shell = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shell.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (enemy.isTouching(shell)) {
            enemy.delete()
            shell.delete()
            game.addScore(1)
        }
    }
    shell.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let enemy: game.LedSprite = null
let shell: game.LedSprite = null
let ship: game.LedSprite = null
game.setScore(0)
ship = game.createSprite(2, 4)
basic.forever(function () {
    enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (enemy.isTouching(ship)) {
            game.gameOver()
        } else if (!(enemy.isTouching(ship)) && enemy.isTouchingEdge()) {
            enemy.delete()
        } else if (game.score() == 10) {
            basic.showString("+1 win")
            game.gameOver()
        }
    }
})
