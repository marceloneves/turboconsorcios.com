export const site = {
  nome: 'Turbo Consórcios',
  marca: 'TURBO',
  submarca: 'Consórcios',
  dominio: 'turboconsorcios.com',
  url: 'https://turboconsorcios.com',
  descricao:
    'Consórcio sem juros e sem entrada para imóveis, veículos, motos, caminhões e mais. 37 administradoras parceiras em todo o Brasil.',
  telefone: '(11) 4000-0000',
  telefoneLink: 'tel:551140000000',
  whatsapp: '551140000000',
  whatsappTexto: 'Olá, quero saber mais sobre o Consórcio.',
  email: 'contato@turboconsorcios.com',
  desde: 2010,
  social: {
    instagram: 'https://instagram.com/turboconsorcios',
    facebook: 'https://facebook.com/turboconsorcios',
    linkedin: 'https://linkedin.com/company/turboconsorcios',
    youtube: 'https://youtube.com/@turboconsorcios',
  },
} as const;

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(site.whatsappTexto)}`;

export const numeros = [
  { valor: '37', rotulo: 'Administradoras Parceiras' },
  { valor: '5.570', rotulo: 'Cidades Atendidas' },
  { valor: 'R$ 0', rotulo: 'De Juros Bancários' },
  { valor: '15+', rotulo: 'Anos de Experiência' },
];
