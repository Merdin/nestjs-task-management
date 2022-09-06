import { Task } from './task.entity';
import { PostgresDataSource as dataSource } from '../app.module';

export const TasksRepository = dataSource.getRepository(Task);
