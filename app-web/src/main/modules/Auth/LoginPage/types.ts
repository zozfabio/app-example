import { LoginInput } from '../../../services/auth/types';
import { Error } from '../../../services/types';

export interface StateProps {
    readonly error?: Error;
}

export interface DispatchProps {
    login: (input: LoginInput) => void;
}

export type Props = StateProps & DispatchProps;
