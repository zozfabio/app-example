import { useContext } from 'react';
import { LayoutContext } from './context';
import { LayoutContextType } from './types';

export function useLayoutContext(): LayoutContextType {
    return useContext(LayoutContext);
}
