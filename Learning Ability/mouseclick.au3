Global $cords
Send('#d')
AutoItSetOption("MouseCoordMode", 0)

WinWait('[Class:Shell_TrayWnd]')
WinActivate('[Class:Shell_TrayWnd]')

$cords = MouseMove(24, 24, 0)

Sleep(2000)

MouseClick('menu', $cords, 1)

Sleep(5000)

Send('{DOWN 17}')

Sleep(5000)

Send('{ENTER}')

Sleep(5000)


Send('{DOWN 2}')


Sleep(5000)

Send('{ENTER}')




