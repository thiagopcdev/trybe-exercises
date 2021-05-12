function addEstado(){
    const dropEstado = document.getElementById('drop-down');
    const estados = {
        sigla: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'],
        nome: ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais', 'Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul', 'Rondônia','Roraima', 'Santa Catarina', 'São Paulo','Sergipe','Tocantins']
    }
   for (let i in estados.sigla){
       let addEstado = document.createElement('option')
       addEstado.value = estados.sigla[i];
       addEstado.className = "op-estado";
       addEstado.innerHTML = estados.nome[i];
       dropEstado.appendChild(addEstado);
   }
}

addEstado();