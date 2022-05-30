import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))


// определить автоматически тип всего объекта store
export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//тип всех action-ов приложения
export type AllAppActionsType = DialogsActionsType | ProfileActionsType | UsersActionsType

//типизация для thunk
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllAppActionsType>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;