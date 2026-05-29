// ============================================================
// SIMULADO DO ALUNO - DESAFIO DOS DADOS 2026
// ============================================================

const SQUADS_LIST = [
  {
    id: "581",
    name: "Infinity Tech",
    members: "Emilly Layse Nunes Eleres, Felipe Diamantino da Silva, <strong>Estefany Lourrane Moreira da Silva (Líder)</strong>, Pedro Lucas Espindola Moraes",
    images: ["aluno_1.webp", "aluno_2.webp", "aluno_3.webp", "aluno_4.webp"]
  },
  {
    id: "568",
    name: "AS++",
    members: "<strong>Carla Regina dos Santos (Líder)</strong>, Myrza da Silva Alhadef, Dafne da Silva Carvalho",
    images: ["aluno_5.webp", "aluno_6.webp", "dafne_da_silva_carvalho.webp"]
  },
  {
    id: "570",
    name: "Tronadores",
    members: "Matheus Neyson do Carmo de Souza, Yan Walber de Oliveira Mandu, Hendrew Nascimento Negrão, <strong>Rodrigo Daniel Batista dos Santos (Líder)</strong>",
    images: ["aluno_7.webp", "aluno_8.webp", "aluno_9.webp", "aluno_10.webp"]
  },
  {
    id: "571",
    name: "Comando SQL",
    members: "<strong>Christian dos Santos Paraguassu (Líder)</strong>, Carlos Eduardo dos Santos Teixeira, Miguel Rocca de Araújo",
    images: ["aluno_11.webp", "aluno_12.webp", "miguel_rocca_de_araujo.webp"]
  },
  {
    id: "572",
    name: "REJY",
    members: "Emanuela Souza Amaral, Rykelme Cavalcante de Moura, Yago de Jesus Ferreira de Souza, <strong>João Guilherme Teixeira Cardoso da Silva (Líder)</strong>",
    images: ["aluno_13.webp", "aluno_14.webp", "aluno_15.webp", "aluno_16.webp"]
  },
  {
    id: "574",
    name: "Requiem",
    members: "Wallace Reis Soares, Aryane Nazare Melo de Oliveira, Gustavo Barroso Santiago, <strong>Pedro Sales de Souza (Líder)</strong>",
    images: ["aluno_17.webp", "aluno_18.webp", "aluno_19.webp", "aluno_20.webp"]
  },
  {
    id: "578",
    name: "Tec",
    members: "<strong>Kauã Gabriel Fernandes Amaral (Líder)</strong>, Samuel Abner Silva da Silva, Rômulo Caio da Silva de Oliveira",
    images: ["aluno_21.webp", "aluno_22.webp", "romulo_caio_da_silva_de_oliveira.webp"]
  },
  {
    id: "576",
    name: "Smile Friends",
    members: "Abner Santiago Amaral Lopes, Josué Carvalho de Abreu, Marcelo Henrique Pereira Silva de Souza, <strong>Luiz Henrique Ferreira Araújo (Líder)</strong>",
    images: ["aluno_23.webp", "aluno_24.webp", "aluno_25.webp", "aluno_26.webp"]
  },
  {
    id: "579",
    name: "MFCP",
    members: "<strong>Miguel Carlos Chaves Rodrigues (Líder)</strong>, Felipe Gabriel França da Costa, Cauã Giovanni Pinheiro dos Santos, Pedro Vinícius Costa da Silva",
    images: ["aluno_27.webp", "aluno_28.webp", "aluno_29.webp", "aluno_30.webp"]
  },
  {
    id: "580",
    name: "JJM",
    members: "<strong>João Danilo Gomes Acácio (Líder)</strong>, Mikael Chrystian Duarte Melo, João Guilherme Seabra de Castro",
    images: ["aluno_31.webp", "mikael_chrystian_duarte_melo.webp", "aluno_32.webp"]
  }
];


