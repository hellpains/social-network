import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7f23d2c9-909a-43ed-a43a-ec41c23cf237"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus( status: string) {
        return instance.put(`profile/status`, {status})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email:any,password:any,rememberMe:any=false) {
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

