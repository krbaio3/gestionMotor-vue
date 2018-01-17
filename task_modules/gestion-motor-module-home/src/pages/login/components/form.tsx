import Vue, { VNode } from 'vue';

export const FormComponent = Vue.extend({
    render(h): VNode {
        return (
            <div class="panel-body">
                <form role="form">
                    <div class="form-group">
                        <input type="mail" class="form-control" placeholder="e-mail" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="password" />
                    </div>
                    <router-link
                    to="/home" 
                    class="btn btn-lg btn-success btn-block">Login</router-link>
                </form>
            </div>
        );
    }
});