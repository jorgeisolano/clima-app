export interface Ciudad{
    name : string,
    latitude: number,
    longitude: number,
    admin1: string,
    countryCode: string
}

export interface CiudadResponse{
    results : Ciudad[]
}
