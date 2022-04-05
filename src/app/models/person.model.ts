export class persons{
    name: string;
    patronus: string;
    yearOfBirth: Number;
    image: string;
    home?: string;

    constructor(name: string,patronus: string,
        yearOfBirth: Number,image: string){

                        this.name = name;
                        this.patronus = patronus;
                        this.yearOfBirth = yearOfBirth;
                        this.image = image;
    
                        

}
}