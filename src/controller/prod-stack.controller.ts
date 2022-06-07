import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdstockentryDTO } from 'src/dto/Prodstockentry.dto';
import { Prodstockentry001mb } from 'src/entity/Prodstockentry001mb.entity';
import { ProdStockService } from 'src/service/prod-stack.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/prodstock')
export class ProdStockController {
	constructor(private readonly prodStockService: ProdStockService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prodStockService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.prodStockService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		return this.prodStockService.create(prodstockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		return this.prodStockService.update(prodstockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodstockentry001mb[]> {
		return this.prodStockService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodstockentry001mb> {
		return this.prodStockService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodStockService.remove(id);
	}
}
