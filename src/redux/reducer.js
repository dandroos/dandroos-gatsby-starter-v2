const { SET_IS_MOBILE, SET_FONTS_LOADED, SET_AT_TOP } = require("./types")

const initialState = {
  isMobile: false,
  atTop: true,
  fontsLoaded: false,
}

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_AT_TOP:
      newState.atTop = payload
      break
    case SET_FONTS_LOADED:
      newState.fontsLoaded = payload
      break
    default:
      break
  }

  return newState
}

export default reducer
