export interface CustomerData {
    ID :number;
    fullname: string;
    customertype: string;
    identityNo: string;
    occupation: string;
    contactno: string;
    dob: string;
    district: string;
    modifiedby : string;
    modifieddate : string;
    status: string;
    addressList: AddressData[];
    contactList: ContactData[];
}


export interface AddressData {
    ID :number;
    addresstype: string;
    address: string;
    district: string;
    isprimary: boolean;

}


export interface ContactData {
    ID :number;
    contacttype: string;
    contactno: string;
    homeno: string;
    isprimary: boolean;
}