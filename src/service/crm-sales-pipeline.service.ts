import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CrmspleadDTO } from "src/dto/Crmsplead.dto";
import { Crmsplead001mb } from "src/entity/Crmsplead001mb.entity";
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
var html = fs.readFileSync("crmSales.html", "utf8");

@Injectable()

export class CrmSalesPipelineService {

    constructor (@InjectRepository(Crmsplead001mb) private readonly crmSalesRepository: Repository<Crmsplead001mb>) {}

    async create(crmspleadDTO: CrmspleadDTO): Promise<Crmsplead001mb> {
        const  crmsplead001mb = new Crmsplead001mb();
        crmsplead001mb.setProperties(crmspleadDTO);
        return this.crmSalesRepository.save(crmsplead001mb);
    }

    async update(crmspleadDTO: CrmspleadDTO): Promise<Crmsplead001mb> {
        const crmsplead001mb = new Crmsplead001mb();
        crmsplead001mb.setProperties(crmspleadDTO);
        await this.crmSalesRepository.update({slineId: crmsplead001mb.slineId}, crmsplead001mb);
        return crmsplead001mb;
    }

    async findAll(): Promise<Crmsplead001mb[]> {
        return this.crmSalesRepository.find();
    }

    findOne(id: string): Promise<Crmsplead001mb> {
        return this.crmSalesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.crmSalesRepository.delete(id);
    }


    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let crmSales: any[] = await this.crmSalesRepository.find();


        var document = {
            html: html,
            data: {
                CrmSales: crmSales,
            },
            path: path.join(`./pdf/crmSales.pdf`),
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
        if (crmSales.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "crmSales.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let crmSales = await this.crmSalesRepository.find();
       

        if (crmSales.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('crmSales');
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
            { key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }, 
			{ key: 'H', width: 20.0 },{ key: 'I', width: 20.0 },{ key: 'J', width: 20.0 },{ key: 'K', width: 20.0 },
            { key: 'L', width: 20.0 },{ key: 'M', width: 20.0 },{ key: 'N', width: 20.0 },{ key: 'O', width: 20.0 },
            { key: 'P', width: 20.0 },{ key: 'Q', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:D1');
            worksheet.getCell('A1:D1').value = "NANDALALA ERP";
            worksheet.getCell('A1:D1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:D1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:D1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:D2');
            worksheet.getCell('A2:D2').value = "Add New Sales PipeLine";
            worksheet.getCell('A2:D2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:D2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Person Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Organization Name";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Status";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


           
           

            for (let i = 0; i < crmSales.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = crmSales[i].slineId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = crmSales[i].personName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = crmSales[i].orgName;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = crmSales[i].status;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}