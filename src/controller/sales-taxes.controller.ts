import { Controller, Body, Put, Get, Param, Delete, Post, UseGuards, Header, Req, Res } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { SalestaxesandtemplatesDTO } from "src/dto/Salestaxesandtemplates.dto";
import { Salestaxesandtemplates001mb } from "src/entity/Salestaxesandtemplates001mb.entity";
import { SalesTaxService } from "src/service/sales-taxes.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/salestaxes')
export class SalesTaxController {
	constructor(private readonly salesTaxService: SalesTaxService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salesTaxService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salesTaxService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() salestaxesandtemplatesDTO: SalestaxesandtemplatesDTO): Promise<Salestaxesandtemplates001mb> {
		return this.salesTaxService.create(salestaxesandtemplatesDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() salestaxesandtemplatesDTO: SalestaxesandtemplatesDTO): Promise<Salestaxesandtemplates001mb> {
		return this.salesTaxService.update(salestaxesandtemplatesDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Salestaxesandtemplates001mb[]> {
		return this.salesTaxService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Salestaxesandtemplates001mb> {
		return this.salesTaxService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.salesTaxService.remove(id);
	}
}