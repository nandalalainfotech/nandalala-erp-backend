import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JounalentryDTO } from 'src/dto/Jounalentry.dto';
import { Jounalentry001mb } from 'src/entity/Jounalentry001mb.entity';
import { JournalEntryService } from 'src/service/journal-entry.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/journalentry')
export class JournalEntryController {
    constructor(private readonly journalentryService: JournalEntryService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.journalentryService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.journalentryService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() jounalentryDTO: JounalentryDTO): Promise<Jounalentry001mb> {
        return this.journalentryService.create(jounalentryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() jounalentryDTO: JounalentryDTO): Promise<Jounalentry001mb> {
        return this.journalentryService.update(jounalentryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Jounalentry001mb[]> {
        return this.journalentryService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Jounalentry001mb> {
        return this.journalentryService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.journalentryService.remove(id);
    }
}
