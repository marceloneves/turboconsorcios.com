export type Cidade = { slug: string; nome: string };
export type Estado = {
  slug: string;
  nome: string;
  uf: string;
  regiao: 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';
  cidades: Cidade[];
};

const c = (nome: string, slug: string): Cidade => ({ nome, slug });

export const estados: Estado[] = [
  { slug: 'acre', nome: 'Acre', uf: 'AC', regiao: 'Norte', cidades: [c('Rio Branco', 'rio-branco-ac')] },
  { slug: 'amapa', nome: 'Amapá', uf: 'AP', regiao: 'Norte', cidades: [c('Macapá', 'macapa-ap')] },
  { slug: 'amazonas', nome: 'Amazonas', uf: 'AM', regiao: 'Norte', cidades: [c('Manaus', 'manaus-am')] },
  { slug: 'para', nome: 'Pará', uf: 'PA', regiao: 'Norte', cidades: [c('Belém', 'belem-pa'), c('Ananindeua', 'ananindeua-pa'), c('Santarém', 'santarem-pa')] },
  { slug: 'rondonia', nome: 'Rondônia', uf: 'RO', regiao: 'Norte', cidades: [c('Porto Velho', 'porto-velho-ro')] },
  { slug: 'roraima', nome: 'Roraima', uf: 'RR', regiao: 'Norte', cidades: [c('Boa Vista', 'boa-vista-rr')] },
  { slug: 'tocantins', nome: 'Tocantins', uf: 'TO', regiao: 'Norte', cidades: [c('Palmas', 'palmas-to')] },

  { slug: 'alagoas', nome: 'Alagoas', uf: 'AL', regiao: 'Nordeste', cidades: [c('Maceió', 'maceio-al')] },
  { slug: 'bahia', nome: 'Bahia', uf: 'BA', regiao: 'Nordeste', cidades: [c('Salvador', 'salvador-ba'), c('Feira de Santana', 'feira-de-santana-ba'), c('Vitória da Conquista', 'vitoria-da-conquista-ba')] },
  { slug: 'ceara', nome: 'Ceará', uf: 'CE', regiao: 'Nordeste', cidades: [c('Fortaleza', 'fortaleza-ce'), c('Caucaia', 'caucaia-ce')] },
  { slug: 'maranhao', nome: 'Maranhão', uf: 'MA', regiao: 'Nordeste', cidades: [c('São Luís', 'sao-luis-ma'), c('Imperatriz', 'imperatriz-ma')] },
  { slug: 'paraiba', nome: 'Paraíba', uf: 'PB', regiao: 'Nordeste', cidades: [c('João Pessoa', 'joao-pessoa-pb'), c('Campina Grande', 'campina-grande-pb')] },
  { slug: 'pernambuco', nome: 'Pernambuco', uf: 'PE', regiao: 'Nordeste', cidades: [c('Recife', 'recife-pe'), c('Jaboatão dos Guararapes', 'jaboatao-dos-guararapes-pe'), c('Olinda', 'olinda-pe'), c('Caruaru', 'caruaru-pe'), c('Paulista', 'paulista-pe')] },
  { slug: 'piaui', nome: 'Piauí', uf: 'PI', regiao: 'Nordeste', cidades: [c('Teresina', 'teresina-pi')] },
  { slug: 'rio-grande-do-norte', nome: 'Rio Grande do Norte', uf: 'RN', regiao: 'Nordeste', cidades: [c('Natal', 'natal-rn')] },
  { slug: 'sergipe', nome: 'Sergipe', uf: 'SE', regiao: 'Nordeste', cidades: [c('Aracaju', 'aracaju-se')] },

  { slug: 'distrito-federal', nome: 'Distrito Federal', uf: 'DF', regiao: 'Centro-Oeste', cidades: [c('Brasília', 'brasilia-df')] },
  { slug: 'goias', nome: 'Goiás', uf: 'GO', regiao: 'Centro-Oeste', cidades: [c('Goiânia', 'goiania-go'), c('Aparecida de Goiânia', 'aparecida-de-goiania-go'), c('Anápolis', 'anapolis-go')] },
  { slug: 'mato-grosso', nome: 'Mato Grosso', uf: 'MT', regiao: 'Centro-Oeste', cidades: [c('Cuiabá', 'cuiaba-mt'), c('Rondonópolis', 'rondonopolis-mt')] },
  { slug: 'mato-grosso-do-sul', nome: 'Mato Grosso do Sul', uf: 'MS', regiao: 'Centro-Oeste', cidades: [c('Campo Grande', 'campo-grande-ms'), c('Dourados', 'dourados-ms')] },

  { slug: 'espirito-santo', nome: 'Espírito Santo', uf: 'ES', regiao: 'Sudeste', cidades: [c('Vitória', 'vitoria-es'), c('Vila Velha', 'vila-velha-es'), c('Serra', 'serra-es'), c('Cariacica', 'cariacica-es')] },
  { slug: 'minas-gerais', nome: 'Minas Gerais', uf: 'MG', regiao: 'Sudeste', cidades: [c('Belo Horizonte', 'belo-horizonte-mg'), c('Uberlândia', 'uberlandia-mg'), c('Contagem', 'contagem-mg'), c('Juiz de Fora', 'juiz-de-fora-mg'), c('Betim', 'betim-mg'), c('Montes Claros', 'montes-claros-mg'), c('Uberaba', 'uberaba-mg'), c('Governador Valadares', 'governador-valadares-mg'), c('Ipatinga', 'ipatinga-mg'), c('Sete Lagoas', 'sete-lagoas-mg'), c('Divinópolis', 'divinopolis-mg')] },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', uf: 'RJ', regiao: 'Sudeste', cidades: [c('Rio de Janeiro', 'rio-de-janeiro-rj'), c('São Gonçalo', 'sao-goncalo-rj'), c('Duque de Caxias', 'duque-de-caxias-rj'), c('Nova Iguaçu', 'nova-iguacu-rj'), c('Niterói', 'niteroi-rj'), c('Belford Roxo', 'belford-roxo-rj'), c('Petrópolis', 'petropolis-rj'), c('Volta Redonda', 'volta-redonda-rj'), c('Itaboraí', 'itaborai-rj')] },
  { slug: 'sao-paulo', nome: 'São Paulo', uf: 'SP', regiao: 'Sudeste', cidades: [c('São Paulo', 'sao-paulo-sp'), c('Guarulhos', 'guarulhos-sp'), c('Campinas', 'campinas-sp'), c('São Bernardo do Campo', 'sao-bernardo-do-campo-sp'), c('Santo André', 'santo-andre-sp'), c('Osasco', 'osasco-sp'), c('São José dos Campos', 'sao-jose-dos-campos-sp'), c('Ribeirão Preto', 'ribeirao-preto-sp'), c('Sorocaba', 'sorocaba-sp'), c('Santos', 'santos-sp'), c('Mogi das Cruzes', 'mogi-das-cruzes-sp'), c('Diadema', 'diadema-sp'), c('Jundiaí', 'jundiai-sp'), c('Piracicaba', 'piracicaba-sp'), c('Carapicuíba', 'carapicuiba-sp'), c('Bauru', 'bauru-sp'), c('São Vicente', 'sao-vicente-sp'), c('Franca', 'franca-sp'), c('Praia Grande', 'praia-grande-sp'), c('Guarujá', 'guaruja-sp'), c('Taubaté', 'taubate-sp'), c('Limeira', 'limeira-sp'), c('Suzano', 'suzano-sp'), c('São José do Rio Preto', 'sao-jose-do-rio-preto-sp'), c('Marília', 'marilia-sp')] },

  { slug: 'parana', nome: 'Paraná', uf: 'PR', regiao: 'Sul', cidades: [c('Curitiba', 'curitiba-pr'), c('Londrina', 'londrina-pr'), c('Maringá', 'maringa-pr'), c('Ponta Grossa', 'ponta-grossa-pr'), c('Cascavel', 'cascavel-pr'), c('Foz do Iguaçu', 'foz-do-iguacu-pr'), c('Guarapuava', 'guarapuava-pr')] },
  { slug: 'rio-grande-do-sul', nome: 'Rio Grande do Sul', uf: 'RS', regiao: 'Sul', cidades: [c('Porto Alegre', 'porto-alegre-rs'), c('Caxias do Sul', 'caxias-do-sul-rs'), c('Canoas', 'canoas-rs'), c('Pelotas', 'pelotas-rs'), c('Santa Maria', 'santa-maria-rs')] },
  { slug: 'santa-catarina', nome: 'Santa Catarina', uf: 'SC', regiao: 'Sul', cidades: [c('Joinville', 'joinville-sc'), c('Florianópolis', 'florianopolis-sc'), c('Blumenau', 'blumenau-sc'), c('Chapecó', 'chapeco-sc')] },
];

export const regioes = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'] as const;

export const estadosPorRegiao = regioes.map((regiao) => ({
  regiao,
  estados: estados.filter((e) => e.regiao === regiao),
}));

export const estadosPorSlug = new Map(estados.map((e) => [e.slug, e]));
export const totalCidades = estados.reduce((n, e) => n + e.cidades.length, 0);
