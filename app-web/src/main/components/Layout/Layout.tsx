import React, { PropsWithChildren, ReactElement, useEffect } from 'react';
import { Props } from './types';

export default function Layout({ children, breadcrumb, setBreadcrumb }: PropsWithChildren<Props>): ReactElement {
    useEffect(() => {
        breadcrumb && setBreadcrumb(breadcrumb);
    }, [breadcrumb, setBreadcrumb]);
    return <>{children}</>;
}
