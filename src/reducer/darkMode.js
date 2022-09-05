import { darkModeType } from "./types";

export const initialState = {
  isDark: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case darkModeType.darkMode:
      return { ...state, isDark: !state.isDark };

    default:
      throw new Error("does not exist type");
  }
}
