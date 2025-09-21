# NEXUS - Manual de Alta Performance com IA

Este é um projeto React expandido baseado no site original www.nexus-manual.com.br, com páginas adicionais interativas para melhorar a experiência do usuário.

## 🚀 Funcionalidades

### Páginas Implementadas:
- **Home Page**: Landing page principal com design futurista e dark mode
- **Detalhes do Produto**: Página detalhada com 6 módulos do manual, conteúdo interativo e seleção de módulos
- **FAQ**: Página de perguntas frequentes organizadas por categorias com interface expansível

### Características Técnicas:
- **Framework**: React 19.1.0 com Vite
- **Roteamento**: React Router DOM para navegação entre páginas
- **Estilo**: TailwindCSS com tema dark mode futurista
- **Componentes**: Shadcn/ui para interface consistente
- **Ícones**: Lucide React
- **Responsivo**: Design adaptável para desktop, tablet e mobile

## 🎨 Design

O projeto mantém a identidade visual do site original:
- **Tema**: Dark mode com estética futurista e tecnológica
- **Paleta de Cores**: 
  - Fundo: Gradientes de azul-escuro e ardósia (slate-900, blue-900)
  - Acentos: Ciano e esmeralda para destaques
  - CTAs: Gradientes vibrantes (ciano para azul)
- **Tipografia**: Fonte Poppins para legibilidade e modernidade
- **Efeitos**: Animações suaves, hover effects e gradientes

## 📱 Navegação

### Menu Principal:
- **Detalhes do Manual**: Acesso ao conteúdo completo dos módulos
- **FAQ**: Perguntas frequentes organizadas
- **Comprar Agora**: Link direto para a página de compra

### Menu Mobile:
- Interface responsiva com menu hambúrguer
- Navegação otimizada para dispositivos móveis

## 📚 Conteúdo das Páginas

### Página de Detalhes do Produto:
- **6 Módulos Completos** com mais de 12 horas de conteúdo
- **Interface Interativa** para seleção e visualização de módulos
- **Informações Detalhadas** sobre cada lição e tópico
- **Call-to-Actions** estrategicamente posicionados

### Página de FAQ:
- **5 Categorias** de perguntas organizadas
- **Interface Expansível** para melhor experiência de leitura
- **Conteúdo Abrangente** cobrindo dúvidas comuns
- **Seção de Contato** para suporte adicional

## 🛠️ Tecnologias Utilizadas

```json
{
  "react": "19.1.0",
  "react-router-dom": "7.6.1",
  "tailwindcss": "4.1.7",
  "vite": "6.3.5",
  "lucide-react": "0.510.0",
  "@radix-ui": "Vários componentes",
  "framer-motion": "12.15.0"
}
```

## 🚀 Como Executar

### Desenvolvimento:
```bash
pnpm install
pnpm dev
```

### Build de Produção:
```bash
pnpm build
pnpm preview
```

## 📁 Estrutura do Projeto

```
nexus-expanded/
├── src/
│   ├── components/
│   │   └── ui/          # Componentes Shadcn/ui
│   ├── pages/
│   │   ├── ProductDetails.jsx
│   │   └── FAQ.jsx
│   ├── lib/
│   │   └── utils.js     # Utilitários
│   ├── assets/          # Imagens e recursos
│   ├── App.jsx          # Componente principal com roteamento
│   └── main.jsx         # Ponto de entrada
├── dist/                # Build de produção
├── package.json
└── README.md
```

## 🎯 Melhorias Implementadas

1. **Navegação Aprimorada**: Sistema de roteamento para múltiplas páginas
2. **Conteúdo Detalhado**: Informações completas sobre os módulos do manual
3. **FAQ Interativo**: Interface expansível para melhor usabilidade
4. **Design Responsivo**: Otimizado para todos os dispositivos
5. **Performance**: Build otimizado com Vite
6. **Acessibilidade**: Componentes acessíveis com Radix UI

## 📞 Suporte

Para dúvidas sobre o Manual NEXUS, utilize a página de FAQ ou entre em contato através dos canais oficiais.

---

**Desenvolvido com ❤️ para maximizar a experiência do usuário do Manual NEXUS**