const QUESTIONS_DATABASE = [
  {
    code: "TD01",
    tema: "Fake news e desinformação",
    nivel: "Fácil",
    nivel_id: "facil",
    tipo: "múltipla escolha",
    enunciado: "Conteúdos enganosos afetam a sociedade e podem se espalhar rapidamente, tanto pelas redes sociais quanto presencialmente, em situações conhecidas como “boatos” ou “fofocas de boca a boca”. Embora o termo \"fake news\" seja utilizado de forma ampla popularmente, o Conselho da Europa (2017) recomenda evitar essa expressão por considerá-la imprecisa para descrever os diferentes tipos de desordem informacional. Em seu relatório, os autores propõem três categorias:\n\n1. Desinformação (disinformation) - informações falsas compartilhadas com o objetivo de prejudicar pessoas, grupos sociais, organizações etc.\n2. Informação falsa (misinformation) - informações falsas compartilhadas sem intenção de causar dano.\n3. Informação maliciosa (mal-information) - informação que usa material verdadeiro, mas de forma a causar prejuízos.",
    questao: "Sabendo que as três sentenças a seguir seriam chamadas popularmente de “fake news”, classifique-as considerando as categorias apresentadas acima:\n\n(1) Uma mensagem compartilhada por uma mãe no grupo da família afirma: \"URGENTE: Chá de folha de laranjeira cura 95% dos casos de gripe aviária em humanos; espalhe para salvar vidas!\"\n(2) Durante uma campanha eleitoral, perfis falsos começaram a divulgar em redes sociais: \"Vazamento revela: Prefeito planeja confiscar cadernetas de poupança da população para pagar dívidas de campanha.\"\n(3) Um grupo organizado publicou vídeos afirmando falsamente: “ALERTA: Nova tecnologia 5G instalada nas escolas municipais emite ondas que reprogramam o DNA de adolescentes para fins de controle social.”",
    options: [
      "A) Desinformação, informação maliciosa e informação falsa",
      "B) Desinformação, informação maliciosa e informação maliciosa",
      "C) Informação falsa, desinformação e desinformação",
      "D) Informação falsa, informação falsa e desinformação",
      "E) Desinformação, desinformação e desinformação"
    ],
    resposta_enc: "Qw==", // C
    dica: "Dica: A mãe espalha a receita de chá com boa intenção (salvar vidas), o que caracteriza informação falsa (misinformation). Já os perfis falsos nas eleições e o grupo organizado do 5G espalham inverdades intencionalmente para causar dano, o que é desinformação.",
    justificativa: "Correto! A sentença (1) é 'Informação falsa' (sem intenção de dano). As sentenças (2) e (3) são 'Desinformação' (intencionais para causar danos políticos e sociais)."
  },
  {
    code: "TD02",
    tema: "Realidade virtual",
    nivel: "Médio",
    nivel_id: "medio",
    tipo: "múltipla escolha",
    enunciado: "O uso de realidade virtual (RV) tem crescido no treinamento corporativo, especialmente em atividades de risco. De acordo com estudo da PwC (2020), “participantes treinados com realidade virtual concluíram o treinamento quatro vezes mais rápido do que em sala de aula e se mostraram 275% mais confiantes para aplicar o que aprenderam.” Além disso, empresas brasileiras de setores industriais têm adotado a RV para simular ambientes perigosos, permitindo treinamento seguro e imersivo.",
    questao: "Considerando o texto e as características da realidade virtual, qual alternativa apresenta corretamente uma vantagem e uma limitação desta tecnologia no contexto corporativo?",
    options: [
      "A) Simulação limitada de cenários reais e baixo custo de implementação",
      "B) Redução da eficiência do treinamento e alta necessidade de supervisão humana",
      "C) Aumento da eficiência do treinamento e necessidade de investimento em infraestrutura",
      "D) Redução de riscos operacionais e menor dependência de equipamentos tecnológicos",
      "E) Substituição do treinamento presencial e redução de custos adicionais"
    ],
    resposta_enc: "Qw==", // C
    dica: "Dica: A RV aumenta incrivelmente a segurança do treino de risco (vantagem), mas requer computadores potentes, óculos de RV e desenvolvimento de software especializado (infraestrutura).",
    justificativa: "Correto! O treinamento em RV aumenta a eficiência (4x mais rápido), mas exige altos investimentos em infraestrutura e softwares de simulação."
  },
  {
    code: "TD03",
    tema: "Critérios avançados de pesquisa",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "múltipla escolha",
    enunciado: "Ada Lovelace, em palestra fictícia, explicou os desafios do cotidiano do analista de dados. Comentou que buscar conteúdos em sites oficiais requer precisão. Utilizar apenas palavras-chave simples gera muito ruído (notícias irrelevantes, anúncios). Ada explicou que os motores de buscas permitem restringir a busca por operadores como especificar o site a ser consultado (site:) e o formato de arquivo (filetype:).",
    questao: "Você precisa encontrar dados sobre editais de financiamento de projetos para startups ou empresas incubadas no Brasil, mas deseja que os resultados venham exclusivamente de sites oficiais do governo brasileiro e que os arquivos sejam documentos de texto (formato .pdf ou .docx). Qual string atende a isso?",
    options: [
      "A) edital financiamento startups \"site:gov.br\" (pdf + docx)",
      "B) edital startups site:gov.br (filetype:pdf OR filetype:docx)",
      "C) buscar:editais local:gov.br tipo:pdf ou docx",
      "D) - - edital / - startup local:gov.br format:pdf",
      "E) edital de financiamento AND gov.br AND (ext:pdf + ext:docx)"
    ],
    resposta_enc: "Qg==", // B
    dica: "Dica: Para restringir a sites governamentais brasileiros, use 'site:gov.br'. Para formatos, use 'filetype:pdf OR filetype:docx'. A sintaxe correta do Google Search não usa termos como 'tipo:' ou 'format:'.",
    justificativa: "Correto! A opção B utiliza a sintaxe oficial: 'site:gov.br' e o operador lógico 'OR' para agrupar 'filetype:pdf' e 'filetype:docx'."
  },
  {
    code: "TD04",
    tema: "Motores de busca e LLMs",
    nivel: "Médio",
    nivel_id: "medio",
    tipo: "múltipla escolha",
    enunciado: "Um jornalista especializado em tecnologia precisa produzir uma matéria sobre os impactos da IA na educação e decide utilizar duas abordagens:\nFerramenta A: motor de busca tradicional (indexação da web com fontes diretas)\nFerramenta B: Large Language Model (LLM - IA generativa baseada em linguagem natural, sem recuperação automática externa de fontes).",
    questao: "O jornalista precisa garantir que sua matéria seja confiável, verificável e baseada em fontes consistentes. Avalie as afirmativas:\n\nI. Motores de busca facilitam a rastreabilidade das informações, pois direcionam para fontes verificáveis.\nII. LLMs garantem maior confiabilidade, pois sintetizam conteúdos já validados automaticamente.\nIII. LLMs podem gerar respostas plausíveis, mas não necessariamente verificáveis sem checagem adicional.\nIV. O uso combinado de motores de busca e LLMs pode melhorar a qualidade da pesquisa, desde que haja validação.\n\nEstá correto o que se afirma em:",
    options: [
      "A) I e II, apenas",
      "B) I e III, apenas",
      "C) II, III e IV, apenas",
      "D) I, III e IV, apenas",
      "E) I, II, III e IV"
    ],
    resposta_enc: "RA==", // D
    dica: "Dica: Os LLMs podem sofrer 'alucinações' (gerar fatos falsos que parecem verdadeiros), logo eles não garantem validação automática (a afirmativa II é falsa).",
    justificativa: "Correto! As afirmativas I, III e IV são verdadeiras. A II está incorreta porque os LLMs não validam informações automaticamente e podem induzir ao erro se não checados."
  },
  {
    code: "TD05",
    tema: "IA, automação e futuro do trabalho",
    nivel: "Fácil",
    nivel_id: "facil",
    tipo: "múltipla escolha",
    enunciado: "De acordo com o relatório Future of Jobs 2025, do Fórum Econômico Mundial, a rápida evolução da IA Generativa e da automação industrial deve transformar 39% das competências profissionais nos próximos anos. Embora funções repetitivas e baseadas em processamento de dados estejam sob risco, profissões que exigem alta complexidade interpessoal e julgamento ético tendem a se fortalecer.",
    questao: "Considerando o avanço da IA e da automação, qual das seguintes habilidades profissionais é considerada a menos passível de ser totalmente substituída por algoritmos no curto prazo?",
    options: [
      "A) Organização de grandes volumes de dados em planilhas eletrônicas.",
      "B) Monitoramento de padrões em sistemas de vigilância por câmeras.",
      "C) Mediação de conflitos e negociações que exijam empatia e inteligência emocional.",
      "D) Cálculo de projeções financeiras baseadas em históricos de faturamento.",
      "E) Identificação de erros gramaticais e ortográficos em textos técnicos."
    ],
    resposta_enc: "Qw==", // C
    dica: "Dica: Atividades lógicas, matemáticas, repetitivas e de checagem textual são facilmente automatizadas por IA. Habilidades socioemocionais (empatia, negociação complexa) são difíceis de programar.",
    justificativa: "Correto! Habilidades interpessoais e emocionais, como mediação de conflitos com empatia, são as menos automatizáveis no curto prazo."
  },
  {
    code: "TD06",
    tema: "Cidadania digital e cyberbullying",
    nivel: "Médio",
    nivel_id: "medio",
    tipo: "múltipla seleção",
    enunciado: "Em um grupo de mensagens da escola, um estudante tem sua foto pessoal compartilhada sem autorização, acompanhada de comentários ofensivos feitos por colegas. A imagem começa a circular fora do grupo, aumentando a exposição e violando a privacidade do aluno.",
    questao: "Considerando esse cenário, selecione as ações que contribuem para conter o risco digital, combater a exposição indevida de dados e lidar de forma ética com o ocorrido (Selecione todas as corretas):",
    options: [
      "A) Evitar compartilhar a imagem ou os comentários ofensivos, interrompendo a disseminação do conteúdo.",
      "B) Denunciar o conteúdo à plataforma ou comunicar a escola sobre a situação.",
      "C) Compartilhar a imagem apenas com amigos próximos para alertá-los sobre o ocorrido.",
      "D) Apoiar a vítima, incentivando a busca por ajuda e orientação adequada.",
      "E) Solicitar a remoção da imagem e divulgar o nome dos envolvidos abertamente para responsabilização."
    ],
    resposta_enc: "QSxCLEQ=", // A, B, D
    dica: "Dica: Ações corretas reduzem o contágio do conteúdo prejudicial (não compartilhar - A), envolvem autoridades (denúncia - B) e cuidam da vítima (apoiar - D). Repassar com 'amigos' (C) ou expor nomes publicamente (E) agrava o problema.",
    justificativa: "Correto! As alternativas A, B e D são atitudes seguras e éticas. Compartilhar a foto (C) ou expor terceiros em retaliação (E) ampliam a exposição e a violência digital."
  },
  {
    code: "TD07",
    tema: "Treinamento de modelos e falsos positivos",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "resposta construída",
    enunciado: "Uma startup de tecnologia geofísica utiliza aprendizado de máquina para alertar moradores próximos a uma mineradora sobre rompimento de barragens. O sistema analisa milhões de vibrações/movimentos por segundo do solo. Recentemente, detectou que um movimento natural do solo era um rompimento, gerando um 'falso positivo' e forçando uma evacuação desnecessária da população, com grandes transtornos logísticos.",
    questao: "Explique como o conceito de treinamento de modelo influencia a precisão desse sistema. Proponha dois dados adicionais que o algoritmo deveria considerar para reduzir os falsos positivos (explicando o porquê).",
    dica: "Dica: O modelo aprende com base nos dados históricos fornecidos. Se os dados não incluírem eventos normais que geram tremores (ex.: tráfego pesado, pequenas detonações de obras), a IA errará. Sugira adicionar sensores meteorológicos (chuva) ou cronograma de detonações para cruzar os dados.",
    justificativa: "Excelente! Esta é uma questão discursiva. Certifique-se de que sua resposta conecte o treinamento com dados históricos e proponha sensores complementares (ex.: dados pluviométricos para checar saturação do solo, e diário de obras para descartar ruído de explosões/caminhões)."
  },
  {
    code: "TD08",
    tema: "Tecnologia principal de chatbots",
    nivel: "Fácil",
    nivel_id: "facil",
    tipo: "múltipla escolha",
    enunciado: "Uma empresa de e-commerce implementou um chatbot em seu site para melhorar o atendimento ao cliente. Houve diminuição no tempo de resposta e aumento da capacidade de atendimentos simultâneos. A equipe técnica explicou que a IA interpreta mensagens em linguagem humana e responde automaticamente.",
    questao: "Qual alternativa explica corretamente a principal tecnologia responsável pelo funcionamento desse tipo de chatbot?",
    options: [
      "A) Visão computacional, responsável por interpretar imagens enviadas pelos usuários.",
      "B) Blockchain, responsável por registrar interações e validar respostas.",
      "C) Realidade virtual, responsável por criar ambientes imersivos.",
      "D) Processamento de linguagem natural, responsável por interpretar mensagens em linguagem humana e gerar respostas.",
      "E) Internet das Coisas, responsável por conectar dispositivos físicos ao atendimento."
    ],
    resposta_enc: "RA==", // D
    dica: "Dica: A comunicação humana por texto é estruturada sob a linguagem natural. A subárea da IA focada em traduzir e gerar textos humanos é o PLN (Processamento de Linguagem Natural).",
    justificativa: "Correto! O Processamento de Linguagem Natural (PLN) é a tecnologia central que capacita IAs a compreender e redigir textos legíveis."
  },
  {
    code: "TD09",
    tema: "Autenticação multifator (MFA)",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "múltipla escolha",
    enunciado: "Criminosos usaram ataques de phishing (páginas falsas) para roubar usuário e senha de servidores e aprovar desmatamento ilegal em áreas protegidas. As senhas eram complexas, mas o sistema aceitou o login imediatamente após a digitação correta.",
    questao: "Para evitar que o roubo de senhas resulte em acessos e desastres graves, qual estratégia de autenticação oferece a proteção mais robusta contra credenciais vazadas?",
    options: [
      "A) Implementação de políticas de senha complexas com trocas obrigatórias frequentes.",
      "B) Utilização de Autenticação Multifator (MFA), combinando fatores de conhecimento (senha) com fatores de posse (token/dispositivo).",
      "C) Substituição de senhas por perguntas secretas sobre a vida pessoal do servidor público.",
      "D) Criação de banco de dados centralizado com logins monitorados remotamente pelo administrador.",
      "E) Uso de biometria facial como fator único de acesso, descartando senhas."
    ],
    resposta_enc: "Qg==", // B
    dica: "Dica: Se a senha for roubada por phishing, regras de complexidade (A) não ajudam, pois o atacante tem a senha exata. O MFA exige um segundo fator (ex.: código no celular do dono), impedindo o invasor de logar.",
    justificativa: "Correto! A autenticação multifator exige algo que o usuário sabe (senha) e algo que ele possui (dispositivo móvel), bloqueando invasões mesmo que a senha vaze."
  },
  {
    code: "TD10",
    tema: "Uso combinado de buscas e LLMs",
    nivel: "Médio",
    nivel_id: "medio",
    tipo: "múltipla escolha",
    enunciado: "No trabalho de TI de Cidades Sustentáveis, o supervisor solicita duas tarefas rápidas:\nI) Localizar o PDF oficial da última norma técnica da ABNT sobre concreto reciclado.\nII) Redigir um rascunho de e-mail de conscientização explicando o conceito de sustentabilidade urbana.",
    questao: "Considerando as características das ferramentas (busca e IA), qual seria a abordagem produtiva e correta para o dia a dia?",
    options: [
      "A) Usar o motor de busca para redigir o e-mail criativo e a IA (LLM) para encontrar o link direto e seguro do arquivo PDF.",
      "B) Usar a IA para ambas as tarefas, pois modelos de linguagem não cometem erros e sempre fornecem documentos oficiais atualizados.",
      "C) Usar o motor de busca para ambas as tarefas, já que as IAs Generativas ainda não são utilizadas em ambientes de construção civil.",
      "D) Utilizar um motor de busca para ambas as tarefas, pois as IAs Generativas possuem restrições legais corporativas que proíbem rascunhos de e-mails.",
      "E) Usar o motor de busca para localizar o link oficial do PDF da norma e a IA (LLM) para ajudar na estruturação e redação do rascunho do e-mail educativo."
    ],
    resposta_enc: "RQ==", // E
    dica: "Dica: Documentos oficiais de regulação técnica (ABNT, leis) exigem precisão absoluta, devendo ser buscados em sites oficiais. O rascunho de e-mail é um texto criativo/explicativo, ideal para ser gerado/estruturado por LLM.",
    justificativa: "Correto! O motor de busca garante a integridade da fonte técnica oficial, e o LLM serve como excelente assistente de redação e formatação para o e-mail."
  },
  {
    code: "TD11",
    tema: "Privacidade e proteção de dados de menores",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "múltipla seleção",
    enunciado: "O Estatuto Digital da Criança e do Adolescente (ECA Digital - Lei nº 15.211/2025) e a Lei Geral de Proteção de Dados (LGPD) impõem regras rígidas sobre privacidade de menores e uso de dados e imagens no ambiente escolar.",
    questao: "Quais das seguintes práticas respeitam as diretrizes do ECA Digital e da LGPD simultaneamente? (Selecione todas as corretas):",
    options: [
      "A) Aluno publica em suas redes pessoais fotos de colegas em aula. A escola possui termo genérico assinado no início do ano.",
      "B) Professor publica em suas redes pessoais fotos de alunos menores marcando a escola, baseado na autorização institucional de divulgação.",
      "C) Escola armazena trabalhos de alunos em sistema educacional seguro com termo de consentimento pedagógico assinado pelos pais e divulga destaques no site oficial.",
      "D) Professor pede que alunos de 11 anos criem contas públicas no Instagram para divulgar projetos de aula, baseado no consentimento escolar geral.",
      "E) Escola publica em suas redes sociais oficiais fotos de alunos em atividades, tendo obtido termos específicos de autorização de imagem assinados pelos pais."
    ],
    resposta_enc: "QyxF", // C, E
    dica: "Dica: A autorização da escola não se estende para as redes sociais privadas do professor (B) ou de outros alunos (A). Alunos de 11 anos não podem criar conta no Instagram, cujo limite de idade é 13 anos (D). C e E são oficiais e consentidas.",
    justificativa: "Correto! Apenas C e E seguem a legalidade. Professores e alunos não podem divulgar fotos de menores em suas redes pessoais (A e B). A criação de contas do Instagram para menores de 13 anos viola as diretrizes de idade da plataforma (D)."
  },
  {
    code: "TD12",
    tema: "Fake news e validação de fontes",
    nivel: "Fácil",
    nivel_id: "facil",
    tipo: "múltipla escolha",
    enunciado: "Durante fortes chuvas, circula em grupos de mensagens que uma barragem local se rompeu. Um estudante decide checar a informação. Ele vê um vídeo alarmista informal em redes sociais, mas a Defesa Civil local e portais jornalísticos oficiais informam que a barragem está estável e sob controle.",
    questao: "Diante dessa situação, qual é a atitude mais adequada para evitar a disseminação de fake news?",
    options: [
      "A) Compartilhar a mensagem original imediatamente para alertar outras pessoas.",
      "B) Considerar o vídeo como prova suficiente da veracidade do fato.",
      "C) Aguardar mais mensagens no grupo antes de tomar qualquer decisão.",
      "D) Verificar informações em fontes oficiais e veículos confiáveis antes de compartilhar.",
      "E) Compartilhar apenas com familiares próximos para evitar pânico geral."
    ],
    resposta_enc: "RA==", // D
    dica: "Dica: A atitude do cidadão responsável na internet é nunca repassar alertas sem checar se canais oficiais (como Defesa Civil ou imprensa profissional) confirmam a ocorrência.",
    justificativa: "Correto! O cruzamento de dados com canais oficiais de comunicação é o principal método de prevenção contra pânicos de boataria."
  },
  {
    code: "TD13",
    tema: "Realidade aumentada e blockchain",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "múltipla escolha",
    enunciado: "Uma fábrica de chocolates premium implementou em sua recepção um software de Realidade Aumentada (RA) para transformar a experiência de seus clientes. Ao apontar o celular para a embalagem, o cliente visualiza uma projeção 3D que mostra todo o ciclo de vida do produto: desde o plantio sustentável do cacau, com a preservação da biodiversidade local, até o processo de fabricação e revenda. Além disso, a empresa utiliza a tecnologia Blockchain, permitindo que o cliente escaneie um QR Code e acesse o registro imutável de cada etapa da cadeia produtiva, assegurando que o manejo respeitou normas rigorosas de desenvolvimento sustentável.",
    questao: "Nesse cenário de Transformação Digital, qual é a principal função da integração entre a Realidade Aumentada e o Blockchain para a estratégia de mercado da empresa?",
    options: [
      "A) A Realidade Aumentada substitui a necessidade de certificações ambientais, enquanto o Blockchain serve apenas para acelerar o processo de pagamento no caixa, por meio do QR Code.",
      "B) A integração entre as tecnologias tem como principal objetivo melhorar a experiência visual do consumidor, utilizando recursos digitais para aumentar a atratividade da embalagem do produto.",
      "C) A Realidade Aumentada atua na interface de interação e educação do cliente, enquanto o Blockchain garante a integridade e a rastreabilidade dos dados sobre a sustentabilidade do produto.",
      "D) O Blockchain permite que diferentes participantes da cadeia produtiva atualizem informações de rastreabilidade em tempo real, enquanto a Realidade Aumentada transforma esses dados em experiências visuais interativas.",
      "E) O uso conjunto dessas tecnologias permite automatizar etapas da cadeia produtiva, eliminando a necessidade de auditorias externas sobre sustentabilidade."
    ],
    resposta_enc: "Qw==", // C
    dica: "Dica: Pense no papel de cada uma. A RA 'mostra de forma interativa' (interface/educação). O Blockchain armazena registros imutáveis e auditáveis (rastreabilidade/integridade).",
    justificativa: "Correto! A RA atua no engajamento educacional do cliente (front-end) e o Blockchain provê confiança técnica inquestionável por meio de registros de dados invioláveis (back-end)."
  },
  {
    code: "TD14",
    tema: "Critérios avançados de pesquisa científica",
    nivel: "Médio",
    nivel_id: "medio",
    tipo: "múltipla escolha",
    enunciado: "Uma estudante está preparando um trabalho sobre o impacto da inteligência artificial na educação e decide utilizar diferentes estratégias de busca na internet. Ela realizou as seguintes ações:\nI. Pesquisou apenas: inteligência artificial educação, obtendo uma variedade de resultados genéricos.\nII. Utilizou a busca: impacto da inteligência artificial na educação filetype:pdf, encontrando artigos acadêmicos.\nIII. Perguntou a uma inteligência artificial generativa e utilizou a resposta como ponto de partida para a pesquisa, sem realizar verificação adicional das fontes apresentadas.\nIV. Refinou a busca para impactos da IA na educação site:unesco.org 2023, encontrando dados institucionais.",
    questao: "Entre as ações realizadas, quais podem ser consideradas corretas quanto ao uso de critérios avançados de pesquisa e confiabilidade das fontes?",
    options: [
      "A) Apenas I e III estão corretas",
      "B) Apenas II e IV estão corretas",
      "C) Apenas I, II e IV estão corretas",
      "D) Apenas II, III e IV estão corretas",
      "E) Todas estão corretas"
    ],
    resposta_enc: "Qg==", // B
    dica: "Dica: A busca genérica (I) não é avançada. Confiar cegamente em fontes citadas por IA sem verificação (III) é uma falha de confiabilidade. II (operador filetype) e IV (site e ano) são buscas avançadas e confiáveis.",
    justificativa: "Correto! Apenas II e IV são práticas recomendadas de busca avançada e checagem de fontes fidedignas."
  },
  {
    code: "TD15",
    tema: "Cidades inteligentes (Smart Cities)",
    nivel: "Fácil",
    nivel_id: "facil",
    tipo: "múltipla escolha",
    enunciado: "Uma prefeitura implementou soluções de cidades inteligentes para melhorar a mobilidade urbana, reduzir desperdícios e agilizar a manutenção de serviços públicos. Entre as medidas adotadas, destacam-se: semáforos inteligentes, capazes de ajustar automaticamente o tempo de abertura conforme o fluxo de veículos; sensores na iluminação pública, que regulam a intensidade da luz de acordo com o movimento nas vias; monitoramento em tempo real da rede viária, que identifica falhas em semáforos e envia alertas automáticos às equipes técnicas.",
    questao: "Com base no cenário apresentado, qual característica está mais associada ao conceito de cidade inteligente?",
    options: [
      "A) Utilização de tecnologias conectadas para melhorar serviços urbanos e a vida da população.",
      "B) Uso exclusivo de computadores em prédios públicos para digitalizar documentos administrativos.",
      "C) Construção de novas avenidas sem uso de tecnologia no planejamento urbano.",
      "D) Aumento da arrecadação municipal por meio da cobrança de novos impostos locais.",
      "E) Substituição total dos servidores públicos por sistemas automatizados permanentes."
    ],
    resposta_enc: "QQ==", // A
    dica: "Dica: O cerne de uma Smart City é usar IoT, sensores e redes de comunicação integrados para melhorar o funcionamento do espaço público urbano.",
    justificativa: "Correto! Cidade inteligente define-se pelo uso de redes e sensores tecnológicos conectados (IoT) para tornar os serviços municipais mais integrados e responsivos."
  },
  {
    code: "TD16",
    tema: "IA e separação inteligente de lixo",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "resposta construída",
    enunciado: "Uma escola propõe desenvolver um sistema inteligente de descarte de resíduos. O sistema deve: 1) identificar o resíduo (plástico, papel, metal) por fotos; 2) orientar o aluno por texto claro sobre o cesto correto; 3) aprender com correções de erros feitas pelos monitores; 4) responder dúvidas de descarte em linguagem natural.",
    questao: "Explique como as tecnologias de visão computacional, redes neurais artificiais, machine learning e processamento de linguagem natural se integram para realizar esse fluxo escolar completo. Forneça um exemplo de mensagem didática gerada pela IA.",
    dica: "Dica: Divida o fluxo: Câmera captura (Visão Computacional); Rede neural classifica a garrafa de plástico (Rede Neural); IA avisa 'Este item é plástico reciclável, descarte na lixeira vermelha' (Linguagem Natural); O monitor corrige um erro e o sistema se retreina (Machine Learning).",
    justificativa: "Excelente! Esta resposta construída deve interligar a detecção óptica (câmera), processamento convolucional de imagens, ajuste dinâmico do modelo e geração de textos de mediação socioambiental."
  },
  {
    code: "TD17",
    tema: "Logística reversa e lixo eletrônico",
    nivel: "Médio",
    nivel_id: "medio",
    tipo: "múltipla escolha",
    enunciado: "Segundo a ONU (2024), a produção mundial de lixo eletrônico aumenta 5 vezes mais rápido do que a reciclagem. Foram 62 milhões de toneladas em 2022. O líder de uma montadora de carros elétricos no Brasil busca minimizar o impacto ambiental de descarte de baterias e componentes de TI dos automóveis ao fim de seu ciclo de uso.",
    questao: "Nesse cenário, qual estratégia de Economia Circular seria a mais adequada para sua gestão corporativa?",
    options: [
      "A) Incentivar o descarte dos componentes eletrônicos em aterros sanitários de alta segurança, garantindo que o lixo não fique visível para a população urbana.",
      "B) Implementar um programa de logística reversa que recupere metais valiosos das baterias e promova o reuso de segunda vida, transformando baterias antigas em sistemas de armazenamento de energia para residências.",
      "C) Priorizar a incineração dos resíduos eletrônicos para gerar energia térmica, eliminando a necessidade de processos de triagem e reciclagem manual.",
      "D) Focar na exportação dos componentes obsoletos para mercados internacionais em desenvolvimento, reduzindo os custos de armazenamento da montadora no Brasil.",
      "E) Projetar os sistemas eletrônicos dos carros para que se tornem obsoletos em dois anos, forçando o cliente a comprar um novo modelo e manter o fluxo de vendas da empresa."
    ],
    resposta_enc: "Qg==", // B
    dica: "Dica: Economia circular busca eliminar resíduos mantendo materiais em ciclos fechados. Aterros (A), incineração (C), exportação de descarte (D) e obsolescência (E) geram desperdício linear. Logística reversa e reuso de baterias (B) reinserem o material na cadeia.",
    justificativa: "Correto! A recuperação de componentes de bateria para uso em residências (reuso de segunda vida) é a base de um design circular de TI verde."
  },
  {
    code: "TD18",
    tema: "Algoritmo da Cifra de César",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "resposta construída",
    enunciado: "Um analista de cibersegurança do Desafio dos Dados decide encriptar mensagens usando a Cifra de César com deslocamento 3. A cifra substitui cada letra avançando 3 casas no alfabeto (d->g, e->h). Se passar de z, volta para a. Espaços são mantidos estáticos nas mesmas posições.",
    questao: "Descreva um algoritmo linear em linguagem natural (passo a passo de execução) para processar qualquer mensagem por essa regra e aplique-o na mensagem: \"desafio dos dados\". Escreva a frase resultante.",
    dica: "Dica: Seu algoritmo deve ler caractere por caractere. Se for letra, rotacione. Se passar de Z, volte para A. Se for espaço, mantenha. O resultado de 'desafio dos dados' é 'ghvdilr grv gdgrv'. Lembre-se de tratar a junção 'fi' separadamente como 'f' e 'i'.",
    justificativa: "Parabéns! O algoritmo deve cobrir as condições de leitura, verificação de caracteres especiais (espaços) e a rotação circular mod-26. A mensagem cifrada resultante é 'ghvdilr grv gdgrv'."
  },
  {
    code: "TD19",
    tema: "Programação e algoritmos como arte",
    nivel: "Fácil",
    nivel_id: "facil",
    tipo: "múltipla escolha",
    enunciado: "Arte com código tem ganhado espaço em museus, espetáculos e laboratórios acadêmicos brasileiros. Programação serve como meio de expressão para criar poemas visuais, aplicativos coreográficos de balé, músicas eletrônicas e quadros decorativos generativos, todos baseados no elemento comum: o algoritmo.",
    questao: "Qual alternativa melhor representa o uso de algoritmos e programação no contexto da inovação e economia criativa?",
    options: [
      "A) Como uma ferramenta voltada principalmente para automatizar processos artísticos repetitivos, reduzindo a participação criativa do artista na produção final.",
      "B) Como um processo mecânico que serve apenas para realizar cálculos matemáticos complexos.",
      "C) Como um meio de expressão que combina competências técnicas e criativas para gerar novas formas de valor e arte.",
      "D) Como uma substituição completa do artista humano por máquinas que não precisam de comandos.",
      "E) Como uma tecnologia que não possui aplicação prática na economia criativa, servindo apenas para pesquisas científicas do âmbito da Física ou Computação Quântica."
    ],
    resposta_enc: "Qw==", // C (A primeira ocorrência de C no caderno)
    dica: "Dica: Programar não anula o artista, mas amplia seu repertório, unindo lógica técnica (computador) e criatividade (humana) em obras de arte geradas por código.",
    justificativa: "Correto! A programação é vista como um novo meio de expressão artística e vetor de valor econômico na economia criativa."
  },
  {
    code: "TD20",
    tema: "Decisão ambiental em datacenters",
    nivel: "Difícil",
    nivel_id: "dificil",
    tipo: "múltipla escolha",
    enunciado: "Data centers operam 24h, exigem estabilidade extrema e resfriamento constante. A empresa busca reduzir impacto ambiental, manter continuidade operacional (estabilidade) e viabilidade econômica. Avalia três opções:\nLocal A: Baixa estabilidade energética, resfriamento precário, impacto ambiental mínimo, custo médio.\nLocal B: Alta estabilidade, fontes térmicas fósseis (alto impacto ambiental), baixo custo.\nLocal C: Alta estabilidade (fontes hidrelétricas limpas brasileiras), boa disponibilidade hídrica para resfriamento, custo e impacto ambiental médios.",
    questao: "Com base nesses critérios e restrições, qual decisão de instalação é mais sustentável e operacionalmente viável?",
    options: [
      "A) Escolher o Local A, pois apresenta menor impacto ambiental direto, mesmo com menor estabilidade energética.",
      "B) Escolher o Local B, pois possui menor custo e alta estabilidade, ainda que com maior impacto ambiental.",
      "C) Escolher o Local C, pois equilibra estabilidade, eficiência térmica e menor impacto relativo.",
      "D) Escolher o Local A, pois a intermitência energética pode ser compensada sem impactos relevantes na operação.",
      "E) Escolher qualquer local, pois todas as opções atendem igualmente aos critérios definidos."
    ],
    resposta_enc: "Qw==", // C
    dica: "Dica: O Local A compromete a operação (baixa estabilidade). O Local B compromete a sustentabilidade (alto impacto fóssil). O Local C garante a estabilidade operacional usando matriz limpa hidrelétrica e refrigeração adequada.",
    justificativa: "Correto! O Local C representa o melhor equilíbrio e compromisso (trade-off) entre confiabilidade técnica (energia limpa contínua) e controle de impacto ecológico."
  }
];

