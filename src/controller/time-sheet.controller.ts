import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DailytimesheetDTO } from 'src/dto/Dailytimesheet.dto';
import { Dailytimesheet001mb } from 'src/entity/Dailytimesheet001mb.entity';
import { TimeSheetService } from 'src/service/time-sheet.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/timesheet')
export class TimeSheetController {
	constructor(private readonly timeSheetService:TimeSheetService ) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.timeSheetService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.timeSheetService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()dailytimesheetDTO:DailytimesheetDTO): Promise<Dailytimesheet001mb> {
		return this.timeSheetService.create(dailytimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()dailytimesheetDTO:DailytimesheetDTO): Promise<Dailytimesheet001mb> {
		return this.timeSheetService.update(dailytimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Dailytimesheet001mb[]> {
		return this.timeSheetService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Dailytimesheet001mb> {
		return this.timeSheetService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.timeSheetService.remove(id);
	}
}

