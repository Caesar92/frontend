import { Role } from "./role";

export interface User {
    id: number,
    email: string,
    password: string,
    prenom: string,
    nom: string,
    dateNaissance: Date,
    addresse: string,
    codePostal: string,
    ville: string,
    pays: string,
    role: Role[]
}
