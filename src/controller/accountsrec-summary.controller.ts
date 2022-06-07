import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountsreceivableDTO } from 'src/dto/Accountsreceivable.dto';
import { Accountsreceivable001mb } from 'src/entity/Accountsreceivable001mb.entity';
import { AccountsrecSummaryService } from 'src/service/accountsrec-summary.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/accountsreceivablesummary')
export class AccountsrecSummaryController {
	constructor(private readonly accountsrecSummaryService: AccountsrecSummaryService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accountsrecSummaryService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accountsrecSummaryService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() accountsreceivableDTO: AccountsreceivableDTO): Promise<Accountsreceivable001mb> {
		return this.accountsrecSummaryService.create(accountsreceivableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() accountsreceivableDTO: AccountsreceivableDTO): Promise<Accountsreceivable001mb> {
		return this.accountsrecSummaryService.update(accountsreceivableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Accountsreceivable001mb[]> {
		return this.accountsrecSummaryService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Accountsreceivable001mb> {
		return this.accountsrecSummaryService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.accountsrecSummaryService.remove(id);
	}
}
