import { User } from "@/types/user.type";

const connectedUser: User = {
    pseudo: "Alexis",
    email: 'alexis@gmail.com',
    role: 'user',
};

const emptyUser = undefined;

export const currentUser: User | undefined = connectedUser;