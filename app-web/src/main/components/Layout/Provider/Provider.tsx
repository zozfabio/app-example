import React, { ReactElement, useMemo, useState } from 'react';
import { LayoutContext } from './context';
import { LayoutBreadcrumb, LayoutContextType, Props } from './types';

export default function LayoutProvider({ children }: Props): ReactElement {
    const [menuExpanded, setMenuExpanded] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<LayoutBreadcrumb[]>([]);
    const context = useMemo(
        () =>
            ({
                menuExpanded,
                breadcrumb,
                setMenuExpanded,
                toggleMenuExpanded() {
                    setMenuExpanded(!menuExpanded);
                },
                setBreadcrumb,
            } as LayoutContextType),
        [menuExpanded, setMenuExpanded, breadcrumb, setBreadcrumb]
    );
    return <LayoutContext.Provider value={context}>{children}</LayoutContext.Provider>;
}