// ============================================================
// DADOS PEDAGÓGICOS E SUPORTE DE AULA
// ============================================================

const PEDAGOGICAL_DATA = {
  "TD01": {
    concept: "Desordem informacional: o fenômeno popular de 'fake news' se divide em três eixos: Misinformation (erro sem intenção), Disinformation (mentira intencional para causar dano) e Mal-information (verdades usadas com intenção maliciosa, como vazamentos de privacidade).",
    notes: "Lousa: Falso + Intencional = Desinformação (ex: mentiras eleitorais). Falso + Sem intenção = Info. Falsa (ex: receitas caseiras de tias). Verdadeiro + Intencional = Info. Maliciosa."
  },
  "TD02": {
    concept: "Realidade Virtual (RV): ambiente imersivo digital gerado por computador que substitui o ambiente real. Vantagem: treinamento seguro em cenários de alto risco (ex: plataformas de petróleo). Limitação: alto custo inicial de headsets e desenvolvimento de software.",
    notes: "Lousa: RV = Imersão total (exclusão do ambiente real). Ideal para simulação industrial de risco. Custo alto de hardware (headsets) e equipe de desenvolvimento."
  },
  "TD03": {
    concept: "Operadores de busca avançada: comandos que instruem o robô de busca a filtrar dados. 'site:gov.br' restringe resultados a órgãos do governo brasileiro; 'filetype:pdf' filtra apenas arquivos PDF; operador lógico 'OR' permite buscar múltiplos formatos alternativos.",
    notes: "Lousa: string recomendada: edital startups site:gov.br (filetype:pdf OR filetype:docx). Explicar que OR agrupa os tipos."
  },
  "TD04": {
    concept: "Diferença entre motores de busca e LLMs: motores de busca indexam e rastreiam links diretos da web (verificabilidade). LLMs (Large Language Models) são preditores de texto treinados em grandes corpora de dados que geram textos fluidos e plausíveis, mas podem 'alucinar' (inventar fatos).",
    notes: "Lousa: Motores de busca = Indexação e rastreamento de links. LLM = Geração estatística de texto. Sempre checar as fontes citadas por IAs generativas."
  },
  "TD05": {
    concept: "Impacto da IA no futuro do trabalho: a inteligência artificial automatiza facilmente tarefas lógicas, repetitivas e baseadas em regras de processamento de dados (ex: planilhas). Habilidades humanas intrínsecas como empatia, inteligência emocional e julgamento ético são difíceis de replicar no curto prazo.",
    notes: "Lousa: Automatizável = Tarefas repetitivas e lógica pura. Não-automatizável = Inteligência social, negociação complexa, mediação com empatia."
  },
  "TD06": {
    concept: "Cidadania e Ética Digital: o cyberbullying e a exposição não-autorizada de fotos violam leis brasileiras (ECA e LGPD). Diante de infrações, a contenção envolve interromper o compartilhamento, apoiar a vítima e reportar aos canais competentes (escola/plataforma).",
    notes: "Lousa: Atitudes éticas: 1. Não compartilhar fotos ofensivas. 2. Denunciar na plataforma/escola. 3. Apoiar a vítima. Exposição de nomes na internet por conta própria gera linchamento virtual."
  },
  "TD07": {
    concept: "Treinamento de Modelos de IA: algoritmos aprendem padrões históricos. Se a base de treinamento for enviesada ou faltarem cenários normais (ex: caminhões pesados perto de sensores), o modelo erra. Um falso positivo ocorre quando a IA aciona um alerta sem perigo real.",
    notes: "Lousa: Falso Positivo = Alerta de rompimento sem barragem romper. Solução: treinar com mais dados de controle (ruído normal) e cruzar com dados meteorológicos e diários de obras."
  },
  "TD08": {
    concept: "Processamento de Linguagem Natural (PLN/NLP): ramo da inteligência artificial que visa entender, processar e replicar a linguagem humana por computadores. É a base da tradução de idiomas e das interfaces de conversação com chatbots.",
    notes: "Lousa: Chatbots utilizam PLN para extrair a intenção e entidades de mensagens escritas por usuários em linguagem natural, respondendo adequadamente."
  },
  "TD09": {
    concept: "Autenticação Multifator (MFA): técnica de segurança cibernética que requer dois ou mais fatores de autenticação independentes para validar um login: algo que você sabe (senha), algo que você possui (token no celular) ou algo que você é (biometria).",
    notes: "Lousa: Se o hacker rouba a senha (conhecimento) em um ataque de phishing, ele ainda assim será bloqueado porque não possui o token do seu celular (posse)."
  },
  "TD10": {
    concept: "Metodologia Combinada de Pesquisa: otimização de tempo. Usar buscas tradicionais para informações exatas que requerem fontes primárias e veracidade garantida (normas, leis). Usar IAs generativas para estruturar, sintetizar ou revisar textos formais.",
    notes: "Lousa: Busca = Localizar a norma técnica (ABNT/lei) no site oficial. LLM = Rascunhar o e-mail educativo ou reescrever de forma mais didática."
  },
  "TD11": {
    concept: "Proteção de dados de menores de idade: a LGPD e o ECA exigem consentimento explícito e específico dos pais para processar ou publicar imagens e dados de crianças/adolescentes. Perfis de mídias sociais públicas possuem limite etário que deve ser respeitado.",
    notes: "Lousa: Termos escolares genéricos não cobrem redes sociais pessoais de professores. Menores de 13 anos não podem criar perfis públicos sem consentimento explícito."
  },
  "TD12": {
    concept: "Prevenção a boatos digitais: a pressa para compartilhar e o pânico gerado por boatos locais alimentam fake news. O processo correto envolve cruzar o fato com os canais oficiais de comunicação antes de disseminar qualquer alerta alarmista.",
    notes: "Lousa: Em caso de pânico (ex: barragem rompeu), verifique a Defesa Civil e portais jornalísticos credenciados. Nunca repasse em grupos de família sem verificar."
  },
  "TD13": {
    concept: "Realidade Aumentada (RA) vs Blockchain: a RA projeta elementos virtuais no ambiente físico real do usuário (interface e engajamento). O Blockchain armazena um livro-razão público distribuído, imutável e auditável (rastreabilidade de dados de sustentabilidade).",
    notes: "Lousa: RA = Interação visual e educativa (Front-end). Blockchain = Segurança, histórico imutável do plantio ao produto (Back-end/Confiança)."
  },
  "TD14": {
    concept: "Confiabilidade científica: a busca em bases confiáveis (site governamental ou base acadêmica com filetype:pdf) reduz o ruído da internet. Alucinações de LLM são o maior risco: elas geram links e referências acadêmicas que parecem reais mas não existem.",
    notes: "Lousa: Nunca use referências de IA sem testar se o artigo realmente existe. Use site:unesco.org ou filetype:pdf para pesquisas de fontes fidedignas."
  },
  "TD15": {
    concept: "Cidades Inteligentes (Smart Cities): cidades que utilizam tecnologia e sensores IoT de forma conectada para otimizar serviços urbanos, trânsito, coleta de resíduos e consumo de energia, melhorando o bem-estar e a sustentabilidade municipal.",
    notes: "Lousa: Exemplo clássico: semáforo inteligente com sensor de fluxo vs semáforo com temporizador fixo analógico."
  },
  "TD16": {
    concept: "Integração de IAs: sensores ópticos enviam imagens para redes neurais convolucionais (Visão Computacional) que classificam o tipo de material. A lógica decide o destino (lixeira) e um motor de PLN redige uma resposta didática e atende dúvidas de descarte.",
    notes: "Lousa: Fluxo: Câmera -> Visão (identifica plástico) -> Lógica (lixeira vermelha) -> PLN (gera mensagem interativa: 'Obrigado por reciclar esta garrafa!')."
  },
  "TD17": {
    concept: "Economia Circular e TI Verde: modelo econômico que busca eliminar resíduos na cadeia, mantendo recursos circulando por reuso ou reciclagem. A logística reversa obriga fabricantes a receberem resíduos pós-consumo para reaproveitamento.",
    notes: "Lousa: Reuso de segunda vida de baterias de veículos para armazenar energia residencial é um exemplo premium de economia circular."
  },
  "TD18": {
    concept: "Cifra de César: método de criptografia de substituição simétrica clássico, onde cada caractere da mensagem é deslocado circularmente k casas no alfabeto. Ex: com chave 3, a letra 'a' torna-se 'd', 'b' torna-se 'e', etc.",
    notes: "Lousa: Mensagem: 'desafio dos dados' com chave 3 torna-se 'ghvdilr grv gdgrv'. Trate caractere a caractere, pulando os espaços."
  },
  "TD19": {
    concept: "Programação e Inovação Criativa: o código e algoritmos servem como meio de expressão artística e economia criativa (arte generativa, design de interações). Unir computação com ciências humanas expande as competências e gera valor cultural.",
    notes: "Lousa: Algoritmos não apenas automatizam, mas criam novas linguagens artísticas e novos setores econômicos baseados em inovação."
  },
  "TD20": {
    concept: "Trade-offs em Datacenters: a escolha de infraestruturas de dados requer ponderar estabilidade de fornecimento elétrico (uptime constante) e refrigeração adequada com o menor impacto ecológico e viabilidade econômica de longo prazo.",
    notes: "Lousa: Local C (hidrelétricas limpas, boa refrigeração hídrica, custo médio) é mais viável operacionalmente e ecologicamente que fontes térmicas fósseis."
  }
};

