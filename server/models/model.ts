
export interface BookDocs{
    _id: string;
    name: string;
}
export interface ChapterDocs{
    _id:string
    chapterName: string;
    book:string;
}

export interface QuoteDocs{
    character:string;
    dialog:string;
    id:string;
    movie:string;
    _id:string;
}

export interface MovieDocs{
academyAwardNominations: number;
academyAwardWins: number;
boxOfficeRevenueInMillions: number;
budgetInMillions: number;
name: string;
rottenTomatoesScore: number;
runtimeInMinutes: number;
_id: string;
}

export interface CharacterDocs{ 
    birth: string;
    death: string;
    gender: string;
    hair: string;
    height: string;
    name: string;
    race: string;
    realm: string;
    spouse: string;
    wikiUrl: string;
    _id: string;
}
