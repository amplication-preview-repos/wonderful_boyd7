import * as graphql from "@nestjs/graphql";
import { ReportsResolverBase } from "./base/reports.resolver.base";
import { Reports } from "./base/Reports";
import { ReportsService } from "./reports.service";

@graphql.Resolver(() => Reports)
export class ReportsResolver extends ReportsResolverBase {
  constructor(protected readonly service: ReportsService) {
    super(service);
  }
}
