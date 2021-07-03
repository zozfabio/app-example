import { useContext, useMemo, useState } from 'react';
import { LayoutContext } from './context';
import { LayoutBreadcrumb, LayoutContextType } from './types';

export function useLayoutContextFactory(): LayoutContextType {
    const [menuExpanded, setMenuExpanded] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<LayoutBreadcrumb[]>([]);
    return useMemo(
        () =>
            ({
                menuExpanded,
                breadcrumbs: breadcrumb,
                setMenuExpanded,
                toggleMenuExpanded() {
                    setMenuExpanded(!menuExpanded);
                },
                setBreadcrumb,
            } as LayoutContextType),
        [menuExpanded, setMenuExpanded, breadcrumb, setBreadcrumb]
    );
}

export function useLayoutContext(): LayoutContextType {
    return useContext(LayoutContext);
}
