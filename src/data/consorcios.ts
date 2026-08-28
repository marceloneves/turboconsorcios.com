export type Consorcio = {
  slug: string;
  nome: string;
  titulo: string;
  descricaoSeo: string;
  h1: string;
  resumo: string;
  cta: string;
  icone: string;
  imagem: string;
  credito: string;
  categoria: 'imoveis' | 'veiculos' | 'agro' | 'servicos' | 'lazer';
  destaque?: boolean;
};

export const consorcios: Consorcio[] = [
  {
    slug: 'consorcio-de-imoveis',
    nome: 'Consórcio de Imóveis',
    titulo: 'Consórcio de Imóveis Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de imóveis sem juros e sem entrada. Cartas de R$ 80 mil a R$ 1,5 milhão. Use FGTS como lance. Simule grátis.',
    h1: 'Consórcio de Imóveis Sem Juros',
    resumo:
      'Realize o sonho da casa própria sem juros. Casa, apartamento, terreno ou imóvel comercial com cartas de crédito a partir de R$ 80 mil.',
    cta: 'Simular Consórcio de Imóvel',
    icone: 'home',
    imagem: '/images/family-home.webp',
    credito: 'R$ 80 mil a R$ 1,5 milhão',
    categoria: 'imoveis',
    destaque: true,
  },
  {
    slug: 'consorcio-de-automoveis',
    nome: 'Consórcio de Automóveis',
    titulo: 'Consórcio de Automóveis | Planos a partir de R$ 30 mil',
    descricaoSeo:
      'Conquiste seu carro zero ou seminovo pelo consórcio. Sem juros, parcelas acessíveis e poder de compra à vista na concessionária. Simule grátis agora.',
    h1: 'Consórcio de Automóveis: Seu Carro Novo ou Seminovo Sem Juros',
    resumo:
      'Compre seu carro zero ou seminovo sem juros bancários. Todas as marcas e modelos com parcelas que cabem no seu orçamento mensal.',
    cta: 'Simular Consórcio de Carro',
    icone: 'car',
    imagem: '/images/cars.webp',
    credito: 'R$ 30 mil a R$ 350 mil',
    categoria: 'veiculos',
    destaque: true,
  },
  {
    slug: 'consorcio-de-motos',
    nome: 'Consórcio de Motos',
    titulo: 'Consórcio de Motos Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de motos sem juros e sem entrada. Cartas de R$ 8 mil a R$ 120 mil. Honda, Yamaha, BMW e todas as marcas. Simule grátis.',
    h1: 'Consórcio de Motos Sem Juros',
    resumo:
      'Conquiste sua moto nova com parcelas acessíveis e zero juros. Honda, Yamaha, BMW e todas as marcas disponíveis no mercado brasileiro.',
    cta: 'Simular Consórcio de Moto',
    icone: 'moto',
    imagem: '/images/motorcycle.webp',
    credito: 'R$ 8 mil a R$ 120 mil',
    categoria: 'veiculos',
    destaque: true,
  },
  {
    slug: 'consorcio-de-caminhoes',
    nome: 'Consórcio de Caminhões',
    titulo: 'Consórcio de Caminhões Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de caminhões sem juros para autônomos e transportadoras. Cartas de R$ 100 mil a R$ 800 mil. Todas as marcas. Simule grátis.',
    h1: 'Consórcio de Caminhões Sem Juros',
    resumo:
      'Renove sua frota sem juros bancários. Caminhões leves, médios e pesados para autônomos e transportadoras de todo o Brasil.',
    cta: 'Simular Consórcio de Caminhão',
    icone: 'truck',
    imagem: '/images/truck.webp',
    credito: 'R$ 100 mil a R$ 800 mil',
    categoria: 'veiculos',
    destaque: true,
  },
  {
    slug: 'consorcio-de-veiculos-pesados',
    nome: 'Consórcio de Veículos Pesados',
    titulo: 'Consórcio de Veículos Pesados Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de ônibus, micro-ônibus e vans sem juros. Cartas de R$ 150 mil a R$ 1,2 milhão. Renove sua frota. Simule grátis.',
    h1: 'Consórcio de Veículos Pesados Sem Juros',
    resumo:
      'Ônibus, micro-ônibus e vans para empresas de transporte. Planeje a renovação da sua frota pesada com economia real.',
    cta: 'Simular Consórcio de Pesados',
    icone: 'bus',
    imagem: '/images/bus.webp',
    credito: 'R$ 150 mil a R$ 1,2 milhão',
    categoria: 'veiculos',
    destaque: true,
  },
  {
    slug: 'consorcio-de-maquinas-agricolas',
    nome: 'Consórcio de Máquinas Agrícolas',
    titulo: 'Consórcio de Máquinas Agrícolas Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de máquinas agrícolas sem juros e sem entrada. Tratores, colheitadeiras, plantadeiras e implementos. Cartas de R$ 80 mil a R$ 2 milhões.',
    h1: 'Consórcio de Máquinas Agrícolas Sem Juros',
    resumo:
      'Tratores, colheitadeiras e implementos para o produtor rural. John Deere, Massey Ferguson, Case IH e todas as marcas líderes.',
    cta: 'Simular Consórcio Agrícola',
    icone: 'tractor',
    imagem: '/images/agriculture.webp',
    credito: 'R$ 80 mil a R$ 2 milhões',
    categoria: 'agro',
    destaque: true,
  },
  {
    slug: 'consorcio-de-servicos',
    nome: 'Consórcio de Serviços',
    titulo: 'Consórcio de Serviços Sem Juros. Viagens, Cirurgias, Energia Solar e Mais',
    descricaoSeo:
      'Consórcio de serviços sem juros e sem entrada. Cartas de R$ 15 mil a R$ 300 mil para viagens, cirurgias, energia solar, educação, festas e reformas.',
    h1: 'Consórcio de Serviços Sem Juros',
    resumo:
      'Viagens, cirurgias, energia solar, educação e festas. A carta de crédito mais versátil para realizar qualquer projeto pessoal.',
    cta: 'Simular Consórcio de Serviços',
    icone: 'sparkles',
    imagem: '/images/services.webp',
    credito: 'R$ 15 mil a R$ 300 mil',
    categoria: 'servicos',
    destaque: true,
  },
  {
    slug: 'consorcio-de-embarcacoes',
    nome: 'Consórcio de Embarcações',
    titulo: 'Consórcio de Embarcações Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de embarcações sem juros e sem entrada. Cartas de R$ 30 mil a R$ 1,5 milhão. Lanchas, jet skis, barcos e veleiros. Simule grátis.',
    h1: 'Consórcio de Embarcações Sem Juros',
    resumo:
      'Lanchas, jet skis, barcos e veleiros sem juros bancários. Planeje a compra da sua embarcação com parcelas que cabem no bolso.',
    cta: 'Simular Consórcio Náutico',
    icone: 'boat',
    imagem: '/images/marina.webp',
    credito: 'R$ 30 mil a R$ 1,5 milhão',
    categoria: 'lazer',
    destaque: true,
  },
  {
    slug: 'consorcio-de-aeronaves',
    nome: 'Consórcio de Aeronaves',
    titulo: 'Consórcio de Aeronaves Sem Juros. Simule Grátis Agora',
    descricaoSeo:
      'Consórcio de aeronaves sem juros e sem entrada. Cartas de R$ 500 mil a R$ 15 milhões. Aviões, helicópteros e jatos executivos. Simule grátis.',
    h1: 'Consórcio de Aeronaves Sem Juros',
    resumo:
      'Aviões, helicópteros e jatos executivos sem juros. Mobilidade aérea com planejamento financeiro inteligente para sua empresa.',
    cta: 'Simular Consórcio de Aeronave',
    icone: 'plane',
    imagem: '/images/aircraft.webp',
    credito: 'R$ 500 mil a R$ 15 milhões',
    categoria: 'lazer',
    destaque: true,
  },
];

