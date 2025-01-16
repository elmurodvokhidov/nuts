declare interface Link {
    title: {
        eng: string,
        uz: string,
    },
    url: string,
}

declare interface Product {
    _id: string;
    title: string;
    description: string;
    imgUrl: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}