input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.forever(function () {
    radio.setGroup(1)
    basic.showLeds(`
        # # . . .
        # . # . .
        # . # . .
        # # . . .
        # . # . .
        `)
})
