import { LayoutState } from '../../LayoutConfigurer/store/types';

export type StateProps = Pick<LayoutState, 'breadcrumb'>;

export type Props = StateProps;
