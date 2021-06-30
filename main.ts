function strget (strlen: number) {
    chlist = "0123456789abcdefghijklmnopqrstuvwxyz "
    strlist = [""]
    basic.showNumber(strlen)
    for (let index = 0; index < strlen; index++) {
        ch = 0
        basic.showString("" + (chlist[ch]))
        while (!(input.buttonIsPressed(Button.B))) {
            while (input.buttonIsPressed(Button.A)) {
                ch += 1
                ch = ch % 37
                basic.showString("" + (chlist[ch]))
            }
            strlist.push(chlist[ch])
        }
    }
    return strlist
}
let ch = 0
let strlist: string[] = []
let chlist = ""
basic.showString("" + (strget(1)))
