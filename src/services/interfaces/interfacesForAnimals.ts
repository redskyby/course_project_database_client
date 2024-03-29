export interface AnimalInterface {
    id: string;
    name: string;
    species: string;
    gender: string;
    height: number;
    weight: number;
    date: string;
    age: number;
    typeOfFeed: string;
    naturalArea: string;
    cageNum: number;
    offspring: boolean;
    numOffspring: number;
    idMale: number | null;
    idFemale: number | null;
}

export interface FormDatForAddAnimalModal {
    id?: number;
    name: string;
    species: string;
    gender: string;
    height: number;
    weight: number;
    date: string;
    age: number;
    typeOfFeed: string;
    naturalArea: string;
    cageNum: number;
    offspring: boolean;
    numOffSpring: number;
}
