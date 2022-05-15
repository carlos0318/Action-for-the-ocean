import {useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';

export const UserState = (props) => {
    const initialState = {
        user: null,
        error: null,
        loading: false
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{
            user: state.user,
            error: state.error,
            loading: state.loading,
            dispatch
        }}>
            {props.children}
        </UserContext.Provider>
    );
};