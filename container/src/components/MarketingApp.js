import React, {useEffect, useRef} from 'react';
import {mount} from 'marketing/MarketingApp';


export default function MarketingApp() {
    const marketingRef = useRef(null);
    useEffect(() => {
        mount(marketingRef.current);
    })
    return <div ref={marketingRef}></div>
}