// ============================================================
// SIMULATION ENGINE
// ============================================================

let currentQuestionIndex = 0;
let selectedSquad = null;
let answersState = {}; // { 'TD01': 'C', 'TD07': 'texto discursivo' }
let hintsUsed = {}; // { 'TD01': true }
let xp = 0;
let unlockedBadges = new Set();

// Teacher Mode State
let isTeacherMode = sessionStorage.getItem("desafio_teacher_unlocked") === "true";

// Gamification and Audio State
let audioMuted = localStorage.getItem("desafio_audio_muted") === "true";
let streakCount = 0;
let currentLevel = 1;
let notesState = {}; // Save notes per question code

// Elements
const squadSelectSection = document.getElementById("squad-select-section");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");

const selectSquadDropdown = document.getElementById("squad-select-dropdown");
const btnStartSimulado = document.getElementById("btn-start-simulado");

const questionNumberLabel = document.getElementById("q-number-label");
const questionTitleLabel = document.getElementById("q-title-label");
const questionLevelLabel = document.getElementById("q-level-label");
const questionTypeLabel = document.getElementById("q-type-label");
const questionEnunciado = document.getElementById("q-enunciado-text");
const questionText = document.getElementById("q-question-text");
const questionOptionsWrapper = document.getElementById("q-options-wrapper");
const discursivaWrapper = document.getElementById("q-discursiva-wrapper");
const discursivaTextarea = document.getElementById("discursiva-input");

const btnHint = document.getElementById("btn-hint");
const hintPanel = document.getElementById("hint-panel");
const hintText = document.getElementById("hint-text");

const btnCheckAnswer = document.getElementById("btn-check-answer");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackText = document.getElementById("feedback-text");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnFinish = document.getElementById("btn-finish");

const sidebarQuestionsList = document.getElementById("sidebar-questions-list");
const xpCounter = document.getElementById("xp-counter");
const progressBarInner = document.getElementById("progress-bar-inner");
const badgesListElement = document.getElementById("badges-list");

// Interactive Caesar Caesar Elements (Question TD18)
const caesarToolWrapper = document.getElementById("caesar-tool-wrapper");
const caesarInput = document.getElementById("caesar-input");
const caesarShift = document.getElementById("caesar-shift");
const caesarOutput = document.getElementById("caesar-output");

// Results screen elements
const resultsSquadName = document.getElementById("res-squad-name");
const resultsScoreText = document.getElementById("res-score-text");
const resultsMedalsList = document.getElementById("res-medals-list");
const btnExportGabarito = document.getElementById("btn-export-gabarito");
const exportFormatSelect = document.getElementById("export-format-select");
const btnRestartQuiz = document.getElementById("btn-restart-quiz");

