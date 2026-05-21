<div align="center">
  <img src="./public/demo.gif" alt="Demonstração Animada do Efood" width="800">
</div>

# ⚖️ Calculadora de IMC (React + Vite)

[![Repo Size](https://img.shields.io/github/repo-size/gugainglez2/calculadora_imc?style=for-the-badge&color=8A2BE2)](https://github.com/gugainglez2/calculadora_imc)
[![Language](https://img.shields.io/github/languages/top/gugainglez2/calculadora_imc?style=for-the-badge&color=0099FF)](https://github.com/gugainglez2/calculadora_imc)

Uma aplicação web interativa desenvolvida em React para o cálculo do Índice de Massa Corporal (IMC). O projeto foi estruturado com foco no gerenciamento de estados dinâmicos, componentização eficiente e reatividade em tempo real, utilizando o ecossistema moderno do Vite.

> 🎓 **Projeto Acadêmico:** Desenvolvido como parte do programa de formação frontend da **EBAC (Escola Britânica de Artes Criativas e Tecnologia)**.

---

## 🚀 Tecnologias Utilizadas

* **React** – Biblioteca JavaScript baseada em componentes para construção da interface de usuário.
* **Vite** – Ferramenta de build ultra-rápida que substitui o Create React App, oferecendo Fast Refresh (HMR) quase instantâneo em desenvolvimento.
* **JavaScript (ES6+)** – Lógica matemática para o cálculo e filtragem de resultados.
* **CSS3 / CSS Modules** – Estilização e layout responsivo garantindo o isolamento de escopo dos estilos dos componentes.

---

## ✨ Funcionalidades e Diferenciais

* **Cálculo Baseado em Componentes:** Interface dividida de forma modular para facilitar a manutenção e escalabilidade do código.
* **Gerenciamento de Estado Dinâmico:** Uso de hooks do React para capturar as entradas do usuário (peso e altura) e renderizar os resultados imediatamente na tela.
* **Classificação de Saúde Automatizada:** Aplicação de regras condicionais para categorizar o resultado de acordo com as faixas oficiais de IMC (*Abaixo do peso, Peso normal, Sobrepeso, Obesidade*).
* **Feedback Visual Limpo:** Exibição do resultado de forma estilizada e de fácil leitura para o usuário.
* **Design Responsivo:** Adaptado para proporcionar uma excelente experiência de uso tanto em dispositivos móveis quanto em desktops.

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
Você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/gugainglez2/calculadora_imc.git](https://github.com/gugainglez2/calculadora_imc.git)
Acessar o diretório do projeto:

Bash
cd calculadora_imc
Instalar as dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento (Vite):

Bash
npm run dev
Acessar no navegador:
O terminal indicará o endereço local, geralmente http://localhost:5173/.

📂 Estrutura de Pastas
Plaintext
calculadora_imc/

├── src/

│   ├── components/    # Componentes modulares da aplicação (Formulário, Resultado, etc.)

│   ├── App.jsx        # Componente principal que gerencia os estados

│   ├── main.jsx       # Ponto de entrada do React e inicialização do DOM

│   └── index.css      # Estilos globais da aplicação

├── index.html         # Arquivo HTML principal integrado ao ecossistema Vite

├── package.json       # Dependências e scripts do projeto (Vite, React)

└── README.md          # Documentação do projeto

🧠 Principais Aprendizados (EBAC)
Pensamento em Componentes: Divisão da interface em blocos menores e reutilizáveis, entendendo o fluxo de dados unidirecional do React.

Hooks (useState): Manipulação e persistência de estados locais dentro da aplicação para refletir mudanças na UI sem recarregar a página.

Otimização com Vite: Configuração e uso de um ecossistema moderno de build, compreendendo as vantagens de performance em relação a ferramentas tradicionais de empacotamento.
