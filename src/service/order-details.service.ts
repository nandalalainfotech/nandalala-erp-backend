import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDTO } from "src/dto/Order.dto";
import { Order001mb } from "src/entity/Order001mb.entity";
import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Console } from 'console';
var html = fs.readFileSync("orderDetails.html", "utf8");

@Injectable()

export class OrderDetailsService {

    constructor (@InjectRepository(Order001mb) private readonly orderDetailsRepository: Repository<Order001mb>) {}

    async create(orderDTO: OrderDTO): Promise<Order001mb> {
        const  order001mb = new Order001mb();
        order001mb.setProperties(orderDTO);
        return this.orderDetailsRepository.save(order001mb);
    }

    async update(orderDTO: OrderDTO): Promise<Order001mb> {
        const order001mb = new Order001mb();
        order001mb.setProperties(orderDTO);
        await this.orderDetailsRepository.update({orderid: order001mb.orderid}, order001mb);
        return order001mb;
    }

    async findAll(): Promise<Order001mb[]> {
        return this.orderDetailsRepository.find();
    }

    findOne(id: string): Promise<Order001mb> {
        return this.orderDetailsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.orderDetailsRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let orderDetails: any[] = await this.orderDetailsRepository.find();


        var document = {
            html: html,
            data: {
                OrderDetails: orderDetails,
            },
            path: path.join(`./pdf/orderDetails.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "landscape",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (orderDetails.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "orderDetails.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let orderDetails = await this.orderDetailsRepository.find();
       

        if (orderDetails.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('orderDetails');
            worksheet.getRow(1).height = 30;
            worksheet.getRow(2).height = 30;
            worksheet.getRow(3).height = 25;
            worksheet.getRow(4).height = 20;
            worksheet.getRow(5).height = 20;
            worksheet.getRow(6).height = 20;
            worksheet.getRow(7).height = 20;
            worksheet.getRow(8).height = 20;
            worksheet.getRow(9).height = 20;
            worksheet.getRow(10).height = 20;
            worksheet.getRow(11).height = 20;
            worksheet.getRow(12).height = 20;
            worksheet.getRow(13).height = 20;
            worksheet.getRow(14).height = 20;
            worksheet.getRow(15).height = 20;
            worksheet.getRow(16).height = 20;
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 40.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:B1');
            worksheet.getCell('A1:B1').value = "NANDALALA ERP";
            worksheet.getCell('A1:B1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:B1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:B1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:B2');
            worksheet.getCell('A2:B2').value = "Order details";
            worksheet.getCell('A2:B2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:B2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Order Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };




            for (let i = 0; i < orderDetails.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = orderDetails[i].orderid;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = orderDetails[i].ordername;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };



            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }


}