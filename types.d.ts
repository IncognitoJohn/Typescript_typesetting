export type UserStatus = "active" | "offline" | "suspended";

export type UserProfile = {
    id: string;
    username: string;
    email: string;
    status: UserStatus; // Nesting types works perfectly here!
};

export type ApiResponse = {
    success: boolean;
    data: UserProfile | null;
    error?: string;
};