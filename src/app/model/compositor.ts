export class Compositor{

    codigo:number;
    nombre:string;
    apellidos:string;
    nacionalidad:string;
    fechaNacimiento:Date;
    fechaDefuncion:Date;
    biografia:string;

    constructor(codigo:number, nombre:string, apellidos:string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}