import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "../actions/types";

const initialState = {
    profile: null,
    profiles: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}