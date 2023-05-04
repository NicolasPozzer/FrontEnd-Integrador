export class Experiencia {
    id?: number;
    nombreE: string;
    iniciO: string;
    fiN: string;
    marcA: string;
    descripcionE: string;

    constructor(nombreE: string, iniciO: string, fiN: string, marcA: string, descripcionE: string){
        this.nombreE = nombreE;
        this.iniciO = iniciO;
        this.fiN = fiN;
        this.marcA = marcA;
        this.descripcionE = descripcionE;
    }


}
