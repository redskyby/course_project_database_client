export interface AnimalInterface {
    id: string;
    name: string;
    species: string;
    gender: string;
    height: string;
    weight: string;
    date: string;
    age: number;
    typeOfFeed: string;
    naturalArea: string;
    cageNum: number;
    offspring: number;
    numOffspring: number;
    idMale: number | null;
    idFemale: number | null;
}

export interface FormDatForAddAnimalModal {
    name: string;
    species: string;
    gender: string;
    height: string;
    weight: string;
    date: string;
    age: number;
    typeOfFeed: string;
    naturalArea: string;
    cageNum: number;
    offspring: number;
    numOffSpring: number;
}
