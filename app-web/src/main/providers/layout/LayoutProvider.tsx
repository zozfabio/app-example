import React, { ReactElement } from 'react';
import { LayoutContext } from './context';
import { useLayoutContextFactory } from './hooks';
import { Props } from './types';

export default function LayoutProvider({ children }: Props): ReactElement {
    const context = useLayoutContextFactory();
    return <LayoutContext.Provider value={context}>{children}</LayoutContext.Provider>;
}
