import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportsServiceBase } from "./base/reports.service.base";

@Injectable()
export class ReportsService extends ReportsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
