basic.forever(function () {
    radio.setGroup(1)
    radio.setTransmitPower(6)
    radio.setFrequencyBand(80)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendNumber(0)
    }
})
