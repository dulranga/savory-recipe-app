import { SignUpActions as Actions } from "../actions-types";
import {
  EditCredentailsAction,
  editCustomGoalsAction,
  EditIDAction,
} from "../action-creators/signUpActions";
import { produce } from "immer";

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
type Action = EditCredentailsAction | EditIDAction | editCustomGoalsAction;

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
      return produce(state, (draft) => {
        draft.selectedDiets.push(action.payload);
      });
    case Actions.REMOVE_DIET:
      return produce(state, (draft) => {
        draft.selectedDiets = draft.selectedDiets.filter(
          (id) => id !== action.payload
        );
      });
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
    case Actions.ADD_GOAL:
      return produce(state, (draft) => {
        draft.goals.selected.push(action.payload);
      });
    case Actions.REMOVE_GOAL:
      return produce(state, (draft) => {
        draft.goals.selected = draft.goals.selected.filter(
          (id) => id !== action.payload
        );
      });
    case Actions.EDIT_CUSTOM_GOAL:
      return produce(state, (draft) => {
        draft.goals.custom = action.payload;
      });
    default:
      return state;
  }
};
export default signUpReducer;
