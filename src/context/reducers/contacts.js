import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
} from "../../constants/actionTypes";

const contacts = (state, { type, payload }) => {
  switch (type) {
    case EDIT_CONTACT_LOADING: {
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      };
    }

    default:
      return state;
  }
};

export default contacts;
