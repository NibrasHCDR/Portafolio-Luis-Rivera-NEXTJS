interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}


export interface MisProyectos extends SanityBody{
    _type: "experience";
    cargo: string;
    image: string;
    fechainicio: string;
    fechafin: string;
    isCurrentlyWorkingHere: boolean;
    titulo: string;
    descripcion: string[];
    technologies: string[];
    linkto: string;

}