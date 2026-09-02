# 🧪 Casos de Teste a Implementar

Este documento centraliza a especificação de testes de interface (E2E/Componente) que precisam ser implementados no projeto para garantir a estabilidade dos fluxos principais.

---

## 🔍 Modal de Pesquisa
Testes relacionados ao comportamento de abertura, fechamento e submissão do modal de busca.

- [ ] **Abertura:** O modal de pesquisa deve aparecer na tela ao clicar no botão de pesquisa.
- [ ] **Fechamento (Clique fora):** O modal deve fechar ao receber um clique fora da sua área visível.
- [ ] **Fechamento (Botão fechar):** O modal deve fechar ao clicar no botão de fechar (`X`).
- [ ] **Fechamento (Tecla ESC):** O modal deve fechar ao pressionar a tecla `ESC` no teclado.
- [ ] **Fechamento (Toggle):** O modal deve fechar se o usuário clicar novamente no botão de pesquisa enquanto ele já estiver aberto.
- [ ] **Redirecionamento:** Ao preencher o campo de busca e clicar no botão de pesquisa, o usuário deve ser redirecionado para a tela de resultados.

---

## 📋 Tela de Resultados da Pesquisa
Testes de listagem e estados da página de resultados.

- [ ] **Resultado com sucesso:** O produto correto deve aparecer na listagem ao pesquisar pelo seu nome exato.
- [ ] **Resultado vazio (Empty State):** Uma mensagem/tela de "Nenhum resultado encontrado" deve aparecer ao buscar por um produto que não existe no catálogo.

---

## 📦 Fluxo de Produto
Testes de navegação e interações com o card/item de produto.

- [ ] **Navegação para Detalhes:** Ao clicar em um card de produto, o usuário deve ser levado para a tela de detalhes do produto correspondente.

---

## 📱 Sidebar (Menu Lateral)
Testes de responsividade e comportamento do menu de navegação.

- [ ] **Responsividade do Gatilho:** 
  - Deve aparecer em telas menores (Mobile/Tablet - ex: `1280x720`).
  - Deve desaparecer em telas maiores (Desktop - ex: `1920x1080`).
- [ ] **Abertura:** A sidebar deve aparecer na tela ao clicar no botão do menu (hambúrguer).
- [ ] **Fechamento (Clique fora):** A sidebar deve fechar ao clicar fora da sua área lateral.
- [ ] **Fechamento (Botão fechar):** A sidebar deve fechar ao clicar no botão interno de fechar.
- [ ] **Fechamento por Ação (Pesquisa):** A sidebar deve fechar automaticamente quando o usuário clicar no botão de pesquisa interno dela.

---

## 🛒 Modal de Shop (Carrinho/Loja)
Testes do modal de compras.

- [ ] **Abertura:** O modal de shop deve aparecer na tela ao clicar no botão de shop.
- [ ] **Fechamento (Clique fora):** O modal de shop deve fechar ao clicar fora dele.
- [ ] **Fechamento (Botão fechar):** O modal de shop deve fechar ao clicar no seu respectivo botão de fechar.

---
💡 *Nota técnica: Os testes de responsividade da Sidebar devem utilizar o ajuste de viewport (`page.setViewportSize`) antes da execução das asserções.*
