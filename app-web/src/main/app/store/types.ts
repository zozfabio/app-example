import { AuthState } from '../../modules/Auth/store/types';
import { RootState } from '../../modules/Main/store/types';
import { LayoutState } from '../../components/LayoutConfigurer/store/types';

export interface AppState {
    root: RootState;
    auth: AuthState;
    layout: LayoutState;
}
