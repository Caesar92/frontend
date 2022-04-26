import { Avis } from "./avis"

export interface Vetement {
    id: number,
    intitule: string,
    marque: string,
    taille: string, // Taille europe : S - M - L - XL ...
    price: number,
    couleur: string,
    quantité: number,
    photo: string[]
    sexe: boolean
    avis: Avis[]
}
