import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SupplierDTO } from 'src/dto/Supplier.dto';
import { Supplier001mb } from 'src/entity/Supplier001mb.entity';
import { SupplierService } from 'src/service/supplier.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/supplier')
export class SupplierController {
	constructor(private readonly supplierService: SupplierService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.supplierService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.supplierService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() supplier: SupplierDTO): Promise<Supplier001mb> {
		return this.supplierService.create(supplier);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() supplier: SupplierDTO): Promise<Supplier001mb> {
		return this.supplierService.update(supplier);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Supplier001mb[]> {
		return this.supplierService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Supplier001mb> {
		return this.supplierService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.supplierService.remove(id);
	}
}
