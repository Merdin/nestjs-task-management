import { Task } from './task.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

// https://stackoverflow.com/a/72887316/17775543
@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }
}