// Initialize Squad Select
function initSimulado() {
  if (!quizSection || !resultsSection) return;

  // Render the quiz UI immediately on startup
  quizSection.style.display = "grid";
  currentQuestionIndex = 0;
  answersState = {};
  hintsUsed = {};
  xp = 0;
  unlockedBadges.clear();
  streakCount = 0;
  currentLevel = 1;
  notesState = {};
  updateXpDisplay();
  renderSidebar();
  loadQuestion(0);

  // Setup Advanced Didactics & Gamification
  setupAudioToggle();
  setupScratchpadCanvas();
  setupLogicSimulator();
  setupScratchpadNotes();
  setupDidacticDrawer();
  updateLevelProgress();

  // Set up the sidebar squad selection listener
  const sidebarSelectDropdown = document.getElementById("squad-select-dropdown");
  const squadInfoSidebar = document.getElementById("squad-info-sidebar");
  const squadMembersList = document.getElementById("squad-members-list");
  const squadGallerySidebar = document.getElementById("squad-gallery-sidebar");

  if (sidebarSelectDropdown) {
    sidebarSelectDropdown.addEventListener("change", () => {
      const squadId = sidebarSelectDropdown.value;
      if (squadId) {
        selectedSquad = SQUADS_LIST.find(s => s.id === squadId);
        if (selectedSquad) {
          if (squadInfoSidebar) squadInfoSidebar.style.display = "block";
          if (squadMembersList) squadMembersList.innerHTML = selectedSquad.members;
          if (squadGallerySidebar) {
            // Apply grid columns layout based on number of images
            if (selectedSquad.images.length === 2) {
              squadGallerySidebar.className = "squad-gallery-sidebar cols-2";
            } else {
              squadGallerySidebar.className = "squad-gallery-sidebar";
            }
            squadGallerySidebar.innerHTML = selectedSquad.images.map(img => 
              `<img src="assets/alunos/${img}" alt="Ilustracao do Squad ${selectedSquad.name}" />`
            ).join("");
          }
        }
      } else {
        selectedSquad = null;
        if (squadInfoSidebar) squadInfoSidebar.style.display = "none";
      }
    });
  }

  // Caesar tool real-time crypt
  if (caesarInput && caesarShift && caesarOutput) {
    const runCaesar = () => {
      const text = caesarInput.value;
      const shift = parseInt(caesarShift.value) || 0;
      caesarOutput.textContent = encryptCaesar(text, shift);
    };
    caesarInput.addEventListener("input", runCaesar);
    caesarShift.addEventListener("change", runCaesar);
  }

  // Navigation handlers
  btnPrev?.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion(currentQuestionIndex);
    }
  });

  btnNext?.addEventListener("click", () => {
    if (currentQuestionIndex < QUESTIONS_DATABASE.length - 1) {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    }
  });

  btnHint?.addEventListener("click", () => {
    const q = QUESTIONS_DATABASE[currentQuestionIndex];
    if (hintPanel && hintText) {
      hintText.textContent = q.dica;
      hintPanel.style.display = "block";
      hintsUsed[q.code] = true;
    }
  });

  btnCheckAnswer?.addEventListener("click", checkAnswerAndGiveFeedback);

  btnFinish?.addEventListener("click", showResultsScreen);

  btnRestartQuiz?.addEventListener("click", () => {
    resultsSection.style.display = "none";
    quizSection.style.display = "grid";
    
    // Clear selections and reload
    currentQuestionIndex = 0;
    answersState = {};
    hintsUsed = {};
    xp = 0;
    unlockedBadges.clear();
    streakCount = 0;
    currentLevel = 1;
    notesState = {};
    updateXpDisplay();
    updateStreakDisplay();
    
    // Clear drawing canvas if it exists
    const canvas = document.getElementById("scratchpad-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    if (sidebarSelectDropdown) {
      sidebarSelectDropdown.value = "";
    }
    selectedSquad = null;
    if (squadInfoSidebar) squadInfoSidebar.style.display = "none";
    
    renderSidebar();
    loadQuestion(0);
  });

  btnExportGabarito?.addEventListener("click", () => {
    const format = exportFormatSelect ? exportFormatSelect.value : "txt";
    exportGabarito(format);
  });

  // Setup Teacher Mode Card Toggles
  const btnToggleTeacherMode = document.getElementById("btn-toggle-teacher-mode");
  const checkProjectionMode = document.getElementById("check-projection-mode");
  const teacherProjectionControls = document.getElementById("teacher-projection-controls");
  const conceptPanel = document.getElementById("concept-panel");

  // Sync initial state of Teacher Mode UI elements
  if (isTeacherMode) {
    if (btnToggleTeacherMode) btnToggleTeacherMode.innerHTML = "<span>👨‍🏫</span> Desativar Modo Aula";
    if (teacherProjectionControls) teacherProjectionControls.style.display = "block";
  } else {
    if (btnToggleTeacherMode) btnToggleTeacherMode.innerHTML = "<span>👨‍🏫</span> Ativar Modo Aula";
    if (teacherProjectionControls) teacherProjectionControls.style.display = "none";
  }

  btnToggleTeacherMode?.addEventListener("click", () => {
    if (isTeacherMode) {
      isTeacherMode = false;
      sessionStorage.setItem("desafio_teacher_unlocked", "false");
      if (btnToggleTeacherMode) btnToggleTeacherMode.innerHTML = "<span>👨‍🏫</span> Ativar Modo Aula";
      if (teacherProjectionControls) teacherProjectionControls.style.display = "none";
      const teacherPanel = document.getElementById("teacher-panel");
      if (teacherPanel) teacherPanel.style.display = "none";
      loadQuestion(currentQuestionIndex); // reload to hide highlights
    } else {
      const pwd = prompt("Digite a senha do professor:");
      if (pwd === "admin2026" || pwd === "dados2026") {
        isTeacherMode = true;
        sessionStorage.setItem("desafio_teacher_unlocked", "true");
        if (btnToggleTeacherMode) btnToggleTeacherMode.innerHTML = "<span>👨‍🏫</span> Desativar Modo Aula";
        if (teacherProjectionControls) teacherProjectionControls.style.display = "block";
        loadQuestion(currentQuestionIndex); // reload to show highlights
      } else {
        alert("Senha incorreta!");
      }
    }
  });

  checkProjectionMode?.addEventListener("change", () => {
    if (checkProjectionMode.checked) {
      document.body.classList.add("projection-mode");
    } else {
      document.body.classList.remove("projection-mode");
    }
  });

  // Setup Concept Toggle
  const btnShowConcept = document.getElementById("btn-show-concept");
  btnShowConcept?.addEventListener("click", () => {
    if (conceptPanel) {
      conceptPanel.style.display = conceptPanel.style.display === "block" ? "none" : "block";
    }
  });
}

// Load Question in Wizard
function loadQuestion(index) {
  // Save notes of the previous question before changing currentQuestionIndex
  const scratchpadText = document.getElementById("scratchpad-text");
  const prevQuestion = QUESTIONS_DATABASE[currentQuestionIndex];
  if (scratchpadText && prevQuestion) {
    notesState[prevQuestion.code] = scratchpadText.value;
  }

  currentQuestionIndex = index;
  const q = QUESTIONS_DATABASE[index];

  // Load notes of the new question
  if (scratchpadText) {
    scratchpadText.value = notesState[q.code] || "";
  }

  // Update UI Elements
  if (questionNumberLabel) questionNumberLabel.textContent = q.code;
  if (questionTitleLabel) questionTitleLabel.textContent = q.tema;
  if (questionLevelLabel) {
    questionLevelLabel.textContent = q.nivel;
    questionLevelLabel.className = `q-level-badge level-${q.nivel_id}`;
  }
  if (questionTypeLabel) questionTypeLabel.textContent = q.tipo;
  if (questionEnunciado) questionEnunciado.textContent = q.enunciado;
  if (questionText) questionText.textContent = q.questao;

  // Hide panels
  if (hintPanel) hintPanel.style.display = "none";
  if (feedbackPanel) feedbackPanel.style.display = "none";

  // Hide Caesar tool by default
  if (caesarToolWrapper) caesarToolWrapper.style.display = "none";

  // Check inputs
  if (q.tipo === "resposta construída") {
    questionOptionsWrapper.style.display = "none";
    discursivaWrapper.style.display = "block";
    discursivaTextarea.value = answersState[q.code] || "";
    
    btnCheckAnswer.textContent = "Salvar Resposta Escrita";
    btnCheckAnswer.disabled = false;

    // Show caesar tool if it is TD18
    if (q.code === "TD18" && caesarToolWrapper) {
      caesarToolWrapper.style.display = "block";
    }
  } else {
    discursivaWrapper.style.display = "none";
    questionOptionsWrapper.style.display = "block";
    btnCheckAnswer.textContent = "Verificar Resposta";
    
    // Render options
    questionOptionsWrapper.innerHTML = "";
    const selectedAnswers = answersState[q.code] || [];

    const correctDecrypted = q.resposta_enc ? atob(q.resposta_enc) : "";
    const correctArray = correctDecrypted.split(",");

    q.options.forEach(opt => {
      const optionChar = opt.charAt(0); // A, B, C, D, E
      const isChecked = selectedAnswers.includes(optionChar);
      const isCorrectOption = correctArray.includes(optionChar);
      
      const label = document.createElement("label");
      
      let itemClass = "option-item glass-panel";
      if (isChecked) itemClass += " selected";
      if (isTeacherMode && isCorrectOption) itemClass += " teacher-correct";
      label.className = itemClass;
      
      const inputType = q.tipo === "múltipla seleção" ? "checkbox" : "radio";
      const input = document.createElement("input");
      input.type = inputType;
      input.name = `question-${q.code}`;
      input.value = optionChar;
      input.checked = isChecked;
      
      input.addEventListener("change", () => {
        // Highlight selection
        document.querySelectorAll(`.option-item`).forEach(el => el.classList.remove("selected"));
        if (q.tipo === "múltipla escolha") {
          label.classList.add("selected");
          answersState[q.code] = [optionChar];
        } else {
          // Multiple selection
          const checkedInputs = Array.from(document.querySelectorAll(`input[name="question-${q.code}"]:checked`));
          answersState[q.code] = checkedInputs.map(i => i.value);
          checkedInputs.forEach(i => i.closest(".option-item").classList.add("selected"));
        }
        btnCheckAnswer.disabled = false;
        updateProgress();
        renderSidebar();
      });

      label.appendChild(input);
      
      const textSpan = document.createElement("span");
      textSpan.textContent = opt;
      label.appendChild(textSpan);
      
      questionOptionsWrapper.appendChild(label);
    });

    btnCheckAnswer.disabled = !answersState[q.code] || answersState[q.code].length === 0;
  }

  // Update check/verify status if already verified
  const answeredStatus = getAnsweredStatus(q.code);
  if (answeredStatus === "verified-correct") {
    btnCheckAnswer.disabled = true;
    showVerifyFeedback(true, q.justificativa);
  } else if (answeredStatus === "verified-incorrect") {
    showVerifyFeedback(false, "Sua resposta anterior está incorreta. Tente outra alternativa!");
  } else if (q.tipo === "resposta construída" && answersState[q.code]) {
    showVerifyFeedback(true, "Rascunho salvo localmente! Não esqueça de autoavaliar com seu professor orientador.");
  }

  // Disable/Enable Nav buttons
  if (btnPrev) btnPrev.disabled = index === 0;
  if (btnNext) btnNext.style.display = index === QUESTIONS_DATABASE.length - 1 ? "none" : "inline-flex";
  if (btnFinish) btnFinish.style.display = index === QUESTIONS_DATABASE.length - 1 ? "inline-flex" : "none";

  // Textarea change handler for auto-save
  if (q.tipo === "resposta construída") {
    const handleInput = () => {
      answersState[q.code] = discursivaTextarea.value;
      updateProgress();
      renderSidebar();
    };
    discursivaTextarea.oninput = handleInput;
  }

  // Carregar Conceitos-Chave
  const conceptData = PEDAGOGICAL_DATA[q.code];
  const conceptPanel = document.getElementById("concept-panel");
  const conceptText = document.getElementById("concept-text");
  const btnShowConcept = document.getElementById("btn-show-concept");
  if (conceptData) {
    if (conceptText) conceptText.textContent = conceptData.concept;
    if (btnShowConcept) btnShowConcept.style.display = "flex";
  } else {
    if (btnShowConcept) btnShowConcept.style.display = "none";
    if (conceptPanel) conceptPanel.style.display = "none";
  }

  // Carregar Notas de Aula do Professor
  const teacherPanel = document.getElementById("teacher-panel");
  const teacherCorrectAnswer = document.getElementById("teacher-correct-answer");
  const teacherExplanation = document.getElementById("teacher-explanation");
  const teacherNotes = document.getElementById("teacher-notes");

  if (isTeacherMode && conceptData) {
    if (teacherPanel) teacherPanel.style.display = "block";
    if (teacherCorrectAnswer) {
      teacherCorrectAnswer.textContent = q.tipo === "resposta construída" ? "Critério Discursivo (Livre fundamentação)" : atob(q.resposta_enc);
    }
    if (teacherExplanation) teacherExplanation.textContent = q.justificativa;
    if (teacherNotes) teacherNotes.textContent = conceptData.notes;
  } else {
    if (teacherPanel) teacherPanel.style.display = "none";
  }

  updateFlashcardUI();
  updateProgress();
}

// Verification Logic for Answers (Gamified)
function checkAnswerAndGiveFeedback() {
  const q = QUESTIONS_DATABASE[currentQuestionIndex];
  
  if (q.tipo === "resposta construída") {
    const textVal = discursivaTextarea.value.trim();
    if (!textVal) {
      alert("Por favor, escreva sua resposta antes de salvar!");
      return;
    }
    answersState[q.code] = textVal;
    
    // Award XP for discursiva attempt
    const stateKey = `${q.code}_xp_awarded`;
    if (!localStorage.getItem(stateKey)) {
      xp += 15; // 15 XP for discursivas
      localStorage.setItem(stateKey, "true");
      updateXpDisplay();
      playSound("correct");
      checkLevelUp();
    }
    
    showVerifyFeedback(true, "Rascunho salvo! Esta resposta discursiva será gravada em seu relatório final de entrega.");
    checkAndUnlockBadges();
    renderSidebar();
    return;
  }

  const selected = answersState[q.code] || [];
  if (selected.length === 0) {
    alert("Selecione uma alternativa!");
    return;
  }

  // Read decrypted answer
  const correctDecrypted = atob(q.resposta_enc); // e.g. "C" or "A,B,D"
  const correctArray = correctDecrypted.split(",");

  // Check correctness
  let isCorrect = false;
  if (q.tipo === "múltipla escolha") {
    isCorrect = selected[0] === correctDecrypted;
  } else {
    // Multiple selection: check if matching arrays
    isCorrect = selected.length === correctArray.length && 
                selected.every(val => correctArray.includes(val));
  }

  const stateKeyXP = `${q.code}_xp_awarded`;
  
  if (isCorrect) {
    playSound("correct");
    showVerifyFeedback(true, q.justificativa);
    btnCheckAnswer.disabled = true;
    
    // Mark as verified correct
    answersState[`${q.code}_status`] = "verified-correct";

    // Award XP (if not already awarded for this question)
    if (!localStorage.getItem(stateKeyXP)) {
      streakCount++;
      
      const hintBonus = hintsUsed[q.code] ? 5 : 10;
      let finalBonus = hintBonus;
      let comboBonus = 0;
      
      if (streakCount >= 2) {
        comboBonus = streakCount - 1;
        finalBonus += comboBonus;
      }
      
      xp += finalBonus;
      localStorage.setItem(stateKeyXP, "true");
      updateXpDisplay();
      
      updateStreakDisplay();
      
      if (comboBonus > 0) {
        showToast(`🔥 Combo! Seu squad acertou ${streakCount} questões seguidas! (+${comboBonus} XP Combo)`);
      }
      
      checkLevelUp();
      
      // Trigger celebration
      triggerConfetti();
    } else {
      streakCount++;
      updateStreakDisplay();
    }
  } else {
    playSound("incorrect");
    showVerifyFeedback(false, "Alternativa incorreta! Revise o enunciado, leia a 'Dica' se precisar, e tente novamente.");
    answersState[`${q.code}_status`] = "verified-incorrect";
    
    streakCount = 0;
    updateStreakDisplay();
  }

  checkAndUnlockBadges();
  renderSidebar();
}

