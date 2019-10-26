export interface ICard {
    title: string;
    cardText: string;
    icon?: string;
    opIcon?: string;
    contact?: IContact;
}

interface IContact {
    iconPhone: string;
    phone: string;
    iconMarker: string;
    marker: string;
    iconEmail: string;
    email: string;
}
