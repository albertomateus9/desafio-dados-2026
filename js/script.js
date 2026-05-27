// Theme Toggle Script
const themeKey = "desafio-dados-theme";
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem(themeKey, theme);
  
  // Update toggle buttons text/emoji
  const toggles = document.querySelectorAll(".theme-toggle-btn");
  toggles.forEach(btn => {
    btn.textContent = theme === "light" ? "🌙" : "☀️";
  });
}

const savedTheme = localStorage.getItem(themeKey);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const activeTheme = savedTheme || (prefersDark ? "dark" : "light");
applyTheme(activeTheme);

window.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".theme-toggle-btn");
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.body.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
    });
  });
});

const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const counters = document.querySelectorAll("[data-counter]");
const filterButtons = document.querySelectorAll("[data-filter]");
const dashboardTitle = document.querySelector("[data-dashboard-title]");


const dashboardLabels = {
  geral: "Visão geral",
  educacao: "Educação",
  territorio: "Território",
};

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNav() {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function animateCounter(counter) {
  const target = Number(counter.dataset.counter);
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    counter.textContent = value.toLocaleString("pt-BR");

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.45 }
);

counters.forEach((counter) => counterObserver.observe(counter));

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter || "geral";
    if (dashboardTitle) {
      dashboardTitle.textContent = dashboardLabels[filter];
    }
  });
});



window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) {
    closeNav();
  }
});

updateHeaderState();

// ============================================================
// PORTAL DO PROFESSOR - DESAFIO DOS DADOS 2026
// ============================================================

function setupTeacherPortal() {
  const passwordInput = document.getElementById("teacher-access-key");
  const unlockBtn = document.getElementById("btn-unlock-gabarito");
  const feedbackMsg = document.getElementById("lock-feedback-msg");
  const lockscreenSection = document.getElementById("lockscreen-section");
  const restrictedContent = document.getElementById("restricted-content");

  // Authentication Logic
  function unlockPortal(saveSession = true) {
    if (lockscreenSection && restrictedContent) {
      lockscreenSection.style.display = "none";
      restrictedContent.style.display = "block";
      if (saveSession) {
        sessionStorage.setItem("desafio_teacher_unlocked", "true");
      }
      initRestrictedFeatures();
    }
  }

  unlockBtn?.addEventListener("click", () => {
    const password = passwordInput?.value.trim();
    if (password === "dados2026") {
      unlockPortal(true);
    } else {
      if (feedbackMsg) {
        feedbackMsg.textContent = "Senha incorreta. Tente novamente.";
        feedbackMsg.removeAttribute("hidden");
      }
    }
  });

  passwordInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      unlockBtn?.click();
    }
  });

  // Check if session is already unlocked
  if (sessionStorage.getItem("desafio_teacher_unlocked") === "true") {
    unlockPortal(false);
  }
}

