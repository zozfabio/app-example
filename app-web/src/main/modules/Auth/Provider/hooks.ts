import { useContext } from 'react';
import { AuthContext } from './context';
import { AuthContextType } from './types';

export function useAuthContext(): AuthContextType {
    return useContext(AuthContext);
}
