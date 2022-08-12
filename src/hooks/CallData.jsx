import { useEffect, useState } from "react";
import ListsApi from "../Api/ListApi";


function useCallData( page) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await ListsApi.getTopRate(page);
                setData(newData);
                setLoading(false);
                console.log(newData);
            } catch(error) {
                console.log(error)
                setError(error)
            }
        }
        axiosPoster();
    },[])

    return {data, loading, error}
}
export default useCallData