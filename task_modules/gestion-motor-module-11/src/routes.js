import InicioComponent from './components/inicio.component.vue';
import UsuariosComponent from './components/usuarios.component.vue';
import InfoUsuarioComponent from './components/infoUsuario.component.vue';

export const rutas = [
  {path:'', component:InicioComponent},
  {path:'/usuarios', component:UsuariosComponent, name: 'usuarios'},
  {path: ':id', component: InfoUsuarioComponent, name:'infoUsuario'},
  {path: '/users', redirect: '/usuarios'},
  {path: '*', redirect: '/'},
];
