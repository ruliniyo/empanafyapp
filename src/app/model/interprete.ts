export class Interprete{

    codigo:number;
    nombre:string;
    apellidos:string;
    nacionalidad:string;
    fechaNacimiento:Date;
    fechaDefuncion:Date;

    constructor(codigo:number, nombre:string, apellidos:string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

}