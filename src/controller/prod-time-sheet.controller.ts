import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdtimesheetDTO } from 'src/dto/Prodtimesheet.dto';
import { Prodtimesheet001mb } from 'src/entity/Prodtimesheet001mb.entity';
import { ProdTimeSheetService } from 'src/service/prod-timest.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/prodtimesheet')
export class ProdTimeSheetController {
	constructor(private readonly prodTimeSheetService: ProdTimeSheetService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prodTimeSheetService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.prodTimeSheetService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodtimesheetDTO: ProdtimesheetDTO): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.create(prodtimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodtimesheetDTO: ProdtimesheetDTO): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.update(prodtimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodtimesheet001mb[]> {
		return this.prodTimeSheetService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodTimeSheetService.remove(id);
	}
}
