# TP_ASECA

El objetivo de este trabajo practico fue realizar diferentes pruebas con el fin de aprender de metodologias tales como tdd, unit testing, e2e testing y swarm testing. Dichas prebas se realizaron en javascript y python, en prisma, appium cypress y locust respectivamente. Las pruebas se realizaron en la api de wish. En este documento explicaremos el estado de cada fase

## TDD simulando la api


## Appium
Al realizar los tests de Appium tuvimos algunos inconvenientes, de los cuales logramos resolver la mayoria. El blocker principal fue que todos los objetos de la aplicacion de Wish tenian que ser llamador por medio del xpath, lo cual no es recomendable ya que dicho path puede variar al correr distintas instancias del test. Al final no logramos generar el assert porque Appium no lograba encontrar los xpaths correspondientes a los botones de la aplicacion

## Cypress
El objetivo de cypress fue realizar testeos en la pagina de wish.com.ar. Estos se basaban en: demostrar que salta un error con un inicio de sesion incorrecto, demostrar que funicona correctamente el buscador y realizar que se ejecuta correctamente la opcion de proceder al pago del carrito. Todas las tareas fueron realizadas en "enter.cy.js", el cual se encuentra en la carpeta "wish". Los otros archivos con tests se mantuvieron en el proyecto para usarse como referencia al trabajar.

## Locust
