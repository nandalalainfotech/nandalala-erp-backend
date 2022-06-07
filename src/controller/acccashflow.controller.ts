import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { AcccashflowDTO } from "src/dto/Acccashflow.dto";
import { Acccashflow001mb } from "src/entity/Acccashflow001mb.entity";
import { AccCashFlowService } from "src/service/acccashflow.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/cashflow')
export class AccCashFlowController {
    constructor(private readonly acccashflowservice: AccCashFlowService) { }


    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.acccashflowservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.acccashflowservice.downloadExcel(request, response);
	}

   
    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() acccashflowDTO: AcccashflowDTO): Promise<Acccashflow001mb> {
        return this.acccashflowservice.create(acccashflowDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() acccashflowDTO: AcccashflowDTO): Promise<Acccashflow001mb> {
        return this.acccashflowservice.create(acccashflowDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
	findAll(): Promise<Acccashflow001mb[]> {
		return this.acccashflowservice.findAll();
	}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
	findOne(@Param('id') id: string): Promise<Acccashflow001mb> {
		return this.acccashflowservice.findOne(id);
	}
    
    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.acccashflowservice.remove(id);
	}
}