function showVerifyFeedback(isSuccess, text) {
  if (feedbackPanel && feedbackText) {
    feedbackPanel.className = `feedback-panel ${isSuccess ? 'success' : 'error'}`;
    feedbackText.textContent = text;
    feedbackPanel.style.display = "block";
  }
}

function getAnsweredStatus(code) {
  return answersState[`${code}_status`] || "unanswered";
}

// Render questions index sidebar
function renderSidebar() {
  if (!sidebarQuestionsList) return;
  sidebarQuestionsList.innerHTML = "";

  QUESTIONS_DATABASE.forEach((q, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    
    const isCurrent = idx === currentQuestionIndex;
    const answeredStatus = getAnsweredStatus(q.code);
    const hasValue = answersState[q.code] && answersState[q.code].length > 0;
    
    let btnClass = "sidebar-q-btn";
    if (isCurrent) btnClass += " active";
    
    if (q.tipo === "resposta construída") {
      if (hasValue) {
        btnClass += " answered-discursiva";
      }
    } else {
      if (answeredStatus === "verified-correct") {
        btnClass += " correct";
      } else if (answeredStatus === "verified-incorrect") {
        btnClass += " incorrect";
      } else if (hasValue) {
        btnClass += " tentative";
      }
    }

    button.className = btnClass;
    button.textContent = q.code;
    button.addEventListener("click", () => loadQuestion(idx));
    
    sidebarQuestionsList.appendChild(button);
  });
}

function updateProgress() {
  if (!progressBarInner) return;
  
  // Calculate answered questions
  let answeredCount = 0;
  QUESTIONS_DATABASE.forEach(q => {
    const hasValue = answersState[q.code] && answersState[q.code].length > 0;
    const status = getAnsweredStatus(q.code);
    if (q.tipo === "resposta construída") {
      if (hasValue) answeredCount++;
    } else {
      if (status === "verified-correct") answeredCount++;
    }
  });

  const percentage = Math.round((answeredCount / QUESTIONS_DATABASE.length) * 100);
  progressBarInner.style.width = `${percentage}%`;
}

function updateXpDisplay() {
  if (xpCounter) {
    xpCounter.textContent = `${xp} XP`;
  }
  updateLevelProgress();
}

// Gamification: Badges system
const BADGES = [
  { id: "cidadao", title: "Cidadão Digital", desc: "Acertou TD01 e TD06 (Segurança e fake news)", icon: "🛡️" },
  { id: "pesquisador", title: "Pesquisador Master", desc: "Acertou TD03 e TD14 (Pesquisa avançada)", icon: "🔍" },
  { id: "criptografo", title: "Mestre da Cifra", desc: "Salvou e resolveu o algoritmo César TD18", icon: "🔑" },
  { id: "ecologia", title: "Analista Verde", desc: "Acertou TD17 e TD20 (Sustentabilidade)", icon: "🌱" },
  { id: "gabarito", title: "Gabaritador", desc: "Concluiu todas as 20 questões de 2026", icon: "🏆" }
];

function checkAndUnlockBadges() {
  // Check Cidadão Digital
  if (getAnsweredStatus("TD01") === "verified-correct" && getAnsweredStatus("TD06") === "verified-correct") {
    unlockBadge("cidadao");
  }
  // Check Pesquisador Master
  if (getAnsweredStatus("TD03") === "verified-correct" && getAnsweredStatus("TD14") === "verified-correct") {
    unlockBadge("pesquisador");
  }
  // Check Criptógrafo
  if (answersState["TD18"] && answersState["TD18"].length > 20) {
    unlockBadge("criptografo");
  }
  // Check Analista Verde
  if (getAnsweredStatus("TD17") === "verified-correct" && getAnsweredStatus("TD20") === "verified-correct") {
    unlockBadge("ecologia");
  }
  // Check Gabaritador
  let allDone = true;
  QUESTIONS_DATABASE.forEach(q => {
    if (q.tipo === "resposta construída") {
      if (!answersState[q.code] || answersState[q.code].length === 0) allDone = false;
    } else {
      if (getAnsweredStatus(q.code) !== "verified-correct") allDone = false;
    }
  });
  if (allDone) {
    unlockBadge("gabarito");
  }

  renderBadges();
}

function unlockBadge(id) {
  if (!unlockedBadges.has(id)) {
    unlockedBadges.add(id);
    const badge = BADGES.find(b => b.id === id);
    if (badge) {
      playSound("badge");
      showToast(`Conquista Desbloqueada: ${badge.title}!`, badge.icon);
    }
  }
}

function renderBadges() {
  if (!badgesListElement) return;
  badgesListElement.innerHTML = "";

  BADGES.forEach(badge => {
    const isUnlocked = unlockedBadges.has(badge.id);
    const div = document.createElement("div");
    div.className = `badge-item glass-panel ${isUnlocked ? 'unlocked' : 'locked'}`;
    
    div.innerHTML = `
      <div class="badge-icon">${isUnlocked ? badge.icon : "🔒"}</div>
      <div class="badge-info">
        <strong>${badge.title}</strong>
        <span>${badge.desc}</span>
      </div>
    `;
    
    badgesListElement.appendChild(div);
  });
}

// Show final screen
function showResultsScreen() {
  if (!quizSection || !resultsSection) return;

  quizSection.style.display = "none";
  resultsSection.style.display = "block";

  if (resultsSquadName) {
    resultsSquadName.textContent = selectedSquad ? selectedSquad.name : "Squad EETEPA";
  }

  // Count correct multiple choice
  let scoreMC = 0;
  let totalMC = 0;
  QUESTIONS_DATABASE.forEach(q => {
    if (q.tipo !== "resposta construída") {
      totalMC++;
      if (getAnsweredStatus(q.code) === "verified-correct") {
        scoreMC++;
      }
    }
  });

  if (resultsScoreText) {
    resultsScoreText.textContent = `Seu squad acertou ${scoreMC} de ${totalMC} questões de múltipla escolha e respondeu todas as discursivas, acumulando um total de ${xp} XP!`;
  }

  // Render final medals list
  if (resultsMedalsList) {
    resultsMedalsList.innerHTML = "";
    if (unlockedBadges.size === 0) {
      resultsMedalsList.innerHTML = `<p style="color: var(--muted-inverse);">Nenhuma medalha conquistada. Continue tentando!</p>`;
    } else {
      BADGES.forEach(b => {
        if (unlockedBadges.has(b.id)) {
          const item = document.createElement("div");
          item.className = "res-medal-item glass-panel";
          item.innerHTML = `<span>${b.icon}</span> <strong>${b.title}</strong>`;
          resultsMedalsList.appendChild(item);
        }
      });
    }
  }
}

function triggerConfetti() {
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  const colors = ['#16f4a4', '#2cb8ff', '#ffd166', '#ff708d', '#a8bad2'];

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.pointerEvents = "none";
  container.style.zIndex = "9999";
  document.body.appendChild(container);

  const interval = setInterval(() => {
    if (Date.now() > animationEnd) {
      clearInterval(interval);
      document.body.removeChild(container);
      return;
    }

    for (let i = 0; i < 5; i++) {
      const p = document.createElement("div");
      p.style.position = "absolute";
      p.style.width = Math.random() * 8 + 6 + "px";
      p.style.height = Math.random() * 8 + 6 + "px";
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = "-10px";
      p.style.borderRadius = "50%";
      
      const speedX = (Math.random() - 0.5) * 5;
      const speedY = Math.random() * 5 + 3;
      let currentTop = -10;
      let currentLeft = parseFloat(p.style.left);

      container.appendChild(p);

      const move = () => {
        currentTop += speedY;
        currentLeft += speedX;
        p.style.top = currentTop + "px";
        p.style.left = currentLeft + "px";

        if (currentTop < window.innerHeight) {
          requestAnimationFrame(move);
        } else {
          p.remove();
        }
      };
      requestAnimationFrame(move);
    }
  }, 100);
}

function updateRank(xpVal) {
  const rankLabel = document.getElementById("rank-label");
  if (!rankLabel) return;
  let rankName = "Explorador de Dados 🌐";
  if (xpVal >= 200) {
    rankName = "Mestre dos Dados 🏆";
  } else if (xpVal >= 150) {
    rankName = "Engenheiro de Dados ⚙️";
  } else if (xpVal >= 100) {
    rankName = "Cientista Aprendiz 🧪";
  } else if (xpVal >= 50) {
    rankName = "Analista Júnior 📊";
  }
  rankLabel.textContent = rankName;
}

// Wrap updateXpDisplay to also update rank
const originalUpdateXpDisplay = updateXpDisplay;
updateXpDisplay = function() {
  if (xpCounter) {
    xpCounter.textContent = `${xp} XP`;
  }
  updateRank(xp);
};

