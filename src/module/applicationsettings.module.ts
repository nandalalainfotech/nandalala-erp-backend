import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from "@nestjs/typeorm";
import { diskStorage } from 'multer';
import { ApplicationSettingscontroller } from 'src/controller/applicationsettings.controller';

import { Applicationsettings001mb } from 'src/entity/Applicationsettings001mb';

import { ApplicationSettingsservice } from 'src/service/applicationsettings.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([Applicationsettings001mb]),
        MulterModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    storage: diskStorage({
                        destination: async (req, file, cb) => {
                            const path: string = configService.get('STATICPATH');
                            return cb(null, path);
                        },
                        filename: (req, file, cb) => {
                            return cb(null, `${Date.now()}_${file.originalname}`);
                        }
                    })
                }
            },
        }),
    ],
    providers: [ApplicationSettingsservice],
    controllers: [ApplicationSettingscontroller],
})
export class ApplicationSettingsModule { }