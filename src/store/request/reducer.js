const initialState = {
  allCareRequests: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "request/allRequestsFetched":
      return { allCareRequests: [...action.payload] };
    case "request/add":
      return { allCareRequests: [...state.allCareRequests, action.payload] };
    default:
      return state;
  }
};
