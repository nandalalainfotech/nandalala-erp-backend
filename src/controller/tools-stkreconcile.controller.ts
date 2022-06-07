import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StkreconcileDTO } from 'src/dto/Stkreconcile.dto';
import { Stkreconcile001mb } from 'src/entity/Stkreconcile001mb.entity';
import { ToolsStkReconcileService } from 'src/service/tools-stkreconcile.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express"

@Controller('/testandreportstudio/api/concile')
export class ToolsStkReconcileController {
    constructor(private readonly stkReconcileService: ToolsStkReconcileService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.stkReconcileService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.stkReconcileService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stkreconcileDTO: StkreconcileDTO): Promise<Stkreconcile001mb> {
        return this.stkReconcileService.create(stkreconcileDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stkreconcileDTO: StkreconcileDTO): Promise<Stkreconcile001mb> {
        return this.stkReconcileService.update(stkreconcileDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Stkreconcile001mb[]> {
        return this.stkReconcileService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Stkreconcile001mb> {
        return this.stkReconcileService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.stkReconcileService.remove(id);
    }
}
