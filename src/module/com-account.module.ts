import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComAccountController } from 'src/controller/Com-account.controller';
import { Companyaccount001mb } from 'src/entity/Companyaccount001mb.entity';
import { ComAccountService } from 'src/service/com-account.service';

@Module({
    imports: [TypeOrmModule.forFeature([Companyaccount001mb])],
    providers: [ComAccountService],
    controllers: [ComAccountController],
})
export class ComAccountModule { }