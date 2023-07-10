Descrição

Parte 1: Consumindo serviços, integrando-os para criar uma nova funcionalidade.

O serviço será montado para consumir os dados (publicações) do Instagram e classificar as publicações (uma por vez) usando o ChatGPT (OpenAI). O serviço deve pegar uma publicação - sugir que passe tal publicação como parâmetro - e enviar o conteúdo para o serviço do OpenAI onde será feita a análise. A resposta do OpenAI deve ser obtida e tratada no seu código. Você apresentará a publicação da mídia social e o resultado da publicação no seu serviço. Esse é o resultado final do seu serviço.

  Para pegar a publicação, você precisará conhecer a API do Instagram. Ou seja, pergunte-se e busque resposta para “qual serviço me permite pegar uma publicação?”. Depois veja como fazer para usar o serviço. Você  precisará de credenciais (a mídia tem serviço para isso também). Também precisará entender o funcionamento e restrições da mídia social.
Quando estiver de posse do conteúdo da publicação, você consumirá o serviço do OpenAI. Então, você também precisará ver como classificar o conteúdo textual, por exemplo. Lembre-se: o que vocês farão no OpenAI é uma escolha de vocês. Não importa a qualidade da classificação ou do resultado do OpenAI. O que importa é usar o serviço web corretamente.


Parte 2: fornecendo acesso ao seu novo serviço.

Você terá um serviço novo com uma interface (página web) para o usuário final. Mas deverá oferecer uma interface para uma nova aplicação, assim como você consumiu do Instagram e do OpenAI. Para isso, você deve considerar:
fazer um CRUD para os usuários. Cadastrar novos usuários, permitindo que eles forneçam as credenciais necessárias para que você acesso o instagram dele;
ter um serviço de autenticação*. Será simplificado. Apenas um nome de usuário ou uma forma de identificar cada usuário. Embora isso nos leve a ter um serviço “frágil”, nosso objetivo é pôr em prática o que estamos vendo. Claro, se quiser, pode implantar ou usar algum serviço web que faça a parte de autenticação.
fornecer meios para que seu serviço (recurso) seja consumido usando uma abordagem REST, uma GraphQL e outra SOAP. Uma só obrigatória, mas pode testar as três, tentando dar acesso ao seu novo serviço usando essas três formas.


Parte 4: tecnologias.

Sugiro Java, mas você pode usar qualquer tecnologia que achar mais apropriada. Porém, a responsabilidade de lidar com as dúvidas será do grupo.

Obs.: como nosso objetivo é consumir serviços web e fornecer um novo, você pode optar por usar outra mídia social (ex: Twitter, LinkedIn, Reddit, gist, etc.) e outro serviço para substituir o ChatGPT (ex: Watson, etc.).
