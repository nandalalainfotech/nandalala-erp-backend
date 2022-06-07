import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BudgetaccounttypeDTO } from 'src/dto/Budgetaccounttype.dto';
import { Budgetaccounttype001mb } from 'src/entity/Budgetaccounttype001mb.entity';
import { BudgetAccountService } from 'src/service/budget-account.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/budgetaccount')

export class BudgetAccountController {

    constructor(private readonly budgetAccountService: BudgetAccountService) {}


    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.budgetAccountService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.budgetAccountService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() budgetaccounttypeDTO: BudgetaccounttypeDTO): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountService.create(budgetaccounttypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() budgetaccounttypeDTO: BudgetaccounttypeDTO): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountService.update(budgetaccounttypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Budgetaccounttype001mb[]> {
        return this.budgetAccountService.findAll();
    }
     
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
         return this.budgetAccountService.remove(id);
    }
}