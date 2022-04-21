import { Avis } from "./avis"

export interface Vetement {
    id: number,
    intitule: string,
    marque: string,
    taille: string, // Taille europe : S - M - L - XL ...
    prix: number,
    couleur: string,
    quandtité: number,
    photo: string[]
    sexe: boolean
    avis: Avis[]
}
