import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsInstallNoteController } from 'src/controller/tools-instalnote.controller';
import { Instalnote001mb } from 'src/entity/Instalnote001mb.entity';
import { ToolsInstallNoteService } from 'src/service/tool-installnote.service';

@Module({
    imports: [TypeOrmModule.forFeature([Instalnote001mb])],
    providers: [ToolsInstallNoteService],
    controllers: [ToolsInstallNoteController],
})
export class ToolsInstallNoteModule { }
