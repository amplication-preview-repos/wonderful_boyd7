import { Module } from "@nestjs/common";
import { InvoiceModule } from "./invoice/invoice.module";
import { InventoryModule } from "./inventory/inventory.module";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";
import { SupplierModule } from "./supplier/supplier.module";
import { CustomerModule } from "./customer/customer.module";
import { EmployeeModule } from "./employee/employee.module";
import { ReportsModule } from "./reports/reports.module";
import { ShipmentModule } from "./shipment/shipment.module";
import { PaymentModule } from "./payment/payment.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    InvoiceModule,
    InventoryModule,
    OrderModule,
    ProductModule,
    UserModule,
    SupplierModule,
    CustomerModule,
    EmployeeModule,
    ReportsModule,
    ShipmentModule,
    PaymentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
