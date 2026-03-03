<div align="center">
  <img alt="Rick and Morty Logo" width="20%" src="./public/logo-rick-morty.jpg" />
</div>

<h1 align="center">
  Rick and Morty - Explorer MVP
</h1>

<p align="center">
  <img alt="Layout da aplicação" width="100%" src="./public/images/gif-projeto.gif" />
</p>

## 💻 Projeto

O **Rick and Morty Explorer** é um MVP (Minimum Viable Product) focado na exploração de episódios e personagens da icônica série. Desenvolvida com **Vue 3**, a aplicação consome a API oficial para oferecer uma interface dinâmica, rica em detalhes e totalmente responsiva.

#### Para ver o projeto pronto [clique aqui](https://clari-cassia-projetcs-projeto-mvp-daisyui-api-rick-and-mo.vercel.app/) 🚀

## ⚙️ Funcionalidades

📝 **Listagem de Episódios**: Exibição paginada de todos os episódios da série consumidos em tempo real.

🖼️ **Avatar Groups**: Visualização rápida dos personagens de cada episódio com tratamento de imagem dinâmico para carregar avatares leves.

🔍 **Detalhes via Modal**: Ao clicar em um card, um modal renderiza informações detalhadas do episódio e a lista completa de personagens presentes.

📱 **Layout Customizado**: Design exclusivo com colunas laterais fixas (Sticky) apresentando artes do Rick e Morty, garantindo uma imersão temática.

🔄 **Paginação Dinâmica**: Navegação fluida entre as diferentes temporadas e blocos de episódios da API.

📱 **Responsividade Avançada**: Interface adaptável que prioriza o conteúdo em dispositivos móveis e libera elementos decorativos apenas em telas grandes (Desktop).

## 🛠️ Ferramentas Utilizadas

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vite](https://vitejs.dev/) (Build Tool veloz)
- [Tailwind CSS](https://tailwindcss.com/) (Estilização Utilitária)
- [DaisyUI](https://daisyui.com/) (Componentes de UI)
- [Axios](https://axios-http.com/) (Consumo de API)

## 🧠 Decisões Adotadas

### Arquitetura e Lógica

Durante o desenvolvimento, apliquei práticas de **Clean Code** e organização de componentes que utilizo no meu dia a dia profissional:

1. **Componentização Reutilizável**: Criei o componente `AvatarCharacters` que é compartilhado entre os Cards da Home e o Modal, seguindo o princípio DRY (Don't Repeat Yourself).
2. **Tratamento de Dados (Utils)**: Implementação de funções auxiliares como `getAvatarUrl` para transformar URLs da API em caminhos de imagem válidos, mantendo a lógica fora do template.
3. **Sticky Sidebar Design**: Uso de posicionamento `sticky` combinado com cálculos de viewport (`h-[calc(100vh-5rem)]`) para manter elementos decorativos fixos durante o scroll.
4. **Documentação JSDoc**: Todas as funções assíncronas e utilitárias foram documentadas para facilitar a manutenção e o uso do Intellisense no VS Code.
5. **Integração com DaisyUI**: Optei pela DaisyUI para agilizar o desenvolvimento de componentes complexos como Modals, Badges e Avatar Groups, garantindo um design consistente.

## 📥 Passo a Passo para instalação e execução

**Pré-requisitos:**

- Vs Code
- Node.js instalado
- Terminal / Git Bash - Ferramenta de versionamento
- Npm ou Yarn - Controle de pacotes

  **1. Clone o Repositório:** Dentro da pasta onde deseja salvar o projeto, abra o git e efetuar o comando

  ```bash
  git clone https://github.com/ClariCassia/todoList-vue-Eslab.git

  ```

- É possível também baixar o arquivo e descompactar localmente:
- 📥(<https://github.com/ClariCassia/projeto-mvp-daisyui-api-rick-and-morty/archive/refs/heads/main.zip>)

  **2. Acesse o Diretório:**

  ```bash
  cd nome-do-projeto
  ```

  **3. Instale as Dependências:**

  ```bash
  npm install   # ou yarn install, conforme sua prefêrencia
  ```

  **4. Execute a Aplicação:**

  ```bash
  npm run dev
    # ou yarn run dev
  ```

  **5. Acesse a Aplicação:** Abra o navegador e acesse [http://localhost:/](http://localhost:).

## 🤝 Contribuições

Se quiser contribuir para este projeto, siga estes passos:

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/SEU-NOME-DE-USUARIO/projeto-mvp-daisyui-api-rick-and-morty

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Add nova funcionalidade"

# Enviando alterações para o brach
$ git push origin minha-alteracao
```

Você deve navegar até o seu repositório onde fez o fork e clicar no botão _New pull request_ no lado esquerdo da página.

Agradeço antecipadamente pela sua contribuição, juntos podemos tornar este projeto ainda mais incrível! 🙏🌟

Com ❤️ por [Clarissa de Cássia](https://www.linkedin.com/in/clarissa-cassia-dev-front-end/) 😊
