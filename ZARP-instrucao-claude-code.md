# ZARP — Instrução de Contexto para Claude Code

> **Arquivo de referência** para geração da arquitetura de telas do app Zarp.
> Leia este documento inteiro antes de executar qualquer código.

---

## 1. O Produto

**Zarp** é uma fintech mobile voltada para jovens brasileiros (18-30 anos) que vivem, viajam e consomem globalmente. O app elimina as barreiras financeiras de câmbio — spreads escondidos, IOF não explicado, burocracia excessiva — tornando o dinheiro internacional tão acessível quanto o PIX.

### Proposta de valor central

Mostrar o custo real em reais **antes** de qualquer transação internacional. Não é só ser mais barato — é ser **compreensível**.

### Posicionamento

Plataforma financeira global para o dia-a-dia, **não** um app de viagem. A viagem é porta de entrada; o core é comprar/guardar moeda, cartão global e investir fora.

---

## 2. O Problema (dados reais)

- Brasileiros gastaram **US$ 21,7 bi** em viagens internacionais em 2025 (recorde da década)
- **25%** dos viajantes internacionais têm entre 18 e 29 anos
- Brasileiros perderam **US$ 708 mi** em tarifas ocultas de câmbio em 2024 (estudo EDC)
- Spreads bancários chegam a **7%**, mais IOF de **3,5%**
- Quem gasta R$ 10 mil no exterior pode perder **+R$ 1.200** sem ver o custo real

---

## 3. Pesquisa de Validação (148 respostas)

### Dados demográficos

| Faixa etária | % |
|---|---|
| 22-25 anos | 30% |
| 30-39 anos | 28% |
| 26-30 anos | 22% |
| 18-21 anos | 10% |
| 40+ anos | 9% |

| Ocupação | % |
|---|---|
| Freelancer | 30% |
| CLT | 30% |
| Empreendedor | 17% |
| Estudante | 12% |
| Remoto / Internacional | 4% |

### Dados-chave da pesquisa

- **61%** já compraram moeda estrangeira (90 de 148)
- **86%** não entendem spread e IOF (59% "mais ou menos" + 27% "nunca ouvi falar")
- **41%** usam Wise como canal principal
- **70%** usariam o app **sem viagem marcada**
- **44%** deixaram email para futuras melhorias

### Maior preocupação ao comprar moeda

| Preocupação | % |
|---|---|
| Medo de perder dinheiro | 36% |
| Taxa escondida | 32% |
| Não entender cotação | 23% |
| Burocracia | 4% |
| Não confiar no app | 3% |

### Feature de maior interesse

| Feature | % |
|---|---|
| Comprar / Guardar moeda | 32% |
| Cartão global | 22% |
| Investir fora | 17% |
| Pontos / Milhas | 13% |
| Planejar viagem | 13% |

### O que faria trocar de app (respostas abertas agrupadas)

| Grupo | Menções | % |
|---|---|---|
| Taxas menores | 35 | 39% |
| Transparência / Clareza | 22 | 24% |
| Usabilidade / Facilidade | 22 | 24% |
| Benefícios / Vantagens | 12 | 13% |

### O que faria desistir de criar conta

| Barreira | Menções | % |
|---|---|---|
| Burocracia / Muitos passos | 33 | 37% |
| Taxas / Custos altos | 18 | 20% |
| UX ruim / Complexidade | 18 | 20% |
| Falta de confiança | 11 | 12% |
| Falta de transparência | 11 | 12% |

---

## 4. Personas

### Persona 1 — Marina Oliveira

- **Idade:** 24 anos
- **Ocupação:** Freelancer, UX Designer
- **Localização:** São Paulo, SP
- **Canal atual:** Wise
- **Conhecimento financeiro:** Baixo (25%)
- **Disposição pra trocar:** Alta (85%)
- **Sensibilidade a taxas:** Muito alta (90%)

**Bio:** Designer freelancer que atende clientes no Brasil e exterior. Recebe parte dos pagamentos em dólar pela Wise, mas não entende quanto perde na conversão. Quer guardar dinheiro em moeda forte e sonha em morar fora, mas adia porque "parece complicado".

