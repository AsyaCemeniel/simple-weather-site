type ParametersState = {
  theme: "dark" | "light";
  measure: boolean;
};

const initialState: ParametersState = {
  theme: "light",
  measure: true,
};

export const ParametersReducer = (state = initialState): ParametersState => {
  return state;
};
