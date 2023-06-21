import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenAdivinhacaoModal = () =>
  modals.open({
    title: "ADIVINHAÇÃO",
    children: (
      <>
        <Stack>
          <Text>
            A adivinhação é a arte de conhecer o divino e um dos ramos mais
            imprecisos da magia. Um mago divinatório tem conhecimento sobre as
            razões que movem os deuses e os mistérios que cercam os eventos que
            acontecem no que os mundanos chamam de "vida"
          </Text>
          <Text>
            A arte divinatória permite ao praticante penetrar no futuro,
            conhecer o passado, viajar a lugares distantes, saber o porquê das
            coisas acontecerem e até mesmo penetrar na natureza do próprio
            universo, se ao menos interpretar corretamente as visões que tem.
          </Text>
          <Text>
            Os efeitos divinatórios podem ser muito difusos ou um pouco mais
            determinados, dependendo da margem de sucesso do conjurador.
          </Text>
          <Text>
            Muitas cenas são simbólicas, o que significa que a informação não
            chega diretamente ao conjurador, mas passa por um “filtro”
            inconsciente. O mago pode ver, por exemplo, um equilíbrio
            significando que há justiça envolvida, ou um leão significando
            coragem, etc. Sua interpretação é deixada para o jogador (não o
            personagem) desvendar
          </Text>
          <Text>
            Você não pode fazer uma adivinhação para entender melhor outra
            adivinhação. Tentativas repetidas de adivinhação sempre resultarão
            nas mesmas imagens, mesmo que as outras jogadas sejam melhores que a
            primeira. Isso porque a primeira imagem sobre algo é a que fica. Um
            mago só pode tentar uma segunda adivinhação sobre um mesmo tópico
            quando as circunstâncias envolvendo aquele tópico mudaram, quando o
            personagem vê a situação sob uma luz diferente da que via antes.
          </Text>
        </Stack>
        <Title order={3}>Lista de Efeitos</Title>
        <ScrollArea mt="md">
          <Table
            style={{ overflowX: "auto" }}
            captionSide="bottom"
            highlightOnHover
          >
            <thead style={{ backgroundColor: "black" }}>
              <tr>
                <th>Magia</th>
                <th>Mod</th>
                <th>Conj</th>
                <th>Duração</th>
                <th>Modificadores</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: 84 }}>Clarividência</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>5 minutos</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 256 }}>Familiaridade</td>
                <td>
                  Este é o efeito que permite ao mago saber o que está
                  acontecendo à distância. Permite a obtenção de informações
                  sobre eventos que vão além daquilo que os sentidos costumam
                  perceber. O mago define o que quer ver (uma pessoa, lugar,
                  objeto, etc) e faz sua rolagem. Este efeito também pode ser
                  usado para ver através de objetos sólidos, embora a imagem
                  obtida seja sempre com o olho da mente.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Retrocognição</td>
                <td style={{ width: 16 }}>-5</td>
                <td style={{ width: 42 }}>30 minutos</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 256 }}>Familiaridade</td>
                <td>
                  Este efeito é como a clarividência, mas para coisas que
                  aconteceram no passado. Alguns eventos deixam uma marca mais
                  profunda do que outros, e estes são mais fáceis de sentir. A
                  penalidade pelo tempo no passado que um mago deseja ver é dada
                  por essa impressão, e não pelo tempo em si. Portanto, uma nota
                  de um dólar contém muitas impressões, tantas que mesmo uma
                  simples retrocognição é realmente um esforço muito difícil. No
                  entanto, o cajado do papa é usado apenas em circunstâncias
                  especiais e carrega consigo as impressões de proprietários
                  muito pequenos. Um retrocesso com ele, mesmo por décadas no
                  passado, seria bastante simples. Além disso, um item
                  arqueológico carrega consigo impressões de um passado distante
                  e quase nenhuma informação sobre a época em que permaneceu
                  enterrado no subsolo.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Precognição</td>
                <td style={{ width: 16 }}>-7</td>
                <td style={{ width: 42 }}>5 minutos</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 256 }}>Familiaridade</td>
                <td>
                  Este efeito é como a clarividência, mas para coisas que ainda
                  não são. Basicamente, qualquer coisa que ainda não aconteceu
                  ainda pode mudar. No entanto, algumas coisas são MUITO
                  improváveis, enquanto outras são muito prováveis. Se uma
                  pessoa tem câncer terminal e não sabe disso, há uma grande
                  chance de morrer em breve. Da mesma forma, existem muitos
                  eventos que dependem de fatores que não conhecemos, mas
                  fatores que estão em movimento agora mesmo, para determinar
                  algo do qual não temos ideia. Uma precognição obtém os eventos
                  mais prováveis de ocorrer, e é por isso que raramente falha,
                  mas às vezes falha. O GM pode até “forçar” um pouco as coisas
                  para que essa previsão aconteça.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Telepatia</td>
                <td style={{ width: 16 }}>-8</td>
                <td style={{ width: 42 }}>1 minuto</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 256 }}>Familiaridade</td>
                <td>
                  Esta é a capacidade de reunir os pensamentos e sentimentos de
                  outras pessoas em sua própria mente. Com esta habilidade, o
                  mago sabe diferenciar seus próprios pensamentos dos dos
                  outros. Todos os pensamentos que o mago sente vêm a ele como
                  seus próprios, e isso é muito mais um treinamento para
                  identificar o que é dele e o que não é (e se apegar a eles) do
                  que qualquer outra coisa.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Intuição</td>
                <td style={{ width: 16 }}>-12</td>
                <td style={{ width: 42 }}>Instantâneo</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>Familiaridade</td>
                <td>
                  Este efeito dá ao mago uma intuição, uma dica, uma ajuda nas
                  horas difíceis e até nas fáceis. Com ela, ele pode saber o que
                  fazer, saber o que NÃO fazer, assim: salve o dia. Todas as
                  intuições são instantâneas e, embora possam ser bastante
                  específicas, vêm como imagens/noções sobre algo fixo e
                  atemporal, por exemplo: “Não entre neste plano”, “Aposte no
                  cavalo branco”, “Ele está mentindo”, etc. Uma intuição pode
                  ser declarada pelo jogador ou deixada completamente para a
                  morte do mestre. Não existe isso de: “Mas” minha intuição não
                  me avisou??? quando as coisas dão errado para o jogador se ele
                  não usou essa habilidade a tempo e o mestre optou por não
                  usá-la passivamente. No entanto, o GM pode, a qualquer
                  momento, usar este efeito passivamente para o jogador. Eu, por
                  exemplo, me vi usando muito para salvar meus jogadores de vez
                  em quando. Embora a intuição possa servir para praticamente
                  qualquer coisa, ela não pode responder a NENHUMA pergunta.
                  Você não pode, por exemplo, fazer uma intuição para descobrir
                  o sentido da vida, ou para qualquer resposta elaborada e
                  duradoura que não possa ser transmitida como um sentimento
                  imediato. Essas coisas se enquadram no efeito Oráculo,
                  descrito abaixo. Ao contrário de um �Oráculo�, uma Intuição
                  depende basicamente de dois fatores: Envolvimento emocional e
                  um objetivo determinado. O mago não pode fazer uma intuição
                  para algo com o qual não esteja emocionalmente conectado. Além
                  disso, se o mago não tiver um objetivo pessoal, ele nunca terá
                  uma intuição. Uma intuição sempre virá nos meios para ajudá-lo
                  a promover seus próprios objetivos. Se seu objetivo for grande
                  e complexo, ele pode ter muitas intuições de vez em quando. Se
                  for algo simples e direto, eles podem ser mais difíceis de
                  encontrar. Além disso, o mago deve se colocar em posição de
                  receber intuições para que elas venham. Se o mago for alguém
                  que se preocupa demais com os outros, por exemplo, raramente
                  terá uma intuição sobre si mesmo.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Oráculo</td>
                <td style={{ width: 16 }}>-15/-20</td>
                <td style={{ width: 42 }}>9 horas (1 dia)</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 256 }}>--</td>
                <td>
                  Este efeito permite ao mago saber a resposta para qualquer
                  pergunta. O mago tem uma penalidade adicional de 5 pontos se a
                  pergunta for sobre algo com o qual ele esteja pessoalmente
                  envolvido. O mestre é livre para (e deve) dar respostas
                  enigmáticas e incompletas a perguntas que potencialmente
                  possam resolver a campanha, justificando-as com coisas como As
                  energias estão baixas agora, ou Esta pessoa tem um Karma muito
                  alto e está escondida de espíritos superiores, ou qualquer
                  outra tagarelice psicológica. No entanto, ALGUMA resposta
                  sempre chega ao mago, é sua utilidade que o GM possa manipular
                  à sua vontade, para evitar danos à sua campanha bem traçada.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </>
    ),
  });
