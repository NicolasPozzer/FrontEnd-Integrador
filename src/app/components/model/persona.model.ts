export class persona{
    id?: number;
    img: String;
    nombre: String;
    apellido: String;
    descripcion: String;


    constructor(img: String, nombre: String, apellido: String, descripcion: String){
        this.img = img;
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
    }
}