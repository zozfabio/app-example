import { Error } from '../../../../services/types';
import { RootLinks } from '../../../../services/root/types';

export interface StateProps {
    readonly rootLinks?: RootLinks;
    readonly error?: Error;
}

export type Props = StateProps;
