
import React, {
   useCallback,
   useState,
} from 'react';
import PropTypes from 'prop-types';

const Search = ({
    styles,
    onChange,
}) => {
    const [value, setValue] = useState('');
    const searchTags = useCallback(
        () => {
            onChange(value);
            setValue('');
        },
    [value, setValue, onChange]);

    const handleOnChangue = useCallback((evt)=>{
        const {target: {value}} = evt;
        setValue(value);
    },[]);

    return (
        <div>
            <div>
                <p className={styles.subtitle}>Form</p>
            </div>
            <div className={styles.searchTag}>
                <input className={styles.input} type="text" placeholder="Write something nice" value={value} onChange={handleOnChangue} />
                <input className={styles.btn} type="button" value="Calculate Tags" onClick={searchTags} />
            </div>
        
        </div>
    )
};
Search.propTypes = {
    onChange: PropTypes.func,
};
Search.defaultProps = {
    onChange: () => null,
};
export default Search;