const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"


export type UserType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

const initialState = {
    users: [
        // {
        //     id: 1,
        //
        //     photoUrl:'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
        //     followed: false,
        //     fullName: 'Rustam',
        //     status: 'I am a boss',
        //     location: {city: 'Grozny', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl:'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
        //     followed: true,
        //     fullName: 'Arbi',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl:'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
        //     followed: false,
        //     fullName: 'Deni',
        //     status: 'I am a boss too',
        //     location: {city: 'Piter', country: 'Russia'}
        // },
    ] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    ifFetching: false
}
export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload.users]
            }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}


export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}
