import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsePhone = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState({});
    const url = `http://localhost:5000/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPhone(data)
            });
    }, [])

    return [phone];
}
export default UsePhone;