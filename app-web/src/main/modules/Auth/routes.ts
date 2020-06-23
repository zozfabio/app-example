export const login = {
    exact: true,
    path: '/auth',
};
export const logout = {
    exact: true,
    path: `${login.path}/logout`,
};
