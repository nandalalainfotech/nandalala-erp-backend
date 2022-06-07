import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { StktransentryDTO } from "src/dto/Stktransentry.dto";
import { Stktransentry001mb } from "src/entity/Stktransentry001mb.entity";
import { StockEntryService } from "src/service/stock-entry.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/stkentry')

export class StockEntryController {

    constructor (private readonly stockEntryService: StockEntryService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.stockEntryService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.stockEntryService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stktransentryDTO: StktransentryDTO): Promise<Stktransentry001mb> {
        return this.stockEntryService.create(stktransentryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stktransentryDTO: StktransentryDTO): Promise<Stktransentry001mb> {
        return this.stockEntryService.update(stktransentryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Stktransentry001mb[]> {
        return this.stockEntryService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Stktransentry001mb> {
        return this.stockEntryService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.stockEntryService.remove(id);
    }

    
}