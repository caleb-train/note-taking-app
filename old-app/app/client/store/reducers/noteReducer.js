import * as actions from './node_modules/@store/actions/actionTypes'
import {
  note
} from './initialState'

export default function (state, action) {
  switch (action.type) {
    case actions.LIST_NOTES:
      return {
        ...state, isLoading: false, data: action.payload
      }
      case actions.GET_NOTE:
        return {
          ...state, isLoading: false, ...action.payload
        }
        case actions.CREATE_NOTE:
          return {
            ...state, isErrored: false, makeNote: false, isLoading: false, ...action.payload
          }
          case actions.EDIT_NOTE:
            return {
              ...state, ...action.payload
            }
            case actions.UPDATE_NOTE:
              return {
                ...state, isLoading: false, isErrored: false, makeNote: false, saveNote: false, ...action.payload
              }
              case actions.DELETE_NOTE:
                return {
                  ...state, ...action.payload
                }
                case actions.FETCH_ERROR:
                  return {
                    ...state, data: [null], isLoading: false, isErrored: true, makeNote: false, ...action.payload
                  }
                  case actions.RESET:
                    return {
                      ...note, ...action.payload
                    }
                    default:
                      return state
  }
}