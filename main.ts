radio.setGroup(1);

basic.forever(function () {
    let x = input.acceleration(Dimension.X); //left,right
    let y = input.acceleration(Dimension.Y); //forward,backwards
    radio.sendValue("x", x);
    radio.sendValue("y", y);

    basic.pause(100);
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop");
})