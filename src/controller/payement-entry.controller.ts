import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PaymententryDTO } from 'src/dto/Paymententry.dto';
import { Paymententry001mb } from 'src/entity/Paymententry001mb.entity';
import { PayementEntryService } from 'src/service/payement-entry.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/payementEntry')
export class PayementEntryController {
	constructor(private readonly  payementEntryService: PayementEntryService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.payementEntryService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.payementEntryService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()paymententryDTO: PaymententryDTO): Promise<Paymententry001mb> {
		return this.payementEntryService.create(paymententryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()paymententryDTO: PaymententryDTO): Promise<Paymententry001mb> {
		return this.payementEntryService.update(paymententryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Paymententry001mb[]> {
		return this.payementEntryService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Paymententry001mb> {
		return this.payementEntryService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.payementEntryService.remove(id);
	}
}

