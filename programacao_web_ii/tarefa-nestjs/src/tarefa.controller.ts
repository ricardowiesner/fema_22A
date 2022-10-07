import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";


@Controller()
export class TarefaController {

    tarefaLista = []; // {codigo: '', descricao: ''}


    @Get("/tarefa")
    listaTarefa() {
        return this.tarefaLista;
    }

    @Put("/tarefa")
    salvarTarefa(@Body() tarefa) {
        let index = this.tarefaLista.findIndex(t => t.codigo == tarefa.codigo);
        if (index >= 0) {
            this.tarefaLista[index].descricao = tarefa.descricao;
        } else {
            tarefa.codigo = Math.random().toString(36);
            this.tarefaLista.push(tarefa);
        }        
        return "ok";
    }

    @Get("/tarefa/:codigo")
    buscarPorCodigo(@Param() parametro) {
        console.log(parametro.codigo); // pega o :codigo da url
        let tarefa = this.tarefaLista.find(tarefa => tarefa.codigo == parametro.codigo);
        return tarefa;
    }


    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parametro) {
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parametro.codigo);
        this.tarefaLista.splice(index, 1);
        return "ok";
    }



}