import { createSelector } from 'reselect';

const selectUser  = (state) => state.user;

const selectTrucks = (state) => state.trucks;


const makeSelectCurrentUser = () => createSelector(
  selectUser,
  (state) => state.user
);

const makeSelectUserError = () => createSelector(
    selectUser,
    (state) => state.error
);

const makeSelectTrucksPos = () => createSelector(
    selectTrucks,
    (state) => state.positions
);

export {
    makeSelectCurrentUser,
    makeSelectUserError,
    makeSelectTrucksPos,
}
