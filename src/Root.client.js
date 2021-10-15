import { useState, Suspense } from 'react';

import { useServerResponse } from './Cache.client';
import { LocationContext } from './LocationContext.client';

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
        selectedId: null,
        page,
        pageNo: 1
    });
    const response = useServerResponse(location);
    return (
        <LocationContext.Provider value={[location, setLocation]}>
            {/* CLIENT COMPONENT !!! */}
            {response.readRoot()}
        </LocationContext.Provider>
    );
}
