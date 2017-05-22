/**
 * Created by edersonluispereiragoncalves on 22/05/17.
 */
//Espera o DOM carregar para iniciar função
$(document).ready(function () {

    $('#btn_iniciar_jogo').click(function () {

        //Valida a digitação dos apelidos dos jogadores.
        if ($('#entrada_apelido_jogador_1').val() == ''){
            alert('Apelido do jogador 1 não foi preenchido.');
            return false;
        }

        if ($('#entrada_apelido_jogador_2').val() == ''){
            alert('Apelido do jogador 2 não foi preenchido.');
            return false;
        }

        alert($('#entrada_apelido_jogador_1').val());
        alert($('#entrada_apelido_jogador_2').val());
    });
});
