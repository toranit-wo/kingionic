import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Story{
    id:number;
    storypic:string;
    title : string;
    content: string;
    likevalue:number;
    commentlist:Array<string>;

    constructor(id,s,t,c,l,com){
        this.id=id;
        this.storypic=s;
        this.title=t;
        this.content=c;
        this.likevalue=l
        this.commentlist = new Array();
    }
}   