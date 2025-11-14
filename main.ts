input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.Y) < 4 && sprite.get(LedSpriteProperty.X) == 4) {
        sprite.set(LedSpriteProperty.X, 0)
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (sprite.get(LedSpriteProperty.Y) == 4 && sprite.get(LedSpriteProperty.X) == 4) {
        sprite.set(LedSpriteProperty.Y, 0)
        sprite.set(LedSpriteProperty.X, 0)
    } else {
        sprite.move(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("SpriteX", sprite.get(LedSpriteProperty.X))
    radio.sendValue("SpriteY", sprite.get(LedSpriteProperty.Y))
})
radio.onReceivedValue(function (name, value) {
    if (name == "SpriteX") {
        BombX = value
    }
    if (name == "SpriteY") {
        BombY = value
    }
    if (BombX == sprite.get(LedSpriteProperty.X) && BombY == sprite.get(LedSpriteProperty.Y)) {
        basic.showString("You lose!")
    }
})
let BombY = 0
let BombX = 0
let sprite: game.LedSprite = null
radio.setGroup(11)
sprite = game.createSprite(0, 0)
basic.showString("Game Start")