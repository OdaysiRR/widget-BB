import { getBaseRequestConfig, LOCAL_BASE_PATH } from "./baseRequestConfig";
import httpRequest from "./httpRequest";

export function fetchWidget(id) {
  const urlSegment = `/widgets/${id}`;
  const baseRequestConfig = getBaseRequestConfig();
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url
  });

  return httpRequest(requestConfig);
}

/*export function fetchCustomerGroups(access_token, bowlingCenterId) {
  const urlSegment = `/customergroups?bowlingcenterId=${bowlingCenterId}`;
  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url
  });

  return httpRequest(requestConfig);
}*/

export function fetchTimeSlots(access_token, data) {
  const urlSegment = `/availabletimes`;

  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
    method: "POST",
    data: data
  });

  return httpRequest(requestConfig);
}

export function fetchPricing(access_token, data) {
  const urlSegment = `/bookings/price`;

  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
    method: "POST",
    data: data
  });

  return httpRequest(requestConfig);
}

/*export function createBooking(access_token, paymentId) {
  const urlSegment = `/bookings/intent/${paymentId}`;

  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;
  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
    method: "GET",
    timeout: 30000,
  });

  return httpRequest(requestConfig);
}*/

/*export function createPayment(access_token, data) {
  const urlSegment = `/bookings/createPayment`;

  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;
  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
    method: "POST",
    data: {...data}
  });

  return httpRequest(requestConfig);
}*/

/*export function cancelPayment(access_token, paymentId) {
  const urlSegment = `/bookings/cancelPayment`;
  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
    method: "POST",
    data: {paymentId}
  });

  return httpRequest(requestConfig);
}*/

/*export function getBookingDetails(access_token, id) {
  const urlSegment = `/bookings/cancel/${id}`;
  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url
  });

  return httpRequest(requestConfig);
}*/



/*export function cancelBooking(access_token, id) {
  const urlSegment = `/bookings/cancel/${id}`;
  const baseRequestConfig = getBaseRequestConfig(access_token);
  const url = `${LOCAL_BASE_PATH}${urlSegment}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
    method: 'DELETE'
  });

  return httpRequest(requestConfig);
}*/

