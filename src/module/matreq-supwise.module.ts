import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatreqSupwiseController } from 'src/controller/matreq-supwise.controller';
import { Matreqsunotcreate001mb } from 'src/entity/Matreqsunotcreate001mb.entity';
import { MatreqSupwiseService } from 'src/service/matreq-supwise.service';


@Module({
    imports: [TypeOrmModule.forFeature([Matreqsunotcreate001mb])],
    providers: [MatreqSupwiseService],
    controllers: [MatreqSupwiseController],
})
export class MatreqSupwiseModule { }