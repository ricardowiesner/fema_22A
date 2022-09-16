import { Body, Controller, Get, Param, Put } from "@nestjs/common";


@Controller()
export class TarefaController {

    tarefaList = [];

    @Get("tarefa") //GET http://localhost:3000/tarefa
    listaTarefa() {
        console.log('this.tarefaList ', this.tarefaList);
        return this.tarefaList;
    }

    @Get("tarefa/:id") //GET http://localhost:3000/tarefa/12
    apenasUmaTarefa(@Param() params) {
        console.log('params ', params.id)
        return {nome: 'Tarefa 02'};
    }

    @Put("tarefa") //PUT http://localhost:3000/tarefa 
    receberTarefa(@Body() tarefa) {
        console.log('tarefa ', tarefa);
        tarefa.id = Math.random().toString(36).substring(2);

        this.tarefaList.push(tarefa);
        return tarefa;
    }

   


}