**Frustrações:**
- Taxa final diferente do mostrado no início
- Linguagem financeira que exclui
- Formulários longos e burocracia
- Não conseguir comparar custos entre apps

**Objetivos:**
- Entender exatamente quanto paga em cada conversão
- Guardar patrimônio em dólar de forma simples
- Ter um cartão global sem surpresas
- Sentir controle sobre o dinheiro que ganha fora

**Frase-chave:** *"Eu comprei dólar uma vez e no final paguei uma taxa muito maior do que estavam me mostrando. Fiquei tão chateada que nunca mais quis investir no exterior."*

### Persona 2 — Rafael Mendes

- **Idade:** 33 anos
- **Ocupação:** CLT, Tech Lead
- **Localização:** Belo Horizonte, MG
- **Canal atual:** Nomad + Casa de câmbio
- **Conhecimento financeiro:** Médio (50%)
- **Disposição pra trocar:** Média (65%)
- **Sensibilidade a taxas:** Alta (75%)

**Bio:** Tech lead CLT em startup, viaja 2-3x/ano a trabalho e lazer. Já usou casa de câmbio, Nomad e banco digital. Entende "mais ou menos" o que é spread, mas sua maior dor é taxa escondida. Quer investir em dólar mas acha corretoras intimidadoras.

**Frustrações:**
- Taxas que só aparecem depois da confirmação
- Não ter como comparar custos entre opções
- Processos longos e burocráticos
- Apps com UX confusa — abandona se for complicado

**Objetivos:**
- Uma única plataforma confiável pra tudo internacional
- Ver o custo total em reais antes de qualquer operação
- Investir fora sem precisar ser especialista
- Recomendar com confiança pra colegas e família

**Frase-chave:** *"Eu quero um app que não esconda taxas e que me dê a previsão de gastos. Se a interface for ruim, eu desisto na hora."*

---

## 5. Jobs to Be Done

### Job Principal

> Quando eu preciso usar dinheiro no exterior — seja viajando, recebendo pagamento ou investindo — eu quero entender exatamente quanto estou pagando e ter controle total do meu dinheiro, para não perder valor sem perceber e sentir que estou tomando decisões financeiras inteligentes.

### Job Funcional

Comprar, guardar e usar moeda estrangeira com o menor custo possível, em poucos passos, sem precisar entender jargão financeiro, e com a certeza de que o valor mostrado é o valor final.

### Job Emocional

Sentir confiança e controle sobre meu dinheiro internacional — não me sentir enganado, não ter medo de perder valor, e saber que estou fazendo a escolha certa mesmo sem ser especialista em finanças.

### Job Stories

1. **Viajante:** Quando estou planejando uma viagem internacional → quero ver em reais quanto vou gastar de verdade, incluindo todas as taxas → para não ter surpresas e poder planejar meu orçamento com segurança.

2. **Freelancer:** Quando recebo um pagamento em dólar do exterior → quero converter pro real com o menor spread possível e em poucos cliques → para não perder uma fatia do meu trabalho em taxas que não entendo.

3. **Investidor iniciante:** Quando vejo o dólar caindo e penso em comprar → quero entender se é um bom momento e comprar na hora, sem burocracia → para começar a guardar patrimônio em moeda forte sem precisar ser trader.

---

## 6. Insights da Pesquisa (guias de design)

### Insight 1 — O diferencial é ser compreensível, não barato

86% não entendem spread/IOF. Mostrar o custo real em reais antes de confirmar é o diferencial. **Implicação:** Toda tela de transação deve mostrar: valor bruto, spread em R$, IOF em R$, e valor final. Sem letras miúdas.

### Insight 2 — Wise domina, mas não satisfaz

41% usam Wise, mas reclamam de falta de clareza. **Implicação:** Não reinventar a roda — fazer melhor o que a Wise faz mal: explicar o custo com linguagem humana.

### Insight 3 — Burocracia é o killer de conversão

37% desistiriam por burocracia. **Implicação:** Onboarding radicalmente simples. Menos campos, menos etapas, conta ativa em minutos.

### Insight 4 — O produto não é um app de viagem

