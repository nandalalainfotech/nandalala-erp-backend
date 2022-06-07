import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UnitofmeasureDTO } from 'src/dto/Unitofmeasure.dto';
import { Unitofmeasure001mb } from 'src/entity/Unitofmeasure001mb.entity';
import { UnitofMeasureService } from 'src/service/unit-of-measure.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/unitmeasure')
export class UnitofMeasureController {
    constructor(private readonly unitofMeasureService: UnitofMeasureService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.unitofMeasureService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.unitofMeasureService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() unitofmeasureDTO: UnitofmeasureDTO): Promise<Unitofmeasure001mb> {
        return this.unitofMeasureService.create(unitofmeasureDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() unitofmeasureDTO: UnitofmeasureDTO): Promise<Unitofmeasure001mb> {
        return this.unitofMeasureService.update(unitofmeasureDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Unitofmeasure001mb[]> {
        return this.unitofMeasureService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Unitofmeasure001mb> {
        return this.unitofMeasureService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.unitofMeasureService.remove(id);
    }
}
