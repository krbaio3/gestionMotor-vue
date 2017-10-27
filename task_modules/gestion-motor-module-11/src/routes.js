import InicioComponent from'./components/inicio.component.vue';
import UsuariosComponent from'./components/usuarios.component.vue';

export const rutas = [
  {path:'', component:InicioComponent},
  {path:'/usuarios', component:UsuariosComponent}
];
