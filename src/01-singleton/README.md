¿Qué problema intenta resolver Singleton?
Un Singleton sirve para saber seguro de que solo se crea un único objeto de una clase en todo el programa, dándonos un punto de acceso global a él.

¿Por qué suele utilizarse un constructor private?
Para evitar que se puedan crear objetos desde fuera. Si dejamos el constructor público, cualquiera podría hacer un new MiClase().

¿Cómo se obtiene una instancia de la clase?
A través de un método estático.

¿Qué ocurriría si pudiéramos utilizar new libremente?
Que acabaríamos con un montón de objetos distintos en memoria y cada uno tendría su propio estado. Perderíamos la ventaja de tener una única fuente de verdad.

Pon un ejemplo real donde utilizarías Singleton.
Lo usaría típico para gestionar la conexión a una base de datos. No tiene sentido estar abriendo conexiones nuevas por cada petición; es mejor tener una única instancia que mantenga la conexión viva para toda la app.

¿Qué inconveniente puede tener abusar de Singleton?
Que al final es casi como usar variables globales disfrazadas. Hace que el código esté muy acoplado y complica bastante los tests unitarios, porque al compartir el mismo estado entre las pruebas, un test puede ensuciar los datos de otro.

