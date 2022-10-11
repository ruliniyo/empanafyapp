import { Compositor }               from "./compositor";
import { Genero }                   from "./genero";
import { Interprete }               from "./interprete";

export class Cancion{

    ismn:string;
    titulo:string;
    fechaCreacion:Date;
    interprete:Interprete;
    compositor:Compositor;
    genero:Genero;
    explicita:boolean;
    instrumental:boolean;
    puntuacion:number;
    duracion:number;
    observaciones:number;

}