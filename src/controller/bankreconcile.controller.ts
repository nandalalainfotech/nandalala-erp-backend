import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { BankreconcileDTO } from "src/dto/Bankreconcile.dto";
import { Bankreconcile001mb } from "src/entity/Bankreconcile001mb.entity";
import { BankreConcileService } from "src/service/bankreconcile.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/bankreconciliation')
export class BankreConcileController {
    constructor(private readonly bankreconcileservice: BankreConcileService) { }


    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.bankreconcileservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.bankreconcileservice.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() bankreconcileDTO: BankreconcileDTO): Promise<Bankreconcile001mb> {
        return this.bankreconcileservice.create(bankreconcileDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() bankreconcileDTO: BankreconcileDTO): Promise<Bankreconcile001mb> {
        return this.bankreconcileservice.create(bankreconcileDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
	findAll(): Promise<Bankreconcile001mb[]> {
		return this.bankreconcileservice.findAll();
	}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
	findOne(@Param('id') id: string): Promise<Bankreconcile001mb> {
		return this.bankreconcileservice.findOne(id);
	}

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.bankreconcileservice.remove(id);
	}
}