export class Vocabulary {
    id!: number;
    name!: string;
    definition!: string;
    chapterId!: number;
    booksId!: number; 

    constructor(input: object){
        Object.assign(input);
    }
}
