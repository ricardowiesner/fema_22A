import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefaController } from './tarefa.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TarefaController
  ],
  providers: [AppService],
})
export class AppModule {}
