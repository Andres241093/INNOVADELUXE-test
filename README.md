# Prueba de Angular - INNOVADELUXE

# Instrucciones para desplegar el proyecto

1. Clonar el proyecto, para ello usar el siguiente comando: `git clone https://github.com/Andres241093/INNOVADELUXE-test.git`.
2. Dirigirse a la carpeta del proyecto. Comando: `cd INNOVADELUXE-test`.
3. Instalar dependencias mediante `npm install` o `yarn install`.
4. Transpilar la libreria 'test' para su uso, para ello ejecutar el comando: `ng build test`
5. Ejecutar el servidor. Comando: `ng serve`.
6. Abrir el siguiente enlace en el navegador: `http://localhost:4200`.

# Uso de la librería 'test'

Etiqueta: `<lib-test></lib-test>`.

La etiqueta consta de 3 propiedades: 

1. `timer`.
2. `stepper` (Wizard).
3. `calendar`.

Las propiedades se manejan mediante un `@Input component: string`.

Ejemplo:

`<lib-test [component]="'stepper'"></lib-test>`.

## Componente 'Timer'

Para usar el componente `timer` se requiere una propiedad adicional llamada `typeTimer`, la cual puede tomar tres valores:

1. `clock`: Muestra la hora actual.
2. `chronometer`:Muestra un cronómetro con los botones 'Parar' y 'Reiniciar'.
3. `countdown`: Muestra una cuenta regresiva empezando desde 100 con los botones 'Parar' y 'Reiniciar'.

Las propiedades se manejan mediante un `@Input typeTimer: string`.

Ejemplo:

`<lib-test [component]="'timer'" [typeTimer]="'clock'"></lib-test>`.


## Componente 'Stepper' (Wizard)

Muestra un stepper (Wizard) con los botones 'Anterior','Inicio','Siguiente' y 'Finalizar'

Para usar el componente `stepper`, se debe pasar el valor `stepper` como propiedad de `<lib-test></lib-test>`.

Ejemplo:

`<lib-test [component]="'stepper'"></lib-test>`.

## Componente 'Calendar'

Muestra un calendario con la fecha actual por defecto, al detectar un cambio emite el mensaje 'Fecha cambiada' como evento.

Para usar el componente `calendar`, se debe pasar el valor `calendar` como propiedad de `<lib-test></lib-test>`.

Ejemplo:

`<lib-test [component]="'calendar'"></lib-test>`.


## Herramientas utilizadas

1. Angular v11.0.7.
2. Node v12.18.3.
3. Angular CLI v11.0.6.
