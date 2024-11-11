import { useState } from "react"
import { create } from "zustand"

export const useProductStore = create ((set)=>({
    products: [],
    setProducts: (products) => set({products}),
})) 

// const [state, setState] = useState([])
// same estei types vayo, yo chahi locally
// mathi ko chahi globally