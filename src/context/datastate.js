import { useEffect, useState } from 'react'
import Datacontext from './datacontext'
const Datastate = (props) => {
    const [agency, setagency] = useState([])
    const [cafe, setcafe] = useState([])
    const [mechanic, setmechanic] = useState([])
    const [station, setstation] = useState([])
    var disk = "http://192.168.43.110:3001"
    const getagency = async () => {
        const response = await fetch('http://192.168.43.110:3001/app/getcaragencies', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        setagency(json5.Caragency)
        console.log(json5)
    }
    const getstation = async () => {
        const response = await fetch(`http://192.168.43.110:3001/app/getstation`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        setstation(json5.Station)
    }
    const getcafe = async () => {
        const response = await fetch(`{${disk}/app/getcafe}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        setcafe(json5.Cafe)
    }
    const getmechanic = async () => {
        const response = await fetch(`{${disk}/app/getmechanic}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        setmechanic(json5.Mechanic)
    }
    const updatepassword = async (id, password, newpassword) => {
        const response = await fetch(`{${disk}/app/updatepassword}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id, password, newpassword }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()

    }
    const updatecustomer = async (id, name, email, carnumber, porttype) => {
        const response = await fetch(`{${disk}/app/updatecustomer}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id, name, email, carnumber, porttype }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
    }
    const deletecustomer = async (id) => {
        const response = await fetch(`{${disk}/app/deletecustomer}`, {
            method: "delete",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
    }
    const bookagency = async (id) => {
        const response = await fetch(`{${disk}/app/getbookagency}`, {
            method: "post",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
    }
    const bookchargingslot = async (id) => {
        const response = await fetch(`{${disk}/app/getbookchargingslot}`, {
            method: "post",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
    }


    const bookmechanic = async (id) => {
        const response = await fetch(`{${disk}/app/getbookmechanic}`, {
            method: "post",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
    }
    useEffect(() => {
        getagency()
        getstation()
        getcafe()
        getmechanic()
    }, [])
    const [zip, setzip] = useState()
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                getCity(position.coords.latitude, position.coords.longitude)
            });
        }
    }, [zip])

    function getCity(lat, lng) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.4bdb36b4aedfe8c58329f9e8cba42ca1&lat=" + lat + "&lon=" + lng + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var postcode = response.address.postcode;
                setzip(response);
                return;
            }
        }
    }
    const [searchedzipmechanic, setsearchedzipmechanic] = useState([])
    const [searchedzipagency, setsearchedzipagency] = useState([])
    const [searchedzipcafe, setsearchedzipcafe] = useState([])
    const [searchedzipstation, setsearchedzipstation] = useState([])
    useEffect(() => {
        if (zip) {
            filtercafeitem(cafe)
            filterstationitem(station)
            filteragencyitem(mechanic)
            filtermechanicitem(mechanic)
        }
    }, [zip])
    const filtercafeitem = (cafe) => {
        try {
            const updated = cafe.filter((ele) => {
                return ele.zipcode === zip.address.postcode;
            })
            if (updated.length === 0) {
                const error = cafe.slice(0, 6);
                setsearchedzipcafe(error)
            }
            else {
                setsearchedzipcafe(updated)
            }
        }
        catch (err) {
            setsearchedzipcafe(err)
        }

    }
    const filterstationitem = (station) => {
        try {
            const updated = station.filter((ele) => {
                return ele.zipcode === zip.address.postcode;
            })
            if (updated.length === 0) {
                const error = station.slice(0, 6);
                setsearchedzipstation(error)
            }
            else {
                setsearchedzipstation(updated)
            }
        }
        catch (err) {
            setsearchedzipstation(err)
        }

    }
    const filteragencyitem = (agency) => {
        try {
            const updated = agency.filter((ele) => {
                return ele.zipcode === zip.address.postcode;
            })
            if (updated.length === 0) {
                const error = agency.slice(0, 6);
                setsearchedzipagency(error)
            }
            else {
                setsearchedzipagency(updated)
            }
        }
        catch (err) {
            setsearchedzipagency(err)
        }

    }
    const filtermechanicitem = (mechanic) => {
        try {
            const updated = mechanic.filter((ele) => {
                return ele.zipcode === zip.address.postcode;
            })
            if (updated.length === 0) {
                const error = mechanic.slice(0, 6);
                setsearchedzipmechanic(error)
            }
            else {
                setsearchedzipmechanic(updated)
            }
        }
        catch (err) {
            setsearchedzipmechanic(err)
        }

    }
    return (
        <Datacontext.Provider value={{ agency, station, cafe, mechanic, zip, searchedzipmechanic, searchedzipagency, searchedzipcafe, searchedzipstation }}>
            {props.children}
        </Datacontext.Provider>
    )
}
export default Datastate