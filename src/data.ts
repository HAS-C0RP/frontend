import { Article } from "./app/shared/models/Article";

export const sample_article: Article[] = [
    {
        id:'1',
        title:'html technique',
        author:'jean-michelle lesbabine',
        content:'blablabla',
        imageUrl:'assets/img-1.jpg',
        date: new Date('2019-11-05T15:30:00Z'),
        tag:['tech','dev'],
        likeCount:0,
    },
    {
        id:'2',
        title:'angula et son impact',
        author:'Gerard menvuca',
        content:'chingchangtopochingzang',
        imageUrl:'assets/img-2.jpg',
        date: new Date('2019-09-08T10:30:00Z'),
        tag:['tech','dev','html'],
        likeCount:10,
    },
    {
        id:'3',
        title:'symfony le chef dorchestre',
        author:'Gaara jabyte',
        content:'sablesableselsalble',
        imageUrl:'assets/img-3.jpg',
        date: new Date('2020-07-15T12:37:00Z'),
        tag:['tech','css'],
        likeCount:0,
    },
]