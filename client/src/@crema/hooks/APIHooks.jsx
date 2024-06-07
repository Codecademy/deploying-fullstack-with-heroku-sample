import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import jwtAxios from '@crema/services/axios';
import { isRequestSuccessful, sanitizeData } from '@crema/helpers/ApiHelper';

export const useGetDataApi = (
  url,
  initialData = undefined,
  params = {},
  initialCall = true,
  callbackFun,
) => {
  const [skip, setSkip] = useState(0);
  const { fetchError } = useInfoViewActionsContext();
  const [initialUrl, setInitialUrl] = useState(url);
  const [allowApiCall, setAllowApiCall] = useState(initialCall);
  const [loading, setLoading] = useState(initialCall);
  const [isLoadingMore, setLoadingMore] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const [apiData, setData] = useState(initialData);
  const [otherData, setOtherData] = useState(null);
  const [queryParams, updateQueryParams] = useState(params);
  const [isResetRequired, setResetRequired] = useState(false);
  let isResponsePending = false;

  const updateInitialUrl = (value) => {
    setAllowApiCall(true);
    setInitialUrl(value);
  };

  const reCallAPI = () => {
    setQueryParams(queryParams);
  };

  const setQueryParams = (queryParams) => {
    setLoading(true);
    updateQueryParams({ ...queryParams });
    setAllowApiCall(true);
    if (Array.isArray(initialData)) {
      if (!queryParams.skipReset) {
        setSkip(0);
        setResetRequired(true);
      }
    }
  };

  useEffect(() => {
    const fetchData = () => {
      isResponsePending = true;
      if (
        skip === 0 &&
        ((Array.isArray(apiData) && apiData.length === 0) ||
          !Array.isArray(apiData)) &&
        !isResetRequired
      ) {
        setLoading(true);
      }
      if (queryParams.skipReset) {
        setLoading(true);
      }
      let params = {};
      if (!_.isEmpty(queryParams)) {
        params = {
          ...trimObjectValues(queryParams),
        };
      }
      jwtAxios
        .get(initialUrl, { params: params })
        .then((data) => {
          isResponsePending = false;
          if (isRequestSuccessful(data.status)) {
            if (Array.isArray(initialData)) {
              setLoadingMore(false);
              setRefreshing(false);
              setData(data.data);
            } else {
              setData(data.data);
            }
            setLoading(false);
          } else {
            setLoading(false);
            fetchError(data.data.error ? data.data.error : data.data.message);
            setData(initialData);
            if (callbackFun) callbackFun(data.data);
          }
        })
        .catch((error) => {
          console.log('API Failed', initialUrl, error);
          if (error.response.data.message) {
            console.log(initialUrl, error.response.data.message);
            if (callbackFun) callbackFun(error.response.data);
            fetchError(error.response.data.message);
          } else {
            fetchError(error.message);
            if (callbackFun) callbackFun(error);
          }
          setLoading(false);
        });
    };
    if (allowApiCall && !isResponsePending) fetchData();
  }, [initialUrl, skip, queryParams, allowApiCall, isRefreshing]);
  return [
    {
      loading,
      apiData,
      otherData,
      skip,
      isLoadingMore,
      isRefreshing,
      initialUrl,
    },
    {
      setSkip,
      setData,
      setLoading,
      setOtherData,
      updateInitialUrl,
      setQueryParams,
      setLoadingMore,
      setRefreshing,
      reCallAPI,
    },
  ];
};

export const trimObjectValues = (obj) => {
  if (_.isEmpty(obj)) {
    return obj;
  }
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'string') {
      obj[key] = obj[key].trim();
    }
  });
  return obj;
};

const handleApiResponse = (url, fetchSuccess, data, resolve, reject) => {
  console.log(url, data.data);
  fetchSuccess();
  if (isRequestSuccessful(data.status)) {
    return resolve(data.data);
  } else {
    return reject(data.data);
  }
};

const handleAPIError = (url, fetchSuccess, error, reject) => {
  console.log(url, error.response.data.message);
  fetchSuccess();
  if (error.response.data.message) {
    return reject(error.response.data);
  } else {
    return reject(error);
  }
};

export const postDataApi = (
  url,
  infoViewContext,
  payload,
  isHideLoader = false,
  headers,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .post(url, sanitizeData(payload), headers ? { headers } : {})
      .then((data) => {
        return handleApiResponse(url, fetchSuccess, data, resolve, reject);
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};

export const putDataApi = (
  url,
  infoViewContext,
  payload,
  isHideLoader = false,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .put(url, sanitizeData(payload))
      .then((data) => {
        return handleApiResponse(url, fetchSuccess, data, resolve, reject);
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};

export const getDataApi = (
  url,
  infoViewContext,
  params = {},
  isHideLoader = false,
  headers,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .get(url, { params: sanitizeData(params), headers })
      .then((data) => {
        return handleApiResponse(url, fetchSuccess, data, resolve, reject);
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};

export const deleteDataApi = (
  url,
  infoViewContext,
  params,
  isHideLoader = false,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .delete(url, { params })
      .then((data) => {
        return handleApiResponse(url, fetchSuccess, data, resolve, reject);
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};

export const uploadDataApi = (
  url,
  infoViewContext,
  payload,
  isHideLoader = false,
  onUploadProgress = () => {
    console.log('');
  },
  allowDownload = false,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .post(url, payload, {
        onUploadProgress,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        responseType: allowDownload ? 'arraybuffer' : 'stream',
      })
      .then((data) => {
        return handleApiResponse(url, fetchSuccess, data, resolve, reject);
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};

export const uploadPutDataApi = (
  url,
  infoViewContext,
  payload,
  isHideLoader = false,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .put(url, payload, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((data) => {
        return handleApiResponse(url, fetchSuccess, data, resolve, reject);
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};

export const downloadDataApi = (
  url,
  infoViewContext,
  params = {},
  isHideLoader = false,
) => {
  const { fetchStart, fetchSuccess } = infoViewContext;
  return new Promise((resolve, reject) => {
    if (!isHideLoader) fetchStart();
    jwtAxios
      .get(url, {
        params,
        responseType: 'arraybuffer',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        fetchSuccess();
        if (isRequestSuccessful(res.status)) {
          return resolve(res.data);
        } else {
          const data = JSON.parse(
            String.fromCharCode.apply(null, new Uint8Array(res.data)),
          );
          return reject(data);
        }
      })
      .catch((error) => {
        return handleAPIError(url, fetchSuccess, error, reject);
      });
    return Promise.resolve();
  });
};
