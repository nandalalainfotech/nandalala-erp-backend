import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { GrossprofitDTO } from "src/dto/Grossprofit.dto";
import { Grossprofit001mb } from "src/entity/Grossprofit001mb.entity";
import { SalesInvoiceService } from "src/service/sales-invoice.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/salesinvoice')
export class SalesInvoiceController {
    constructor(private readonly salesinvoiceService: SalesInvoiceService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salesinvoiceService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salesinvoiceService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() grossprofitDTO: GrossprofitDTO): Promise<Grossprofit001mb> {
        return this.salesinvoiceService.create(grossprofitDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() grossprofitDTO: GrossprofitDTO): Promise<Grossprofit001mb> {
        return this.salesinvoiceService.update(grossprofitDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Grossprofit001mb[]> {
        return this.salesinvoiceService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Grossprofit001mb> {
        return this.salesinvoiceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.salesinvoiceService.remove(id);
    }
}
