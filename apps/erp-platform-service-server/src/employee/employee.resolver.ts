import * as graphql from "@nestjs/graphql";
import { EmployeeResolverBase } from "./base/employee.resolver.base";
import { Employee } from "./base/Employee";
import { EmployeeService } from "./employee.service";

@graphql.Resolver(() => Employee)
export class EmployeeResolver extends EmployeeResolverBase {
  constructor(protected readonly service: EmployeeService) {
    super(service);
  }
}
