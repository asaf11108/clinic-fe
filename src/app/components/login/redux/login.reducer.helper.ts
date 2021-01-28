import { LoginState } from "./login.reducer";

export class LoginReducerHelper {
    setLoading(state: LoginState): LoginState {
        state.isLoading = true;
        state.hasError = false;
        return state;
    }

    setSuccess(state: LoginState): LoginState {
        state.loggedIn = true;
        state.isLoading = false;
        return state;
    }

    setFailure(state: LoginState): LoginState {
        state.hasError = true;
        state.isLoading = false;
        return state;
    }
}
