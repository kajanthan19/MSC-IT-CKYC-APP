import { RoleAccess } from "../models/role-access";

export const ROLEACCESSDATA: RoleAccess[] = [
  {
    ID: 33,
    rolename: "Admin",
    pagename: "Consumers",
    isview: true,
    ismodify: true,
    isadd: true,
    isdelete: true,
  },
  {
    ID: 33,
    rolename: "Admin",
    pagename: "Consumer Group",
    isview: true,
    ismodify: true,
    isadd: true,
    isdelete: false,
  },
  {
    ID: 33,
    rolename: "Admin",
    pagename: "Customers",
    isview: true,
    ismodify: true,
    isadd: false,
    isdelete: false,
  },
];
