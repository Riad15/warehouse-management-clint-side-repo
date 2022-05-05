import { useEffect, useState } from "react"

const useProducts = () => {
    const [product, setPsoduct] = useState([]);
    useEffect(() => {
        fetch('phoneData.json')
            .then(rsc => rsc.json())
            .then(data => setPsoduct(data))
    }, [])
    return [product];
}

export default useProducts;