interface Subtype {
    name: string;
    code: string;
}

interface ExtraSubtype {
    name: string;
    types: Subtype[]
}

export interface ProductInfo {
    name: string;
    description: string;
    previewUrl: string;
    expandColor: string;
    url: string;
    extra?: ExtraSubtype;
    features?: string[];
    descriptionFull?: string;
}