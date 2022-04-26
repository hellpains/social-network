import {combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import  {ThunkAction} from "redux-thunk";
import {UsersActionsType, usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})


export const store = createStore(rootReducer)


// определить автоматически тип всего объекта store
export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//тип всех action-ов приложения
export type AllAppActionsType = DialogsActionsType | ProfileActionsType | UsersActionsType

//типизация для thunk
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllAppActionsType>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;