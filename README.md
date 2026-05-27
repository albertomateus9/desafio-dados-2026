# Desafio dos Dados 2026

Versao beta premium de uma pagina web educacional para apresentar o **Desafio dos Dados 2026**.

O projeto foi pensado para escolas, eventos, feiras, aulas tecnicas e atividades de ciencia de dados. A proposta e mostrar, de forma visual e acessivel, como estudantes podem usar dados reais para investigar problemas, construir evidencias e apresentar solucoes de impacto.

## Status

Beta estatica publicada para validacao visual, demonstracao e evolucao do conteudo institucional.

## Tecnologias utilizadas

- HTML5 semantico
- CSS3 responsivo
- JavaScript puro
- GitHub Pages para publicacao

Nao foram adicionadas dependencias externas.

## Estrutura de arquivos

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── hero-data-analytics.png
│   └── students-data-lab.png
├── .gitignore
└── README.md
```

## Como executar localmente

Como o projeto e estatico, basta abrir o arquivo `index.html` no navegador.

No PowerShell:

```powershell
Start-Process .\index.html
```

Tambem e possivel usar um servidor local simples, se desejado:

```powershell
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como publicar ou atualizar no GitHub Pages

1. Confirme se as alteracoes estao prontas:

```powershell
git status --short --branch
```

2. Faca commit das alteracoes:

```powershell
git add .
git commit -m "feat: cria beta premium do Desafio dos Dados 2026"
```

3. Envie para o GitHub:

```powershell
git push -u origin main
```

4. No GitHub, configure o Pages para publicar a partir da branch `main`, pasta `/root`.

Depois da ativacao, a pagina fica disponivel em uma URL do tipo:

```text
https://usuario.github.io/nome-do-repositorio/
```

## Objetivo educacional

O Desafio dos Dados 2026 busca aproximar estudantes de conceitos como:

- leitura e interpretacao de dados;
- organizacao de evidencias;
- visualizacao de informacoes;
- trabalho em equipe;
- comunicacao tecnica;
- uso de tecnologia para resolver problemas reais.

## Observacao sobre a beta

O formulario da pagina registra a interacao apenas na interface local. Ele nao envia dados para servidor, pois esta primeira versao tem foco em apresentacao, navegacao e identidade visual.
