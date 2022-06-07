import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SalarycomponentDTO } from 'src/dto/Salarycomponent.dto';
import { Salarycomponent001mb } from 'src/entity/Salarycomponent001mb.entity';
import { HrSalComponentService } from 'src/service/hr-sal-component.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/component')
export class HrSalComponentController {
	constructor(private readonly salComponentService: HrSalComponentService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salComponentService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salComponentService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() salarycomponentDTO: SalarycomponentDTO): Promise<Salarycomponent001mb> {
		return this.salComponentService.create(salarycomponentDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()salarycomponentDTO: SalarycomponentDTO): Promise<Salarycomponent001mb> {
		return this.salComponentService.update(salarycomponentDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Salarycomponent001mb[]> {
		return this.salComponentService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Salarycomponent001mb> {
		return this.salComponentService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.salComponentService.remove(id);
	}
}
