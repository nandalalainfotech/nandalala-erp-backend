import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CustomerdetailsDTO } from 'src/dto/Customerdetails.dto';
import { Customerdetails001mb } from 'src/entity/Customerdetails001mb.entity';
import { CustomerDetailService } from 'src/service/customer-detail.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/customerdetail')

export class CustomerDetailController {

    constructor(private readonly customerDetailService: CustomerDetailService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.customerDetailService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.customerDetailService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() customerdetailsDTO: CustomerdetailsDTO): Promise<Customerdetails001mb> {
        return this.customerDetailService.create(customerdetailsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() customerdetailsDTO: CustomerdetailsDTO): Promise<Customerdetails001mb> {
        return this.customerDetailService.update(customerdetailsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Customerdetails001mb[]> {
        
        return this.customerDetailService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Customerdetails001mb> {
        return this.customerDetailService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.customerDetailService.remove(id);
    }
}