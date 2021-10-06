import { SignUpActions as Actions } from "../actions-types";
import {
  EditCredentailsAction,
  EditDietsAction,
} from "../action-creators/signUpActions";

const INITIAL_STATE = {
  credentials: {
    full_name: "",
    email: "",
    password: "",
    mobile: "",
    agreedToPolicy: false,
  },
  selectedDiets: <number[]>(<unknown>[]),
  dislikes: <number[]>(<unknown>[]),
  goals: {
    selected: <number[]>(<unknown>[]),
    custom: "",
  },
};
export type SignUpState = typeof INITIAL_STATE;
type Action = EditCredentailsAction | EditDietsAction;

const signUpReducer = (
  state: SignUpState = INITIAL_STATE,
  action: Action
): SignUpState => {
  switch (action.type) {
    case Actions.EDIT_CREDENTIALS:
      return {
        ...state,
        credentials: { ...state.credentials, ...action.payload },
      };
    case Actions.ADD_DIET:
      return {
        ...state,
        selectedDiets: [...state.selectedDiets, action.payload],
      };
    case Actions.REMOVE_DIET:
      return {
        ...state,
        selectedDiets: state.selectedDiets.filter(
          (id) => id !== action.payload
        ),
      };
    case Actions.ADD_DISLIKE:
      return {
        ...state,
        dislikes: [...state.dislikes, action.payload],
      };
    case Actions.REMOVE_DISLIKE:
      return {
        ...state,
        dislikes: state.dislikes.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default signUpReducer;
