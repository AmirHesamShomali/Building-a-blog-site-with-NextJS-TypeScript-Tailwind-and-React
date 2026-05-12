export type UserInfo = {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
}

export type RegisterParams = {
    username: string;
    email: string;
    password: string;
}

export type LoginParams = {
    username: string;
    password: string;
}

export type RegisterResponse = {
    message: string;
    user: UserInfo;
}

export type LoginResponse = {
    message: string;
    token: string;
    user: UserInfo;
}
    
