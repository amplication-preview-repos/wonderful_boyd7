import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryService } from "./inventory.service";
import { InventoryControllerBase } from "./base/inventory.controller.base";

@swagger.ApiTags("inventories")
@common.Controller("inventories")
export class InventoryController extends InventoryControllerBase {
  constructor(protected readonly service: InventoryService) {
    super(service);
  }
}
