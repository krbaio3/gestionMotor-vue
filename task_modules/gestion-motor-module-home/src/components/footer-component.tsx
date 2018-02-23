import Vue, { VNode } from 'vue';

export const FooterComponent = Vue.extend({
    render(h):  VNode{
        return (
            <h1>Footer Component</h1>
        );
    },
});