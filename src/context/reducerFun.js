export const initialState = {
  isLoggedIn: false,
  tasks: [],
  editTask: [],
  isFilter: false,
  isChangeText: true,
  isEdit : true,
  userData: [
    {
      id: 1,
      username: "hari123",
      password: "12345678",
    },
    {
      id: 2,
      username: "hariharanR",
      password: "12345",
    },
    {
      id: 3,
      username: "name345",
      password: "helloworld",
    },
  ],
  userName: "Guest",
};

export const stateReducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "Task":
      return {
        ...state,
        tasks: action.payload,
      };
    case "Login":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case "text":
      return {
        ...state,
        isChangeText: action.payload,
      };
    case "filter":
      return {
        ...state,
        isFilter: !state.isFilter,
      };
    case "edit":
      return {
        ...state,
        editTask: action.payload,
      };
    case "UserName":
      return {
        ...state,
        userName: action.payload,
      };
    case "BY_EDIT":
        return {
            ...state,
            isEdit : !state.isEdit,
        }
    default:
      return state;
  }
};
