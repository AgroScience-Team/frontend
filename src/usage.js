import { PersistentStore } from "./storage";

class UserStore extends PersistentStore {
    data() {
        return {
            username: null,
            language: null,
            url: null,
            token: null,
            tokenId: null,
            error: null,
        };
    }

    updateAll(object) {
        for (const key in object) {
            this.state[key] = object[key];
        }
    }
    updateState(key, value) {
        this.state[key] = value;
    }
    clearAll() {
        for (const key in this.state) {
            this.state[key] = null;
        }
    }
    isAuthorized() {
        if (this.state.token && this.state.tokenId) {
            return true;
        } else return false;
    }
    setError(value) {
        this.state.error = value;
    }
    getError() {
        return this.state.error;
    }
}
export const userStore = new UserStore("USER_STORE");
