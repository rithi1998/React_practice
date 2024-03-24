import React from 'react';
import PropTypes from 'prop-types';
function Button({ handleClick, children }) {
    console.log('Button rendered');
    return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);

Button.propTypes={
    handleClick:PropTypes.handleClick,
    children:PropTypes.node
};