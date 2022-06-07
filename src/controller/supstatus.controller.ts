import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SupstatusDTO } from 'src/dto/Supstatus.dto';
import { Supstatus001mb } from 'src/entity/Supstatus001mb.entity';
import { SupStatusService } from 'src/service/supstatus.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/supplierstatus')
export class SupStatusController {
	constructor(private readonly supstatusrService: SupStatusService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.supstatusrService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.supstatusrService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() supstatusDTO: SupstatusDTO): Promise<Supstatus001mb> {
		return this.supstatusrService.create(supstatusDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() supstatusDTO: SupstatusDTO): Promise<Supstatus001mb> {
		return this.supstatusrService.update(supstatusDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Supstatus001mb[]> {
		return this.supstatusrService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Supstatus001mb> {
		return this.supstatusrService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.supstatusrService.remove(id);
	}
}
