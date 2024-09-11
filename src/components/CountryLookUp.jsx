"use client";

import { useEffect, useState } from "react";

const CountryLookUp = () => {
    const [country, setCountry] = useState('')
    console.log("f:",process.env.abc)
    useEffect(()=>{
        const getCountry = async () =>{
            const response = await fetch(`http://api.ipstack.com/check?access_key=${process.env.NEXT_PUBLIC_API_ID_COUNTRY}`).then((res)=> res.json()).then((data)=> data.country_name);
            if (!response) {
                setCountry("NULL")
                return
            };
            setCountry(response);
        }
        getCountry();
    },[])
  return (
    <div>
      {country}
    </div>
  )
}

export default CountryLookUp
