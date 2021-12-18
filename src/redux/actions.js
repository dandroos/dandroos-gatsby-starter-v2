import { SET_AT_TOP, SET_FONTS_LOADED, SET_IS_MOBILE } from "./types"

export const setIsMobile = payload => ({
  type: SET_IS_MOBILE,
  payload,
})

export const setAtTop = payload => ({
  type: SET_AT_TOP,
  payload,
})

export const setFontsLoaded = payload => ({
  type: SET_FONTS_LOADED,
  payload,
})
