import { useEffect, useState } from 'react'
import Datacontext from './datacontext'
const Datastate = (props)=>{
    const [agency, setagency] = useState([])
    const [cafe, setcafe] = useState([])
    // const [mechanic, setmechanic] = useState([])
    const [station, setstation] = useState([])

    const getagency = async () => {
        const response = await fetch('http://localhost:3001/app/getcaragencies', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const  json5 = await response.json()
        console.log(json5)
        setagency(json5.Caragency)
    }
    const getstation = async () => {
        const response = await fetch('http://localhost:3001/app/getstation', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const  json5 = await response.json()
        console.log(json5)
        setstation(json5.Station)
    }
    const getcafe = async () => {
        const response = await fetch('http://localhost:3001/app/getcafe', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const  json5 = await response.json()
        console.log(json5)
        setcafe(json5.Cafe)
    }
    
    useEffect(() => {
        getagency()
        getstation()
        getcafe()
    }, [])
    
    return (
        <Datacontext.Provider value={{agency,station,cafe}}>
            {props.children}
        </Datacontext.Provider>
    )
}
export default Datastate