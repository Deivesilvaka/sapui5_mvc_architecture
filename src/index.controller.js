
'use strict'

//Finalmente o controller.

//Diferente das outras duas funções, esta vai existir caso você não defina a localResources.
//por que? Não sei!

//Definição da identificação do controller.
sap.ui.controller('src.index', {

    //A tão maravilhosa função helloWorld, tendo os metadados do botão como parâmetro.
    // -> Caso os metadados não sejam mandados, o parametro recebe a string "btnMetadatas"
    //para não ficar vazia, evitando algum erro.
    helloWorld: (btnMetadatas = "btnMetadatas") => {
        console.log(btnMetadatas)

        //Desta vez eu resolvi não utilizar desestruturação, por motivos de eu só usar
        //esta função uma vez.
        new sap.m.MessageToast.show('Hello World!')
    }
})