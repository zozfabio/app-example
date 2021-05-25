import { createContext } from 'react';
import { emptyFunction } from '../../../helpers/data';
import { AuthContextType } from './types';

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: emptyFunction,
    logout: emptyFunction,
});
