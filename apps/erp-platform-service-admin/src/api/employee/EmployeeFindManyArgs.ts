import { EmployeeWhereInput } from "./EmployeeWhereInput";
import { EmployeeOrderByInput } from "./EmployeeOrderByInput";

export type EmployeeFindManyArgs = {
  where?: EmployeeWhereInput;
  orderBy?: Array<EmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
