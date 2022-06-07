import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { updateBankController } from "src/controller/updatebank.controller";
import { Updatebank001mb } from "src/entity/Updatebank001mb.entity";
import { updateBankService } from "src/service/updatebank.service";

@Module({
    imports: [TypeOrmModule.forFeature([Updatebank001mb])],
    providers: [updateBankService],
    controllers: [updateBankController],
})
export class UpdateBankModule { }