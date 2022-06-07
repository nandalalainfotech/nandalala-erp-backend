import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BudgetmonthdistDTO } from 'src/dto/Budgetmonthdist.dto';
import { Budgetmonthdist001mb } from 'src/entity/Budgetmonthdist001mb.entity';
import { BudgetMonthDistService } from 'src/service/budget-monthdist.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/budgetmonthdist')

export class BudgetMonthDistControllers {

    constructor(private readonly budgetMonthDistService: BudgetMonthDistService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.budgetMonthDistService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.budgetMonthDistService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() budgetmonthdistDTO:BudgetmonthdistDTO): Promise<Budgetmonthdist001mb> {
        return this.budgetMonthDistService.create(budgetmonthdistDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() budgetmonthdistDTO: BudgetmonthdistDTO): Promise<Budgetmonthdist001mb> {
        return this.budgetMonthDistService.update(budgetmonthdistDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Budgetmonthdist001mb[]> {
        return this.budgetMonthDistService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Budgetmonthdist001mb> {
        return this.budgetMonthDistService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.budgetMonthDistService.remove(id);
    }
}