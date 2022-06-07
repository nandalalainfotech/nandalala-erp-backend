import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccgenledgeDTO } from 'src/dto/Accgenledge.dto';
import { Accgenledge001mb } from 'src/entity/Accgenledge001mb.entity';
import { GeneralLedgerService } from 'src/service/general-ledger.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/generalledger')
export class GeneralLedgerController {
    constructor(private readonly generalledgerService: GeneralLedgerService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.generalledgerService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.generalledgerService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() accgenledgeDTO: AccgenledgeDTO): Promise<Accgenledge001mb> {
        return this.generalledgerService.create(accgenledgeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() accgenledgeDTO: AccgenledgeDTO): Promise<Accgenledge001mb> {
        return this.generalledgerService.update(accgenledgeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Accgenledge001mb[]> {
        return this.generalledgerService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Accgenledge001mb> {
        return this.generalledgerService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.generalledgerService.remove(id);
    }
}
