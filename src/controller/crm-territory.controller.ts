import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TerritoryDTO } from 'src/dto/Territory.dto';
import { Territory001mb } from 'src/entity/Territory001mb.entity';
import { CrmTerritoryService } from 'src/service/crm-territory.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/crmterritory')
export class CrmTerritoryController {
	constructor(private readonly crmTerritoryService:CrmTerritoryService ) { }

	@Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.crmTerritoryService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.crmTerritoryService.downloadExcel(request, response);
    }

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()territoryDTO:TerritoryDTO): Promise<Territory001mb> {
		return this.crmTerritoryService.create(territoryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()territoryDTO:TerritoryDTO): Promise<Territory001mb> {
		return this.crmTerritoryService.update(territoryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Territory001mb[]> {
		return this.crmTerritoryService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Territory001mb> {
		return this.crmTerritoryService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.crmTerritoryService.remove(id);
	}
}

