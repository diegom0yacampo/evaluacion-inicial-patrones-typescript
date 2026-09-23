¿Qué es una dependencia?
Es un objeto o clase que otra clase necesita obligatoriamente para poder funcionar o hacer su trabajo. Por ejemplo, un ServicioUsuario necesita un ServicioNotificacion para mandar correos; pues ese notificador es su dependencia.

¿Qué significa inyectar una dependencia?
Significa que en lugar de que la clase cree sus propias dependencias por dentro (haciendo un new), se las pasamos ya creadas desde fuera, normalmente a través del constructor.

¿Qué diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
Si usas new por dentro, tu clase está atada a esa implementación exacta y es ella quien controla cuándo se crea. Si la recibes por el constructor, la clase de fuera decide qué objeto exacto pasarte, dándote mucha más flexibilidad.

¿Qué problema genera un alto acoplamiento?
No lo se

¿Qué ventaja ¿Qué ventaja proporciona Dependency Injection para realizar pruebas?
Dependency Injection para realizar pruebas?
Que al hacer tests unitarios, en vez de inyectarle el servicio real (que a lo mejor manda emails de verdad o guarda en base de datos).

¿Por qué este concepto es especialmente importante en frameworks como NestJS?
Porque NestJS funciona internamente con un contenedor de inyección de dependencias. Nosotros solo declaramos qué servicios necesita cada controlador en el constructor, y NestJS se encarga automáticamente de instanciar y pasarle esas dependencias por debajo, sin que nosotros tengamos que hacer los new a mano.