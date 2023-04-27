import { ApprovalData } from "../models/approval";

export const APPROVALDATA: ApprovalData[] = [
    {
      ID : 1,
      action: 'Consumer Addition',
      status : 'Pending',
      modifiedby: 'User 1',
      modifieddate: '22-04-2023',
      rejectcomment: '',
      approvalcomment: ''
    },
    {
        ID : 2,
        action: 'Consumer Modification',
        status : 'Pending',
        modifiedby: 'User 2',
        modifieddate: '21-04-2023',
        rejectcomment: '',
        approvalcomment: ''
      },
      {
        ID : 3,
        action: 'Fee Template Change',
        status : 'Pending',
        modifiedby: 'User 3',
        modifieddate: '22-04-2023',
        rejectcomment: '',
        approvalcomment: ''
      }
  ]
  