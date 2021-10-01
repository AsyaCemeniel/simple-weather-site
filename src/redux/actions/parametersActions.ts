export const SET_THEME = "SET_THEME" as const;
export const SET_MEASURE = "SET_MEASURE" as const;

export interface ISetTheme {
  readonly type: typeof SET_THEME;
  payload: "dark" | "light";
}

export interface ISetMeasure {
  readonly type: typeof SET_MEASURE;
  payload: boolean;
}

export type ParametersActions = ISetTheme | ISetMeasure;
