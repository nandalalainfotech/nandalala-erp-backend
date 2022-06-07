import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmContactController } from "src/controller/crm-contact.controller";
import { Crmspcontact001mb } from "src/entity/Crmspcontact001mb.entity";
import { CrmContactService } from "src/service/crm-contact.service";

@Module({
    imports: [TypeOrmModule.forFeature([Crmspcontact001mb])],
    providers: [CrmContactService],
    controllers: [CrmContactController]
})

export class CrmContactModule {}