import { EmployeeWhereInput } from "./EmployeeWhereInput";

export type EmployeeListRelationFilter = {
  every?: EmployeeWhereInput;
  some?: EmployeeWhereInput;
  none?: EmployeeWhereInput;
};
