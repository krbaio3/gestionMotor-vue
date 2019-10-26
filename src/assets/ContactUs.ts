import { ICard } from '../interfaces/ICard';

export const Contact: ICard[] = [{
    title: 'Company info',
    cardText: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.',
},
{
    title: 'Contact us',
    cardText: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.',
    contact: {
        iconEmail: 'mdi-email',
        iconMarker: 'mdi-map-marker',
        iconPhone: 'mdi-phone',
        email: 'xxxxxxx@gmail.com',
        marker: 'Calle Hierro, Nave, 6, 19170 El Casar, Guadalajara',
        phone: 'xxx xxx xxx / xxx xx xx xx',
    },
}];
