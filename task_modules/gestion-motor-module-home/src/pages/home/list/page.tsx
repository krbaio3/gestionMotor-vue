import Vue, { VNode } from 'vue';

export const HomePage = Vue.extend({
    render(h):  VNode{
        return (
            <h1>Home Page</h1>
        );
    },
});