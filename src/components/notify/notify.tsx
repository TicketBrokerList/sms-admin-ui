import { useNotify } from 'react-admin';

export const NotifyError = ({ errMessage }) => {
    const notify = useNotify();
    return notify(errMessage, { type: 'error' })
};