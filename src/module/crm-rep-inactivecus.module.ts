import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmRepInactiveCustomerController } from 'src/controller/crm-rep-inactivecus.controller';
import { Inactivecust001mb } from 'src/entity/Inactivecust001mb.entity';
import { CrmRepInactiveCustomerService } from 'src/service/crm-rep-inactivecus.service';

@Module({
    imports: [TypeOrmModule.forFeature([Inactivecust001mb])],
    providers: [CrmRepInactiveCustomerService],
    controllers: [CrmRepInactiveCustomerController],
})
export class CrmRepInactiveCustomerModule { }
