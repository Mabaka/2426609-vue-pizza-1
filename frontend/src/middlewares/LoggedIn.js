import { AuthStore } from "../states_store";

export const LoggedIn = ({ to }) => {
    const auth_store = AuthStore();
    if (!auth_store.isAuthenticated) {
        return { path: "/"};
    } else {
        return true;
    }
};