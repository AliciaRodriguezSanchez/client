import React from 'react';
import PropTypes from 'prop-types';

const Title = ({text, styles}) => (
    <div >
        <p className={styles.h1}>{text}</p>
    </div>
);
Title.propTypes = {
    text: PropTypes.string,
};
Title.defaultProps = {
    text:'',
};
export default Title;