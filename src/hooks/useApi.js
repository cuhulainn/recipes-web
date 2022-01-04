import { useCallback, useReducer } from "react";

const useApi = (apiFunc, dataKey) => {
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        localStorage.setItem(dataKey, JSON.stringify(action.payload));
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: JSON.parse(localStorage.getItem(dataKey)) || [],
  });

  const request = useCallback(
    async (...args) => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const cachedData = localStorage.getItem(dataKey);
        if (cachedData) {
          dispatch({ type: "FETCH_SUCCESS", payload: JSON.parse(cachedData) });
        } else {
          const result = await apiFunc(...args);
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (err) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    },
    [apiFunc, dataKey]
  );

  return {
    data: state.data,
    isLoading: state.isLoading,
    isError: state.isError,
    request,
  };
};

export default useApi;
