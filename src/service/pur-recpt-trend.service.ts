import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PurecpttrendDTO } from "src/dto/Purecpttrend.dto";
import { Purecpttrend001mb } from "src/entity/Purecpttrend001mb.entity";
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
var html = fs.readFileSync("purRecpt.html", "utf8");

@Injectable()

export class PurRecptTrendService {

    constructor (@InjectRepository(Purecpttrend001mb) private readonly purRecptRepository: Repository<Purecpttrend001mb>) {}

    async create(purecpttrendDTO: PurecpttrendDTO): Promise<Purecpttrend001mb> {
        const  purecpttrend001mb = new Purecpttrend001mb();
        purecpttrend001mb.setProperties(purecpttrendDTO);
        return this.purRecptRepository.save(purecpttrend001mb);
    }

    async update(purecpttrendDTO: PurecpttrendDTO): Promise<Purecpttrend001mb> {
        const purecpttrend001mb = new Purecpttrend001mb();
        purecpttrend001mb.setProperties(purecpttrendDTO);
        await this.purRecptRepository.update({putrendId: purecpttrend001mb.putrendId}, purecpttrend001mb);
        return purecpttrend001mb;
    }

    async findAll(): Promise<Purecpttrend001mb[]> {
        return this.purRecptRepository.find();
    }

