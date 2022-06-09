import React from 'react';
import PropTypes from 'prop-types';
import Title from './component/title';
import SearchForm from './component/search';
import Result from './component/results';
import useStyles from './mainContainer.style';
import LastSearch from './component/lastSearch';
 
const MainContainer = ({
  onchangeValue,
  result,
  lastResult,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.title}>
          <Title text='Word tagger' styles={classes}/>
        </div>
        <div className={classes.form}>
          <div className={classes.formA}>
            <SearchForm styles={classes} onChange={onchangeValue}/>
            <LastSearch styles={classes} lastResult={lastResult}/>
          </div>
          <div className={classes.formB}>
            <Result styles={classes} result={result}/>
          </div>
        </div>
    </div>
)};
MainContainer.propTypes = {
  result: PropTypes.array,
  lastResult: PropTypes.object,
  onChange: PropTypes.func,
};
MainContainer.defaultProps = {
  result:[],
  lastResult:{},
  onChange: () => null,
};
export default MainContainer;