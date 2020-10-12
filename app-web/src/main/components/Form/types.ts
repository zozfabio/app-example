import { PropsWithChildren } from 'react';
import { FormikConfig, FormikValues } from 'formik';

export type Props = PropsWithChildren<
    Pick<FormikConfig<FormikValues>, 'initialValues' | 'validationSchema' | 'onSubmit'>
>;
