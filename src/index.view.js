
'use strict'

//Sempre que possível, utilize desestruturação para pegar os componentes,
//você vai agilizar o desenvolvimento e ainda vai diminuir MUITO a quantidade horizontal de código.
const { Button, Page } = sap.m

//Uma espécie de identificador da view

//Se você não chamar a função "localResources" no inicio, esta função também não vai existir.
sap.ui.jsview('src.index', {

        //Função que retorna o nome do controller
        getControllerName: () => {
                return 'src.index'
        },

        //Função que retorna o conteúdo da view e seu controller como parâmetro.
        createContent: (oController) => {

                /*
                  Como vocês podem ver, eu só precisei escrever "new Button"
                  para criar um botão, e não importa se eu vou criar um ou
                  dois mil botões, será sempre "new Button" para defini-lo.
                */
                const btn = new Button({
                        text:"clique",
                        //Ao Clicar no botão, a função "HelloWorld" vai ser chamada do controller.

                        //Arrow function para chamar a função do controller,
                        //enviando os metadados do botão como parâmetro.
                        press: (btnMetadatas) => oController.helloWorld(btnMetadatas)

                        //Também da pra fazer desta forma, o resultado é o mesmo!
                        //press:[oController.helloWorld, oController]
                })

                //O botão é adicionado em uma página e retornado para a view.
                return new Page({
                        title: "Titulo legal",
                        content: [
                                btn
                        ]
                })
        }

})