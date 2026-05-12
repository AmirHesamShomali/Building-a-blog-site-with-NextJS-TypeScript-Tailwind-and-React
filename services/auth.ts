import { LoginParams, LoginResponse, RegisterParams, RegisterResponse, UserInfo } from "@/types/auth";

export const registerService = async (params: RegisterParams) => {
    const res = await fetch("http://localhost:4004/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const data = await res.json();
    return data as RegisterResponse;
}

export const loginService = async (params: LoginParams) => {
    const res = await fetch("http://localhost:4004/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const data = await res.json();
    return data as LoginResponse;
}

export const getUserInfoService = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch("http://localhost:4004/api/auth/profile", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
        },
    });
    
    if (!res.ok) {
        throw new Error('Failed to get user info');
    }
    
    const data = await res.json();
    return data as UserInfo;
}

