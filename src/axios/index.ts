import axios from 'axios';
import { webToken2, webToken3 } from './intercept';

/**
 * TDX api v2
 */

// GET 取得指定[縣市]的市區公車路線資料
export const apiGetCityRoute = (city: string) => webToken2.get(`/v2/Bus/Route/City/${city}`);

// GET 取得指定[縣市],[路線名稱]的市區公車顯示用路線站序資料
export const apiGetCityStops = (city: string, routeName: string): Promise<any[]> => webToken2.get(`/v2/Bus/StopOfRoute/City/${city}/${routeName}`);

// GET 取得指定[縣市],[路線名稱]的公車預估到站資料(N1)[批次更新]
export const apiGetCityEstimatedTimeOfArrival = (city: string, routeName: string): Promise<any[]> => webToken2.get(`v2/Bus/EstimatedTimeOfArrival/City/${city}/${routeName}`);

// GET 取得指定[縣市],[路線名稱]的公車動態定點資料(A2)[批次更新]
export const apiGetCityRealTimeNearStop = (city: string, routeName: string): Promise<any[]> => webToken2.get(`v2/Bus/RealTimeNearStop/City/${city}/${routeName}`);
/**
 * TDX api v3
 */

/**
 *  GET 取得縣市引用參數
 */
export const apiGetCityList = () => webToken3.get('/V3/Map/Basic/City');