    findOne(id: string): Promise<Purecpttrend001mb> {
        return this.purRecptRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.purRecptRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let purRecpt: any[] = await this.purRecptRepository.find();


        var document = {
            html: html,
            data: {
                PurRecpt: purRecpt,
            },
            path: path.join(`./pdf/purRecpt.pdf`),
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
        if (purRecpt.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "purRecpt.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let purRecpt = await this.purRecptRepository.find();


        if (purRecpt.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('purRecpt');
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
            worksheet.columns = [{ key: 'A', width: 10.0 }, { key: 'B', width: 15.0 }, { key: 'C', width: 15.0 },
            { key: 'D', width: 15.0 }, { key: 'E', width: 15.0 }, { key: 'F', width: 15.0 }, { key: 'G', width: 15.0 },
            { key: 'H', width: 15.0 }, { key: 'I', width: 15.0 }, { key: 'J', width: 15.0 }, { key: 'K', width: 15.0 },
            { key: 'L', width: 15.0 }, { key: 'M', width: 15.0 }, { key: 'N', width: 15.0 }, { key: 'O', width: 15.0 },
            { key: 'P', width: 15.0 }, { key: 'Q', width: 15.0 }, { key: 'R', width: 15.0 }, { key: 'S', width: 15.0 },
            { key: 'T', width: 15.0 }, { key: 'U', width: 15.0 }, { key: 'V', width: 15.0 }, { key: 'W', width: 15.0 },
            { key: 'X', width: 15.0 }, { key: 'Y', width: 15.0 }, { key: 'Z', width: 15.0 }, { key: 'AA', width: 15.0 },
            { key: 'AB', width: 15.0 }, { key: 'AC', width: 15.0 }, { key: 'AD', width: 15.0 }, { key: 'AE', width: 15.0 },
            { key: 'AF', width: 15.0 },{ key: 'AG', width: 15.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:AG1');
            worksheet.getCell('A1:AG1').value = "NANDALALA ERP";
            worksheet.getCell('A1:AG1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:AG1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:AG1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:AG2');
            worksheet.getCell('A2:AG2').value = "Make New Purchase Receipt Trend";
            worksheet.getCell('A2:AG2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:AG2').alignment = { vertical: 'middle', horizontal: 'center' };

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
            worksheet.getCell('C3').value = "Period";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Based on";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Fiscal Year";
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
            worksheet.getCell('G3').value = "JanQty";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "JanAmt";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "FebQty";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('J3');
            worksheet.getCell('J3').value = "FebAmt";
            worksheet.getCell('J3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('J3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('K3');
            worksheet.getCell('K3').value = "MarQty";
            worksheet.getCell('K3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('K3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('L3');
            worksheet.getCell('L3').value = "MarAmt";
            worksheet.getCell('L3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('L3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('M3');
            worksheet.getCell('M3').value = "AprQty";
            worksheet.getCell('M3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('M3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('N3');
            worksheet.getCell('N3').value = "AprAmt";
            worksheet.getCell('N3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('N3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('O3');
            worksheet.getCell('O3').value = "MayQty";
            worksheet.getCell('O3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('O3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('P3');
            worksheet.getCell('P3').value = "MayAmt";
            worksheet.getCell('P3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('P3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('Q3');
            worksheet.getCell('Q3').value = "JunQty";
            worksheet.getCell('Q3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Q3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('R3');
            worksheet.getCell('R3').value = "JunAmt";
            worksheet.getCell('R3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('R3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('S3');
            worksheet.getCell('S3').value = "JulQty";
            worksheet.getCell('S3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('S3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('T3');
            worksheet.getCell('T3').value = "JulAmt";
            worksheet.getCell('T3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('T3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('U3');
            worksheet.getCell('U3').value = "AugQty";
            worksheet.getCell('U3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('U3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('V3');
            worksheet.getCell('V3').value = "AugAmt";
            worksheet.getCell('V3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('V3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('W3');
            worksheet.getCell('W3').value = "SepQty";
            worksheet.getCell('W3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('W3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('X3');
            worksheet.getCell('X3').value = "SepAmt";
            worksheet.getCell('X3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('X3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('Y3');
            worksheet.getCell('Y3').value = "OctQty";
            worksheet.getCell('Y3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Y3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('Z3');
            worksheet.getCell('Z3').value = "OctAmt";
            worksheet.getCell('Z3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Z3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AA3');
            worksheet.getCell('AA3').value = "NovQty";
            worksheet.getCell('AA3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AA3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AB3');
            worksheet.getCell('AB3').value = "NovAmt";
            worksheet.getCell('AB3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AB3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AC3');
            worksheet.getCell('AC3').value = "DecQty";
            worksheet.getCell('AC3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AC3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AD3');
            worksheet.getCell('AD3').value = "DecAmt";
            worksheet.getCell('AD3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AD3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AE3');
            worksheet.getCell('AE3').value = "TotalQty";
            worksheet.getCell('AE3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AE3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AF3');
            worksheet.getCell('AF3').value = "TotalAmt";
            worksheet.getCell('AF3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AF3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AG3');
            worksheet.getCell('AG3').value = "AugQtyt";
            worksheet.getCell('AG3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AG3').alignment = { vertical: 'middle', horizontal: 'center' };


            for (let i = 0; i < purRecpt.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = purRecpt[i].putrendId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = purRecpt[i].itemCode;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = purRecpt[i].period;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = purRecpt[i].basedOn;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = purRecpt[i].fiscalYear;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = purRecpt[i].company;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = purRecpt[i].janQty;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = purRecpt[i].janAmt;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = purRecpt[i].febQty;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = purRecpt[i].febAmt;
                worksheet.getCell('J' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('J' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('K' + temp);
                worksheet.getCell('K' + temp).value = purRecpt[i].marQty;
                worksheet.getCell('K' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('K' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('L' + temp);
                worksheet.getCell('L' + temp).value = purRecpt[i].marAmt;
                worksheet.getCell('L' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('L' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('M' + temp);
                worksheet.getCell('M' + temp).value = purRecpt[i].aprQty;
                worksheet.getCell('M' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('M' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('N' + temp);
                worksheet.getCell('N' + temp).value = purRecpt[i].aprAmt;
                worksheet.getCell('N' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('N' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('O' + temp);
                worksheet.getCell('O' + temp).value = purRecpt[i].mayQty;
                worksheet.getCell('O' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('O' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('P' + temp);
                worksheet.getCell('P' + temp).value = purRecpt[i].mayAmt;
                worksheet.getCell('P' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('P' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Q' + temp);
                worksheet.getCell('Q' + temp).value = purRecpt[i].junQty;
                worksheet.getCell('Q' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Q' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('R' + temp);
                worksheet.getCell('R' + temp).value = purRecpt[i].junAmt;
                worksheet.getCell('R' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('R' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('S' + temp);
                worksheet.getCell('S' + temp).value = purRecpt[i].julQty;
                worksheet.getCell('S' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('S' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('T' + temp);
                worksheet.getCell('T' + temp).value = purRecpt[i].julAmt;
                worksheet.getCell('T' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('T' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('U' + temp);
                worksheet.getCell('U' + temp).value = purRecpt[i].augQty;
                worksheet.getCell('U' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('U' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('V' + temp);
                worksheet.getCell('V' + temp).value = purRecpt[i].augAmt;
                worksheet.getCell('V' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('V' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('W' + temp);
                worksheet.getCell('W' + temp).value = purRecpt[i].sepQty;
                worksheet.getCell('W' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('W' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('X' + temp);
                worksheet.getCell('X' + temp).value = purRecpt[i].sepAmt;
                worksheet.getCell('X' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('X' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Y' + temp);
                worksheet.getCell('Y' + temp).value = purRecpt[i].octQty;
                worksheet.getCell('Y' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Y' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Z' + temp);
                worksheet.getCell('Z' + temp).value = purRecpt[i].octAmt;
                worksheet.getCell('Z' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Z' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AA' + temp);
                worksheet.getCell('AA' + temp).value = purRecpt[i].novQty;
                worksheet.getCell('AA' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AA' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AB' + temp);
                worksheet.getCell('AB' + temp).value = purRecpt[i].novAmt;
                worksheet.getCell('AB' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AB' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AC' + temp);
                worksheet.getCell('AC' + temp).value = purRecpt[i].decQty;
                worksheet.getCell('AC' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AC' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AD' + temp);
                worksheet.getCell('AD' + temp).value = purRecpt[i].decAmt;
                worksheet.getCell('MAD' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AD' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AE' + temp);
                worksheet.getCell('AE' + temp).value = purRecpt[i].totalQty;
                worksheet.getCell('AE' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AE' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AF' + temp);
                worksheet.getCell('AF' + temp).value = purRecpt[i].totalAmt;
                worksheet.getCell('AF' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AF' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AG' + temp);
                worksheet.getCell('AG' + temp).value = purRecpt[i].augQtyt;
                worksheet.getCell('AG' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AG' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}