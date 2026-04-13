export type IPData = {
    ip: string;
    isp: string;
    as: {
        asn: number;
        name: string;
        route: string;
        domain: string;
        type: string;
    }
    location: {
    city: string;
    region: string;
    country: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
    }
}