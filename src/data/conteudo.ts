/* Textos institucionais usados na home. */

export type Item = { icone: string; titulo: string; texto: string };

export const diferenciais: Item[] = [
  {
    icone: 'shield',
    titulo: 'Regulamentado pelo Banco Central',
    texto:
      'Todas as 37 administradoras parceiras são autorizadas e fiscalizadas pelo Bacen, garantindo segurança jurídica total.',
  },
  {
    icone: 'zap',
    titulo: 'Zero Juros Bancários',
    texto:
      'Você paga apenas a taxa de administração diluída no prazo. Economia real de 30% a 50% comparado ao financiamento.',
  },
  {
    icone: 'globe',
    titulo: '5.570 Cidades Atendidas',
    texto: 'De Norte a Sul, do litoral ao interior. Atendimento 100% digital ou presencial, onde você estiver.',
  },
];

export const passos: Item[] = [
  {
    icone: 'clipboard',
    titulo: 'Simulação Gratuita',
    texto: 'Preencha seus dados e receba opções personalizadas de planos com as melhores administradoras do mercado.',
  },
  {
    icone: 'scale',
    titulo: 'Escolha do Plano',
    texto: 'Compare cartas de crédito, parcelas, prazos e taxas. Nosso time ajuda você a encontrar o plano ideal.',
  },
  {
    icone: 'handshake',
    titulo: 'Adesão ao Grupo',
    texto: 'Assine o contrato e comece a pagar. Você já pode ser contemplado desde a primeira assembleia.',
  },
  {
    icone: 'award',
    titulo: 'Contemplação',
    texto: 'Seja contemplado por sorteio ou lance. Com a carta de crédito, compre seu bem com poder de compra à vista.',
  },
];

export const incluido: Item[] = [
  {
    icone: 'fileSearch',
    titulo: 'Análise do Seu Perfil',
    texto:
      'Avaliamos sua capacidade financeira, objetivos e prazo desejado para recomendar o melhor tipo de consórcio e faixa de crédito.',
  },
  {
    icone: 'scale',
    titulo: 'Comparativo de Administradoras',
    texto:
      'Comparamos taxas, prazos e condições de até 37 administradoras para encontrar a melhor opção para o seu caso.',
  },
];

export const vantagens = [
  'Zero juros bancários, apenas taxa de administração',
  'Poder de compra à vista com a carta de crédito',
  'Parcelas até 50% menores que financiamento',
  'Sem entrada obrigatória para iniciar',
  'Possibilidade de usar FGTS (imóveis)',
  'Regulamentado e fiscalizado pelo Banco Central',
];

/* Barras de progresso (skill-one): só números já afirmados no site */
export const comparativo = [
  { rotulo: 'Parcela até 50% menor que o financiamento', valor: 50 },
  { rotulo: 'Atendimento digital', valor: 100 },
  { rotulo: 'Grupos fiscalizados pelo Banco Central', valor: 100 },
];
