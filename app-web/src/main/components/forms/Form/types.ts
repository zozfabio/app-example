import { FormikConfig, FormikValues } from 'formik';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<
    Pick<FormikConfig<FormikValues>, 'initialValues' | 'validationSchema' | 'onSubmit'>
>;
