const ridesMock = [
  {
    id: 'GDM-4022',
    cliente: 'Carlos Silva',
    motorista: 'Marcos Oliveira',
    origem: 'Av. Paulista, 1000 - São Paulo, SP',
    destino: 'Aeroporto de Congonhas - São Paulo, SP',
    valor: 45.9,
    status: 'em_andamento'
  },
  {
    id: 'GDM-1104',
    cliente: 'Ana Beatriz Souza',
    motorista: 'Rodrigo Santos',
    origem: 'Rua das Flores, 250 - Curitiba, PR',
    destino: 'Shopping Mueller - Curitiba, PR',
    valor: 22.5,
    status: 'finalizada'
  },
  {
    id: 'GDM-8891',
    cliente: 'Lucas Pereira',
    motorista: 'Aline Costa',
    origem: 'Av. Atlântica, 1500 - Rio de Janeiro, RJ',
    destino: 'Copacabana Palace - Rio de Janeiro, RJ',
    valor: 18.0,
    status: 'pendente'
  },
  {
    id: 'GDM-3321',
    cliente: 'Mariana Costa',
    motorista: 'Fernando Lima',
    origem: 'Av. Afonso Pena, 3000 - Belo Horizonte, MG',
    destino: 'Praça da Liberdade - Belo Horizonte, MG',
    valor: 31.2,
    status: 'finalizada'
  },
  {
    id: 'GDM-5540',
    cliente: 'Roberto Almeida',
    motorista: 'Nenhum (Aguardando)',
    origem: 'Av. Beira Mar, 400 - Fortaleza, CE',
    destino: 'Praia do Futuro - Fortaleza, CE',
    valor: 55.0,
    status: 'pendente'
  },
  {
    id: 'GDM-7712',
    cliente: 'Juliana Meireles',
    motorista: 'Ricardo Augusto',
    origem: 'Rua Bahia, 88 - Salvador, BA',
    destino: 'Farol da Barra - Salvador, BA',
    valor: 42.1,
    status: 'cancelada'
  },
  {
    id: 'GDM-9011',
    cliente: 'Pedro Henrique',
    motorista: 'Bruno Fagundes',
    origem: 'Av. Osvaldo Aranha, 120 - Porto Alegre, RS',
    destino: 'Parque Redenção - Porto Alegre, RS',
    valor: 15.4,
    status: 'em_andamento'
  },
  {
    id: 'GDM-2234',
    cliente: 'Camila Rodrigues',
    motorista: 'Gabriel Jesus',
    origem: 'Setor Comercial Sul - Brasília, DF',
    destino: 'Aeroporto de Brasília - Brasília, DF',
    valor: 68.9,
    status: 'finalizada'
  },
  {
    id: 'GDM-6651',
    cliente: 'Thiago Martins',
    motorista: 'Nenhum (Aguardando)',
    origem: 'Av. Agamenon Magalhães, 2500 - Recife, PE',
    destino: 'Marco Zero - Recife, PE',
    valor: 29.0,
    status: 'pendente'
  },
  {
    id: 'GDM-4410',
    cliente: 'Fernanda Lima',
    motorista: 'Carlos Eduardo',
    origem: 'Rua XV de Novembro, 450 - Blumenau, SC',
    destino: 'Vila Germânica - Blumenau, SC',
    valor: 19.8,
    status: 'finalizada'
  },
  {
    id: 'GDM-1299',
    cliente: 'Diego Ramos',
    motorista: 'Marcelo Vieira',
    origem: 'Av. Eduardo Ribeiro, 500 - Manaus, AM',
    destino: 'Teatro Amazonas - Manaus, AM',
    valor: 35.0,
    status: 'em_andamento'
  },
  {
    id: 'GDM-8822',
    cliente: 'Beatriz Castro',
    motorista: 'Alexandre Pires',
    origem: 'Av. Republica do Líbano, 900 - Goiânia, GO',
    destino: 'Parque Flamboyant - Goiânia, GO',
    valor: 26.4,
    status: 'cancelada'
  },
  {
    id: 'GDM-3102',
    cliente: 'Gabriel Souza',
    motorista: 'Patrícia Poeta',
    origem: 'Av. Caxias do Sul, 1200 - Caxias do Sul, RS',
    destino: 'Shopping Iguatemi - Caxias do Sul, RS',
    valor: 24.0,
    status: 'finalizada'
  },
  {
    id: 'GDM-7744',
    cliente: 'Larissa Manoela',
    motorista: 'William Bonner',
    origem: 'Rua das Palmeiras, 33 - Campinas, SP',
    destino: 'Lagoa do Taquaral - Campinas, SP',
    valor: 33.5,
    status: 'em_andamento'
  },
  {
    id: 'GDM-5599',
    cliente: 'Felipe Neto',
    motorista: 'Nenhum (Aguardando)',
    origem: 'Av. Hermes da Fonseca, 1100 - Natal, RN',
    destino: 'Praia de Ponta Negra - Natal, RN',
    valor: 52.0,
    status: 'pendente'
  }
];
