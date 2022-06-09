import { createSelector } from 'reselect';

const getList = (state) => ((state?.lastSearch) || []);
export const getListLastSearch =  createSelector(
  [getList],
  data => data
);

