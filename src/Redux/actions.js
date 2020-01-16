/*
 * action types
 */
export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";
/*
 * action creators
 */
export function setActiveMenu(active) {
  return { type: SET_ACTIVE_MENU, active };
}
