import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LandcostvouchDTO } from 'src/dto/Landcostvouch.dto';
import { Landcostvouch001mb } from 'src/entity/Landcostvouch001mb.entity';
import { ToolsLandCostService } from 'src/service/tool-landcost.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/land')
export class ToolsLandCostController {
    constructor(private readonly landcostService: ToolsLandCostService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.landcostService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.landcostService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() landcostvouchDTO: LandcostvouchDTO): Promise<Landcostvouch001mb> {
        return this.landcostService.create(landcostvouchDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() landcostvouchDTO: LandcostvouchDTO): Promise<Landcostvouch001mb> {
        return this.landcostService.update(landcostvouchDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Landcostvouch001mb[]> {
        return this.landcostService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Landcostvouch001mb> {
        return this.landcostService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.landcostService.remove(id);
    }
}
