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
            .then(res => {
                return res.data
            })
    }
}

export const followUnfollowAPI={
    setUnfollow(id: any)  {
        return instance.delete(`follow/${id}`)
            .then(res => {
                return res.data
            })
    },
    setFollow(id: any)  {
        return instance.post(`follow/${id}`)
            .then(res => {
                return res.data
            })
    }
}
