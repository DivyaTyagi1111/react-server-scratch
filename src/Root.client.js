import { useState, Suspense } from 'react';

import { useServerResponse } from './Cache.client';
import { LocationContext } from './LocationContext.client';
// import Header from './header/Header.server';

export default function Root() {
    return (
        <Suspense fallback={null}>
            <Content />
        </Suspense>
    );
}

function Content() {
    let page = window.location.pathname==='/'?'home':'product'
    const [location, setLocation] = useState({
        page,
        pageNo: 1,
        slot: [],
    });
    const response = useServerResponse(location);
    return (
        <LocationContext.Provider value={[location, setLocation]}>
            {/* CLIENT COMPONENT !!! */}
            {/* <Header/> */}
            {response.readRoot()}
        </LocationContext.Provider>
    );
}
