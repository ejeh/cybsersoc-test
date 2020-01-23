
HotKeySet('m', 'TurnOff')
HotKeySet('x', 'ExitProgram')


While 1
	Sleep(50)
WEnd


Func TurnOff()
	Run(@SystemDir & "\shutdown.exe /f /s /t 10", "", @SW_MAXIMIZE)
EndFunc

Func ExitProgram()
	Exit
EndFunc