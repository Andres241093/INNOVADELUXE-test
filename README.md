# Prueba INNOVADELUXE

## Instrucciones para desplegar el proyecto

1. Clonar el proyecto, para ello usar el siguiente comando: `git clone https://github.com/Andres241093/INNOVADELUXE-test.git`.
2. Dirigirse a la carpeta del proyecto. Comando: `cd INNOVADELUXE-test`.
3. Instalar dependencias mediante `npm install` o `yarn install`.
4. Ejecutar el servidor. Comando: `ng serve`.
5. Abrir el siguiente enlace en el navegador: `http://localhost:4200`.

## Uso del componente 'Timer'

@Input() type: string

valores que puede tomar el input: `clock`,`chronometer` y `countdown`

1. Clock: Muestra la hora actual.
2. Chronometer: Muestra un cronómetro con los botones 'Parar' y 'Reiniciar'.
3. Countdown: Muestra una cuenta regresiva empezando desde 100 con los botones 'Parar' y 'Reiniciar'.

## Uso de otros componentes

1. `<app-stepper></app-stepper>`: Muestra un stepper (Wizard) con los botones 'Anterior','Inicio','Siguiente' y 'Finalizar'.
2. `<app-father-calendar></app-father-calendar>`: Muestra un calendario con la fecha actual por defecto, al detectar un cambio emite un evento al componente padre 'father-calendar'.

## Herramientas utilizadas

1. Angular v11.0.7.
2. Node v12.18.3.
3. Angular CLI v11.0.6.
