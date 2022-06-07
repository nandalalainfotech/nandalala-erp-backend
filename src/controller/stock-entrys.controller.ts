import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { StockentryDTO } from "src/dto/Stockentry.dto";
import { Stockentry001mb } from "src/entity/Stockentry001mb.entity";
import { StockEntryService } from "src/service/stock-entrys.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/stockentrys')
export class StockEntryController {
	constructor(private readonly stockEntryService: StockEntryService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.stockEntryService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.stockEntryService.downloadExcel(request, response);
	}


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() stockentryDTO: StockentryDTO): Promise<Stockentry001mb> {
		return this.stockEntryService.create(stockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() stockentryDTO: StockentryDTO): Promise<Stockentry001mb> {
		return this.stockEntryService.update(stockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Stockentry001mb[]> {
		return this.stockEntryService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Stockentry001mb> {
		return this.stockEntryService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.stockEntryService.remove(id);
	}
}
