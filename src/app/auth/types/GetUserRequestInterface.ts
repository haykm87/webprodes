export interface GetUserRequestInterface {
  users: User[]
}
export interface User
{
    "localId": string,
    "email": string,
    "emailVerified": boolean,
    "displayName": string,
    "providerUserInfo": ProviderUserInfo[],
    "photoUrl": string,
    "passwordHash": string,
    "passwordUpdatedAt": string,
    "validSince": string,
    "disabled": boolean,
    "lastLoginAt": string,
    "createdAt": string,
    "customAuth": boolean

}

export interface ProviderUserInfo {
  providerId: string
  displayName: string
  photoUrl: string
  federatedId: string
  email: string
  rawId: string
  screenName: string
}
