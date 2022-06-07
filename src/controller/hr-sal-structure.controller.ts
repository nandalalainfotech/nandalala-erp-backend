import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SalarystructureDTO } from 'src/dto/Salarystructure.dto';
import { Salarystructure001mb } from 'src/entity/Salarystructure001mb.entity';
import { HrSalaryStructureService } from 'src/service/hr-sal-structure.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/salary')
export class HrSalaryStructureController {
	constructor(private readonly salaryStructureService: HrSalaryStructureService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salaryStructureService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salaryStructureService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() salarystructureDTO: SalarystructureDTO): Promise<Salarystructure001mb> {
		return this.salaryStructureService.create(salarystructureDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() salarystructureDTO: SalarystructureDTO): Promise<Salarystructure001mb> {
		return this.salaryStructureService.update(salarystructureDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Salarystructure001mb[]> {
		return this.salaryStructureService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Salarystructure001mb> {
		return this.salaryStructureService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.salaryStructureService.remove(id);
	}
}
