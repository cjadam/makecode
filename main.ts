basic.showIcon(IconNames.Heart)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
music.setVolume(62)
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
basic.forever(function on_forever() {
    if (SuperBitV2_Digital.Ultrasonic(SuperBitV2_Digital.mwDigitalNum.P10P9) < 32) {
        basic.showArrow(ArrowNames.South)
        SuperBitV2.MotorRunDual(SuperBitV2.enMotors.M1, -152, SuperBitV2.enMotors.M3, -177)
        basic.pause(250)
        SuperBitV2.MotorRunDual(SuperBitV2.enMotors.M1, -144, SuperBitV2.enMotors.M3, 144)
    } else {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
        SuperBit.RGB_Program().show()
        basic.showArrow(ArrowNames.North)
        SuperBitV2.MotorRunDual(SuperBitV2.enMotors.M1, 152, SuperBitV2.enMotors.M3, 193)
    }
    
})
