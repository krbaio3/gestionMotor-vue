import Vue, { VNode } from 'vue';
import { HeaderComponent, FooterComponent } from '../../../components';

export const HomePage = Vue.extend({
    render(h): VNode {
        return (
            <div>
                <HeaderComponent />
                <button>Vehiculos</button>
                <button>Clientes</button>
                <button>Orden Reparacion</button>
                <button>Facturas</button>
                <FooterComponent />
            </div>
        );
    },
});