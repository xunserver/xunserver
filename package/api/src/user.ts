import AV from 'leancloud-storage'
import { isEmail, to } from './utils/common'

const { User } = AV;

export const login = async (account: string, password: string) => {
    let result:Promise<AV.User>
    if(isEmail(account)) {
        result = User.loginWithEmail(account, password)
    }
    result = User.logIn(account, password);
    
    const [err, user]: [any, AV.User] = await to(result);
    if(err) {
        return err;
    }
    if(user.email) {

    }
}

export const logout = () => AV.User.logOut()

export const getUser = () => AV.User.current()

export const register = (account: string, email: string, password: string) => {
 const user = new AV.User()
 user.setUsername(account);
 user.setEmail(email);
 user.setPassword(password)
}