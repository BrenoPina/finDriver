# 🚖 Painel de Motorista (Driver Dashboard)

Um projeto prático desenvolvido com o objetivo de consolidar conhecimentos em desenvolvimento web front-end, com foco principal em **otimização de performance** e **experiência do usuário (UX)** através de técnicas como Debounce e Paginação.

---

## 🚀 Sobre o Projeto

O projeto simula um painel administrativo para gerenciamento de motoristas e corridas. A aplicação foi pensada para cenários reais onde o volume de dados pode crescer, garantindo que a interface continue fluida e responsiva.

### Principais Funcionalidades:

- **Filtro Avançado:** Busca dinâmica por clientes ou motoristas.
- **Contagem Dinâmica:** Contador em tempo real que reflete o estado atual das corridas.
- **Listagem de Motoristas:** Exibição organizada dos dados dos motoristas.
- **Debounce na Busca:** Técnica que evita requisições/processamentos excessivos a cada tecla digitada pelo usuário, aguardando um breve momento de pausa para disparar o filtro.
- **Paginação:** Divisão dos registros em páginas fictícias, simulando uma expansão de banco de dados para evitar problemas de performance na renderização da tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído puramente com a tríade fundamental do Front-end, sem o uso de frameworks externos:

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização moderna, layout responsivo e organização dos elementos.
- **JavaScript (ES6+):** Lógica de manipulação do DOM, implementação do algoritmo de Debounce, controle de paginação e gerenciamento de estado dos dados.

---

## 💡 Conceitos Aplicados em Destaque

### 🔍 Debounce

Sem o debounce, se um usuário digitar "Carlos" rapidamente, o sistema tentaria filtrar a lista 6 vezes (uma para cada letra). Com o debounce configurado, o sistema espera o usuário parar de digitar por alguns milissegundos (ex: 300ms) para então realizar uma única busca, economizando processamento.

### 📄 Paginação

Em vez de carregar 1000 motoristas de uma só vez na tela — o que travaria o navegador —, a paginação limita a exibição a um número X de registros por vez, permitindo navegar entre as páginas de forma leve e rápida.

---

## 🙋‍♂️ Autor

Desenvolvido por Breno Pina
