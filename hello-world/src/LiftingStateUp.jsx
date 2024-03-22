import React,{ useState } from 'react';
import PropTypes from 'prop-types';
function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                Show
                </button>
            )}
        </div>
    );
}

Panel.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired

};

export default function LiftUp() {
    return (
        <>
            <h2>Aspire Systems</h2>
            <Panel title="About">
            With a population of about 2 million, Almaty is Kazakhstan&aposs largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title="Etymology">
            The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for &apos apple &apos and is often translated as &quot full of apples &quot.
             In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    );
}
