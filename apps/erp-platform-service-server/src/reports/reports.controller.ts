import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportsService } from "./reports.service";
import { ReportsControllerBase } from "./base/reports.controller.base";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportsController extends ReportsControllerBase {
  constructor(protected readonly service: ReportsService) {
    super(service);
  }
}
