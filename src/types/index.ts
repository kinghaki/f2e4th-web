// export interface ICity {
//     name: string,
//     value: string
// }

// type RouteName = {
//     Zh_tw: string,
//     En: string
// }

// type Operator = {
//     OperatorID: string,
//     OperatorName: RouteName,
//     OperatorCode: string,
//     OperatorNo: string
// }
// type StopPosition = {
//     PositionLon: number,
//     PositionLat: number,
//     GeoHash: string
// }
// export type Stop = {
//     StopUID: string,
//     StopID: string,
//     StopName: RouteName,
//     StopBoarding: number,
//     StopSequence: number,
//     StopPosition: StopPosition,
//     StationID: string,
//     LocationCityCode: string,
//     busPosition?: string
// }
// export interface ICityStop{
//     RouteUID: string,
//     RouteID: string,
//     RouteName: RouteName,
//     Operators: Operator[],
//     SubRouteUID: string,
//     SubRouteID: string,
//     SubRouteName: RouteName,
//     Direction: number,
//     City: string,
//     CityCode: string,
//     Stops: Stop[],
//     UpdateTime: string,
//     VersionID: number
