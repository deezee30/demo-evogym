export enum NavPage {
    Home = "home",
    Benefits = "benefits",
    Classes = "our-classes",
    Contact = "contact-us",
};

export type SetNavPage = (selectedPage: NavPage) => void;

export interface BenefitModel {
    icon: JSX.Element,
    title: string,
    description: string,
};

export interface ClassModel {
    name: string,
    description?: string,
    image: string,
};