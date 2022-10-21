export interface IEvent{
    id:number;
    name:string;
    date: Date;
    time: string;
    price: number;
    location?:{
        address:string
        city:string
        country: string
    }
    onLineUrl?:string;
}