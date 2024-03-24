import React from 'react';
import PropTypes from 'prop-types';
function Age({ ageHandler, children }) {
    console.log('Age rendered');
    return <button onClick={ageHandler}>{children}</button>;
}

export default React.memo(Age);

Age.propTypes={
    ageHandler:PropTypes.func,
    children:PropTypes.node

};