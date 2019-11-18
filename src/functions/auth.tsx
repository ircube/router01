export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb:any) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb:any) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
