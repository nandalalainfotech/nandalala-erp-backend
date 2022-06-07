import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BudgetDTO } from 'src/dto/Budget.dto';
import { Budget001mb } from 'src/entity/Budget001mb.entity';
import { BudgetService } from 'src/service/budget.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/budget')

export class BudgetController {

    constructor(private readonly budgetService: BudgetService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.budgetService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.budgetService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() budgetDTO: BudgetDTO): Promise<Budget001mb> {
        return this.budgetService.create(budgetDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() budgetDTO: BudgetDTO): Promise<Budget001mb> {
        return this.budgetService.update(budgetDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Budget001mb[]> {
        return this.budgetService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Budget001mb> {
        return this.budgetService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.budgetService.remove(id);
    }
}