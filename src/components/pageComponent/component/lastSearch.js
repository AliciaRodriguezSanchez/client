import React from 'react';
import PropTypes from 'prop-types';

const LastSearch = ({
    lastResult,
    styles,
}) => {
    return (
        <div>
            <div>
                <p className={styles.subtitle}>Last Word</p>
            </div>
            <div className={styles.lastSearch}>
                <div className={styles.headList}>
                    <p>Word</p>
                </div>
                {Object.entries(lastResult)?.length > 0 ? (Object.entries(lastResult).map((word, index) => (
                    <div key={index} className={styles.list}>
                        <div>
                            <p>{word[0]}</p>
                        </div>
                        <div>
                            <p>{word[1]?.length > 0 ? word[1].map((item)=>`${item} / `) : "No hubo resultados"}</p>
                        </div>
                    </div>
                ))) 
                : <p className={styles.noResult}>No se han encontrado resultados</p>
                }
            </div>
        </div>
    )
};
LastSearch.propTypes = {
    lastResult: PropTypes.object,
};
LastSearch.defaultProps = {
    lastResult:{},
};
export default LastSearch;