import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountspayableDTO } from 'src/dto/Accountspayable.dto';
import { Accountspayable001mb } from 'src/entity/Accountspayable001mb.entity';
import { AccountspaySummaryService } from 'src/service/accountspay-summary.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/accountspayable')
export class AccountsPaySummaryController {
	constructor(private readonly accountsPaySummaryService: AccountspaySummaryService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accountsPaySummaryService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accountsPaySummaryService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() accountspayableDTO: AccountspayableDTO): Promise<Accountspayable001mb> {
		return this.accountsPaySummaryService.create(accountspayableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() accountspayableDTO: AccountspayableDTO): Promise<Accountspayable001mb> {
		return this.accountsPaySummaryService.update(accountspayableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Accountspayable001mb[]> {
		return this.accountsPaySummaryService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Accountspayable001mb> {
		return this.accountsPaySummaryService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.accountsPaySummaryService.remove(id);
	}
}
