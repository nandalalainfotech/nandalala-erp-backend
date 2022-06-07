import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BudgetvarreportDTO } from 'src/dto/Budgetvarreport.dto';
import { Budgetvarreport001mb } from 'src/entity/Budgetvarreport001mb.entity';
import { BudgeVarReportService } from 'src/service/budget-varreport.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/budgetvariancerep')

export class BudgeVarReportControllers {

    constructor(private readonly budgeVarReportService: BudgeVarReportService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.budgeVarReportService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.budgeVarReportService.downloadExcel(request, response);
	}


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() budgetvarreportDTO: BudgetvarreportDTO): Promise<Budgetvarreport001mb> {
        return this.budgeVarReportService.create(budgetvarreportDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() budgetvarreportDTO: BudgetvarreportDTO): Promise<Budgetvarreport001mb> {
        return this.budgeVarReportService.update(budgetvarreportDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Budgetvarreport001mb[]> {
        return this.budgeVarReportService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Budgetvarreport001mb> {
        return this.budgeVarReportService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.budgeVarReportService.remove(id);
    }
}