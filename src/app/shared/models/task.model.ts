
export class Task
{
    public id:number;
    public header:string;
    public description:string;
    public date:Date;
    public createDate:Date;

    constructor(header:string, description:string, date:Date, createDate:Date, id?:number){
        id;
        header;
        description;
        date;
        createDate;
    }
}