import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * axios
 */
export const AppID = import.meta.env.MODE === 'dev' ? import.meta.env.VITE_APPID : 'd5a6593d182e41f5a7a7ecf37394918a';

export const AppKey = import.meta.env.MODE === 'dev' ? import.meta.env.VITE_APPKey : 'VaIEYF4NnTH_OKWEunqEbz6sTgg';

export const webTokenRequestV2 = axios.create({
  /** 之後來研究 process.env 寫法 */
  baseURL: 'https://ptx.transportdata.tw/MOTC',
  timeout: 15000, // 指定請求超時的毫秒數(0 表示無超時時間) // 如果請求話費了超過`timeout` 的時間，請求將被中斷
  responseType: 'json'
});
export const webTokenRequestV3 = axios.create({
  /** 之後來研究 process.env 寫法 */
  baseURL: 'https://gist.motc.gov.tw/gist_api',
  timeout: 15000, // 指定請求超時的毫秒數(0 表示無超時時間) // 如果請求話費了超過`timeout` 的時間，請求將被中斷
  responseType: 'json'
});
