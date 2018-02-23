import Vue, { VNode, PropOptions } from 'vue';
import { LoginEntity } from './viewModel';
import { FormComponent, HeaderComponent } from './components';

interface Props {
    loginEntity: PropOptions<LoginEntity>
    updateLogin: PropOptions<(login: string, password: string) => void>;
    loginRequest: PropOptions<() => void>;
}

export const LoginPage = Vue.extend({
    render(h): VNode {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <HeaderComponent />
                            <FormComponent
                                loginEntity={this.loginEntity}
                                updateLogin={this.updateLogin}
                                loginRequest={this.loginRequest} />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    props: {
        loginEntity: {},
        updateLogin: {},
        loginRequest: {}
    } as Props,
});