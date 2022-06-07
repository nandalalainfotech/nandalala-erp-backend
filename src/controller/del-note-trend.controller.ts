import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { DelnotetrendsDTO } from "src/dto/Delnotetrends.dto";
import { Delnotetrends001mb } from "src/entity/Delnotetrends001mb.entity";
import { DelNoteTrendService } from "src/service/del-note-trend.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/delnotetrend')

export class DelNoteTrendController {

    constructor (private readonly delNoteTrendService: DelNoteTrendService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.delNoteTrendService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.delNoteTrendService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() delnotetrendsDTO: DelnotetrendsDTO): Promise<Delnotetrends001mb> {
        return this.delNoteTrendService.create(delnotetrendsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() delnotetrendsDTO: DelnotetrendsDTO): Promise<Delnotetrends001mb> {
        return this.delNoteTrendService.update(delnotetrendsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Delnotetrends001mb[]> {
        return this.delNoteTrendService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Delnotetrends001mb> {
        return this.delNoteTrendService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.delNoteTrendService.remove(id);
    }
}