import { Server } from 'miragejs';
import { baseURL } from '../index';
import { mockLogin } from '../auth';

// eslint-disable-next-line no-new
new Server({
    routes() {
        this.urlPrefix = `${baseURL}`;
        this.namespace = '';
        mockLogin(this);
    },
});
