import { useEffect, useState } from "react"

const useProducts = () => {
    const [product, setPsoduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(rsc => rsc.json())
            .then(data => setPsoduct(data))
    }, [])
    return [product, setPsoduct];
}

export default useProducts;