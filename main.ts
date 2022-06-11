input.onButtonPressed(Button.A, function () {
    basic.showNumber(pression)
})
let pression = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()
pins.servoWritePin(AnalogPin.P2, 180)
basic.forever(function () {
    pression = pins.analogReadPin(AnalogPin.P1)
    if (pression > 400) {
        strip.showRainbow(1, 360)
        basic.showNumber(5)
        for (let index = 0; index < 16; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    } else {
        strip.clear()
        strip.show()
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 120)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(500)
})
