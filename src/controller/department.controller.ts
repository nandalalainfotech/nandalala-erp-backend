import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { DepartmentDTO } from "src/dto/Department.dto";
import { Department001mb } from "src/entity/Department001mb.entity";
import { DepartmentService } from "src/service/department.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/depart')

export class DepartmentController {

    constructor (private readonly designationService: DepartmentService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.designationService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.designationService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() departmentDTO: DepartmentDTO): Promise<Department001mb> {
        return this.designationService.create(departmentDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() departmentDTO: DepartmentDTO): Promise<Department001mb> {
        return this.designationService.update(departmentDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Department001mb[]> {
        return this.designationService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Department001mb> {
        return this.designationService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.designationService.remove(id);
    }
}