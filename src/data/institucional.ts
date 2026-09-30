/*
 * Conteúdo mínimo das páginas institucionais (a planilha define URL e posição no menu, mas não o texto).
 * Política de privacidade e termos de uso são rascunhos: precisam de revisão jurídica antes de publicar.
 */
import { site } from './site';

export type Secao = { titulo: string; texto?: string; itens?: string[] };
export type Institucional = { descricao: string; intro: string; secoes: Secao[] };

export const institucional: Record<string, Institucional> = {
  '/sobre/': {
    descricao: `Conheça a ${site.nome}: consultoria independente de consórcios que compara administradoras autorizadas pelo Banco Central antes de você contratar.`,
    intro: `A ${site.nome} ajuda você a escolher o consórcio certo comparando grupos de administradoras autorizadas pelo Banco Central, com os custos abertos antes da assinatura.`,
    secoes: [
      {
        titulo: 'O que fazemos',
        itens: [
          'Simulamos cartas de crédito para imóveis, veículos, máquinas, serviços e bens.',
          'Comparamos taxa de administração, fundo de reserva, seguro e regras de lance.',
          'Acompanhamos assembleias e estratégia de lance até a contemplação.',
        ],
      },
      {
        titulo: 'Como trabalhamos',
        itens: [
          'Não prometemos data de contemplação.',
          'Mostramos o custo total antes de qualquer assinatura.',
          'Trabalhamos apenas com administradoras autorizadas pelo Banco Central.',
          'Dizemos quando o consórcio não é o melhor caminho para você.',
        ],
      },
    ],
  },
  '/como-funciona/': {
    descricao: 'Entenda como funciona o consórcio e como a Turbo Consórcios ajuda você a escolher, contratar e ser contemplado.',
    intro:
      'O consórcio é uma compra planejada em grupo: todos pagam parcelas mensais sem juros e, todo mês, participantes são contemplados com a carta de crédito por sorteio ou lance.',
    secoes: [
      {
        titulo: 'O consórcio em quatro etapas',
        itens: [
          'Simulação: você define o valor da carta e o prazo.',
          'Adesão: você entra em um grupo de uma administradora autorizada pelo Banco Central.',
          'Assembleias: todo mês há sorteio e lance entre os participantes em dia.',
          'Contemplação: com a carta de crédito, você compra à vista.',
        ],
      },
      {
        titulo: 'O papel da Turbo',
        texto:
          'Comparamos grupos de diferentes administradoras, explicamos custos e regras de lance e acompanhamos você até a contemplação.',
      },
    ],
  },
  '/depoimentos/': {
    descricao: `Depoimentos e contemplações de clientes da ${site.nome}.`,
    intro: 'Histórias de quem planejou a compra com consórcio.',
    secoes: [],
  },
  '/contato/': {
    descricao: `Fale com a ${site.nome} pelo WhatsApp, telefone ou e-mail. Simulação gratuita e sem compromisso.`,
    intro: 'Fale com um consultor pelo canal que for mais prático para você. A simulação é gratuita e sem compromisso.',
    secoes: [
      {
        titulo: 'Canais de atendimento',
        itens: [`WhatsApp e telefone: ${site.telefone}`, `E-mail: ${site.email}`, 'Segunda a sexta, das 9h às 18h'],
      },
    ],
  },
  '/area-do-cliente/': {
    descricao: `Área do cliente da ${site.nome}: acompanhamento de cotas, assembleias e lances.`,
    intro: 'Já é cliente? Fale com o seu consultor para acompanhar sua cota, as assembleias e a estratégia de lance.',
    secoes: [
      {
        titulo: 'O que você pode pedir',
        itens: ['Resultado das assembleias', 'Simulação de lance', 'Segunda via de boleto com a administradora', 'Orientação sobre a documentação da contemplação'],
      },
    ],
  },
  '/seguranca/': {
    descricao: 'Como identificar golpes de consórcio e verificar se uma administradora é autorizada pelo Banco Central.',
    intro: 'Golpes com consórcio usam promessas que o sistema regulado não permite. Conheça os sinais de alerta antes de pagar qualquer valor.',
    secoes: [
      {
        titulo: 'Sinais de golpe',
        itens: [
          'Promessa de contemplação garantida ou com data marcada.',
          'Pedido de depósito em conta de pessoa física.',
          'Carta contemplada muito abaixo do preço de mercado.',
          'Pressa para fechar sem enviar contrato.',
        ],
      },
      {
        titulo: 'Como se proteger',
        itens: [
          'Consulte se a administradora é autorizada no site do Banco Central.',
          'Leia o contrato antes de pagar e confira o nome da administradora no boleto.',
          'Em cartas contempladas, confirme a cota diretamente com a administradora.',
        ],
      },
    ],
  },
  '/administradoras/': {
    descricao: 'Administradoras de consórcio: análise independente de bancos, montadoras e administradoras autorizadas pelo Banco Central.',
    intro:
      'Análise independente das administradoras de consórcio. Antes de contratar, confira se a empresa é autorizada pelo Banco Central e compare taxas e reputação.',
    secoes: [],
  },
  '/politica-de-privacidade/': {
    descricao: `Política de privacidade da ${site.nome}.`,
    intro: `Esta política explica como a ${site.nome} trata os dados pessoais de quem usa o site, conforme a Lei Geral de Proteção de Dados (LGPD).`,
    secoes: [
      { titulo: 'Dados coletados', texto: 'Nome, telefone, e-mail e informações da simulação que você envia pelos formulários ou pelo WhatsApp.' },
      { titulo: 'Finalidade', texto: 'Usamos os dados para responder às suas solicitações, preparar simulações e fazer o atendimento.' },
      { titulo: 'Compartilhamento', texto: 'Os dados só são compartilhados com administradoras quando necessário para a proposta que você pediu.' },
      { titulo: 'Seus direitos', texto: `Você pode pedir acesso, correção ou exclusão dos seus dados pelo e-mail ${site.email}.` },
    ],
  },
  '/termos-de-uso/': {
    descricao: `Termos de uso do site da ${site.nome}.`,
    intro: `Ao usar este site, você concorda com os termos abaixo.`,
    secoes: [
      { titulo: 'Conteúdo informativo', texto: 'As informações e simulações do site são estimativas. As condições finais são as da proposta oficial da administradora.' },
      { titulo: 'Contratação', texto: 'A contratação do consórcio é feita com a administradora, mediante contrato próprio.' },
      { titulo: 'Contato', texto: `Dúvidas sobre estes termos podem ser enviadas para ${site.email}.` },
    ],
  },
};
