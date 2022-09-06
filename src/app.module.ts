import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [TasksModule],
})

export class AppModule {}

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'task-management',
  // autoLoadEntities: true,
  synchronize: true,
});

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
