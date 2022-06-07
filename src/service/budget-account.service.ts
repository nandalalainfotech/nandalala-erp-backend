import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BudgetaccounttypeDTO } from "src/dto/Budgetaccounttype.dto";
import { Budgetaccounttype001mb } from "src/entity/Budgetaccounttype001mb.entity";
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
var html = fs.readFileSync("budgetAccount.html", "utf8");

@Injectable()

export class BudgetAccountService {

    constructor(@InjectRepository(Budgetaccounttype001mb) private readonly budgetAccountRepository: Repository<Budgetaccounttype001mb>) {}
    
    async create(budgetaccounttypeDTO: BudgetaccounttypeDTO): Promise<Budgetaccounttype001mb> {
        const budgetaccounttype001mb = new Budgetaccounttype001mb();
        budgetaccounttype001mb.setProperties(budgetaccounttypeDTO);
        return this.budgetAccountRepository.save(budgetaccounttype001mb);
    }

    async update(budgetaccounttypeDTO: BudgetaccounttypeDTO): Promise<Budgetaccounttype001mb> {
        const budgetaccounttype001mb = new Budgetaccounttype001mb();
        budgetaccounttype001mb.setProperties(budgetaccounttypeDTO);
        await this.budgetAccountRepository.update({bgaccId: budgetaccounttype001mb.bgaccId}, budgetaccounttype001mb);
        return budgetaccounttype001mb; 
    }

    async findAll(): Promise<Budgetaccounttype001mb[]> {
        return this.budgetAccountRepository.find();
    }

    findOne(id: string): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.budgetAccountRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let budgetAccount: any[] = await this.budgetAccountRepository.find();


        var document = {
            html: html,
            data: {
                BudgetAccount: budgetAccount,
            },
            path: path.join(`./pdf/budgetAccount.pdf`),
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
        if (budgetAccount.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "budgetAccount.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let budgetAccount = await this.budgetAccountRepository.find();
       

        if (budgetAccount.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('budgetAccount');
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
            worksheet.getCell('A2:B2').value = "Budget Account";
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

           
            for (let i = 0; i < budgetAccount.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = budgetAccount[i].bgaccId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = budgetAccount[i].bgaccountType;
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