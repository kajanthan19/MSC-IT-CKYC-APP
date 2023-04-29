export interface PricingModal {
    ID :number;
    feetemplateId: string;
    description : string;
    Created_on : string;
    Created_by : string;
    Modified_on: string;
    Modified_by : string;
    approvedby: string;
    approved_on: string;
    status: string;
    feestructure: FeeStructure[];
}

export interface FeeStructure {
    ID :number;
    operationaType: string;
    numberofTransactionFrom: string;
    numberofTransactionto: string;
    pertransactioncost: string;
    
}
