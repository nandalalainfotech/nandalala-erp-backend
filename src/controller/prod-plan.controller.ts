import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdplanDTO } from 'src/dto/Prodplan.dto';
import { Prodplan001mb } from 'src/entity/Prodplan001mb.entity';
import { ProdPlanService } from 'src/service/prod-plan.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/prodplan')
export class ProdPlanController {
	constructor(private readonly prodPlanService: ProdPlanService) { }
	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prodPlanService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
		async downloadExcel(@Req() request: Request, @Res() response: Response) {
			return await this.prodPlanService.downloadExcel(request, response);
		}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodplanDTO: ProdplanDTO): Promise<Prodplan001mb> {
		return this.prodPlanService.create(prodplanDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() ProdplanDTO: ProdplanDTO): Promise<Prodplan001mb> {
		return this.prodPlanService.update(ProdplanDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodplan001mb[]> {
		return this.prodPlanService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodplan001mb> {
		return this.prodPlanService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodPlanService.remove(id);
	}
}
