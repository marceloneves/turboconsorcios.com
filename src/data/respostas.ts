/*
 * Respostas às perguntas de FAQ e às objeções listadas na planilha.
 * A planilha traz só a pergunta (e, nas objeções, a orientação "Como responder");
 * o texto abaixo é a versão mínima publicada nas páginas.
 * Respostas marcadas com CONFIRMAR dependem de regras comerciais da Turbo e precisam ser validadas.
 */

export const respostasFaq: Record<string, string> = {
  // Fundamentos
  'Consórcio tem juros?':
    'Não. O consórcio não cobra juros. O custo é a taxa de administração, diluída nas parcelas, somada ao fundo de reserva e, quando houver, ao seguro. Todos esses valores aparecem no contrato antes da assinatura.',
  'Como funciona a contemplação?':
    'Todo mês o grupo faz uma assembleia e contempla participantes por sorteio e por lance. Quem é contemplado recebe a carta de crédito para comprar o bem ou contratar o serviço. Até o fim do prazo, todos os participantes em dia são contemplados.',
  'Consórcio é seguro?':
    'O sistema de consórcios é regulado pela Lei 11.795/2008 e fiscalizado pelo Banco Central. Antes de contratar, confirme se a administradora está autorizada na consulta pública do Banco Central e desconfie de quem promete data de contemplação.',
  'E se eu demorar anos para ser contemplado?':
    'Ninguém pode garantir a data da contemplação. O que dá para fazer é aumentar as chances: ofertar lance (inclusive o lance embutido, que usa parte da própria carta), usar o FGTS quando a regra permite e escolher um grupo com bom histórico de contemplações.',
  'Isso serve para o meu caso?':
    'Depende do seu prazo, do valor que cabe no orçamento e de quanto você pode esperar. Em uma conversa rápida mostramos se o consórcio faz sentido para você e também quando outra opção é melhor.',
  'Qual o prazo mínimo?':
    'O prazo varia por grupo e por administradora. Existem grupos curtos e longos para o mesmo tipo de bem. A simulação mostra os prazos disponíveis para o valor que você procura.',
  'É muito tempo pagando':
    'Dá para escolher grupos de prazo menor, antecipar a contemplação com lance e, se os planos mudarem, transferir a cota para outra pessoa com a anuência da administradora.',

  // Imóveis
  'Posso usar o FGTS?':
    'Sim, em consórcio de imóvel residencial, desde que você cumpra as regras do FGTS para compra de moradia. O saldo pode ser usado para dar lance, complementar a carta ou amortizar parcelas.',
  'Posso comprar imóvel usado ou na planta?':
    'Sim. A carta de crédito pode ser usada em imóvel novo, usado ou na planta, desde que o imóvel seja aprovado na avaliação da administradora e a documentação esteja regular.',
  'Como antecipar a contemplação sem dinheiro guardado?':
    'Com o lance embutido, que usa parte do valor da própria carta como lance, e, no caso de imóveis, com o saldo do FGTS. As regras e limites variam por grupo.',
  'A carta serve pra construção?':
    'Em muitos grupos de imóvel, sim. A carta pode pagar a construção em terreno próprio ou reformas, com liberação do dinheiro por etapas da obra, conforme as regras do grupo.',
  'E se a gente se separar?':
    'A cota tem um titular definido no contrato. Em caso de separação, ela pode ser transferida para um dos dois com a anuência da administradora. Também é possível que cada um tenha sua própria cota desde o início.',
  'Não posso arriscar o único dinheiro que tenho':
    'Não precisa. O ideal é manter uma reserva de segurança e usar só uma parte do dinheiro disponível como lance, se fizer sentido. A parcela deve caber no orçamento sem depender dessa reserva.',

  // Veículos
  'Posso comprar carro usado?':
    'Sim, na maioria dos grupos, respeitando a idade máxima do veículo e as regras de avaliação da administradora.',
  'Posso comprar usado?':
    'Na maioria dos grupos, sim, respeitando a idade máxima do bem e as regras de avaliação da administradora.',
  'A carta acompanha o aumento de preço do carro?':
    'Sim. O valor da carta é reajustado periodicamente pelo índice previsto no contrato, para acompanhar o preço do bem. As parcelas são reajustadas junto.',
  'Consigo desconto pagando à vista?':
    'Com a carta você compra à vista, o que costuma ajudar na negociação com a loja ou o vendedor. O desconto depende da negociação e não é garantido.',
  'Preciso do carro agora':
    'Se você precisa do carro hoje, o consórcio sozinho pode não resolver. Dá para tentar a contemplação por lance, avaliar uma carta já contemplada ou, em alguns casos, o financiamento é o caminho mais adequado. Mostramos as opções com clareza.',
  'Posso comprar em qualquer loja?':
    'Sim, desde que o vendedor emita nota fiscal e o bem esteja dentro da categoria prevista no grupo. O pagamento é feito pela administradora diretamente ao vendedor.',
  'Posso fazer no CNPJ?':
    'Sim. Empresas podem participar de consórcio em nome do CNPJ, com análise de crédito na contemplação, como acontece com pessoas físicas.',
  'Como planejar a renovação da frota?':
    'O caminho mais comum é ter várias cotas e escalonar as contemplações ao longo do tempo, começando com antecedência de um a três anos da troca planejada.',

  // Motos
  'Quanto fica a parcela por semana?':
    'Para ter uma ideia, divida a parcela mensal por quatro. A simulação mostra o valor exato da parcela para a moto e o prazo que você escolher.',
  'Em quanto tempo pego a moto?':
    'Não existe data garantida. A contemplação acontece por sorteio ou lance nas assembleias mensais. Com lance, as chances de receber antes aumentam.',
  'Demora muito pra pegar a moto':
    'Não há data garantida, mas dá para acelerar: com lance, inclusive o lance embutido, as chances de contemplação aumentam já nas primeiras assembleias.',
  'Preciso comprovar renda?':
    'Para entrar no grupo, geralmente não há análise de renda. A análise de crédito e de garantias acontece quando você é contemplado, antes da liberação da carta.',
  'Consórcio consulta o nome?':
    'A análise de crédito acontece na contemplação, antes da liberação da carta. Quem tem restrição no nome pode precisar apresentar garantias adicionais, conforme as regras da administradora.',

  // Pesados e agro
  'Serve para máquina usada?':
    'Em muitos grupos, sim, respeitando a idade máxima do equipamento e a avaliação da administradora.',
  'Produtor pessoa física pode fazer?':
    'Sim. O consórcio pode ser feito no CPF do produtor rural ou no CNPJ da empresa.',
  'Como alinhar a contemplação com a safra?':
    'Planejando a entrada no grupo com antecedência e usando lance no período de caixa. Alguns grupos voltados ao agro têm parcelas que acompanham o ciclo da produção.',
  'A carta serve para implemento?':
    'Em geral, sim. A carta de máquinas costuma aceitar implementos agrícolas, conforme a categoria prevista no grupo.',
  'Quais embarcações a carta aceita?':
    'Lanchas, veleiros, jet skis e motores de popa, entre outros, conforme a categoria prevista no grupo e a avaliação da administradora.',
  'Quem oferece esse tipo de grupo?':
    'Nem toda administradora tem grupos para todos os tipos de bem. Na simulação verificamos quais administradoras oferecem o grupo que você procura.',

  // Serviços e bens
  'Quais serviços a carta paga?':
    'Educação, saúde, estética, viagens, festas, reformas e outros serviços prestados por pessoa jurídica com nota fiscal, conforme as regras do grupo.',
  'O pagamento vai direto para o prestador?':
    'Sim. Na contemplação, a administradora paga diretamente o prestador do serviço, mediante contrato ou nota fiscal.',
  'Posso usar em mais de um serviço?':
    'Depende da administradora. Muitas permitem dividir a carta entre mais de um prestador, desde que todos estejam dentro das regras do grupo.',
  'Vale mais que parcelar no cartão?':
    'Parcelar sem juros no cartão é melhor quando você precisa agora e a parcela cabe. O consórcio compensa para valores maiores e quando você pode esperar, porque não há juros, só a taxa de administração.',

  // Planejamento e perfil
  'Quanto preciso ganhar para começar?':
    'Não há uma renda mínima fixa para entrar. O importante é que a parcela caiba com folga no seu orçamento. A capacidade de pagamento é analisada na contemplação.',
  'Posso começar com parcela menor?':
    'Sim, em grupos com parcela reduzida: você paga menos até ser contemplado e a diferença é redistribuída nas parcelas seguintes.',
  'Na minha idade não compensa':
    'Não necessariamente. Existem grupos de prazo curto, é possível antecipar com lance e o bem conquistado pode fazer parte da herança. Verifique também os limites de idade do seguro prestamista do grupo.',
  'Não tenho tempo pra isso':
    'O atendimento é feito pelo WhatsApp, inclusive em horários alternativos, e a documentação é digital.',
  'Como eu assino de longe?':
    'Com assinatura digital do contrato e, quando necessário, por procuração, conforme as regras da administradora.',

  // Investimento
  'Renda fixa rende mais':
    'Depende do objetivo. O consórcio não é aplicação financeira. Ele serve para comprar um bem sem juros. As estratégias patrimoniais com consórcio devem ser comparadas com o custo efetivo total e premissas explícitas, lado a lado com a renda fixa.',
  'Qual a rentabilidade esperada?':
    'O consórcio não tem rentabilidade garantida. Em estratégias patrimoniais, o resultado depende de premissas como valorização do bem, aluguel ou venda da carta, que devem ser apresentadas de forma explícita.',
  'Quantas cotas faz sentido ter?':
    'Depende do seu objetivo, do seu caixa mensal e do prazo. Ter várias cotas permite escalonar contemplações, mas cada uma precisa caber no orçamento.',
  'Qual o impacto fiscal?':
    'O consórcio não tem IOF. As cotas devem ser declaradas no Imposto de Renda, e para empresas o tratamento contábil tem regras próprias. Recomendamos validar com o seu contador.',

  // Cartas contempladas
  'Como funciona a venda de carta contemplada?':
    'A cota contemplada pode ser transferida para outra pessoa com a anuência da administradora. O valor é negociado entre as partes e a transferência é formalizada em contrato.',
  'Como sei que a carta é real?':
    'Confirme os dados da cota diretamente com a administradora, peça o extrato oficial e só faça pagamentos depois da formalização da transferência. Nunca deposite para terceiros sem essa confirmação.',
  'Como funciona a transferência?':
    'É uma cessão de direitos: quem compra passa pela análise da administradora e, aprovada a transferência, assume a cota e as parcelas restantes.',
  'Quem paga a taxa de transferência?':
    'A administradora pode cobrar uma taxa de transferência prevista no contrato. Quem paga é definido na negociação entre as partes.',

  // Seguros
  'O seguro é obrigatório?':
    'Depende do grupo. Em alguns, o seguro prestamista é obrigatório; em outros, é opcional. Isso aparece no contrato antes da assinatura.',
  'O que o prestamista cobre?':
    'O seguro prestamista quita o saldo devedor da cota em caso de morte e, dependendo da apólice, de invalidez do consorciado, conforme as condições contratadas.',
  'Posso contratar depois?':
    'Depende da seguradora e do produto. Algumas coberturas podem ser contratadas depois; outras só no início do contrato.',

  // Ferramentas e simulação
  'A simulação é gratuita?': 'Sim. A simulação é gratuita e sem compromisso de contratação.',
  'Os valores são reais?':
    'A simulação é uma estimativa com base nas condições de grupos disponíveis. Os valores finais são os da proposta oficial da administradora.',
  'Preciso deixar meus dados?':
    'Para receber a simulação completa, pedimos nome e WhatsApp. Os dados são usados só para o atendimento, conforme a LGPD.',

  // Consultoria e parceria (CONFIRMAR com a Turbo)
  'Quanto custa a consultoria?':
    'As condições são apresentadas por escrito antes de qualquer contratação, para você decidir com todas as informações.',
  'Como a Turbo é remunerada?':
    'A forma de remuneração da Turbo é informada de maneira transparente antes de qualquer contratação.',
  'Vocês acompanham até a contemplação?':
    'Sim. O acompanhamento inclui as assembleias, a estratégia de lance e a liberação da carta de crédito.',
  'Quanto ganho por indicação?':
    'Os valores de comissão dependem do tipo de consórcio e do modelo de parceria, e são apresentados antes da assinatura do acordo.',
  'Preciso ser corretor autorizado?':
    'Depende do modelo de parceria. Os requisitos de cada modelo são apresentados antes da adesão.',
  'Como recebo as comissões?':
    'A forma e o prazo de pagamento das comissões são definidos no acordo de parceria.',
};

