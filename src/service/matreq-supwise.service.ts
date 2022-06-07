import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MatreqsunotcreateDTO } from "src/dto/Matreqsunotcreate.dto";
import { Matreqsunotcreate001mb } from "src/entity/Matreqsunotcreate001mb.entity";
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
var html = fs.readFileSync("matreq-supwise.html", "utf8");

@Injectable()
export class MatreqSupwiseService {
    constructor(@InjectRepository(Matreqsunotcreate001mb) private readonly matreqsupwiseRepository: Repository<Matreqsunotcreate001mb>) { }

    async create(matreqsunotcreateDTO: MatreqsunotcreateDTO): Promise<Matreqsunotcreate001mb> {
        const matreqsunotcreate001mb = new Matreqsunotcreate001mb();
        matreqsunotcreate001mb.setProperties(matreqsunotcreateDTO);
        return this.matreqsupwiseRepository.save(matreqsunotcreate001mb);
    }
    async update(matreqsunotcreateDTO: MatreqsunotcreateDTO): Promise<Matreqsunotcreate001mb> {
        const matreqsunotcreate001mb = new Matreqsunotcreate001mb();
        matreqsunotcreate001mb.setProperties(matreqsunotcreateDTO);
        await this.matreqsupwiseRepository.update({ mrsId: matreqsunotcreate001mb.mrsId }, matreqsunotcreate001mb);
        return matreqsunotcreate001mb;
    }
    async findAll(): Promise<Matreqsunotcreate001mb[]> {
        return this.matreqsupwiseRepository.find();
    }
    findOne(id: string): Promise<Matreqsunotcreate001mb> {
        return this.matreqsupwiseRepository.findOne(id);
    }
    async remove(id: string): Promise<void> {
        await this.matreqsupwiseRepository.delete(id);
    }

async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let matreqsupwise: any[] = await this.matreqsupwiseRepository.find();


        var document = {
            html: html,
            data: {
                Matreqsupwise: matreqsupwise,
            },
            path: path.join(`./pdf/matreqsupwise.pdf`),
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
        if (matreqsupwise.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "matreqsupwise.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let matreqsupwise = await this.matreqsupwiseRepository.find();
       

        if (matreqsupwise.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('matreqsupwise');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 30.0 }, { key: 'C', width: 30.0 },
            { key: 'D', width: 30.0 }, { key: 'E', width: 30.0 }, { key: 'F', width: 30.0 }, { key: 'G', width: 30.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:G1');
            worksheet.getCell('A1:G1').value = "NANDALALA ERP";
            worksheet.getCell('A1:G1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:G1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:G1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:G2');
            worksheet.getCell('A2:G2').value = "Material Request Supply Wise";
            worksheet.getCell('A2:G2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:G2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Item";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "MRSeries";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Date";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Quantity";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Company";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Description";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

           

           
            for (let i = 0; i < matreqsupwise.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = matreqsupwise[i].mrsId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = matreqsupwise[i].itemCode;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = matreqsupwise[i].mrSeries;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = matreqsupwise[i].date;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = matreqsupwise[i].quantity;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = matreqsupwise[i].company;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = matreqsupwise[i].description;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }


}