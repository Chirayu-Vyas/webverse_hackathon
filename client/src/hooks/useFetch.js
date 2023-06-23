import React from 'react'
import { useEffect,useState } from 'react';

function useFetch(url){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData(url);
    },[])

    async function fetchData(url){
        const response = await fetch(url);
        const jsonData = await response.json();
       console.log(jsonData);
        setData(jsonData.data.results);
    }

    return data;
}



export default useFetch;