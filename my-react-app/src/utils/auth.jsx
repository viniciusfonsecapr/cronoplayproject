const STORAGE_KEY = "users";

const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

const logout = () => localStorage.removeItem(STORAGE_KEY);

export { isLogged, logout, STORAGE_KEY };
