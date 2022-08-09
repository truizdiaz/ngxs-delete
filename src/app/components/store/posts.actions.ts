import { Post } from "src/app/interfaces/post";

export class AgregarPost {
    static readonly type = '[Post page] AgregarPost';
    constructor(public payload: Post) {}
}

export class RemoverPost {
    static readonly type = '[Post page] RemoverPost';
    constructor(public id: string) {}
}