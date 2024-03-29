import { createContext } from 'react';
import { emptyFunction } from '../../helpers/data';
import { AuthContextType } from './types';

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: emptyFunction,
    login: emptyFunction,
    logout: emptyFunction,
});
