import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
const Dogs = () => {
    const [searchParams, SetsearchParams] = useSearchParams()
    const dogIdqwer = searchParams.get('dogId') ?? ""
    const location = useLocation()
    const updateQueryString = (e) => {
        if (e.target.value === '') {
            SetsearchParams({})
            return
        }

        SetsearchParams({ dogId: e.target.value })
    };
    // console.log(location)
    return (
        <div>
            <input type="text" value={dogIdqwer} onChange={updateQueryString} />
            <button>change sp</button>
            <ul>
                {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5',].map(dog => { return <li key={dog}><Link to={`${dog}`} state={{ from: location }}>{dog}</Link> </li> })}
            </ul>
        </div>

    )
}

export default Dogs

