import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdorderDTO } from 'src/dto/Prodorder.dto';
import { Prodorder001mb } from 'src/entity/Prodorder001mb.entity';
import { ProdOrderService } from 'src/service/prod-order.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/prodorder')
export class ProdOrderController {
	constructor(private readonly prodOrderService: ProdOrderService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prodOrderService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.prodOrderService.downloadExcel(request, response);
	}
	
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		return this.prodOrderService.create(prodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		return this.prodOrderService.update(prodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodorder001mb[]> {
		return this.prodOrderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodorder001mb> {
		return this.prodOrderService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {

		return this.prodOrderService.remove(id);
	}



}
