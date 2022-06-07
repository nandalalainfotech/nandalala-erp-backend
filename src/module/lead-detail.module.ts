import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeadDetailController } from "src/controller/lead-detail.controller";
import { Lead001mb } from "src/entity/Lead001mb.entity";
import { LeadDetailService } from "src/service/lead-detail.service";

@Module({
    imports: [TypeOrmModule.forFeature([Lead001mb])],
    providers: [LeadDetailService],
    controllers: [LeadDetailController]
})

export class LeadDetailModule {}