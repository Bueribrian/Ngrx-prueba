import User from "./user.model";

export default interface UserState {
    users: User[],
    loading: boolean,
    error: string | null
} 