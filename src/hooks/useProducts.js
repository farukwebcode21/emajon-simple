import { useEffect, useState } from "react"

const useProducts =() =>{
    const [products, setProducts] = useState([]);
    useEffect( ()=>[
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    ],[]);
    // Return necessary things
    return[products, setProducts];
}
export default useProducts;