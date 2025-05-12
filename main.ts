radio.setGroup(21);

basic.forever(function () {
    let x = input.acceleration(Dimension.X);
    let y = input.acceleration(Dimension.Y);
    radio.sendValue("x", x);
    radio.sendValue("y", y);

    basic.pause(100);
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop");
})