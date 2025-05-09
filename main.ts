let y = 0
let x = 0
radio.setGroup(11)
basic.forever(function () {

    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    basic.pause(100)
})
