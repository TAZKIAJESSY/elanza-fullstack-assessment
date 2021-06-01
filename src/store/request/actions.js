import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:8080";

export function allRequestsFetched(requests) {
  return {
    type: "request/allRequestsFetched",
    payload: requests,
  };
}

// Get all requests
export const getAllRequests = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/carerequests`);
    dispatch(allRequestsFetched(response.data));
  } catch (error) {
    console.log(error.message);
  }
};

// Add new care request
export function addNewRequest(request) {
  return {
    type: "request/add",
    payload: request,
  };
}

// Create new request
export const createNewRequest =
  ({ clientName, careType, startDate, endDate, extraInformation, isOpen }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/carerequests`, {
        clientName,
        careType,
        startDate,
        endDate,
        extraInformation,
        isOpen,
      });
      dispatch(addNewRequest(response.data));

      console.log("create request");
    } catch (error) {
      console.log(error.message);
    }
  };
