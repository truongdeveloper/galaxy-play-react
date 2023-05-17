import { useEffect, useState } from "react";


function useCallData( popular ) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await popular;
                setData(newData);
                setLoading(false);
            } catch(error) {
                console.log(error)
                setError(error)
            }
        }
        axiosPoster();
    },[])

    return [data, loading, error]
}
export default useCallData