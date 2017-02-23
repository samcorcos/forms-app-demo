export const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FOO':
      return state
    default: return state
  }
}

// NOTE this will also work, but it will require defining every form in advance
// which is extremely tedious and clutters your code

// const initialFormState = {
//   myForm: {
//     input1: null,
//   },
// }
//
// export const FormsReducer = (state = initialFormState, action) => {
//   switch (action.type) {
//     case 'UPDATE_FORM':
//       return {
//         ...state,
//         [action.payload.form]: {
//           ...state[action.payload.form],
//           [action.payload.key]: action.payload.value,
//         },
//       }
//     default: return state
//   }
// }

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
