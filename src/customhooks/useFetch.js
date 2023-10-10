import { useState, useEffect } from "react"

export default function useFetch(url){
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      // use effect cleanup to stop fetch from carrying in background when changing links
        const abortCont = new AbortController();

        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
            .then((res) => {
              if(!res.ok){
                throw Error("Could not fetch data....")
              }
              return res.json()
            })
            .then((data) => {
              // console.log(data)
              setData(data)
              setIsPending(false)
              setError(null)
            })
            .catch((err) => {
              if(err.name === 'AbortError'){
                console.log('Fetch Aborted')
                //in case of fetch error
              }
              else {
                setIsPending(false)
                setError(err.message)
              }
            })
        },1000)
        return () => abortCont.abort()
      },[])
    return {data, isPending, error}
}