// Initialise features inside the restricted area
function initRestrictedFeatures() {
  const gabaritoDatabase = [
    { code: "TD01", tipo: "Múltipla escolha", nivel: "Fácil", nivel_id: "facil", tema: "Falsidade e Tipologia de Desinformação", resposta: "C", justificativa: "A mãe compartilha informação falsa sem intenção clara de dano: informação falsa (misinformation). Os perfis falsos na campanha e o grupo organizado do 5G espalham falsidades com intenção de dano: desinformação.", atencao: "Reforce a diferença entre falsidade sem intenção de dano, falsidade intencional e uso malicioso de informação verdadeira." },
    { code: "TD02", tipo: "Múltipla escolha", nivel: "Médio", nivel_id: "medio", tema: "Realidade Virtual em Treinamentos", resposta: "C", justificativa: "A RV aumenta eficiência, segurança e imersão no treinamento de equipes técnicas, mas exige investimento relevante em infraestrutura, equipamentos e produção de simulações virtuais.", atencao: "A alternativa D tem uma vantagem real, mas erra ao afirmar que há menor dependência tecnológica no desenvolvimento do cenário." },
    { code: "TD03", tipo: "Múltipla escolha", nivel: "Difícil", nivel_id: "dificil", tema: "Operadores Avançados de Busca", resposta: "B", justificativa: "O operador 'site:gov.br' restringe o domínio de pesquisa a portais governamentais brasileiros e a expressão '(filetype:pdf OR filetype:docx)' filtra os tipos de arquivo desejados.", atencao: "Esta string de busca é a melhor sintaticamente. Outras opções usam operadores inválidos ou escopos menos restritivos." },
    { code: "TD04", tipo: "Múltipla escolha", nivel: "Médio", nivel_id: "medio", tema: "Rastreabilidade em Mecanismos de Busca vs LLM", resposta: "D", justificativa: "Afirmações I, III e IV estão corretas. Motores de busca tradicionais favorecem a rastreabilidade; LLMs podem gerar respostas sintaticamente plausíveis sem fonte verificável imediata; combinar ferramentas ajuda se houver validação.", atencao: "A afirmação II é falsa porque os LLMs tradicionais não garantem validação automática e isenta de fontes." },
    { code: "TD05", tipo: "Múltipla escolha", nivel: "Fácil", nivel_id: "facil", tema: "Automação e Habilidades Não Automatizáveis", resposta: "C", justificativa: "Mediação de conflitos e negociação exigem empatia, julgamento contextual e inteligência emocional, competências menos automatizáveis no curto prazo.", atencao: "Planilhas, vigilância de segurança, projeções financeiras e correções gramaticais são tarefas altamente automatizáveis." },
    { code: "TD06", tipo: "Múltipla seleção", nivel: "Médio", nivel_id: "medio", tema: "Ações de Segurança contra Cyberbullying", resposta: "A, B e D", justificativa: "A interrompe a disseminação do conteúdo prejudicial, B aciona os canais adequados de denúncia e D apoia psicologicamente a vítima de exposição.", atencao: "A alternativa C aumenta a circulação da imagem e a E expõe publicamente os envolvidos, o que viola políticas de privacidade e agrava danos." },
    { code: "TD07", tipo: "Resposta construída", nivel: "Difícil", nivel_id: "dificil", tema: "Treinamento de Modelos e Falsos Positivos", resposta: "Consultar Rubrica", justificativa: "A resposta construída deve articular conceitos de treinamento de modelo, qualidade/variedade dos dados históricos, diferença entre padrões normais e anômalos, falsos positivos e dados adicionais de sensores.", atencao: "Não entregar texto pronto. Pedir que cada squad proponha dados coerentes com a realidade local da escola ou comunidade." },
    { code: "TD08", tipo: "Múltipla escolha", nivel: "Fácil", nivel_id: "facil", tema: "Tecnologia Principal de Chatbots", resposta: "D", justificativa: "Chatbots de atendimento inteligente baseiam-se principalmente em Processamento de Linguagem Natural (PLN) para interpretar mensagens humanas e gerar respostas adequadas.", atencao: "Visão computacional, blockchain, realidade virtual e internet das coisas não são as tecnologias primárias deste caso de uso." },
    { code: "TD09", tipo: "Múltipla escolha", nivel: "Difícil", nivel_id: "dificil", tema: "Autenticação Multifator (MFA) e Phishing", resposta: "B", justificativa: "MFA combina senha com outro fator de segurança, como posse física de dispositivo (token/celular), neutralizando o risco quando credenciais são vazadas por phishing.", atencao: "Complexidade isolada da senha não resolve o cenário de vazamento onde a credencial já foi coletada pelo atacante." },
    { code: "TD10", tipo: "Múltipla escolha", nivel: "Médio", nivel_id: "medio", tema: "Uso Combinado de Buscas e IAs", resposta: "E", justificativa: "Mecanismos de busca tradicionais são recomendados para localizar o PDF oficial e atualizado; LLMs são úteis para estruturar o rascunho da explicação inicial sob revisão humana.", atencao: "A alternativa B é incorreta porque os LLMs podem cometer alucinações e não garantem documentos oficiais estatais." },
    { code: "TD11", tipo: "Múltipla seleção", nivel: "Difícil", nivel_id: "dificil", tema: "Privacidade e Proteção de Dados de Menores", resposta: "C e E", justificativa: "A alternativa C trata da divulgação divulgação institucional de dados em contexto pedagógico com autorização. E publica imagens em canais escolares oficiais com termo de consentimento assinado.", atencao: "A e B extrapolam a autorização para redes pessoais. D viola os termos de uso etários do Instagram (idade mínima de 13 anos para usuários)." },
    { code: "TD12", tipo: "Múltipla escolha", nivel: "Fácil", nivel_id: "facil", tema: "Verificação de Fontes sobre Desastres Naturais", resposta: "D", justificativa: "A atitude adequada do cidadão é verificar fontes oficiais e veículos jornalísticos consolidados antes de compartilhar vídeos e mensagens alarmistas em grupos familiares.", atencao: "O caso contrapõe mensagens e vídeos informais descontextualizados contra a autoridade da Defesa Civil e portais de notícias locais." },
    { code: "TD13", tipo: "Múltipla escolha", nivel: "Difícil", nivel_id: "dificil", tema: "Tecnologia Aplicada à Sustentabilidade", resposta: "C", justificativa: "A realidade aumentada educa de forma imersiva e cria interação; o blockchain provê integridade e rastreabilidade imutável aos dados de sustentabilidade e ODS.", atencao: "A alternativa D parece correta, mas foca em 'atualizar em tempo real', enquanto o enunciado prioriza imutabilidade e rastreabilidade." },
    { code: "TD14", tipo: "Múltipla escolha", nivel: "Médio", nivel_id: "medio", tema: "Critérios Avançados de Busca Científica", resposta: "B", justificativa: "A afirmação II faz uso do operador correto `filetype:pdf` para artigos acadêmicos; a afirmação IV usa `site:unesco.org` e limitação temporal para fonte internacional confiável.", atencao: "A afirmação I descreve uma busca simples sem critério avançado de filtro, e a III é frágil pois confia exclusivamente em LLM sem validação." },
    { code: "TD15", tipo: "Múltipla escolha", nivel: "Fácil", nivel_id: "facil", tema: "Definição de Cidade Inteligente (Smart City)", resposta: "A", justificativa: "Uma cidade inteligente usa tecnologias integradas e dados conectados para otimizar serviços urbanos, eficiência energética e a qualidade de vida geral dos cidadãos.", atencao: "Outras alternativas limitam o conceito a apenas um setor ou distorcem o papel da conectividade pública." },
    { code: "TD16", tipo: "Resposta construída", nivel: "Difícil", nivel_id: "dificil", tema: "IA e Fluxo Inteligente de Descarte de Lixo", resposta: "Consultar Rubrica", justificativa: "A resposta deve integrar e explicar o papel de visão computacional, redes neurais, machine learning e processamento de linguagem natural no fluxo escolar de descarte de resíduos.", atencao: "O diagrama ilustra captura por câmera, análise estrutural em tempo real, rótulo da classe e geração de orientações interativas." },
    { code: "TD17", tipo: "Múltipla escolha", nivel: "Médio", nivel_id: "medio", tema: "Economia Circular e Logística Reversa de TI", resposta: "B", justificativa: "A logística reversa de eletroeletrônicos, a recuperação de metais nobres e o reuso de componentes representam estratégias fundamentais de economia circular.", atencao: "Incineração simples, aterros comuns, obsolescência e exportação de resíduos são opostos diretos da circularidade." },
    { code: "TD18", tipo: "Resposta construída", nivel: "Difícil", nivel_id: "dificil", tema: "Algoritmo da Cifra de César com Deslocamento 3", resposta: "ghvdilr grv gdgrv", justificativa: "O algoritmo lê caractere por caractere, mantém espaços estáticos e rotaciona cada letra 3 posições à frente no alfabeto. A mensagem 'desafio dos dados' resulta em 'ghvdilr grv gdgrv'.", atencao: "Tratar a ligatura visual 'fi' como as letras individuais f e i. Não cifre espaços." },
    { code: "TD19", tipo: "Múltipla escolha", nivel: "Fácil", nivel_id: "facil", tema: "Programação e Algoritmos como Arte", resposta: "C", justificativa: "Algoritmos e lógica de programação atuam como meios de expressão que combinam técnica computacional e criatividade humana para gerar valor e arte digital.", atencao: "O formulário do Desafio repete a letra C em duas alternativas; a correta é a primeira C, iniciada por 'Como um meio de expressão'." },
    { code: "TD20", tipo: "Múltipla escolha", nivel: "Difícil", nivel_id: "dificil", tema: "Tomada de Decisão na Localização de Datacenter", resposta: "C", justificativa: "O Local C equilibra perfeitamente fonte predominantemente hidrelétrica, alta estabilidade do fornecimento, baixa temperatura de resfriamento, proximidade a recursos hídricos e custo equilibrado.", atencao: "O Local A possui baixa estabilidade e recursos hídricos precários; o Local B baseia-se em fontes termoelétricas de alto impacto." }
  ];

  const rubricasData = {
    td07: {
      title: "TD07 — Aprendizado de Máquina e Falso Positivo",
      elements: [
        "Definição clara de que o modelo de IA aprende padrões de risco baseando-se em históricos e exemplos rotulados previamente.",
        "Relação entre qualidade, quantidade, diversidade e atualização periódica dos dados com a precisão global dos alertas emitidos pelo sistema.",
        "Explicação de que falsos positivos ocorrem quando dados normais e não perigosos são classificados pelo modelo como anomalias de risco.",
        "Proposta de dois dados adicionais (ex.: volume pluviométrico, histórico de manutenção local, vibração mecânica de tráfego) além dos sensores básicos.",
        "Justificativa lógica de como cada dado novo ajuda a distinguir o risco da normalidade."
      ],
      suggestions: [
        "<strong>Dados Pluviométricos:</strong> Cruzar alertas de sensores de nível com o volume recente de chuvas na região.",
        "<strong>Dados de Vibração Externa:</strong> Desconsiderar ruídos causados por tráfego de caminhões pesados, obras ou detonações programadas."
      ],
      structure: [
        "Iniciar definindo o treinamento supervisionado de um modelo preditivo.",
        "Explicar como a IA compara novos fluxos de dados com os limiares de segurança aprendidos.",
        "Apresentar o conceito de falso positivo no contexto do problema.",
        "Indicar e justificar a utilidade prática das duas fontes de dados adicionais escolhidas.",
        "Concluir destacando a necessidade de revisão e supervisão humana contínua."
      ],
      excellence: "A resposta do squad não deve prometer precisão absoluta de 100%. O argumento de excelência deve reconhecer que novos dados reduzem drasticamente falsos positivos, mas a margem de incerteza em IA é inerente e gerida com intervenção humana."
    },
    td16: {
      title: "TD16 — Fluxo de IA para Separação de Recicláveis",
      elements: [
        "<strong>Visão Computacional:</strong> Papel da câmera em capturar imagens dos resíduos em tempo real na lixeira.",
        "<strong>Redes Neurais Artificiais:</strong> Uso de camadas de convolução para extrair características físicas (forma, textura, cor) e classificar o tipo do item.",
        "<strong>Aprendizagem de Máquina:</strong> Retreinamento do modelo com novos exemplos corrigidos pelos alunos, aumentando a acurácia ao longo do tempo.",
        "<strong>Processamento de Linguagem Natural:</strong> Geração de instruções em linguagem humana clara na tela para orientar o descarte correto.",
        "<strong>Fluxo de Dados Unificado:</strong> Integração de todas as etapas, desde a captura física até a exibição de instruções."
      ],
      suggestions: [
        "<strong>Garrafa Plástica:</strong> 'Detectei garrafa plástica (Confiança: 96%). Remova o excesso de líquido e deposite no coletor vermelho.'",
        "<strong>Papel de Lanche:</strong> 'Detectei papel engordurado (Confiança: 91%). Atenção: papéis sujos devem ser descartados no rejeito comum, não no reciclável.'"
      ],
      structure: [
        "Explicar a lógica de funcionamento de forma narrativa, conectando a câmera, as redes neurais de classificação, o ajuste do modelo e a interface conversacional que orienta o descarte dos alunos."
      ],
      excellence: "Integrar as tecnologias de IA em um fluxo de processo contínuo aplicável na rotina escolar. Respostas enciclopédicas que apenas definem os conceitos de forma isolada, sem conectá-los em um sistema funcional, não atingem pontuação máxima."
    },
    td18: {
      title: "TD18 — Cifra de César em Linguagem Natural",
      elements: [
        "Leitura sequencial e análise caractere por caractere da mensagem inserida.",
        "Regra de manutenção inalterada para espaços, pontuações e caracteres especiais.",
        "Regra de rotação alfabética avançando 3 caracteres para cada letra (deslocamento k=3).",
        "Regra de fechamento circular: quando o avanço ultrapassa a letra 'z', reinicia-se a contagem a partir do 'a'.",
        "Aplicação prática e passo a passo na string do problema."
      ],
      suggestions: [
        "<strong>Entrada:</strong> 'desafio dos dados'",
        "<strong>Saída Cifrada:</strong> 'ghvdilr grv gdgrv'",
        "<strong>Conferência Letra a Letra:</strong> d(+3)=g, e(+3)=h, s(+3)=v, a(+3)=d, f(+3)=i, i(+3)=l, o(+3)=r | d(+3)=g, o(+3)=r, s(+3)=v | d(+3)=g, a(+3)=d, d(+3)=g, o(+3)=r, s(+3)=v."
      ],
      structure: [
        "Escrever a resposta em formato de algoritmo linear estruturado (usando linguagem natural de fluxo, como 'Para cada...', 'Se...', 'Então...'), facilitando a reprodução manual por terceiros."
      ],
      excellence: "Descrever detalhadamente a regra de rotação no final do alfabeto (rotação de z para a). A mera exibição da frase resultante sem a descrição lógica e exaustiva das regras de rotação e tratamento de espaços reduz a nota do squad."
    }
  };

  // State Variables
  let currentLevelFilter = "todos";
  let searchQuery = "";
  let activeRubricaId = "td07";

  // Elements
  const gridContainer = document.getElementById("gabarito-grid-container");
  const filterBtns = document.querySelectorAll("[data-gabarito-filter]");
  const searchInput = document.getElementById("gabarito-search-input");
  const searchBtn = document.getElementById("gabarito-search-btn");
  const rubricaTabBtns = document.querySelectorAll("[data-rubrica-id]");
  const rubricaViewport = document.getElementById("rubrica-panel-viewport");
  const checkboxes = document.querySelectorAll(".persist-check");
  const toastContainer = document.getElementById("toast-container-element");

  // TOAST NOTIFICATIONS
  function showToast(message, type = "success") {
    if (!toastContainer) return;
    
    const toast = document.createElement("div");
    toast.className = "toast";
    
    const icon = document.createElement("span");
    icon.className = "toast-icon";
    icon.textContent = type === "success" ? "✔" : "🔔";
    
    const text = document.createElement("span");
    text.className = "toast-message";
    text.textContent = message;
    
    toast.appendChild(icon);
    toast.appendChild(text);
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => {
        if (toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
        }
      }, 350);
    }, 4000);
  }

  // RENDER GABARITO DYNAMICALLY
  function renderGabarito() {
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    const filtered = gabaritoDatabase.filter(q => {
      const matchesFilter = currentLevelFilter === "todos" || q.nivel_id === currentLevelFilter;
      const matchesSearch = !searchQuery || 
        q.code.toLowerCase().includes(searchQuery) ||
        q.tema.toLowerCase().includes(searchQuery) ||
        q.justificativa.toLowerCase().includes(searchQuery) ||
        q.resposta.toLowerCase().includes(searchQuery);
      
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--muted-inverse);">
          <p style="font-size: 1.1rem; margin: 0 0 8px 0;">Nenhuma questão encontrada</p>
          <p style="font-size: 0.9rem; margin: 0;">Refine seu termo de busca ou altere o filtro de dificuldade.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement("div");
      card.className = "gabarito-card";
      
      card.innerHTML = `
        <div class="gabarito-card-header">
          <span class="gabarito-code">${q.code}</span>
          <span class="gabarito-level-badge level-${q.nivel_id}">${q.nivel}</span>
        </div>
        <h3>${q.tema}</h3>
        <div class="gabarito-meta">
          <span><strong>Tipo:</strong> ${q.tipo}</span>
          <span><strong>Resposta:</strong> <mark class="answer-highlight">${q.resposta}</mark></span>
        </div>
        <p class="gabarito-desc"><strong>Justificativa:</strong> ${q.justificativa}</p>
        <div class="gabarito-attention">
          <strong>Pontos de Atenção:</strong> ${q.atencao}
        </div>
      `;
      
      gridContainer.appendChild(card);
    });
  }

  // FILTER HANDLERS
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLevelFilter = btn.dataset.gabaritoFilter;
      renderGabarito();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderGabarito();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchQuery = searchInput.value.toLowerCase().trim();
        renderGabarito();
      }
    });
  }

  // RENDER RUBRIC DETAILS
  function renderRubrica() {
    if (!rubricaViewport) return;
    const r = rubricasData[activeRubricaId];
    if (!r) return;

    const elementsHtml = r.elements.map(el => `<li>${el}</li>`).join("");
    const suggestionsHtml = r.suggestions.map(s => `<li>${s}</li>`).join("");
    const structureHtml = r.structure.map(s => `<li>${s}</li>`).join("");

    rubricaViewport.innerHTML = `
      <div class="rubrica-detail-card">
        <h2>${r.title}</h2>
        
        <div class="rubrica-section-block">
          <h3>📋 O que a resposta precisa conter:</h3>
          <ul>${elementsHtml}</ul>
        </div>
        
        <div class="rubrica-section-block">
          <h3>💡 Sugestões e Exemplos Práticos:</h3>
          <ul>${suggestionsHtml}</ul>
        </div>

        <div class="rubrica-section-block">
          <h3>🛠 Estrutura do Algoritmo Recomendado:</h3>
          <ol>${structureHtml}</ol>
        </div>

        <div class="rubrica-excellence-block">
          <strong>Critério de Excelência:</strong>
          <p>${r.excellence}</p>
        </div>
      </div>
    `;
  }

  // RUBRICA TAB HANDLERS
  rubricaTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      rubricaTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeRubricaId = btn.dataset.rubricaId;
      renderRubrica();
    });
  });

  // CHECKLIST PERSISTENCE
  function loadChecklistState() {
    const saved = localStorage.getItem("desafio-checklist-docente");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        checkboxes.forEach(cb => {
          if (parsed[cb.id] !== undefined) {
            cb.checked = parsed[cb.id];
          }
        });
      } catch (e) {
        console.error("Erro ao ler checklist do localStorage:", e);
      }
    }
  }

  function saveChecklistState() {
    const state = {};
    checkboxes.forEach(cb => {
      state[cb.id] = cb.checked;
    });
    localStorage.setItem("desafio-checklist-docente", JSON.stringify(state));
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      saveChecklistState();
      const title = cb.closest(".checklist-item-check").querySelector("strong").textContent;
      showToast(`Item '${title}' atualizado!`, "success");
    });
  });

  // SIMULATED PDF DOWNLOADS
  const downloadBtns = document.querySelectorAll(".download-desafio-btn");
  downloadBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.docName;
      showToast(`Download de '${name}.pdf' iniciado (Simulado).`, "success");
    });
  });

  // Initial runs
  renderGabarito();
  renderRubrica();
  loadChecklistState();
}

// Auto setup on load if we are on the portal page
if (document.getElementById("btn-unlock-gabarito") || document.getElementById("gabarito-search-input")) {
  setupTeacherPortal();
}
