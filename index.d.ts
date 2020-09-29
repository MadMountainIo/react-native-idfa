declare module 'react-native-idfa' {
  export namespace IDFA {
    export function getIDFA(): Promise<string>;
    export function requestTrackingPermission(): Promise<string>
  }
}
