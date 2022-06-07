import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ItempricereportDTO } from 'src/dto/Itempricereport.dto';
import { Itempricereport001mb } from 'src/entity/Itempricereport001mb.entity';
import { ItemPriceReportService } from 'src/service/item-price-report.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/pricereport')
export class ItemPriceReportController {
	constructor(private readonly itemPriceReportService:ItemPriceReportService ) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemPriceReportService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemPriceReportService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()itempricereportDTO:ItempricereportDTO): Promise<Itempricereport001mb> {
		return this.itemPriceReportService.create(itempricereportDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()itempricereportDTO:ItempricereportDTO): Promise<Itempricereport001mb> {
		return this.itemPriceReportService.update(itempricereportDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Itempricereport001mb[]> {
		return this.itemPriceReportService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Itempricereport001mb> {
		return this.itemPriceReportService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.itemPriceReportService.remove(id);
	}
}

