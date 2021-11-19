function _1_décimale () {
    Unité = Math.trunc(Temp_brute)
    Reste = Temp_brute * 10 - Unité * 10
    dixième = Math.trunc(Reste)
}
let Moyenne = 0
let Somme = 0
let M5 = 0
let M4 = 0
let M3 = 0
let M2 = 0
let M1 = 0
let dixième = 0
let Reste = 0
let Temp_brute = 0
let Unité = 0
serial.redirectToUSB()
basic.forever(function () {
    M1 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(10)
    M2 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(10)
    M3 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(10)
    M4 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(10)
    M5 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(10)
    Somme = M1 + (M2 + (M3 + (M4 + M5)))
    Moyenne = Somme / 5
    Temp_brute = Moyenne * -0.0888 + 71.7
    _1_décimale()
    serial.writeLine("" + Unité + "." + dixième + " oC")
    basic.pause(1000)
})
