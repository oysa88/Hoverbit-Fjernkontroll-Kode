input.onButtonPressed(Button.A, function () {
    Throttle += -10
    if (Throttle < 0) {
        Throttle = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    Throttle = 0
    AvPå = 0
})
input.onButtonPressed(Button.AB, function () {
    if (AvPå) {
        AvPå = 0
    } else {
        AvPå = 1
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    Throttle += 10
    if (Throttle > 100) {
        Throttle = 100
    }
})
let AvPå = 0
let Throttle = 0
let Radiogruppe = 1
basic.showNumber(Radiogruppe)
radio.setGroup(Radiogruppe)
basic.forever(function () {
    let Roll = 0
    Throttle = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (AvPå) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(Throttle, 0, 100, 4, 0))
    led.plot(Math.map(Roll, -45, 45, 0, 4), 2)
    radio.sendValue("A", AvPå)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
})