70% usariam sem viagem marcada. **Implicação:** Posicionar como plataforma financeira global. A home deve mostrar saldo, cotações e atalhos — não "sua próxima viagem".

### Insight 5 — Duas dores por faixa etária

22-25: "não entendo a cotação" (58%). 30-39: "taxa escondida" e "medo de perder dinheiro". **Implicação:** Camada educativa para jovens, prova de economia real para experientes.

### Insight 6 — Freelancers querem investir, CLTs querem gastar

**Implicação:** Features de investimento internacional são o gancho para freelancers/remotos — segmento com maior LTV.

---

## 7. Suposições Validadas (Matriz CSD)

| ID | Suposição | Status | Evidência |
|---|---|---|---|
| S1 | Jovens priorizam transparência acima de marca | ✅ Validada | 86% não entendem spread; 24% citam transparência como motivo de troca |
| S2 | Mostrar spread muda comportamento de compra | ◐ Parcial | Forte intenção declarada, precisa de teste A/B |
| S4 | Trocariam por 3-5% de economia | ✅ Validada | 39% citaram taxas menores como motivo #1 de troca |
| S5 | Confiam mais em fintechs que bancos | ◐ Parcial | 72% usam fintechs, mas 12% citam falta de confiança |
| S6 | Complexidade é barreira para investir fora | ✅ Validada | 37% desistiriam por burocracia; UX ruim é 2º motivo |

---

## 8. Arquitetura da Informação (46 telas · 9 seções)

### Camada 1 — Entrada

#### 1. Onboarding (5 telas)
1. Splash Screen
2. Seu dinheiro, sem fronteiras
3. Taxas transparentes, sempre
4. Controle total do seu câmbio
5. CTA — Criar conta grátis

> **Diretriz de design:** Máximo 4 telas de valor antes do CTA. Visual aspiracional, jovem, sem jargão financeiro. Mostrar a dor (taxa escondida) e a solução (transparência) de forma visual, não textual.

#### 2. Login / Cadastro (8 telas)
1. Login (email + senha)
2. Cadastro — Nome e email
3. Cadastro — CPF + Telefone
4. Cadastro — Criar senha
5. Verificação SMS / Email
6. Esqueci minha senha
7. Redefinir senha
8. Conta criada com sucesso

> **Diretriz de design:** Cadastro em passos curtos (1 campo por tela se possível). Barra de progresso visível. Zero jargão. A tela de sucesso deve gerar dopamina — confete, animação, reforço positivo. Lembrar: 37% abandonam por burocracia.

#### 3. Verificação 2FA (5 telas)
1. Ativar verificação em 2 etapas
2. Escolher método (SMS / App)
3. Inserir código de verificação
4. Backup codes
5. 2FA ativado com sucesso

> **Diretriz de design:** Oferecer, não forçar. Explicar o "por quê" em linguagem simples ("protege seu dinheiro se alguém roubar seu celular"). Não bloquear o fluxo — pode ser ativado depois.

### Camada 2 — Core do App

#### 4. Home (5 telas)
1. Dashboard — Saldo total (R$ e moedas)
2. Cotações em tempo real
3. Últimas transações
4. Atalhos rápidos (comprar, depositar, cartão)
5. Alertas de câmbio favorável

> **Diretriz de design:** Saldo total visível no topo. Cotações com variação % e mini-gráfico. Atalhos acessíveis com 1 tap. NÃO posicionar como app de viagem — é uma plataforma financeira. Notificações de câmbio favorável como engajamento passivo.

#### 5. Comprar Moeda (6 telas)
1. Selecionar moeda (USD, EUR, GBP…)
2. Inserir valor em R$
3. Simulação — Spread + IOF visíveis
4. Comparativo com outros apps
5. Confirmar compra
6. Comprovante de sucesso

> **Diretriz de design:** Esta é a tela mais importante do app. A tela 3 (simulação) DEVE mostrar:
> - Cotação comercial (referência)
> - Spread do Zarp em R$ e %
> - IOF em R$
> - Valor final que o usuário recebe
> - Economia comparada com banco tradicional
>
> A tela 4 (comparativo) mostra quanto o usuário pagaria na Wise, no banco, na casa de câmbio. Isso valida o Insight #1 — ser compreensível é o diferencial.

