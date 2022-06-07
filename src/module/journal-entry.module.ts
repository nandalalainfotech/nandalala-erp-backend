import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntryController } from 'src/controller/Journal-Entry.controller';
import { Jounalentry001mb } from 'src/entity/Jounalentry001mb.entity';
import { JournalEntryService } from 'src/service/journal-entry.service';

@Module({
    imports: [TypeOrmModule.forFeature([Jounalentry001mb])],
    providers: [JournalEntryService],
    controllers: [JournalEntryController],
})
export class JournalEntryModule { }