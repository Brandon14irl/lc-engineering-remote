radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P0.setAngle(71)
    }
})
basic.forever(function () {
    radio.setGroup(1)
    radio.setTransmitPower(1)
    radio.setFrequencyBand(10)
})
