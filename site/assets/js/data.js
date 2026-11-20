/* Catálogo de cursos — conteúdo de EXEMPLO para apresentação.
   Trocar textos, valores e cargas horárias pelos dados reais do cliente. */
window.TF_COURSES = [
  {
    id:"basico", title:"Tiro Básico", kicker:"Curso de formação", cat:"Básico", tint:"#56653a",
    level:"Iniciante", hours:"8h", format:"Presencial", price:"Sob consulta", badge:"Mais procurado",
    short:"O primeiro passo: fundamentos, segurança e seus primeiros disparos com acompanhamento individual.",
    desc:"Curso de entrada para quem nunca atirou ou quer começar do jeito certo. Você aprende as regras de segurança, a nomenclatura do armamento, postura, empunhadura, visada e controle do gatilho, com prática real no estande e o instrutor ao seu lado em cada disparo.",
    topics:["Regras universais de segurança","Nomenclatura e funcionamento","Postura e empunhadura","Visada e controle de gatilho","Prática supervisionada no estande"],
    rating:4.9, reviews:[
      {n:"Mariana S.", r:5, t:"Nunca tinha segurado uma arma. Saí confiante e, principalmente, consciente da responsabilidade."},
      {n:"Rafael T.", r:5, t:"Didática excelente. O instrutor corrige cada detalhe da empunhadura."}
    ]
  },
  {
    id:"capacidade", title:"Capacidade Técnica", kicker:"Credenciado Polícia Federal", cat:"Certificação", tint:"#8a7a45",
    level:"Todos", hours:"4h", format:"Presencial", price:"Sob consulta", badge:"PF",
    short:"Preparação e aplicação do teste de capacidade técnica com instrutor credenciado pela Polícia Federal.",
    desc:"Para quem precisa comprovar capacidade técnica no processo de aquisição, registro ou porte. Treino orientado com o mesmo padrão da avaliação e aplicação do teste por instrutor credenciado pela Polícia Federal.",
    topics:["Revisão das normas de segurança","Manuseio e municiamento","Treino no padrão da prova","Aplicação do teste oficial","Orientação sobre a documentação"],
    rating:5.0, reviews:[
      {n:"Carlos M.", r:5, t:"Processo claro do início ao fim. Fiz o treino e o teste no mesmo dia."},
      {n:"Juliano P.", r:5, t:"Profissional e direto ao ponto. Recomendo para quem vai tirar o registro."}
    ]
  },
  {
    id:"defensivo1", title:"Tiro Defensivo I", kicker:"Autodefesa", cat:"Defensivo", tint:"#7b1d16",
    level:"Intermediário", hours:"12h", format:"Presencial", price:"Sob consulta", badge:"Nova turma",
    short:"Saque, tiro em dupla, deslocamento e tomada de decisão sob pressão.",
    desc:"Não é apenas atirar, é saber como e quando. O Defensivo I leva o aluno do tiro estático para o tiro com propósito: saque seguro, sequências rápidas, uso de abrigo e leitura de cenário.",
    topics:["Saque e coldreamento seguro","Tiro em dupla (double tap)","Uso de abrigo","Deslocamento lateral","Decisão sob estresse"],
    rating:4.9, reviews:[
      {n:"Anderson L.", r:5, t:"Treino de verdade. Muita repetição e correção, do jeito que tem que ser."},
      {n:"Patrícia K.", r:4, t:"Intenso e muito bem conduzido. Já quero o nível II."}
    ]
  },
  {
    id:"transicao", title:"Transição de Alvos", kicker:"Tiro Defensivo II · 7m e 12m", cat:"Defensivo", tint:"#5a2a18",
    level:"Avançado", hours:"12h", format:"Presencial", price:"Sob consulta",
    short:"Para sobreviver, não para ganhar medalhas. Transições rápidas entre alvos a 7 e 12 metros.",
    desc:"Seja rápido e eficiente — confie na técnica. Trabalho de transição entre múltiplos alvos em distâncias de 7 e 12 metros, controle de recuo e retomada de visada, com cronômetro e metas progressivas.",
    topics:["Controle de recuo","Transição entre alvos","Distâncias 7m e 12m","Tiro cronometrado","Recarga tática e de emergência"],
    rating:4.8, reviews:[
      {n:"Eduardo R.", r:5, t:"O cronômetro não mente. Baixei meu tempo pela metade."},
      {n:"Tiago F.", r:5, t:"Foco total em eficiência. Nada de firula."}
    ]
  },
  {
    id:"calibre12", title:"Calibre 12", kicker:"Operação com espingarda", cat:"Armamento", tint:"#3f4a2a",
    level:"Intermediário", hours:"8h", format:"Presencial", price:"Sob consulta", badge:"Nova turma",
    short:"Operação completa da espingarda calibre 12: municiamento, ciclo de tiro e transições.",
    desc:"Tudo sobre operação com calibre 12 GA: características da plataforma, municiamento e remuniciamento, ciclo de ação, postura, controle de recuo e emprego em distâncias curtas.",
    topics:["Características da plataforma","Municiamento e remuniciamento","Ciclo de ação (pump)","Postura e controle de recuo","Emprego em curta distância"],
    rating:4.9, reviews:[
      {n:"Gustavo B.", r:5, t:"Achei que conhecia a 12. Não conhecia. Curso excelente."},
      {n:"Leandro V.", r:5, t:"Prática intensa e segura. Instrutor muito atento."}
    ]
  },
  {
    id:"panes", title:"Panes e Soluções", kicker:"Manipulação de armamento", cat:"Armamento", tint:"#4d4a3a",
    level:"Todos", hours:"4h", format:"Presencial", price:"Sob consulta",
    short:"Pane de nega, dupla alimentação, chaminé: identifique e resolva sem criar problemas maiores.",
    desc:"Um procedimento que parece simples tem seus segredos. Se não for executado da maneira correta, pode gerar problemas ainda mais complexos. Aprenda a identificar e solucionar as principais panes com rapidez e segurança.",
    topics:["Pane de nega (tap-rack)","Dupla alimentação","Chaminé (stovepipe)","Diagnóstico rápido","Treino com munição de manejo"],
    rating:4.8, reviews:[
      {n:"Fernando A.", r:5, t:"Detalhes que fazem toda diferença na hora H."},
      {n:"Diego S.", r:5, t:"Muito didático. Repetimos até virar reflexo."}
    ]
  },
  {
    id:"manuseio", title:"Manuseio Seguro", kicker:"Segurança com armas de fogo", cat:"Básico", tint:"#55603f",
    level:"Iniciante", hours:"4h", format:"Presencial", price:"Sob consulta",
    short:"Como manipular armas de fogo com segurança em casa, no transporte e no estande.",
    desc:"Segurança começa com responsabilidade. Curso para proprietários e familiares: verificação de arma, transporte, guarda, manuseio em ambiente doméstico e conduta no estande.",
    topics:["Verificação de arma","Transporte e guarda","Ambiente doméstico","Conduta no estande","Responsabilidade legal"],
    rating:4.9, reviews:[
      {n:"Sandra M.", r:5, t:"Fiz junto com meu marido. Hoje me sinto muito mais segura em casa."},
      {n:"Paulo H.", r:5, t:"Essencial para quem tem arma em casa."}
    ]
  },
  {
    id:"feminino", title:"Tiro Feminino", kicker:"Turmas exclusivas para mulheres", cat:"Turmas", tint:"#6b2d24",
    level:"Iniciante", hours:"6h", format:"Presencial", price:"Sob consulta",
    short:"Conhecimento gera confiança. Turmas exclusivas com teoria, segurança e prática de tiro.",
    desc:"Formato que já reuniu grupos como as mulheres da OAB de Xanxerê: orientações técnicas, conhecimento sobre armamento, segurança e atividades práticas de tiro em um ambiente acolhedor e profissional.",
    topics:["Fundamentos de segurança","Empunhadura e postura","Prática com pistola e revólver","Mitos e verdades","Certificado de participação"],
    rating:5.0, reviews:[
      {n:"Ana C.", r:5, t:"Uma noite de muito aprendizado. Ambiente leve e super profissional."},
      {n:"Luiza R.", r:5, t:"Perdi o medo e ganhei respeito pela técnica."}
    ]
  },
  {
    id:"revolver", title:"Revólver", kicker:"Fundamentos e operação", cat:"Armamento", tint:"#4a4f45",
    level:"Iniciante", hours:"4h", format:"Presencial", price:"Sob consulta",
    short:"Operação do revólver: abertura do tambor, municiamento rápido e tiro em ação dupla.",
    desc:"O revólver ainda é a primeira arma de muita gente. Aprenda a operá-lo com técnica: empunhadura específica, ação simples e dupla, municiamento com speed loader e manutenção do ritmo de tiro.",
    topics:["Ação simples x ação dupla","Empunhadura específica","Municiamento rápido","Ritmo de tiro","Segurança na operação"],
    rating:4.7, reviews:[
      {n:"Osmar G.", r:5, t:"Tenho revólver há anos e aprendi coisas que nunca tinham me mostrado."},
      {n:"Vitor N.", r:4, t:"Curso objetivo e bem prático."}
    ]
  },
  {
    id:"grupos", title:"Grupos e Empresas", kicker:"Treinamento sob medida", cat:"Turmas", tint:"#36402a",
    level:"Sob medida", hours:"Flexível", format:"In company / Estande", price:"Sob consulta",
    short:"Turmas fechadas para associações, empresas, equipes de segurança e grupos de amigos.",
    desc:"Programas personalizados para grupos: definimos o objetivo, o nível da turma e a carga horária. Ideal para entidades de classe, equipes de segurança privada e eventos corporativos.",
    topics:["Diagnóstico do grupo","Conteúdo personalizado","Prática no estande","Relatório de evolução","Certificados"],
    rating:4.9, reviews:[
      {n:"Associação Comercial", r:5, t:"Organização impecável do começo ao fim."},
      {n:"Equipe Vigilância", r:5, t:"Treinamento sério e alinhado à realidade do serviço."}
    ]
  }
];

window.TF_posterHTML = function(c, opts){
  opts = opts || {};
  return '<div class="poster" style="--tint:'+c.tint+'">'+
    (c.badge && !opts.noBadge ? '<span class="p-badge">'+c.badge+'</span>' : '')+
    '<img class="p-logo" src="'+(opts.base||'')+'assets/img/logo.webp" alt="" loading="lazy">'+
    '<span class="p-cross"></span><span class="p-fade"></span>'+
    '<div class="p-kicker">'+c.kicker+'</div>'+
    '<div class="p-title">'+c.title+'</div>'+
  '</div>';
};

window.TF_stars = function(n){
  var s='', full=Math.round(n);
  for(var i=0;i<5;i++){
    s+='<svg viewBox="0 0 24 24" fill="'+(i<full?'currentColor':'none')+'" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>';
  }
  return '<span class="stars">'+s+'</span>';
};
