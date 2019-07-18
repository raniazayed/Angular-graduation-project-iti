export class Message {
    constructor(
        public Id:number,
        public senderId:number,
        public recieverId:number,
        public date:Date,
        public message:string,
    ){}
}
