import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BranchDTO } from 'src/dto/Branch.dto';
import { Branch001mb } from 'src/entity/Branch001mb.entity';
import { BranchService } from 'src/service/branch.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/branch')

export class BranchController {

    constructor(private readonly branchService: BranchService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.branchService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.branchService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() branchDTO: BranchDTO): Promise<Branch001mb> {
        return this.branchService.create(branchDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() branchDTO: BranchDTO): Promise<Branch001mb> {
        return this.branchService.update(branchDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Branch001mb[]> {
        return this.branchService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Branch001mb> {
        return this.branchService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.branchService.remove(id);
    }
}