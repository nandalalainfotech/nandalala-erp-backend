import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountchartDTO } from 'src/dto/Accountchart.dto';
import { Accountchart001mb } from 'src/entity/Accountchart001mb.entity';
import { AccountChartService } from 'src/service/account-chart.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/accchart')
export class AccountChartController {
    constructor(private readonly accountChartService: AccountChartService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accountChartService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accountChartService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() AccountchartDTO: AccountchartDTO): Promise<Accountchart001mb> {
        return this.accountChartService.create(AccountchartDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() accountchartDTO: AccountchartDTO): Promise<Accountchart001mb> {
        return this.accountChartService.update(accountchartDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Accountchart001mb[]> {
        return this.accountChartService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Accountchart001mb> {
        return this.accountChartService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.accountChartService.remove(id);
    }
}
