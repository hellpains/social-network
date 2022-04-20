import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export const store = createStore(rootReducer)


// определить автоматически тип всего объекта store
export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;