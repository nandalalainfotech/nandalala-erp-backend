import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskController } from "src/controller/task.controller";
import { Task001mb } from "src/entity/Task001mb.entity";
import { TaskService } from "src/service/task.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task001mb])],
    providers: [TaskService],
    controllers: [TaskController]
})

export class TaskModule {}