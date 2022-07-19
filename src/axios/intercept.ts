import axios from 'axios';
import { webTokenRequestV2, webTokenRequestV3, AppID, AppKey } from './config';

webTokenRequestV2.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  console.log('error:: ', error);
  return Promise.reject(error);
});
webTokenRequestV3.interceptors.request.use(function (config) {
  // header

  return config;
}, function (error) {
  console.log('error:: ', error);
  return Promise.reject(error);
});

// Response攔截器
webTokenRequestV2.interceptors.response.use(
  function (response) {
    console.log(response.config.url);
    console.log(response);
    return response.data;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
      case 400:
        // 發生錯誤
        alert('400 發生錯誤');
        console.error('400 發生錯誤');
        break;
      case 404:
        // 你要找的頁面不存在
        alert('404 你要找的頁面不存在');
        console.error('404 你要找的頁面不存在');
        break;
      case 500:
        // 程式發生錯誤，請聯絡管理員
        alert('500 程式發生錯誤，請聯絡管理員');
        console.error('500 程式發生錯誤，請聯絡管理員');
        break;
      default:
        // 系統發生非預期錯誤，請聯絡管理員
        alert('系統發生非預期錯誤，請聯絡管理員');
        console.error('系統發生非預期錯誤，請聯絡管理員');
      }
      console.log(error.response.status);
    }
    if (!window.navigator.onLine) {
      // 沒有網路連線
      alert('沒有網路連線');
      console.error('沒有網路連線');
      return;
    }
    return Promise.reject(error.response);
  }
);
webTokenRequestV3.interceptors.response.use(
  function (response) {
    console.log(response.config.url);
    console.log(response);
    return response.data;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
      case 400:
        // 發生錯誤
        alert('400 發生錯誤');
        console.error('400 發生錯誤');
        break;
      case 404:
        // 你要找的頁面不存在
        alert('404 你要找的頁面不存在');
        console.error('404 你要找的頁面不存在');
        break;
      case 500:
        // 程式發生錯誤，請聯絡管理員
        alert('500 程式發生錯誤，請聯絡管理員');
        console.error('500 程式發生錯誤，請聯絡管理員');
        break;
      default:
        // 系統發生非預期錯誤，請聯絡管理員
        alert('系統發生非預期錯誤，請聯絡管理員');
        console.error('系統發生非預期錯誤，請聯絡管理員');
      }
      console.log(error.response.status);
    }
    if (!window.navigator.onLine) {
      // 沒有網路連線
      alert('沒有網路連線');
      console.error('沒有網路連線');
      return;
    }
    return Promise.reject(error.response);
  }
);

export const webToken2 = webTokenRequestV2;
export const webToken3 = webTokenRequestV3;
