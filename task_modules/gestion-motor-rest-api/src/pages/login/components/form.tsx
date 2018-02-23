import Vue, { VNode, PropOptions } from 'vue';
import { LoginEntity } from '../viewModel';

interface Props {
    loginEntity: PropOptions<LoginEntity>
    updateLogin: PropOptions<(login: string, password: string) => void>;
    loginRequest: PropOptions<() => void>;
}

export const FormComponent = Vue.extend({
    render(h): VNode {
        return (
            <div class="panel-body">
                <form role="form">
                    <div class="form-group">
                        <input type="mail"
                            class="form-control"
                            placeholder="e-mail"
                            value={this.loginEntity.login}
                            onInput={(e) => this.updateLogin(e.target.value, this.loginEntity.password)}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            placeholder="password"
                            type="password"
                            value={this.loginEntity.password}
                            onInput={(e) => this.updateLogin(this.loginEntity.login, e.target.value)}
                        />
                    </div>

                    <button class="btn btn-lg btn-success btn-block"
                        onClick={(e) => {
                            e.preventDefault();
                            this.loginRequest();
                        }}>
                        Login
                    </button>
                </form>
            </div>
        );
    },
    props: {
        loginEntity: {},
        updateLogin: {},
        loginRequest: {}
    } as Props,
});