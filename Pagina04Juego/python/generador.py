import re

file = input('Ingrese el nombre del archivo: ')
handle = open(file, encoding="utf-8")

print("Generando código...")

btn_p1 = '<button class="btn btn-primary" onclick="opc_'
btn_p2 = '()">'
btn_p3 = '</button>'

fnct_p1 = '`}function opc_'
fnct_p2 = '(){'
fnct_p3 = 'historia.innerHTML = `'

parr_p1 = '<p>'
parr_p2 = '</p>'

for line in handle:
    line = line.rstrip()
    if line.startswith('Si ') or line.startswith('Pasa a la '):
        opciones = re.findall('^Si ([^ ].+),', line)
        botones = re.findall('[0-9]+', line)
        print(btn_p1,end="")
        print(*botones,sep="",end="")
        print(btn_p2,end="")
        if len(opciones) < 1:
            print('Continúa...',end="")
        else:
            print(*opciones,sep="",end="")
        print(btn_p3)
    elif line.startswith('Fin'):
        print(btn_p1+'finish'+btn_p2+'Fin'+btn_p3)
    elif line.isdigit():
        print(fnct_p1,end="")
        print(line,end="")
        print(fnct_p2)
        print(fnct_p3,end="")
    elif not line.isdigit():
        print(parr_p1,end="")
        print(line,end="")
        print(parr_p2)
