'use strict';

export class Usuario {
    constructor(nombre, correo, clave, edad, pais, mensaje, genero, condiciones) {
        this.nombre = nombre || '';
        this.correo = correo || '';
        this.clave = clave || '';
        this.edad = edad || '';
        this.pais = pais || 'España';
        this.mensaje = mensaje || '';
        this.genero = genero || 'hombre';
        this.condiciones = condiciones || [];
    }

    setUsuario(object) {
        this.nombre = object.nombre || '';
        this.correo = object.correo || '';
        this.clave = object.clave || '';
        this.edad = object.edad || '';
        this.pais = object.pais || 'España';
        this.mensaje = object.mensaje || '';
        this.genero = object.genero || 'hombre';
        this.condiciones = object.condiciones || [];
    }
    getUsuario() {
        return {
            nombre : this.nombre,
            correo : this.correo,
            clave : this.clave,
            edad : this.edad,
            pais : this.pais,
            mensaje : this.mensaje,
            genero : this.genero,
            condiciones : this.condiciones,
        };
    }
}