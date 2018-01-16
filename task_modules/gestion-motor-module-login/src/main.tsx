import Vue, { VNode } from 'vue';
import { LoginPage } from "./pages/login";

new Vue({
  el: '#root',
  render(h): VNode {
    return (
      <LoginPage />
    );
  },
})
