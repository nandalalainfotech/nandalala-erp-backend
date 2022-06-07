import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { StkrepledgerDTO } from "src/dto/Stkrepledger.dto";
import { Stkrepledger001mb } from "src/entity/Stkrepledger001mb.entity";
import { StockLedgerService } from "src/service/stock-ledger.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/stkledger')
export class StockLedgerController {
    constructor(private readonly stockLedgerService: StockLedgerService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.stockLedgerService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.stockLedgerService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stkrepledgerDTO: StkrepledgerDTO): Promise<Stkrepledger001mb> {
        return this.stockLedgerService.create(stkrepledgerDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stkrepledgerDTO: StkrepledgerDTO): Promise<Stkrepledger001mb> {
        return this.stockLedgerService.update(stkrepledgerDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Stkrepledger001mb[]> {
        return this.stockLedgerService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Stkrepledger001mb> {
        return this.stockLedgerService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.stockLedgerService.remove(id);
    }
}