export const selectTotalCampers = (state) => state.campers.totalItems;

export const selectAllCampers = (state) => state.campers.items;

export const selectCamperById = (state) => state.campers.camper;

export const selectLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;