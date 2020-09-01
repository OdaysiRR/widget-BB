function getBaseRequestConfig(access_token, customHeaders, customTimeout) {
  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: customTimeout || 6000,
  };

  if (customHeaders) {
    config.headers = customHeaders;
  }

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  return config;
}

const LOCAL_BASE_PATH = `https://api-dev.bowlingbookers.com/api`;

export { getBaseRequestConfig, LOCAL_BASE_PATH };
