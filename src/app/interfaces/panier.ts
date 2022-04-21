import { User } from "./user";
import { Vetement } from "./vetement";

export interface Panier {
    user: User,
    vetements: Vetement[]
}
