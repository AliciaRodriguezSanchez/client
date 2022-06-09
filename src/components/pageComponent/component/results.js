
import React from 'react';
import PropTypes from 'prop-types';

const Result = ({
    result,
    styles,
}) => (
    <div>
        <div>
            <p className={styles.subtitle}>Tags</p>
        </div>
        <div className={styles.resultList}>
            <ul className={styles.divul}>
            {result?.length > 0 ? (result.map((word, index) => (
                <li className={styles.divli} key={index}>
                    <div className={styles.tags}>
                        <p>{index}</p>
                        <p>{word}</p>
                    </div>
                </li>
                ))) : <p className={styles.noResult}>No se han encontrado resultados</p>
            }
            </ul>
        </div>
       
    </div>
);
Result.propTypes = {
    result: PropTypes.array,
};
Result.defaultProps = {
   result:[],
};
export default Result;