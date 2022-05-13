let Motor_Forward = 0
let Motor_Backward = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 20) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # . .
            . . . . .
            . # . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(20)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(21)
})
basic.forever(function () {
    radio.setGroup(1)
    radio.setTransmitPower(6)
    radio.setFrequencyBand(80)
    Motor_Forward = 1
    Motor_Backward = 2
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == Motor_Forward) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == Motor_Backward) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendNumber(0)
    }
})
