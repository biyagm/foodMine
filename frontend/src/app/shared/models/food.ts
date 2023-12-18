export class food{
    id!: string; //!shows that it is requried
    name!:string;
    tags?: string[]; //? this shows that it is optional
    price !: number;
    favorite !: boolean;
    imageUrl !: string;
    stars !: number;
    origins!:string[];
    cookTime !:string;
}