/* Modalidades imobiliárias específicas — páginas de cauda longa */
const imobiliarios: Array<[string, string, string, string]> = [
  ['consorcio-de-casa', 'Consórcio de Casa', 'casa própria', '/images/family-home.webp'],
  ['consorcio-de-apartamento', 'Consórcio de Apartamento', 'apartamento', '/images/apartment.webp'],
  ['consorcio-de-terreno', 'Consórcio de Terreno', 'terreno', '/images/construction.webp'],
  ['consorcio-de-lote', 'Consórcio de Lote', 'lote', '/images/construction.webp'],
  ['consorcio-de-sobrado', 'Consórcio de Sobrado', 'sobrado', '/images/family-home.webp'],
  ['consorcio-de-cobertura', 'Consórcio de Cobertura', 'cobertura', '/images/apartment.webp'],
  ['consorcio-de-kitnet', 'Consórcio de Kitnet', 'kitnet', '/images/apartment.webp'],
  ['consorcio-de-flat', 'Consórcio de Flat', 'flat', '/images/apartment.webp'],
  ['consorcio-de-casa-na-praia', 'Consórcio de Casa na Praia', 'casa na praia', '/images/ocean.webp'],
  ['consorcio-de-casa-de-campo', 'Consórcio de Casa de Campo', 'casa de campo', '/images/farm.webp'],
  ['consorcio-de-chacara', 'Consórcio de Chácara', 'chácara', '/images/farm.webp'],
  ['consorcio-de-sitio', 'Consórcio de Sítio', 'sítio', '/images/farm.webp'],
  ['consorcio-de-fazenda', 'Consórcio de Fazenda', 'fazenda', '/images/harvest.webp'],
  ['consorcio-de-imovel-rural', 'Consórcio de Imóvel Rural', 'imóvel rural', '/images/harvest.webp'],
  ['consorcio-de-imovel-comercial', 'Consórcio de Imóvel Comercial', 'imóvel comercial', '/images/office.webp'],
  ['consorcio-de-sala-comercial', 'Consórcio de Sala Comercial', 'sala comercial', '/images/office.webp'],
  ['consorcio-de-galpao', 'Consórcio de Galpão', 'galpão', '/images/construction.webp'],
];

for (const [slug, nome, termo, imagem] of imobiliarios) {
  consorcios.push({
    slug,
    nome,
    titulo: `${nome} Sem Juros e Sem Entrada | Simule Grátis`,
    descricaoSeo: `${nome} com as menores parcelas do mercado. Sem juros bancários, sem entrada obrigatória. Faça sua simulação gratuita agora.`,
    h1: `${nome} Sem Juros`,
    resumo: `Conquiste sua ${termo} sem juros bancários. Compare planos de 37 administradoras e escolha a parcela que cabe no seu orçamento.`,
    cta: `Simular ${nome}`,
    icone: 'home',
    imagem,
    credito: 'R$ 80 mil a R$ 1,5 milhão',
    categoria: 'imoveis',
  });
}

export const consorciosDestaque = consorcios.filter((c) => c.destaque);
export const consorciosPorSlug = new Map(consorcios.map((c) => [c.slug, c]));
