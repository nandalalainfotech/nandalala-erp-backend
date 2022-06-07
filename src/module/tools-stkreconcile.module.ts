import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsStkReconcileController } from 'src/controller/tools-stkreconcile.controller';
import { Stkreconcile001mb } from 'src/entity/Stkreconcile001mb.entity';
import { ToolsStkReconcileService } from 'src/service/tools-stkreconcile.service';

@Module({
    imports: [TypeOrmModule.forFeature([Stkreconcile001mb])],
    providers: [ToolsStkReconcileService],
    controllers: [ToolsStkReconcileController],
})
export class ToolsStkReconcileModule { }
    