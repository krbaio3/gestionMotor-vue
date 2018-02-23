import Vue, { VNode } from 'vue';
import { router } from '../../router';
import { loginRequest } from '../../rest-api/api/login';
import { createEmptyLoginEntity, LoginEntity } from './viewModel';
import { mapLoginEntityVmToModel } from './mapper';
import { LoginPage } from './page';


export const LoginPageContainer = Vue.extend({
    render(h): VNode {
        return (
            <LoginPage
                loginEntity={this.loginEntity}
                updateLogin={this.updateLogin}
                loginRequest={this.loginRequest}
            />
        );
    },
    data: () => ({
        loginEntity: createEmptyLoginEntity(),
    }),
    methods: {
        updateLogin(login: string, password: string) {
            this.loginEntity = {
                login,
                password,
            };
        },
        loginRequest() {
            const LoginEntityModel = mapLoginEntityVmToModel(this.loginEntity);
            loginRequest(LoginEntityModel)
                .then(() => {
                    router.push('./home');
                })
                .catch((error) => console.log(error));
        }
    },
})