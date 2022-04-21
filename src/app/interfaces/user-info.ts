import { User } from "./user";

export interface UserInfo {
    id: number,
    prenom: string,
    nom: string,
    dateNaissance: Date,
    addresse: string,
    codePostal: string,
    ville: string,
    pays: string,
    sexe: boolean, //1: Homme - 0: Femme
    user: User
}
