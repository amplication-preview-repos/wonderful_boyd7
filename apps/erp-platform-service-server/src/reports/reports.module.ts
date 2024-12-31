import { Module } from "@nestjs/common";
import { ReportsModuleBase } from "./base/reports.module.base";
import { ReportsService } from "./reports.service";
import { ReportsController } from "./reports.controller";
import { ReportsResolver } from "./reports.resolver";

@Module({
  imports: [ReportsModuleBase],
  controllers: [ReportsController],
  providers: [ReportsService, ReportsResolver],
  exports: [ReportsService],
})
export class ReportsModule {}