/* Objeções da planilha → resposta publicada na página (baseada na coluna "Como responder") */
export const respostasObjecao: Record<string, string> = {
  'E se eu demorar anos para ser contemplado?': respostasFaq['E se eu demorar anos para ser contemplado?'],
  'Preciso do carro agora': respostasFaq['Preciso do carro agora'],
  'Não posso esperar o sorteio':
    'Por isso o melhor momento de entrar é antes de precisar. Montamos um plano de renovação com um a três anos de antecedência, com lance para antecipar quando fizer sentido.',
  'Demora muito pra pegar a moto': respostasFaq['Demora muito pra pegar a moto'],
  'Não tenho tempo pra isso': respostasFaq['Não tenho tempo pra isso'],
  'Qual o impacto fiscal?': respostasFaq['Qual o impacto fiscal?'],
  'Renda fixa rende mais': respostasFaq['Renda fixa rende mais'],
  'É muito tempo pagando': respostasFaq['É muito tempo pagando'],
  'A carta serve pra construção?': respostasFaq['A carta serve pra construção?'],
  'Na minha idade não compensa': respostasFaq['Na minha idade não compensa'],
  'Consórcio consulta o nome?': respostasFaq['Consórcio consulta o nome?'],
  'E se a gente se separar?': respostasFaq['E se a gente se separar?'],
  'Não posso arriscar o único dinheiro que tenho': respostasFaq['Não posso arriscar o único dinheiro que tenho'],
  'Como eu assino de longe?': respostasFaq['Como eu assino de longe?'],
};

