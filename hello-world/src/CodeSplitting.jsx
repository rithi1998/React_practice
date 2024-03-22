import React, { lazy, Suspense, useState } from 'react';


const Update = lazy(() => import('./Update'));
const New = lazy(() => import('./New'));

export default function LazyComponent() {
    const [Tab, selectTab] = useState('');
    return (
        <div>
            
            <button onClick={() => selectTab('Update')}> Update</button>
            <br /><br />
            <button onClick={() => selectTab('New')}> New</button>
            
            <Suspense fallback={<div>Loading...</div>}>
                {Tab === 'Update' && <Update />}
                {Tab === 'New' && <New />}


            </Suspense>
        </div>
    );
}