function exportGabarito(format) {
  if (!selectedSquad) {
    alert("Por favor, selecione seu Squad antes de exportar o gabarito!");
    return;
  }

  const squadName = selectedSquad.name;
  const squadId = selectedSquad.id;
  const squadMembers = selectedSquad.members;

  if (format === "txt") {
    let textContent = `========================================================\n`;
    textContent += `GABARITO DE APOIO - DESAFIO DOS DADOS 2026\n`;
    textContent += `SQUAD: ${squadName.toUpperCase()} (ID: ${squadId})\n`;
    textContent += `Integrantes: ${squadMembers}\n`;
    textContent += `Data da exportação: ${new Date().toLocaleDateString("pt-BR")}\n`;
    textContent += `XP ACUMULADO: ${xp} XP\n`;
    textContent += `========================================================\n\n`;

    QUESTIONS_DATABASE.forEach(q => {
      const answer = answersState[q.code] || "";
      textContent += `Questão ${q.code} [${q.nivel}]: ${q.tema}\n`;
      if (q.tipo === "resposta construída") {
        textContent += `-> RESPOSTA ESCRITA SQUAD: \n${answer || "(Não respondida)"}\n`;
      } else {
        const selectedStr = Array.isArray(answer) ? answer.join(", ") : answer;
        textContent += `-> ALTERNATIVA MARCADA: ${selectedStr || "(Nenhuma)"}\n`;
      }
      textContent += `--------------------------------------------------------\n\n`;
    });

    textContent += `\nDesenvolvido com carinho para as equipes da EETEPA Vilhena Alves. Gabaritem a Fase 1! 🚀\n`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DesafioDados2026_Squad_${squadName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } else if (format === "json") {
    const exportData = {
      squad: {
        id: squadId,
        name: squadName,
        members: squadMembers
      },
      xpAcumulado: xp,
      dataExportacao: new Date().toISOString(),
      gabarito: QUESTIONS_DATABASE.map(q => {
        const ans = answersState[q.code] || "";
        const status = q.tipo === "resposta construída" ? (ans ? "respondida" : "não respondida") : (getAnsweredStatus(q.code) === "verified-correct" ? "correto" : ans ? "incorreto" : "não respondida");
        return {
          questao: q.code,
          tema: q.tema,
          nivel: q.nivel,
          tipo: q.tipo,
          alternativaMarcada: q.tipo === "resposta construída" ? null : (Array.isArray(ans) ? ans.join(",") : ans),
          respostaEscrita: q.tipo === "resposta construída" ? ans : null,
          status: status
        };
      })
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DesafioDados2026_Squad_${squadName.replace(/\s+/g, "_")}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } else if (format === "csv") {
    let csvContent = "\uFEFF";
    csvContent += `Gabarito de Apoio - Desafio dos Dados 2026\r\n`;
    csvContent += `Squad;${squadName} (ID: ${squadId})\r\n`;
    csvContent += `Integrantes;${squadMembers}\r\n`;
    csvContent += `Data;${new Date().toLocaleDateString("pt-BR")}\r\n`;
    csvContent += `XP Acumulado;${xp} XP\r\n\r\n`;
    csvContent += "Questão;Tema;Nível;Tipo;Resposta;Status\r\n";

    QUESTIONS_DATABASE.forEach(q => {
      const ans = answersState[q.code] || "";
      const status = q.tipo === "resposta construída" ? (ans ? "Respondida" : "Não respondida") : (getAnsweredStatus(q.code) === "verified-correct" ? "Correto" : ans ? "Incorreto" : "Não respondida");
      
      const rawAns = q.tipo === "resposta construída" ? ans : (Array.isArray(ans) ? ans.join(", ") : ans);
      const cleanAns = rawAns.replace(/"/g, '""');
      const formattedAns = rawAns.includes(";") || rawAns.includes("\n") || rawAns.includes("\r") || rawAns.includes('"') ? `"${cleanAns}"` : cleanAns;
      
      csvContent += `${q.code};"${q.tema}";${q.nivel};"${q.tipo}";${formattedAns};${status}\r\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DesafioDados2026_Squad_${squadName.replace(/\s+/g, "_")}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } else if (format === "xlsx") {
    const escapeXml = (str) => {
      if (!str) return "";
      return str.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };

    let xml = '<?xml version="1.0" encoding="utf-8"?>\r\n' +
      '<?mso-application progid="Excel.Sheet"?>\r\n' +
      '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"\r\n' +
      ' xmlns:o="urn:schemas-microsoft-com:office:office"\r\n' +
      ' xmlns:x="urn:schemas-microsoft-com:office:excel"\r\n' +
      ' xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\r\n' +
      ' xmlns:html="http://www.w3.org/TR/REC-html40">\r\n' +
      ' <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">\r\n' +
      '  <Author>EETEPA Vilhena Alves</Author>\r\n' +
      '  <Created>' + new Date().toISOString() + '</Created>\r\n' +
      ' </DocumentProperties>\r\n' +
      ' <Styles>\r\n' +
      '  <Style ss:ID="Default" ss:Name="Normal">\r\n' +
      '   <Alignment ss:Vertical="Bottom"/>\r\n' +
      '   <Borders/>\r\n' +
      '   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="11" ss:Color="#000000"/>\r\n' +
      '   <Interior/>\r\n' +
      '   <NumberFormat/>\r\n' +
      '   <Protection/>\r\n' +
      '  </Style>\r\n' +
      '  <Style ss:ID="Header">\r\n' +
      '   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="12" ss:Color="#FFFFFF" ss:Bold="1"/>\r\n' +
      '   <Interior ss:Color="#0b1830" ss:Pattern="Solid"/>\r\n' +
      '  </Style>\r\n' +
      '  <Style ss:ID="Title">\r\n' +
      '   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="14" ss:Color="#0b1830" ss:Bold="1"/>\r\n' +
      '  </Style>\r\n' +
      ' </Styles>\r\n' +
      ' <Worksheet ss:Name="Gabarito 2026">\r\n' +
      '  <Table>\r\n' +
      '   <Column ss:Width="80"/>\r\n' +
      '   <Column ss:Width="200"/>\r\n' +
      '   <Column ss:Width="80"/>\r\n' +
      '   <Column ss:Width="100"/>\r\n' +
      '   <Column ss:Width="300"/>\r\n' +
      '   <Column ss:Width="100"/>\r\n' +
      '   <Row ss:Height="25">\r\n' +
      '    <Cell ss:StyleID="Title"><Data ss:Type="String">GABARITO DE TREINO - DESAFIO DOS DADOS 2026</Data></Cell>\r\n' +
      '   </Row>\r\n' +
      '   <Row>\r\n' +
      '    <Cell><Data ss:Type="String">Squad:</Data></Cell>\r\n' +
      '    <Cell><Data ss:Type="String">' + escapeXml(squadName) + ' (ID: ' + escapeXml(squadId) + ')</Data></Cell>\r\n' +
      '   </Row>\r\n' +
      '   <Row>\r\n' +
      '    <Cell><Data ss:Type="String">Integrantes:</Data></Cell>\r\n' +
      '    <Cell><Data ss:Type="String">' + escapeXml(squadMembers) + '</Data></Cell>\r\n' +
      '   </Row>\r\n' +
      '   <Row>\r\n' +
      '    <Cell><Data ss:Type="String">XP Total:</Data></Cell>\r\n' +
      '    <Cell><Data ss:Type="String">' + xp + ' XP</Data></Cell>\r\n' +
      '   </Row>\r\n' +
      '   <Row>\r\n' +
      '    <Cell><Data ss:Type="String">Data:</Data></Cell>\r\n' +
      '    <Cell><Data ss:Type="String">' + new Date().toLocaleDateString("pt-BR") + '</Data></Cell>\r\n' +
      '   </Row>\r\n' +
      '   <Row></Row>\r\n' +
      '   <Row ss:Height="20">\r\n' +
      '    <Cell ss:StyleID="Header"><Data ss:Type="String">Questão</Data></Cell>\r\n' +
      '    <Cell ss:StyleID="Header"><Data ss:Type="String">Tema</Data></Cell>\r\n' +
      '    <Cell ss:StyleID="Header"><Data ss:Type="String">Nível</Data></Cell>\r\n' +
      '    <Cell ss:StyleID="Header"><Data ss:Type="String">Tipo</Data></Cell>\r\n' +
      '    <Cell ss:StyleID="Header"><Data ss:Type="String">Resposta do Squad</Data></Cell>\r\n' +
      '    <Cell ss:StyleID="Header"><Data ss:Type="String">Status</Data></Cell>\r\n' +
      '   </Row>\r\n';

    QUESTIONS_DATABASE.forEach(q => {
      const ans = answersState[q.code] || "";
      const status = q.tipo === "resposta construída" ? (ans ? "Respondida" : "Não respondida") : (getAnsweredStatus(q.code) === "verified-correct" ? "Correto" : ans ? "Incorreto" : "Não respondida");
      
      const rawAns = q.tipo === "resposta construída" ? ans : (Array.isArray(ans) ? ans.join(", ") : ans);
      
      xml += '   <Row>\r\n' +
        '    <Cell><Data ss:Type="String">' + escapeXml(q.code) + '</Data></Cell>\r\n' +
        '    <Cell><Data ss:Type="String">' + escapeXml(q.tema) + '</Data></Cell>\r\n' +
        '    <Cell><Data ss:Type="String">' + escapeXml(q.nivel) + '</Data></Cell>\r\n' +
        '    <Cell><Data ss:Type="String">' + escapeXml(q.tipo) + '</Data></Cell>\r\n' +
        '    <Cell><Data ss:Type="String">' + escapeXml(rawAns) + '</Data></Cell>\r\n' +
        '    <Cell><Data ss:Type="String">' + escapeXml(status) + '</Data></Cell>\r\n' +
        '   </Row>\r\n';
    });

    xml += '  </Table>\r\n' +
      ' </Worksheet>\r\n' +
      '</Workbook>\r\n';

    const blob = new Blob([xml], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DesafioDados2026_Squad_${squadName.replace(/\s+/g, "_")}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } else if (format === "pdf") {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Por favor, permita pop-ups para gerar o PDF!");
      return;
    }

    let htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Gabarito - ${squadName} - Desafio dos Dados 2026</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          padding: 30px;
          margin: 0;
          line-height: 1.4;
        }
        .header-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        .header-table td {
          border: none;
          padding: 5px;
        }
        .logo-placeholder {
          font-weight: bold;
          font-size: 1.5rem;
          color: #0b1830;
        }
        h1 {
          font-size: 1.8rem;
          margin: 0 0 10px 0;
          color: #0b1830;
        }
        .meta-info {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 20px;
          border-bottom: 2px solid #0b1830;
          padding-bottom: 10px;
        }
        .summary-box {
          background: #f4f8fb;
          border: 1px solid #c8d9e6;
          border-radius: 6px;
          padding: 15px;
          margin-bottom: 25px;
        }
        table.data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        table.data-table th, table.data-table td {
          border: 1px solid #ddd;
          padding: 10px 12px;
          text-align: left;
          font-size: 0.9rem;
        }
        table.data-table th {
          background-color: #0b1830;
          color: #fff;
        }
        table.data-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .discursiva-section {
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        .discursiva-title {
          font-weight: bold;
          color: #0b1830;
          font-size: 1rem;
          margin-bottom: 6px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 4px;
        }
        .discursiva-text {
          font-size: 0.9rem;
          white-space: pre-wrap;
          background: #fafafa;
          border: 1px solid #eee;
          padding: 12px;
          border-radius: 4px;
          color: #444;
          margin-top: 5px;
        }
        .footer {
          margin-top: 50px;
          font-size: 0.8rem;
          color: #777;
          text-align: center;
          border-top: 1px solid #ddd;
          padding-top: 15px;
        }
        @media print {
          body { padding: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <table class="header-table">
        <tr>
          <td>
            <h1>Desafio dos Dados 2026</h1>
            <div class="logo-placeholder">EETEPA Vilhena Alves</div>
          </td>
          <td style="text-align: right; vertical-align: top;">
            <strong>Gabarito de Apoio</strong><br>
            Fase de Treino
          </td>
        </tr>
      </table>

      <div class="meta-info">
        <strong>Squad:</strong> ${squadName} &nbsp;|&nbsp;
        <strong>ID:</strong> ${squadId} &nbsp;|&nbsp;
        <strong>Data:</strong> ${new Date().toLocaleDateString("pt-BR")}
      </div>

      <div class="summary-box">
        <strong>XP Acumulado:</strong> ${xp} XP<br>
        <strong>Integrantes:</strong> ${squadMembers}
      </div>

      <h2>Resumo do Gabarito</h2>
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 10%;">Questão</th>
            <th style="width: 35%;">Tema</th>
            <th style="width: 15%;">Nível</th>
            <th style="width: 25%;">Resposta Marcada</th>
            <th style="width: 15%;">Status</th>
          </tr>
        </thead>
        <tbody>
    `;

    QUESTIONS_DATABASE.forEach(q => {
      const ans = answersState[q.code] || "";
      const status = q.tipo === "resposta construída" ? (ans ? "Respondida" : "Não respondida") : (getAnsweredStatus(q.code) === "verified-correct" ? "Correto" : ans ? "Incorreto" : "Não respondida");
      
      let formattedAns = ans;
      if (q.tipo !== "resposta construída") {
        formattedAns = Array.isArray(ans) ? ans.join(", ") : ans;
        if (!formattedAns) formattedAns = "(Nenhuma)";
      } else {
        formattedAns = ans ? "Resposta Discursiva (ver detalhes abaixo)" : "(Não respondida)";
      }

      htmlContent += `
          <tr>
            <td><strong>${q.code}</strong></td>
            <td>${q.tema}</td>
            <td>${q.nivel}</td>
            <td>${formattedAns}</td>
            <td>${status}</td>
          </tr>
      `;
    });

    htmlContent += `
        </tbody>
      </table>

      <h2>Respostas Discursivas Detalhadas</h2>
    `;

    let hasDiscursiva = false;
    QUESTIONS_DATABASE.forEach(q => {
      if (q.tipo === "resposta construída") {
        hasDiscursiva = true;
        const ans = answersState[q.code] || "";
        htmlContent += `
          <div class="discursiva-section">
            <div class="discursiva-title">Questão ${q.code} - ${q.tema} (${q.nivel})</div>
            <div class="discursiva-text">${ans ? ans.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "(Não respondida pelo squad)"}</div>
          </div>
        `;
      }
    });

    if (!hasDiscursiva) {
      htmlContent += `<p style="font-size: 0.9rem; color: #777;">Não há questões discursivas neste simulado.</p>`;
    }

    htmlContent += `
      <div class="footer">
        Documento gerado automaticamente pelo portal de treino do Desafio dos Dados 2026 - EETEPA Vilhena Alves.<br>
        Gabaritem a primeira fase! 🚀
      </div>

      <script>
        window.onload = function() {
          window.print();
          setTimeout(function() { window.close(); }, 500);
        };
      </script>
    </body>
    </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
}

// Caesar cipher encriptor function
function encryptCaesar(str, shift) {
  if (!str) return "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (alphabet.includes(char)) {
      const idx = alphabet.indexOf(char);
      const newIdx = (idx + shift) % 26;
      result += alphabet[newIdx];
    } else if (upperAlphabet.includes(char)) {
      const idx = upperAlphabet.indexOf(char);
      const newIdx = (idx + shift) % 26;
      result += upperAlphabet[newIdx];
    } else {
      result += char;
    }
  }
  return result;
}

// ============================================================
// GAMIFICATION & AUDIO SYNTHESIZER UTILITIES
// ============================================================

function playSound(type) {
  if (audioMuted) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    if (type === "correct") {
      playTone(audioCtx, 523.25, "sine", 0.08, 0.08); // C5
      setTimeout(() => playTone(audioCtx, 659.25, "sine", 0.12, 0.08), 80); // E5
    } else if (type === "incorrect") {
      playTone(audioCtx, 180, "triangle", 0.15, 0.12);
      setTimeout(() => playTone(audioCtx, 120, "triangle", 0.2, 0.12), 100);
    } else if (type === "badge" || type === "levelup") {
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5
      notes.forEach((freq, i) => {
        setTimeout(() => playTone(audioCtx, freq, "sine", 0.12, 0.06), i * 100);
      });
    }
  } catch (e) {
    console.warn("Web Audio API blocked or not supported", e);
  }
}

function playTone(ctx, freq, type, duration, volume) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function getLevelInfo(totalXp) {
  if (totalXp < 40) {
    return { level: 1, currentMin: 0, nextMin: 40, label: "Nível 1" };
  } else if (totalXp < 90) {
    return { level: 2, currentMin: 40, nextMin: 90, label: "Nível 2" };
  } else if (totalXp < 150) {
    return { level: 3, currentMin: 90, nextMin: 150, label: "Nível 3" };
  } else if (totalXp < 220) {
    return { level: 4, currentMin: 150, nextMin: 220, label: "Nível 4" };
  } else {
    return { level: 5, currentMin: 220, nextMin: 9999, label: "Nível 5 (Máximo)" };
  }
}

function checkLevelUp() {
  const info = getLevelInfo(xp);
  if (info.level > currentLevel) {
    currentLevel = info.level;
    playSound("levelup");
    showToast(`🌟 Nível Subiu! Seu squad subiu para o Nível ${currentLevel}! 🚀`, "🌟");
    triggerConfetti();
  }
  updateLevelProgress();
}

function updateLevelProgress() {
  const levelLabel = document.getElementById("level-label");
  const levelBarInner = document.getElementById("level-bar-inner");
  const xpCurrent = document.getElementById("level-xp-current");
  const xpNext = document.getElementById("level-xp-next");
  
  if (!levelLabel || !levelBarInner || !xpCurrent || !xpNext) return;
  
  const info = getLevelInfo(xp);
  currentLevel = info.level;
  
  levelLabel.textContent = `Nível ${info.level}`;
  
  if (info.level === 5) {
    levelBarInner.style.width = "100%";
    xpCurrent.textContent = `${xp} XP`;
    xpNext.textContent = "Nível Máximo alcançado!";
  } else {
    const levelRange = info.nextMin - info.currentMin;
    const progressInLevel = xp - info.currentMin;
    const pct = Math.min(100, Math.max(0, (progressInLevel / levelRange) * 100));
    
    levelBarInner.style.width = `${pct}%`;
    xpCurrent.textContent = `${xp} XP`;
    xpNext.textContent = `${info.nextMin - xp} XP para o Nível ${info.level + 1}`;
  }
}

function updateStreakDisplay() {
  const streakRow = document.getElementById("streak-row");
  const streakCounter = document.getElementById("streak-counter");
  if (!streakRow || !streakCounter) return;

  if (streakCount >= 2) {
    streakCounter.textContent = `${streakCount}x`;
    streakRow.style.display = "flex";
  } else {
    streakRow.style.display = "none";
  }
}

function showToast(message, icon = "🌟") {
  const toastContainer = document.getElementById("toast-container-element");
  if (toastContainer) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-message">${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => {
        if (toast.parentNode === toastContainer) {
          toastContainer.removeChild(toast);
        }
      }, 350);
    }, 4000);
  }
}

// ============================================================
// STUDY TOOLS & DIDACTICS INITIALIZERS
// ============================================================

function setupAudioToggle() {
  const btnToggleAudio = document.getElementById("btn-toggle-audio");
  if (!btnToggleAudio) return;

  btnToggleAudio.textContent = audioMuted ? "🔇" : "🔊";
  
  const newBtn = btnToggleAudio.cloneNode(true);
  btnToggleAudio.parentNode.replaceChild(newBtn, btnToggleAudio);

  newBtn.addEventListener("click", () => {
    audioMuted = !audioMuted;
    localStorage.setItem("desafio_audio_muted", audioMuted.toString());
    newBtn.textContent = audioMuted ? "🔇" : "🔊";
    if (!audioMuted) {
      playSound("correct");
    }
  });
}

function setupScratchpadCanvas() {
  const canvas = document.getElementById("scratchpad-canvas");
  const clearBtn = document.getElementById("btn-clear-canvas");
  const colorBtns = document.querySelectorAll(".color-pick");
  if (!canvas) return;

  let drawing = false;
  let drawColor = "#32f0a1"; // Green default
  let lastX = 0;
  let lastY = 0;

  function getCanvasMousePos(canvasDom, clientX, clientY) {
    const rect = canvasDom.getBoundingClientRect();
    return {
      x: (clientX - rect.left) * (canvasDom.width / rect.width),
      y: (clientY - rect.top) * (canvasDom.height / rect.height)
    };
  }

  function startDrawing(e) {
    drawing = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const pos = getCanvasMousePos(canvas, clientX, clientY);
    lastX = pos.x;
    lastY = pos.y;
  }

  function draw(e) {
    if (!drawing) return;
    const ctx = canvas.getContext("2d");
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const pos = getCanvasMousePos(canvas, clientX, clientY);
    
    ctx.beginPath();
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    
    lastX = pos.x;
    lastY = pos.y;
    
    if (e.touches) {
      e.preventDefault();
    }
  }

  function stopDrawing() {
    drawing = false;
  }

  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mouseup", stopDrawing);
  canvas.removeEventListener("mouseleave", stopDrawing);
  canvas.removeEventListener("touchstart", startDrawing);
  canvas.removeEventListener("touchmove", draw);
  canvas.removeEventListener("touchend", stopDrawing);

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  canvas.addEventListener("touchstart", startDrawing, { passive: false });
  canvas.addEventListener("touchmove", draw, { passive: false });
  canvas.addEventListener("touchend", stopDrawing);

  clearBtn?.addEventListener("click", () => {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      colorBtns.forEach(b => {
        b.classList.remove("active");
        b.style.border = "0";
      });
      btn.classList.add("active");
      btn.style.border = "2px solid white";
      drawColor = btn.getAttribute("data-color");
    });
  });
}

function setupScratchpadNotes() {
  const scratchpadText = document.getElementById("scratchpad-text");
  if (!scratchpadText) return;

  scratchpadText.addEventListener("input", () => {
    const q = QUESTIONS_DATABASE[currentQuestionIndex];
    if (q) {
      notesState[q.code] = scratchpadText.value;
    }
  });
}

function setupLogicSimulator() {
  const logicA = document.getElementById("logic-a");
  const logicB = document.getElementById("logic-b");
  const logicOp = document.getElementById("logic-op");
  const logicResult = document.getElementById("logic-result");
  if (!logicA || !logicB || !logicOp || !logicResult) return;

  function updateLogicSimulator() {
    const aVal = parseInt(logicA.value);
    const bVal = parseInt(logicB.value);
    const op = logicOp.value;
    
    let res = 0;
    if (op === "AND") {
      res = aVal && bVal;
    } else if (op === "OR") {
      res = aVal || bVal;
    } else if (op === "XOR") {
      res = aVal !== bVal ? 1 : 0;
    }
    
    logicResult.textContent = res ? "1 (Verdadeiro)" : "0 (Falso)";
    logicResult.style.color = res ? "var(--green)" : "var(--text-soft)";

    // Visual circuit updates
    const visA = document.getElementById("visual-input-a");
    const visB = document.getElementById("visual-input-b");
    const visGate = document.getElementById("visual-gate");
    const visRes = document.getElementById("visual-result");
    const wireA = document.getElementById("wire-a");
    const wireB = document.getElementById("wire-b");
    const wireOut = document.getElementById("wire-out");

    if (visA) {
      visA.textContent = `A: ${aVal}`;
      visA.style.background = aVal ? "rgba(33, 216, 255, 0.15)" : "rgba(255,255,255,0.05)";
      visA.style.borderColor = aVal ? "var(--cyan)" : "var(--line-dark)";
    }
    if (visB) {
      visB.textContent = `B: ${bVal}`;
      visB.style.background = bVal ? "rgba(33, 216, 255, 0.15)" : "rgba(255,255,255,0.05)";
      visB.style.borderColor = bVal ? "var(--cyan)" : "var(--line-dark)";
    }
    if (visGate) {
      visGate.textContent = op;
      visGate.style.borderColor = res ? "var(--green)" : "var(--line-dark)";
      visGate.style.color = res ? "var(--green)" : "var(--amber)";
    }
    if (visRes) {
      visRes.textContent = `SAÍDA: ${res}`;
      visRes.style.background = res ? "rgba(50, 240, 161, 0.15)" : "rgba(255,255,255,0.05)";
      visRes.style.borderColor = res ? "var(--green)" : "var(--line-dark)";
      visRes.style.color = res ? "var(--green)" : "var(--text-inverse)";
    }
    if (wireA) wireA.style.background = aVal ? "var(--cyan)" : "#334e68";
    if (wireB) wireB.style.background = bVal ? "var(--cyan)" : "#334e68";
    if (wireOut) wireOut.style.background = res ? "var(--green)" : "#334e68";
  }

  logicA.addEventListener("change", updateLogicSimulator);
  logicB.addEventListener("change", updateLogicSimulator);
  logicOp.addEventListener("change", updateLogicSimulator);
  updateLogicSimulator();
}

// Start simulation engine on load
window.addEventListener("DOMContentLoaded", () => {
  initSimulado();
});

function setupDidacticDrawer() {
  const btnToggleLousa = document.getElementById("btn-toggle-lousa");
  const drawer = document.getElementById("didactic-tools-drawer");
  if (!btnToggleLousa || !drawer) return;

  btnToggleLousa.addEventListener("click", () => {
    const isHidden = drawer.style.display === "none";
    drawer.style.display = isHidden ? "block" : "none";
    btnToggleLousa.textContent = isHidden ? "✏️ Fechar Lousa" : "✏️ Abrir Lousa";
    btnToggleLousa.classList.toggle("active", isHidden);
  });

  // Tab switching logic
  const tabBtns = drawer.querySelectorAll(".tab-btn");
  const tabContents = drawer.querySelectorAll(".tool-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tool-tab");
      
      // Update tab buttons active state
      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.style.background = "rgba(255,255,255,0.08)";
        b.style.color = "var(--text-inverse)";
      });
      btn.classList.add("active");
      btn.style.background = "var(--amber)";
      btn.style.color = "#001826";

      // Update tab contents visibility
      tabContents.forEach(content => {
        content.style.display = "none";
      });
      const targetContent = document.getElementById(`tab-${targetTab}`);
      if (targetContent) {
        targetContent.style.display = "block";
      }

      if (targetTab === "draw") {
        setupScratchpadCanvas();
      } else if (targetTab === "flashcards") {
        updateFlashcardUI();
      }
    });
  });

  // Flashcard Interactivity
  const flashcardTrigger = document.getElementById("flashcard-click-trigger");
  const flashcardInner = document.getElementById("flashcard-inner");
  if (flashcardTrigger && flashcardInner) {
    flashcardTrigger.addEventListener("click", () => {
      flashcardInner.classList.toggle("flipped");
    });
  }

  // Claim XP logic
  const btnClaimXp = document.getElementById("btn-claim-flashcard-xp");
  
  btnClaimXp?.addEventListener("click", (e) => {
    e.stopPropagation(); // Avoid flipping the card when clicking the button
    const q = QUESTIONS_DATABASE[currentQuestionIndex];
    if (!q) return;

    const claimedFlashcards = new Set(JSON.parse(localStorage.getItem("desafio_claimed_flashcards") || "[]"));

    if (claimedFlashcards.has(q.code)) {
      showToast("Você já coletou o bônus de estudo deste conceito!", "info");
      return;
    }

    claimedFlashcards.add(q.code);
    localStorage.setItem("desafio_claimed_flashcards", JSON.stringify(Array.from(claimedFlashcards)));
    
    // Add XP
    xp += 5;
    updateXpDisplay();
    updateLevelProgress();
    playSound("levelup");
    showToast("🎓 Conceito Estudado! +5 XP de bônus obtido!", "success");
    
    // Visual feedback on button
    btnClaimXp.textContent = "Conceito Concluído! ✓";
    btnClaimXp.style.opacity = "0.7";
    btnClaimXp.disabled = true;
  });
}

function updateFlashcardUI() {
  const q = QUESTIONS_DATABASE[currentQuestionIndex];
  if (!q) return;

  const ped = PEDAGOGICAL_DATA[q.code];
  const frontTitle = document.getElementById("flashcard-front-title");
  const frontConcept = document.getElementById("flashcard-front-concept");
  const backNotes = document.getElementById("flashcard-back-notes");
  const btnClaimXp = document.getElementById("btn-claim-flashcard-xp");
  const flashcardInner = document.getElementById("flashcard-inner");

  // Reset flip
  if (flashcardInner) {
    flashcardInner.classList.remove("flipped");
  }

  if (frontTitle) frontTitle.textContent = `Ficha da Questão ${q.code}`;
  if (frontConcept) frontConcept.textContent = ped ? ped.concept : "Conceito de ciência de dados relevante para a questão.";
  if (backNotes) backNotes.textContent = ped ? ped.notes : "Notas adicionais de lousa do professor.";

  const claimedFlashcards = new Set(JSON.parse(localStorage.getItem("desafio_claimed_flashcards") || "[]"));
  if (btnClaimXp) {
    if (claimedFlashcards.has(q.code)) {
      btnClaimXp.textContent = "Conceito Concluído! ✓";
      btnClaimXp.style.opacity = "0.7";
      btnClaimXp.disabled = true;
    } else {
      btnClaimXp.textContent = "Estudei esse Conceito (+5 XP) 🎓";
      btnClaimXp.style.opacity = "1";
      btnClaimXp.disabled = false;
    }
  }
}
