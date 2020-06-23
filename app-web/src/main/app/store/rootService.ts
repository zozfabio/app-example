import * as authService from '../../services/auth';
import * as mainService from '../../services/root';

const rootService = {
    auth: authService,
    main: mainService,
};

export type RootService = typeof rootService;

export default rootService;
