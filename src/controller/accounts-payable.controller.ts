import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountspayableDTO } from 'src/dto/Accountspayable.dto';
import { Accountspayable001mb } from 'src/entity/Accountspayable001mb.entity';
import { AccountspayableService } from 'src/service/accounts-payable.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/accountspayable')
export class AccountsPayableController {
	constructor(private readonly accountsPayableService: AccountspayableService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accountsPayableService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accountsPayableService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() accountspayableDTO: AccountspayableDTO): Promise<Accountspayable001mb> {
		return this.accountsPayableService.create(accountspayableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() accountspayableDTO: AccountspayableDTO): Promise<Accountspayable001mb> {
		return this.accountsPayableService.update(accountspayableDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Accountspayable001mb[]> {
		return this.accountsPayableService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Accountspayable001mb> {
		return this.accountsPayableService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.accountsPayableService.remove(id);
	}
}
