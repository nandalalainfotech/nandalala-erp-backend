import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CustomercreditbalanceDTO } from "src/dto/Customercreditbalance.dto";
import { Customercreditbalance001mb } from "src/entity/Customercreditbalance001mb.entity";
import { Balanceservice } from "src/service/customer-credit-balance.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/balance')

export class Balancecontroller {

    constructor(private readonly balanceservice: Balanceservice) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        

        return await this.balanceservice.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.balanceservice.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() customercreditbalanceDTO: CustomercreditbalanceDTO): Promise<Customercreditbalance001mb> {
        return this.balanceservice.create(customercreditbalanceDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() customercreditbalanceDTO: CustomercreditbalanceDTO): Promise<Customercreditbalance001mb> {
        return this.balanceservice.create(customercreditbalanceDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Customercreditbalance001mb[]> {
        return this.balanceservice.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Customercreditbalance001mb> {
        return this.balanceservice.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.balanceservice.remove(id);
    }
}