import { ReportsWhereInput } from "./ReportsWhereInput";
import { ReportsOrderByInput } from "./ReportsOrderByInput";

export type ReportsFindManyArgs = {
  where?: ReportsWhereInput;
  orderBy?: Array<ReportsOrderByInput>;
  skip?: number;
  take?: number;
};
