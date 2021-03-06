import {
  IDeviceRow,
  IServiceQueue,
  IServiceRow,
  QueueStatus,
  Service,
} from './Table/Table';

export const deviceList: IDeviceRow[] = [
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_02',
    deviceName: 'Kiosk2',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_02',
    deviceName: 'Kiosk2',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'ABC',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
];
export const serviceDetailList: IServiceRow[] = [
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',
    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_02',
    serviceName: 'Kiosk2',
    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: false,
    serviceUpdate: false,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',
    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_02',
    serviceName: 'Kiosk2',
    isActivated: true,
    serviceDescribe: 'Chi ti???t d???ch v???',
    serviceDetail: false,
    serviceUpdate: false,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'ABC',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi ti???t d???ch v???',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
];
export const queueList: IServiceQueue[] = [
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
];

export const activeStatus = ['T???t c???', 'Ho???t ?????ng', 'Ng??ng ho???t ?????ng'];
export enum EService {
  Heart = 'Kh??m tim m???ch',
  Dental = 'Nha s??',
}
export enum EQueueStatus {
  All = 'T???t c???',
  Pending = '??ang ch???',
  Used = '???? s??? d???ng',
  Aborted = 'B??? qua',
}
export enum EConnectionStatus {
  All = 'T???t c???',
  Connected = 'K???t n???i',
  Disconnected = 'M???t k???t n???i',
}
export enum EQueueProvider {
  All = 'T???t c???',
  Kiosk = 'Kiosk',
  System = 'H??? th???ng',
}
export enum EDeviceType {
  Kiosk = 'Kiosk',
  DisplayCounter = 'Display counter',
}
export enum EGraphDisplayType {
    Day = "Ng??y",
    Week = "Tu???n", 
    Month = "Th??ng"
}
export const grapthDisplayType = [EGraphDisplayType.Day, EGraphDisplayType.Week, EGraphDisplayType.Month]
export const deviveType = [EDeviceType.Kiosk, EDeviceType.DisplayCounter]
export const services = [EService.Heart, EService.Dental];
export const serviceList = [
  'Kh??m tim m???ch',
  'S???n - ph??? khoa',
  'Kh??m tai - m??i - h???ng',
];
export const queueStatus = [
  EQueueStatus.All,
  EQueueStatus.Pending,
  EQueueStatus.Used,
  EQueueStatus.Aborted,
];
export const connectionStatus = [
  EConnectionStatus.All,
  EConnectionStatus.Connected,
  EConnectionStatus.Disconnected,
];
export const queueProvider = [
  EQueueProvider.All,
  EQueueProvider.Kiosk,
  EQueueProvider.System,
];