/* Passo a passo usado em todas as páginas de produto */
export const comoFunciona = [
  {
    titulo: 'Simule',
    texto: 'Informe o valor da carta e o prazo. Comparamos grupos de administradoras autorizadas pelo Banco Central.',
  },
  {
    titulo: 'Entre no grupo',
    texto: 'Você assina o contrato digitalmente e passa a pagar parcelas sem juros, só com a taxa de administração.',
  },
  {
    titulo: 'Seja contemplado',
    texto: 'Por sorteio ou lance, nas assembleias mensais. Com a carta, você compra à vista.',
  },
];

/* Comparação padrão com a alternativa mais comum */
export const comparacaoFinanciamento = [
  { item: 'Juros', consorcio: 'Não tem', alternativa: 'Tem, e pesam no total pago' },
  { item: 'Custo principal', consorcio: 'Taxa de administração', alternativa: 'Juros e tarifas' },
  { item: 'Entrada', consorcio: 'Não é obrigatória', alternativa: 'Geralmente exigida' },
  { item: 'Quando recebe o bem', consorcio: 'Na contemplação, por sorteio ou lance', alternativa: 'Logo após a aprovação' },
  { item: 'Poder de compra', consorcio: 'Compra à vista com a carta', alternativa: 'Compra financiada' },
];
