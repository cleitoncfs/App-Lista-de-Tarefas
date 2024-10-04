// app.js
var tarefasApp = new Vue({
    el: "#tarefasApp",
    data: {
      tarefas: [
        { titulo: "Desenvolver API para o sistema", pronta: false },
        { titulo: "Criar controle de acesso", pronta: false },
        { titulo: "Enviar novas mudanças para o servidor", pronta: false },
        { titulo: "Teste", pronta: false },
      ],
      novaTarefa: {
        titulo: "",
        pronta: false,
      },
    },
    methods: {
      addTarefa: function () {
        // Verifica se o título não está vazio antes de adicionar
        if (this.novaTarefa.titulo.trim() !== "") {
          this.tarefas.push({ ...this.novaTarefa });
          this.novaTarefa = { titulo: "", pronta: false };
        }
      },
      removerTarefa: function (tarefa) {
        this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
      },
    },
  });
  