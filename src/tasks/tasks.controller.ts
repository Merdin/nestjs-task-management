import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // /tasks/:id
  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.tasksService.getTaskById(id);
  }

  //   // /tasks
  //   @Get()
  //   getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //     if (Object.keys(filterDto).length) {
  //       return this.tasksService.getTasksWithFilters(filterDto);
  //     } else {
  //       return this.tasksService.getAllTasks();
  //     }
  //   }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.createTask(createTaskDto);
  }

  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  //   ): Task {
  //     const { status } = updateTaskStatusDto;

  //     return this.tasksService.updateTaskStatus(id, status);
  //   }

  //   @Delete('/:id')
  //   deleteTask(@Param('id') id: string): void {
  //     return this.tasksService.deleteTask(id);
  //   }
}
