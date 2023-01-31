import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [Data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error('Oops !! cannot fetch the data...');
                }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch((err)=>{
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
      }, [url]);

      return{Data, isPending, error};
}
 
export default useFetch;