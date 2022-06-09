import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux'; 
import MainContainer from '../components/pageComponent';
import {getListLastSearch} from '../selectors';
import { getResult } from '../action';

const RootContainer = ({
  lastWord,
  getListResult,
}) => {

  const [value, setValue]= useState();
  
  const searchTag = useCallback((value) => {
    setValue(value);
    if(value && value !== ''){
      getListResult(value);
    }
  },[setValue, getListResult]);

  const searchResult = useMemo(()=>(
    value?.length>0 ? lastWord[value] :[]
  ),[value,lastWord]);

  return (
      <MainContainer 
        result={searchResult}
        onchangeValue={searchTag}
        lastResult={lastWord}
    />
  )
};
const mapStateToProps = (state) => ({ 
  lastWord: getListLastSearch(state), 
});
const mapDistpatchToProps =  {
  getListResult : getResult,
};
export default connect(mapStateToProps, mapDistpatchToProps)(RootContainer);