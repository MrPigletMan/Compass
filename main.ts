input.onButtonPressed(Button.A, function () {
    Start = 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Start = 0
})
let Start = 0
Start = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (0 == Start) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . . . #
            . # # # .
            `)
    }
    if (1 == Start) {
        if (input.compassHeading() >= 337.5 || input.compassHeading() <= 22.5) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 22.5 && input.compassHeading() <= 67.5) {
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
        }
        if (input.compassHeading() >= 67.5 && input.compassHeading() <= 112.5) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 112.5 && input.compassHeading() <= 157.5) {
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
        }
        if (input.compassHeading() >= 157.5 && input.compassHeading() <= 202.5) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 202.5 && input.compassHeading() <= 247.5) {
            basic.showLeds(`
                . . . . #
                # . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
        }
        if (input.compassHeading() >= 247.5 && input.compassHeading() <= 292.5) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 292.5 && input.compassHeading() <= 337.5) {
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
        }
    }
})
