constnumeroSenha = document.querySelector('.parametro-senha_texto');
lettamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
constletrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
constletrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
constnumeros = '0123456789';
constsimbolos = '!@%*?';
constbotoes = document.querySelectorAll('.parametro-senha_botao');
constcampoSenha = documnet.querySelector('#campo-senha');
constcheckbox = document.querySelectorAll('.checkbox');
constforcaSenha = document.querySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

fuctiondiminuiTamanho() {
    if(tamanhoSenha>1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
