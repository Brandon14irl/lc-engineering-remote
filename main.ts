basic.forever(function () {
    radio.setGroup(80)
    led.enable(false)
})
// push to break button up
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        radio.sendNumber(1)
    }
})
// push to break button left
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        radio.sendNumber(2)
    }
})
// on off switch
// 
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        radio.sendNumber(5)
    }
})
// push to break button right
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendNumber(3)
    }
})
// bumper button left
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        radio.sendNumber(6)
    }
})
// push to break button down
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        radio.sendNumber(4)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        radio.sendNumber(7)
    }
})
