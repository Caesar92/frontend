import { Avis } from "./avis"
import { StockList } from "./stock"

export interface Vetement {
    id: number,
    intitule: string,
    marque: string,
    price: number,
    couleur: string,
    photo: string[]
    sexe: boolean
    avisList: Avis[]
    stockList: StockList[]
}
