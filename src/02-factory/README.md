¿Qué problema resuelve Factory?
Evita tener que usar la palabra new directamente por todo el código cuando necesitamos crear objetos. Centraliza la creación en un solo lugar, así no tenemos que decidir qué clase exacta instanciar en cada parte de la aplicación.

¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?
Que si algún día cambia la forma en la que se construye una clase (por ejemplo, si le añadimos un parámetro al constructor), solo tenemos que cambiar ese new en el archivo del Factory, en vez de tener que buscarlo y cambiarlo en todos los archivos donde lo estuviéramos usando.

¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?
Tendríamos que crear la nueva clase Whatsnotificatio y luego ir a la clase notificationfactory a añadir un nuevo case en el swicth para que pueda crear y devolver ese nuevo tipo.

¿Quién tiene la responsabilidad de crear los objetos?
La responsabilidad la tiene únicamente la clase notificationfactory. 

¿Qué ventaja proporciona Factory respecto al acoplamiento?
Hace que el código esté menos acoplado, porque la parte del programa que usa las notificaciones solo necesita conocer la interfaz notification y pedirle al Factory que cree una. No necesita saber que existen las clases emailnotification o pushnotification por debajo.