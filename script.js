function adicionaTarefaNaLista() {
    const novaTarefa = document.getElementById('input_nova_tarefa').value.trim();
    if (novaTarefa !== '') {
        criaNovoItemDaLista(novaTarefa);
        document.getElementById('input_nova_tarefa').value = '';
    }
}

function criaNovoItemDaLista(textoDaTarefa) {
    const listaTarefas = document.getElementById('lista_de_tarefas');
    let qtdTarefas = listaTarefas.children.length;
    const novoItem = document.createElement('li');
    novoItem.innerText = textoDaTarefa;
    novoItem.id = `tarefa_id_${qtdTarefas++}`; // Corrigido para usar concatenação correta
    novoItem.appendChild(criaInputCheckBoxTarefa(novoItem.id));
    listaTarefas.appendChild(novoItem);
}

function criaInputCheckBoxTarefa(idTarefa) {
    const inputTarefa = document.createElement('input');
    inputTarefa.type = 'checkbox';
    inputTarefa.setAttribute('onclick', `mudaEstadoTarefa('${idTarefa}')`); // Corrigido para usar concatenação correta
    return inputTarefa;
}

function mudaEstadoTarefa(idTarefa) {
    const tarefaSelecionada = document.getElementById(idTarefa);
    const estiloCalculado = window.getComputedStyle(tarefaSelecionada); // Obtém o estilo calculado
    if (estiloCalculado.textDecoration === 'line-through') { // Usa o estilo calculado para comparação
        tarefaSelecionada.style.textDecoration = 'none'; // Altera o estilo inline corretamente
    } else {
        tarefaSelecionada.style.textDecoration = 'line-through'; // Altera o estilo inline corretamente
    }    
}

function resetTarefas() {
    const listaTarefas = document.getElementById('lista_de_tarefas');
    listaTarefas.innerHTML = '';
}
