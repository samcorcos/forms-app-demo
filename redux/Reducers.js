export const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FOO':
      return state
    default: return state
  }
}

export const FormsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
          [action.payload.key]: action.payload.value,
        },
      }
    default: return state
  }
}