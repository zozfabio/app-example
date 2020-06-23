export interface StateProps {
    readonly isAuthenticated: boolean;
}

export interface DispatchProps {
    getRoot: () => void;
}

export type Props = StateProps & DispatchProps;
