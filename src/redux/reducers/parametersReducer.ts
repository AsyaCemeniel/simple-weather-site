import {
  ParametersActions,
  SET_MEASURE,
  SET_THEME,
} from "../actions/parametersActions";

type ParametersState = {
  theme: "dark" | "light";
  measure: boolean;
};

const initialState: ParametersState = {
  theme: "light",
  measure: true,
};

export const ParametersReducer = (
  state = initialState,
  action: ParametersActions
): ParametersState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_MEASURE:
      return {
        ...state,
        measure: action.payload,
      };
    default:
      return state;
  }
};
