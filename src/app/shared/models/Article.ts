export class Article{
    id!:string;          //-   Identifiant unique de l'article 
    author!:string;      //-   l'auteur de l'article, cela fait une référence à la collection utilisateur (on va se servir de l'objectID de l'user)
    content!:string;     //-   Le contenu de l'article
    imageUrl!:string;       //-   Une image de l'article
    date!:Date;        //-   le timestamp de l'article 
    tag!:string[];         //-   un tag définissant l'article (par ex. front, back, php,js,node,react,angular) une catégorie
    likeCount!:number;   //-   Le compteur à chaque fois qu'un utilisateur "like" l'article en question
}