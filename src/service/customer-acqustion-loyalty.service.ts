import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomeracquisitionDTO } from "src/dto/Customeracquisition.dto";
import { Customeracquisition001mb } from "src/entity/Customeracquisition001mb.entity";
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
var html = fs.readFileSync("customerLoyalty.html", "utf8");

@Injectable()
export class CustomerLoyaltyService {
    constructor(@InjectRepository(Customeracquisition001mb) private readonly customerLoyaltyRepository: Repository<Customeracquisition001mb>,) { }

    async create(customeracquisitionDTO: CustomeracquisitionDTO): Promise<Customeracquisition001mb> {
        const customeracquisition001mb = new Customeracquisition001mb();
        customeracquisition001mb.setProperties(customeracquisitionDTO);
        return this.customerLoyaltyRepository.save(customeracquisition001mb);
    }

    async update(customeracquisitionDTO: CustomeracquisitionDTO): Promise<Customeracquisition001mb> {
        const customeracquisition001mb = new Customeracquisition001mb();
        customeracquisition001mb.setProperties(customeracquisitionDTO);
        await this.customerLoyaltyRepository.update({ id: customeracquisition001mb.id }, customeracquisition001mb);
        return customeracquisition001mb;
    }

    async findAll(): Promise<Customeracquisition001mb[]> {
        return this.customerLoyaltyRepository.find();
    }

    findOne(id: string): Promise<Customeracquisition001mb> {
        return this.customerLoyaltyRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.customerLoyaltyRepository.delete(id);
    }

        
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let customerLoyalty: any[] = await this.customerLoyaltyRepository.find();


        var document = {
            html: html,
            data: {
                CustomerLoyalty: customerLoyalty,
            },
            path: path.join(`./pdf/salesorder.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (customerLoyalty.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "salesorder.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let customerLoyalty = await this.customerLoyaltyRepository.find();
       

        if (customerLoyalty.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('customerLoyalty');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },
            { key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 30.0 }, 
			{ key: 'H', width: 30.0 },{ key: 'I', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:I1');
            worksheet.getCell('A1:I1').value = "NANDALALA ERP";
            worksheet.getCell('A1:I1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:I1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:I1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:I2');
            worksheet.getCell('A2:I2').value = "Customer Acquisition And Loyalty";
            worksheet.getCell('A2:I2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:I2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Year";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Month";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "New Customers";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Repeat Customers";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Total";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "New Customers Revenue";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Repeat Customers Revenue";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "Total Revenue";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' };


           

            for (let i = 0; i < customerLoyalty.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = customerLoyalty[i].id;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = customerLoyalty[i].year;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = customerLoyalty[i].month;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = customerLoyalty[i].newcustomers;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = customerLoyalty[i].repeatcustomers;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = customerLoyalty[i].total;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = customerLoyalty[i].newcustomersrevenue;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = customerLoyalty[i].repeatcustomersrevenue;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = customerLoyalty[i].totalrevenue;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };


            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}
