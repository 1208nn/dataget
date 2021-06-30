def strget(strlen: number):
    chlist='0123456789abcdefghijklmnopqrstuvwxyz '
    strlist=['']
    basic.show_number(strlen)
    for index in range(strlen):
        ch=0
        basic.show_string(chlist[ch])
        while not (input.button_is_pressed(Button.B)):
            while input.button_is_pressed(Button.A): 
                ch += 1
                ch = ch % 37
                basic.show_string(chlist[ch])
            strlist.push(chlist[ch])