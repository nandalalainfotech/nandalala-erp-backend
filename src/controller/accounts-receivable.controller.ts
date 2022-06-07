import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountsreceivableDTO } from 'src/dto/Accountsreceivable.dto';
import { Accountsreceivable001mb } from 'src/entity/Accountsreceivable001mb.entity';
import { AccountsreceivableService } from 'src/service/accounts-receivable.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/accountsreceivable')
export class AccountsReceivableController {
	constructor(private readonly accountsreceivableService: AccountsreceivableService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accountsreceivableService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accountsreceivableService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() accountsreceivableDTO: AccountsreceivableDTO): Promise<Accountsreceivable001mb> {
		return this.accountsreceivableService.create(accountsreceivableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() accountsreceivableDTO: AccountsreceivableDTO): Promise<Accountsreceivable001mb> {
		return this.accountsreceivableService.update(accountsreceivableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Accountsreceivable001mb[]> {
		return this.accountsreceivableService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Accountsreceivable001mb> {
		return this.accountsreceivableService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.accountsreceivableService.remove(id);
	}
}
