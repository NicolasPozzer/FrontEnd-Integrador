export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    sobremi: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcion: string, sobremi: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.sobremi = sobremi;
        this.img = img;
    }
}