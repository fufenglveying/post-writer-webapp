export type NavItem = {
title:string;
href:string;
disabled?:boolean
    }

export type SiteConfig = {
    name:string;
    description;
    url:string;
    ogImage:string;
    links:{
        x:string;
        github:string;
    }
}

export type MarketingConfig = {
    mainNav:NavItem[];
}