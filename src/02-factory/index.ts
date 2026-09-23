interface Notification {
    send(mensaje: string): void;
}

class EmailNotification implements Notification {
    send(mensaje: string): void {
        console.log("Enviando un email que dice: " + mensaje);
    }
}

class PushNotification implements Notification {
    send(mensaje: string): void {
        console.log("Enviando notificacion push: " + mensaje);
    }
}

class SmsNotification implements Notification {
    send(mensaje: string): void {
        console.log("Enviando un SMS con el texto: " + mensaje);
    }
}

class NotificationFactory {
    static create(tipo: string): Notification {
        if (tipo === "email") {
            return new EmailNotification();
        } else if (tipo === "push") {
            return new PushNotification();
        } else if (tipo === "sms") {
            return new SmsNotification();
        } else {
            throw new Error("Error: Ese tipo de notificacion no existe");
        }
    }
}

//Comprobar
const miEmail = NotificationFactory.create("email");
miEmail.send("Hola, Tienes un mensaje nuevo.");

const miPush = NotificationFactory.create("push");
miPush.send("Bateria baja en el dispositivo.");