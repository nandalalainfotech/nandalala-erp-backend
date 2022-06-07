import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { StkrepbalanceDTO } from "src/dto/Stkrepbalance.dto";
import { Stkrepbalance001mb } from "src/entity/Stkrepbalance001mb.entity";
import { StockBalanceService } from "src/service/stock-balance.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/stkbalance')
export class StockBalanceController {
    constructor(private readonly stockBalanceService: StockBalanceService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.stockBalanceService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.stockBalanceService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stkrepbalanceDTO: StkrepbalanceDTO): Promise<Stkrepbalance001mb> {
        return this.stockBalanceService.create(stkrepbalanceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stkrepbalanceDTO: StkrepbalanceDTO): Promise<Stkrepbalance001mb> {
        return this.stockBalanceService.update(stkrepbalanceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Stkrepbalance001mb[]> {
        return this.stockBalanceService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Stkrepbalance001mb> {
        return this.stockBalanceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.stockBalanceService.remove(id);
    }
}