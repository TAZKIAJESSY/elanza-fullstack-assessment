export const selectOpenRequests = (state) =>
  state.request.allCareRequests.filter((req) => req.isOpen);
