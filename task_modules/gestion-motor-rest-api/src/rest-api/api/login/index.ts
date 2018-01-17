import { LoginEntity } from '../../model';

export const loginRequest = (loginEntity: LoginEntity): Promise<boolean> => (
    isValidLogin(loginEntity) ?
        Promise.resolve(true) :
        Promise.reject('Not valiid Login')
);

const isValidLogin = (loginEntity: LoginEntity) => (
    loginEntity.login === 'admin' &&
    loginEntity.password === 'test'
);