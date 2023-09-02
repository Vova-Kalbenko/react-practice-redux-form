import React, { Suspense, useRef } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

const DogDetails = () => {

    const {dogId} = useParams()
    const location = useLocation()
    const backLinkLocation = useRef(location.state?.from ?? "/dogs")
    // console.log(location)
    // console.log(params)
    return (<>
        <h1>element of collections: {dogId}</h1>
        <Link to={backLinkLocation.current}>back to collections page</Link>
        <ul>
            <li>
                <Link to="subbreeds">Подпороды</Link>
            </li>
            <li>
                <Link to="gallery">Галерея</Link>
            </li>
        </ul>
        <Suspense fallback={<div>LOADING SUBPAGE</div>}><Outlet /></Suspense>
        
    </>
    )
}

export default DogDetails
