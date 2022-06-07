import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { TrialbalanceDTO } from "src/dto/Trialbalance.dto";
import { Trialbalance001mb } from "src/entity/Trialbalance001mb.entity";
import { TrailBalanceservice } from "src/service/trailbalance.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/trialbalance')
export class TrailBalancecontroller {
    constructor(private readonly trailbalanceservice: TrailBalanceservice) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.trailbalanceservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.trailbalanceservice.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() trialbalanceDTO: TrialbalanceDTO): Promise<Trialbalance001mb> {
        return this.trailbalanceservice.create(trialbalanceDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() trialbalanceDTO: TrialbalanceDTO): Promise<Trialbalance001mb> {
        return this.trailbalanceservice.create(trialbalanceDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
	findAll(): Promise<Trialbalance001mb[]> {
		return this.trailbalanceservice.findAll();
	}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
	findOne(@Param('id') id: string): Promise<Trialbalance001mb> {
		return this.trailbalanceservice.findOne(id);
	}

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.trailbalanceservice.remove(id);
	}
}