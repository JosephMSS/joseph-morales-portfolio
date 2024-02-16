import { useEffect, useState } from "react";
import { STATUS } from "./models/status.model";

/**
 * Custom hook for making API calls and managing loading state.
 * @returns {{ status: string, callEndpoint: Function }} Object with loading state and function to call endpoint.
 */
const useFetchAndLoad = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  
  let controller; // AbortController;
  
  /**
   * Makes the API call to the endpoint.
   * @param {Object} httpCall Object containing the API call and abort controller.
   * @param {Function} httpCall.call Function for making the API call.
   * @param {AbortController} [httpCall.controller] Optional abort controller for the API call.
   * @returns {Promise<Object>} Promise resolving with the result of the API call.
   * @throws {Error} Error if the API call fails.
   */
  const callEndpoint = async (httpCall) => {
    if (httpCall.controller) controller = httpCall.controller;

    setStatus(STATUS.LOADING);
    let result = {};
    try {
      result = await httpCall.call;
    } catch (err) {
      setStatus(STATUS.ERROR);
      throw err;
    }
    setStatus(STATUS.SUCCESS);
    return result;
  };
  
  /**
   * Cancels the request if the component is unmounted.
   */
  const cancelEndpoint = () => {
    setStatus(STATUS.IDLE);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { status, callEndpoint };
};

export default useFetchAndLoad;
