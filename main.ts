radio.setGroup(11)

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    // Send x and y as a single string separated by a comma
    radio.sendString(`${x},${y}`)

    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop")
})