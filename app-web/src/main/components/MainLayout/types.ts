import { PropsWithChildren } from 'react';

export interface StateProps {
    maximized: boolean;
}

export interface DispatchProps {
    setMaximized: (maximized: boolean) => void;
}

export type Props = PropsWithChildren<StateProps & DispatchProps>;
