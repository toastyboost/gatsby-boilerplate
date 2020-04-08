import { createAction, handleActions } from "redux-actions";
import { fetchUsers } from "~/store/api";

// SYNC ACTIONS

export const setAllUsers = createAction("setAllUsers");

// ASYNC ACTIONS

export const getAllUsers = () => async dispatch => {
  const response = await fetchUsers();
  const result = await response.json();

  dispatch(setAllUsers({ ...result }));
};

const initialState = {};

export default handleActions(
  {
    [setAllUsers]: (state, { payload }) => {
      const { data } = payload;

      return {
        data,
      };
    },
  },
  initialState
);

export const selectUsers = state => state.users.all;
