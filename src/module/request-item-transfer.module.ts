import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestItemTransferController } from 'src/controller/request-item-transfer.controller';
import { Reqitemtransfer001mb } from 'src/entity/Reqitemtransfer001mb.entity';
import { RequestItemTransferService } from 'src/service/request-item-transfer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reqitemtransfer001mb])],
  providers: [RequestItemTransferService],
  controllers: [RequestItemTransferController],
})
export class RequestItemTransferModule {}
