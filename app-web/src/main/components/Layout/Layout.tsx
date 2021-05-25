import React, { ReactElement, useEffect } from 'react';
import { useLayoutContext } from './Provider/hooks';
import { Props } from './types';

export default function Layout({ children, breadcrumb }: Props): ReactElement {
    const { setBreadcrumb } = useLayoutContext();
    useEffect(() => {
        breadcrumb && setBreadcrumb(breadcrumb);
    }, [breadcrumb, setBreadcrumb]);
    return <>{children}</>;
}
