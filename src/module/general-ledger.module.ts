import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralLedgerController } from 'src/controller/General-ledger.controller';
import { Accgenledge001mb } from 'src/entity/Accgenledge001mb.entity';
import { GeneralLedgerService } from 'src/service/general-ledger.service';

@Module({
    imports: [TypeOrmModule.forFeature([Accgenledge001mb])],
    providers: [GeneralLedgerService],
    controllers: [GeneralLedgerController],
})
export class GeneralLedgerModule { }