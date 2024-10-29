export interface ILink {
    title : string;
    url? : string;
    children? : ILink[];
    isVisible? : boolean;
}

//Exemple d'instanciation
// let monLien : ILink = {title : "titre lien", url : "/lien", isVisible : false };
