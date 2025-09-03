//função para atualizar o relógio em tempo real
function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    const data = agora.toLocaleDateString('pt-BR');
    
    document.getElementById('relogio').innerHTML = 
        `${data} - ${horas}:${minutos}:${segundos}`;
}

//inicializar o relógio e atualizá-lo a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

//validação e submissão do formulário de cadastro
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    //obter valores dos campos obrigatórios
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const termos = document.getElementById('termos').checked;
    
    //validar se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !cpf || !telefone || !endereco) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    //validar se os termos foram aceitos
    if (!termos) {
        alert('Você deve aceitar os termos de uso!');
        return;
    }
    
    //sucesso no cadastro
    alert('Cadastro realizado com sucesso! Bem-vindo ao Minimercado Bayer!');
    this.reset();
});

//validação e submissão do formulário de agendamento
document.getElementById('formAgendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    //obter valores dos campos
    const servico = document.querySelector('input[name="servico"]:checked');
    const data = document.getElementById('dataAgendamento').value;
    const horario = document.getElementById('horario').value;
    
    //validar campos obrigatórios
    if (!servico || !data || !horario) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    //validar se a data não está no passado
    const dataAgendamento = new Date(data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    if (dataAgendamento < hoje) {
        alert('A data de agendamento não pode ser no passado!');
        return;
    }
    
    //confirmar agendamento
    const tipoServico = servico.value === 'retirada' ? 'Retirada no Local' : 'Tele Entrega';
    alert(`Agendamento confirmado!\n\nServiço: ${tipoServico}\nData: ${new Date(data).toLocaleDateString('pt-BR')}\nHorário: ${horario}`);
    this.reset();
});

//definir data mínima para agendamento (hoje)
const hoje = new Date().toISOString().split('T')[0];
document.getElementById('dataAgendamento').min = hoje;

//intersection observer para animações ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

//observar elementos para aplicar animação fade-in
document.querySelectorAll('.produto-card, .servico-card, .form-container').forEach((el) => {
    observer.observe(el);
});

//mensagem de boas-vindas no console após carregamento
setTimeout(() => {
    console.log('Bem-vindo ao Minimercado Bayer! Sistema desenvolvido por Cassiano Bayer - Fase 2'); }, 1000); </script> </body> </html>
