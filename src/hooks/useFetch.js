// petición asincronica común para usar siempre
import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [state, setState] = useState ()
    // siempre que haya un error por el then volver al estado inicial en este caso es false
    const [hasError, setHasError] = useState(false)    
    useEffect (() => {
        
        axios.get(url)
            // data viene del axios - ojo
            .then(res => {
                setState(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
     }, [url])
 return [state, hasError]   
}
export default useFetch