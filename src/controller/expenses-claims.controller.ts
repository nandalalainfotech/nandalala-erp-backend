import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ExpensesclmDTO } from "src/dto/Expensesclm.dto";
import { Expensesclm001mb } from "src/entity/Expensesclm001mb.entity";
import { ExpensesClaimsService } from "src/service/expenses-claims.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/expenses')
export class ExpensesClaimsController {
    constructor(private readonly expensesClaimsService: ExpensesClaimsService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.expensesClaimsService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.expensesClaimsService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() expensesclmDTO: ExpensesclmDTO): Promise<Expensesclm001mb> {
        return this.expensesClaimsService.create(expensesclmDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() expensesclmDTO: ExpensesclmDTO): Promise<Expensesclm001mb> {
        return this.expensesClaimsService.update(expensesclmDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Expensesclm001mb[]> {
        return this.expensesClaimsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Expensesclm001mb> {
        return this.expensesClaimsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.expensesClaimsService.remove(id);
    }
}
