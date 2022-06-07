import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { MatchpaymentDTO } from "src/dto/Matchpayment.dto";
import { Matchpayment001mb } from "src/entity/Matchpayment001mb.entity";
import { MatchPaymentService } from "src/service/matchpayment.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/matchpayments')
export class MatchPaymentController {
    constructor(private readonly matchpaymentservice: MatchPaymentService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.matchpaymentservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.matchpaymentservice.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() matchpaymentDTO: MatchpaymentDTO): Promise<Matchpayment001mb> {
        return this.matchpaymentservice.create(matchpaymentDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() matchpaymentDTO: MatchpaymentDTO): Promise<Matchpayment001mb> {
        return this.matchpaymentservice.create(matchpaymentDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
	findAll(): Promise<Matchpayment001mb[]> {
		return this.matchpaymentservice.findAll();
	}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
	findOne(@Param('id') id: string): Promise<Matchpayment001mb> {
		return this.matchpaymentservice.findOne(id);
	}

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.matchpaymentservice.remove(id);
	}
}