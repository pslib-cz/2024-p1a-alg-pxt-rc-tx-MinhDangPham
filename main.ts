
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

radio.setGroup(61)

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    radio.sendString(`${x},${y}`)

    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop")
})

