input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(8)
})
basic.forever(function () {
    radio.setGroup(80)
    led.enable(true)
})
// forward
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 1) {
        radio.sendNumber(1)
    }
})
// reverse
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 1) {
        radio.sendNumber(2)
    }
})
// up speed
// 
// 
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) == 1) {
    	
    }
})
// down
// 
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) == 1) {
    	
    }
})