#### 6. Depósito / Saque (6 telas)
1. Depositar via PIX
2. Depositar via TED
3. Confirmar depósito
4. Sacar para conta bancária
5. Confirmar saque
6. Comprovante de sucesso

> **Diretriz de design:** PIX como método principal (1 tap → QR code ou copia/cola). TED como fallback. Confirmação clara com valor, taxa (se houver) e prazo. Comprovante compartilhável.

### Camada 3 — Conta e Benefícios

#### 7. Perfil (6 telas)
1. Dados pessoais
2. Editar informações
3. Documentos / KYC
4. Configurações gerais
5. Preferências de notificação
6. Suporte / Central de ajuda

> **Diretriz de design:** KYC progressivo — pedir documentos só quando necessário (primeiro saque, primeiro investimento), não no cadastro. Suporte acessível — chat, não FAQ escondida.

#### 8. Cartão Global (6 telas)
1. Solicitar cartão
2. Cartão virtual (geração imediata)
3. Ativar cartão físico
4. Gerenciar limites
5. Bloquear / Desbloquear
6. Extrato do cartão

> **Diretriz de design:** Cartão virtual disponível imediatamente após cadastro (reduz fricção — caso da Marina que nunca ativou o cartão da Nomad). Visual do cartão com design premium e identidade Zarp. Extrato com conversão visível (quanto pagou em R$ vs moeda local).

#### 9. Indicar Amigo (5 telas)
1. Link de indicação único
2. Compartilhar via redes sociais
3. Status das indicações
4. Recompensas acumuladas
5. Resgatar recompensa

> **Diretriz de design:** Gamificação leve — mostrar quanto o amigo economizou por sua indicação. Compartilhamento nativo (WhatsApp, Instagram Stories). Recompensa clara e tangível (crédito em R$, não pontos abstratos).

---

## 9. Design System — Diretrizes Visuais

### Tom e Voz
- **Linguagem:** Direta, sem jargão. "Você vai pagar R$ 12,40 de taxa" em vez de "Spread de 1,2% aplicado sobre a cotação PTAX"
- **Tom:** Confiante mas acessível. Nem banco tradicional (frio/burocrático), nem fintech hype (forçado/infantil)
- **Persona do app:** Um amigo que entende de dinheiro e te explica sem fazer você se sentir burro

### Paleta sugerida (referência Zarp)
- Dark mode como padrão (alinhado com público jovem e contexto premium)
- Cores de destaque: laranja, verde-oliva, sage — referência ao conceito "dinheiro que viaja o mundo"
- Símbolo de moeda/coin-flip como elemento de marca

### Princípios de UI
1. **Transparência radical** — toda transação mostra o custo real antes de confirmar
2. **Progressividade** — pedir informações só quando necessário, não tudo no cadastro
3. **Educação embutida** — tooltips e micro-copy que ensinam sem interromper
4. **Prova social** — "X pessoas compraram dólar hoje" / "Você economizou R$ X com o Zarp"

---

## 10. Arquivo Figma

- **URL:** https://www.figma.com/design/d2OP7yGTYCUGdVkGYTIErr/Workshop---Zarp
- **Página de destino:** `📱 App`
- **Arquitetura criada em:** `➡️ Arquitetura da Informação`
- **Node de referência:** `1-3`

---

## 11. Checklist de Execução

- [ ] Ler este documento inteiro antes de começar
- [ ] Gerar as telas na página `📱 App` do Figma
- [ ] Seguir a arquitetura de 46 telas / 9 seções
- [ ] Aplicar as diretrizes de design de cada seção
- [ ] Manter dark mode como padrão
- [ ] Usar linguagem sem jargão em todo copy de tela
- [ ] Toda tela de transação deve mostrar custo real decomposto
- [ ] Onboarding máximo 4 telas de valor + CTA
- [ ] Cadastro em passos curtos com barra de progresso
- [ ] Cartão virtual disponível imediatamente
- [ ] Testar contra as personas Marina e Rafael
