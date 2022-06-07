import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CostcenterDTO } from "src/dto/Costcenter.dto";
import { Costcenter001mb } from "src/entity/Costcenter001mb.entity";
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
var html = fs.readFileSync("costCenter.html", "utf8");

@Injectable()

export class CostCenterService {

    constructor(@InjectRepository(Costcenter001mb) private readonly costCenterRepository: Repository<Costcenter001mb>) {}
    
    async create(costcenterDTO: CostcenterDTO): Promise<Costcenter001mb> {
        const costcenter001mb = new Costcenter001mb();
        costcenter001mb.setProperties(costcenterDTO);
        return this.costCenterRepository.save(costcenter001mb);
    }

    async update(costcenterDTO: CostcenterDTO): Promise<Costcenter001mb> {
        const costcenter001mb = new Costcenter001mb();
        costcenter001mb.setProperties(costcenterDTO);
        await this.costCenterRepository.update({centId: costcenter001mb.centId}, costcenter001mb);
        return costcenter001mb;
    }

    async findAll(): Promise<Costcenter001mb[]> {
        return this.costCenterRepository.find();
    }

    findOne(id: string): Promise<Costcenter001mb> {
        return this.costCenterRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.costCenterRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let costCenter: any[] = await this.costCenterRepository.find();


        var document = {
            html: html,
            data: {
                CostCenter: costCenter,
            },
            path: path.join(`./pdf/costCenter.pdf`),
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
        if (costCenter.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "costCenter.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let costCenter = await this.costCenterRepository.find();
       

        if (costCenter.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('costCenter');
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
            worksheet.columns = [{ key: 'A', width: 20.0 }, { key: 'B', width: 40.0 }];

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
            worksheet.getCell('A2:B2').value = "Cost Center";
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
            worksheet.getCell('B3').value = "Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

           
            for (let i = 0; i < costCenter.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = costCenter[i].centId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = costCenter[i].centerName;
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