import InicioComponent from './components/inicio.component.vue';
import UsuariosComponent from './components/usuarios.component.vue';
import InfoUsuarioComponent from './components/infoUsuario.component.vue';

export const rutas = [
  {path:'', component:InicioComponent},
  {path:'/usuarios', component:UsuariosComponent, children:[
    {path: ':id', component: InfoUsuarioComponent},
  ]},
];
