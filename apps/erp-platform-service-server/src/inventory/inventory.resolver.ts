import * as graphql from "@nestjs/graphql";
import { InventoryResolverBase } from "./base/inventory.resolver.base";
import { Inventory } from "./base/Inventory";
import { InventoryService } from "./inventory.service";

@graphql.Resolver(() => Inventory)
export class InventoryResolver extends InventoryResolverBase {
  constructor(protected readonly service: InventoryService) {
    super(service);
  }
}
