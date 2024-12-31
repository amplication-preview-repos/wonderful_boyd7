import { Reports as TReports } from "../api/reports/Reports";

export const REPORTS_TITLE_FIELD = "id";

export const ReportsTitle = (record: TReports): string => {
  return record.id?.toString() || String(record.id);
};
