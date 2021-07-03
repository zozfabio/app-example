import { createContext } from 'react';
import { emptyFunction } from '../../helpers/data';
import { LayoutContextType } from './types';

export const LayoutContext = createContext<LayoutContextType>({
    menuExpanded: true,
    breadcrumbs: [],
    setMenuExpanded: emptyFunction,
    toggleMenuExpanded: emptyFunction,
    setBreadcrumb: emptyFunction,
});
