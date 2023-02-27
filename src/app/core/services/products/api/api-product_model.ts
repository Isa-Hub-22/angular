export interface ApiProduct {
    name: string;
    createdAt?: string;
    description: string;
    price: string;
    img: string;
    color: string;
    id: string;
    myProduct?: Boolean;
}

export interface ApiAuthor {
    name: string;
    id: string;
}