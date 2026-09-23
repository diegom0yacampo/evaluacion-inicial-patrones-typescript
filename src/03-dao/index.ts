interface Usuario {
    id: number;
    nombre: string;
}

class UsuarioDAO {
    // Array temporal
    private usuarios: Usuario[] = [];

    selectAll(): Usuario[] {
        console.log("Ejecutando: SELECT * FROM usuarios");
        return this.usuarios;
    }

    selectById(id: number): Usuario | undefined {
        console.log("Ejecutando: SELECT * FROM usuarios WHERE id = " + id);
        return this.usuarios.find(u => u.id === id);
    }

    insert(usuario: Usuario): void {
        console.log("Ejecutando: INSERT INTO usuarios VALUES (" + usuario.id + ", '" + usuario.nombre + "')");
        this.usuarios.push(usuario);
    }

    update(usuario: Usuario): void {
        console.log("Ejecutando: UPDATE usuarios SET nombre = '" + usuario.nombre + "' WHERE id = " + usuario.id);
        const index = this.usuarios.findIndex(u => u.id === usuario.id);
        
        if (index !== -1) {
            this.usuarios[index] = usuario;
        } else {
            console.log("No se encontro el usuario para actualizar");
        }
    }

    delete(id: number): void {
        console.log("Ejecutando: DELETE FROM usuarios WHERE id = " + id);
        this.usuarios = this.usuarios.filter(u => u.id !== id);
    }
}

//Comprobar
const dao = new UsuarioDAO();

dao.insert({ id: 1, nombre: "Diego Moya" });
dao.insert({ id: 2, nombre: "Alfredo Gutierrez" });

console.log(dao.selectAll());

dao.update({ id: 2, nombre: "Pepe Luis" });

console.log(dao.selectById(1));

dao.delete(2);
console.log(dao.selectAll());