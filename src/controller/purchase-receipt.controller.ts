import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { StktranspurecptDTO } from "src/dto/Stktranspurecpt.dto";
import { Stktranspurecpt001mb } from "src/entity/Stktranspurecpt001mb.entity";
import { PurchaseReceiptService } from "src/service/purchase-receipt.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/pureceipt')

export class PurchaseReceiptController {

    constructor (private readonly purchaseReceiptService: PurchaseReceiptService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.purchaseReceiptService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.purchaseReceiptService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stktranspurecptDTO: StktranspurecptDTO): Promise<Stktranspurecpt001mb> {
        return this.purchaseReceiptService.create(stktranspurecptDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stktranspurecptDTO: StktranspurecptDTO): Promise<Stktranspurecpt001mb> {
        return this.purchaseReceiptService.update(stktranspurecptDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Stktranspurecpt001mb[]> {
        return this.purchaseReceiptService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Stktranspurecpt001mb> {
        return this.purchaseReceiptService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.purchaseReceiptService.remove(id);
    }
}