import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HolidaylistDTO } from 'src/dto/Holidaylist.dto';
import { Holidaylist001mb } from 'src/entity/Holidaylist001mb.entity';
import { HolidayListService } from 'src/service/holiday-list.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";



@Controller('/testandreportstudio/api/holidaylist')
export class HolidayListController {
	constructor(private readonly  holidayListService : HolidayListService ) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.holidayListService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.holidayListService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()holidaylistDTO: HolidaylistDTO): Promise<Holidaylist001mb> {
		return this.holidayListService.create(holidaylistDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()holidaylistDTO: HolidaylistDTO): Promise<Holidaylist001mb> {
		return this.holidayListService.update(holidaylistDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Holidaylist001mb[]> {
		return this.holidayListService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Holidaylist001mb> {
		return this.holidayListService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.holidayListService.remove(id);
	}
}

