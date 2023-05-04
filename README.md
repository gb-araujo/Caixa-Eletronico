# Caixa-Eletronico
 
O projeto "Caixa eletronico" é uma atividade de programação que visa criar um sistema de caixa eletrônico com diversas funcionalidades, como visualização de saldo, saque, depósito, transferência e extrato. Ao longo do desenvolvimento do projeto, são apresentadas algumas questões importantes que devem ser aplicadas.

A primeira questão é a personalização do sistema. Ao acessar o sistema, o usuário deve ser recebido com uma mensagem de boas-vindas que inclua seu nome, tornando a experiência mais agradável e personalizada.

Em seguida, é necessário utilizar a estrutura de escolha/caso (switch/case) para validar as opções escolhidas pelo usuário na função "inicio", garantindo que apenas as opções disponíveis sejam selecionadas.

Na opção de saque, é importante garantir que o usuário não possa sacar mais dinheiro do que tem em saldo, evitando saldos negativos. Também é importante garantir que o valor a ser sacado seja maior que zero, evitando operações inválidas.

A opção de extrato deve incluir algumas compras ou depósitos fictícios para que o usuário possa visualizar suas transações anteriores.

Na opção de transferência, é necessário informar o número da conta de destino e o valor a ser transferido. Também é importante garantir que o usuário não possa transferir mais dinheiro do que tem em saldo e que o valor a ser transferido seja maior que zero.

A ordem das opções no menu principal deve ser organizada de forma lógica e fácil de entender, com as opções mais utilizadas no início e as menos utilizadas no final.

A função "erro" deve ser atualizada para incluir as novas opções do menu.

Na opção de depósito, é importante garantir que o valor informado seja maior que zero, evitando operações inválidas.

Por fim, é necessário adicionar uma senha para acessar as funcionalidades do caixa eletrônico, garantindo a segurança das informações do usuário. Caso a senha informada não seja correta, o sistema deve chamar a função atual novamente.
