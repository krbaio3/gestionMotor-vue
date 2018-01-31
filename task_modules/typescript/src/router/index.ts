import vue from 'vue';
import vueRouter from 'vue-router';
import Hello from '@/components/Hello';

vue.use(vueRouter);

export default new vueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
