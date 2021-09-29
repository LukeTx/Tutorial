import {useEffect, useState} from 'react'

const useFetch =(url) =>{
    const [data, setData] = useState(null);  //Set the state, default will  null
    const[isPending, setIsPending] =useState(true);
    const [error ,setError] = useState(null);

    useEffect(()=>{    //good to fetch data as it will only call once when page fetch
       
        const abortCont =new AbortController(); //can use the abort to associate toa  fetch request
       
        console.log("use effect ran")
        setTimeout(() =>{
        fetch(url,{signal : abortCont.signal})
        .then(res => {
            if (!res.ok){
                throw Error ('Could not fetch data for resource')
            }
            return res.json()  //passes json into js object forest
        })
        .then(data => {
            console.log(data) //actual data
            setIsPending(false)
            setData(data)
            setError(null);
        })
        .catch(err =>{
            if(err.name === 'AbortError'){
                console.log("Fetch aborted")
            }
            else{
                setIsPending(false);
                setError(err.message);

            }
           
        })
        },1000)

        return () =>abortCont.abort();
    },[url]) //The empty array only run the useeffect on the first time (The url is a dependencies, whenever url is called, it will re-render)

    return {data,isPending, error}
}


export default useFetch;