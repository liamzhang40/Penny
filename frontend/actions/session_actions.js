import * as sessionAPIUtils from '../utils/session_api_utils';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const deleteSession = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
);

export const logout = () => {
    return dispatch => {
        return sessionAPIUtils.logout().then(
            () => {
                return dispatch(deleteSession());
            }
        );
    };
};