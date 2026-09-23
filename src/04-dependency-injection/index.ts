//clase inyectada la dependencia
class ServicioNotificacion {
    enviar(mensaje: string): void {
        console.log("Enviando mensaje al usuario: " + mensaje);
    }
}

// Esta es la clase principal
class ServicioUsuario {
    constructor(private servicioNotificacion: ServicioNotificacion) {}

    registrarUsuario(nombre: string): void {
        console.log("Registrando en la base de datos al usuario: " + nombre);
        
        this.servicioNotificacion.enviar("Bienvenido, " + nombre);
    }
}

//Comprobar
const notificador = new ServicioNotificacion();
const miServicioUsuario = new ServicioUsuario(notificador);
miServicioUsuario.registrarUsuario("Carlos");