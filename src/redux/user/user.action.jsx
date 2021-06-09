import { UserActionTypes } from "./user.types";

const setCurrentUser = (user) => ({
  type: UserActionTypes.USER_ACTION_TYPES,
  payload: user,
});
export default setCurrentUser;
