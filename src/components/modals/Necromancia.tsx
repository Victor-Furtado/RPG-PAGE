import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenNecromanciaModal = () =>
  modals.open({
    title: "NECROMANCIA",
    children: (
      <>
        <Stack>
          <Text>
            Necromancia é o estudo da morte e dos mortos. Com ele, um mago pode
            não apenas se comunicar com os mortos, mas também conjurar, amarrar
            e banir espíritos em geral. Em alguns casos, ele também pode trazer
            alguém de volta.
          </Text>
          <Text>
            Quando alguém morre, no que diz respeito a essas regras, seu corpo
            passa e sua alma entra em outro plano. Ele, então, permanece neste
            plano por um período que varia de 3 a 5 dias até que suma.
          </Text>
          <Text>
            A convocação espiritual que a magia realiza, a ligação de um
            espírito e outros efeitos que tratam dos espíritos em geral (exceto
            a ressurreição) não afetam o espírito da pessoa falecida, sua alma
            imortal, que está além da magia, mas sim, afetam o eco que deixou
            marcado na memória do plano astral, uma imagem do que a pessoa era,
            em toda semelhança consigo mesma, mas sem substância real, uma
            concha de inteligência que o plano astral guarda de todos os que o
            atravessam.
          </Text>
          <Text>
            A luz do plano astral, chamada luz astral, funciona como uma espécie
            de memória universal, onde cada pensamento e ação são registrados.
            Essa mesma luz também registra os padrões dos seres que já viveram,
            como um software inteligente que fica depois que alguém morre, o eco
            de sua própria inteligência. Portanto, convocar o espírito de uma
            pessoa falecida é invocar esse eco e dar-lhe vida e força através da
            própria vida e força do mago. Não é a pessoa que vem antes do mago,
            mas a memória dessa pessoa deixada no mundo onde viveu.
          </Text>
          <Text>
            Por esta razão, quando o espírito de um morto é conjurado, ele pode
            responder a muitas perguntas sobre sua própria vida, mas nada sobre
            o que está além. Também por esta razão, os espíritos conjurados
            carecem de livre arbítrio. Eles vão se comportar como estavam
            acostumados, como um comportamento condicionado, mas não podem mudar
            seus modos, evoluir ou aprender nada. São como autômatos construídos
            pela luz astral e pela força de vontade do mago.
          </Text>
          <Text>
            Assim, o espírito de um falecido não pode resistir a uma tentativa
            de conjurá-lo, porque não tem vontade própria de resistir a nada.
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
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: 84 }}>Espíritos dos Sentidos</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que um mago sinta a presença de espíritos
                  ao seu redor. Estes podem ser outros magos fora de seus
                  corpos, espíritos de pessoas mortas passando pela transição
                  astral, ou espíritos de pessoas mortas que deixaram uma
                  impressão tão forte em certos lugares que criaram
                  "assombrações" que ainda vagam por esses lugares. Com esse
                  efeito, o mago “sente” a presença de outros espíritos e pode
                  até obter mais informações sobre eles, dependendo da margem de
                  sucessos.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Sentido astral</td>
                <td style={{ width: 16 }}>-2</td>
                <td style={{ width: 42 }}>1 minuto</td>
                <td style={{ width: 64 }}>Concentração</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que um mago veja, ouça, cheire ou coloque
                  um de seus cinco sentidos no plano astral (o mundo
                  espiritual). Ele deve escolher qual sentido será deslocado e
                  outros podem ser adicionados com uma penalidade de -2 por
                  sentido adicional. Os mais comuns são visão, audição e olfato.
                  Pela duração do efeito, o mago perde seu sentido original. Ele
                  efetivamente não verá com seus olhos físicos, se colocar sua
                  visão no astral.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Invocação do Espírito</td>
                <td style={{ width: 16 }}>-4</td>
                <td style={{ width: 42 }}>3 dias</td>
                <td style={{ width: 64 }}>O quanto for preciso</td>
                <td style={{ width: 256 }}>
                  Com este efeito, o mago pode convocar um espírito morto à sua
                  presença. Aparece apenas antes do mago, a priori, mas o
                  lançador pode adicionar pessoas ao ritual de convocação se
                  elas gastarem todo o tempo para conjurar junto com ele na
                  preparação. Se for esse o caso, essas outras pessoas também
                  poderão se comunicar com o espírito. Todas as outras pessoas
                  assistindo a este ritual incorrerão em uma penalidade de 2
                  para a rolagem do conjurador. Se a preparação for
                  interrompida, ela deve começar de novo. A conjuração dura até
                  que os magos (e auxiliares) tenham perguntado tudo o que
                  queriam saber ou até que um deles seja perturbado por
                  influências externas. O espírito se comunica através de
                  impressões, pensamentos e ideias, que podem ser percebidas
                  como suas respostas em um teste bem-sucedido de QI � 4 ou
                  Necromancia, mas NÃO através de sons físicos (de que outra
                  maneira uma sombra falaria?). Se o mago usa audição astral,
                  ele pode ouvir o espírito com seus ouvidos. O espírito entende
                  as ordens do mago não porque ele as ouve, mas porque, sendo
                  astral, ele pode sentir e responder a uma força de vontade
                  dominante, e reage de acordo. Este mesmo efeito é usado para
                  invocar ao mago um espírito elemental ou um “demônio”. Estes
                  não são espíritos de seres vivos, mas são como o eco astral de
                  grandes emoções concentradas pela humanidade ao longo dos
                  tempos. Comportam-se como o espírito de um morto, mas costumam
                  ser caprichosos e bastante irracionais, seguindo uma lógica
                  quase animal. Muitos magos consideram o tratamento com
                  elementais um grande perigo, mas podem conferir benefícios
                  muito além do alcance de outras magias convencionais.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Desenvolvimento Espiritual</td>
                <td style={{ width: 16 }}>-8</td>
                <td style={{ width: 42 }}>30 minutos</td>
                <td style={{ width: 64 }}>O quanto for preciso</td>
                <td style={{ width: 256 }}>
                  Este efeito permite ao mago desdobrar seu corpo espiritual
                  deste corpo físico e entrar no mundo dos mortos: o plano
                  astral. O plano astral tem muitas particularidades descritas
                  em muitos livros. Basicamente, é um reino regido pelo
                  pensamento, onde, com um simples esforço de força de vontade,
                  você pode ir aonde quiser, falar com qualquer um, atravessar
                  paredes, etc. Da mesma forma, é muito fácil criar uma
                  realidade própria no plano astral e "pensar" que o que você vê
                  é um fiel reflexo do mundo físico, quando na verdade tudo é
                  construído por sua imaginação. Além disso, nem sempre pensei
                  em regras. Embora você saiba que poderia, por exemplo, voar no
                  plano astral, você pode pular de um penhasco apenas para cair
                  no fundo, simplesmente porque a crença de que você não pode
                  voar está profundamente enraizada em sua consciência. Via de
                  regra, as viagens astrais são muito pouco confiáveis no que
                  diz respeito à sua conexão com o mundo físico. Você pode
                  pensar que está falando com o espírito de uma pessoa falecida,
                  quando na verdade acabou de "criar" esse ser com sua própria
                  vontade de encontrá-lo. Entretanto, existe uma certa relação
                  entre as imagens vistas no astral e no mundo físico. No geral,
                  é um lugar bastante confuso para se estar. No entanto, é aí
                  que residem os espíritos elementais e outros seres e, uma vez
                  lá, você pode conversar com eles de maneira muito mais livre e
                  direta. Uma vez no plano astral, a sensibilidade do corpo é
                  reduzida a quase zero. Uma viagem astral pode durar muito
                  pouco, ou minutos, ou mesmo horas e dias, dependendo de quem
                  está viajando. O corpo físico pode puxar o viajante de volta
                  em casos de necessidade física, ou uma viagem pode terminar
                  abruptamente se o viajante for repentinamente tomado por
                  pensamentos materialistas (como luxúria, lascívia, etc).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Ressurreição</td>
                <td style={{ width: 16 }}>-15</td>
                <td style={{ width: 42 }}>1 minuto</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>
                  Este é considerado o maior efeito do conhecimento
                  necromântico. Ele permite que o mago traga alguém de volta à
                  vida depois que ele morreu, sob certas condições. Quando
                  alguém morre, dependendo da causa, ainda pode ser que seu
                  corpo seja capaz de sustentar a vida, mesmo que por pouco
                  tempo. Se uma pessoa, ao morrer, ainda tiver seu corpo
                  inteiro, esse efeito pode ser tentado. Através deste efeito um
                  mago entra em contato com o espírito de um falecido que ainda
                  está passando por uma transição astral (3 a 5 dias após a
                  morte, no máximo), e, sob um esforço extremo de força de
                  vontade, ele captura a vontade do morto. pessoa e cria com ela
                  uma afinidade tão fortemente ligada à vida que o alvo irá, de
                  fato, desejar viver de novo com tanta força que voltará. No
                  entanto, ao retornar, a pessoa será submetida às condições em
                  que seu corpo foi deixado. Se, por exemplo, ele morreu de
                  câncer, ele voltará e ainda terá o câncer. Se morreu com um
                  tiro na cabeça, pode voltar por apenas um ou dois segundos. A
                  cura das condições que causaram a morte não é coberta por este
                  efeito. Há, também, uma complicação adicional. A morte, sendo
                  a maior mudança possível na vida de alguém, e sendo inevitável
                  para todos, representa sempre uma evolução. Ao morrer, a
                  pessoa entra em um estado de consciência muito maior do que
                  quando vivia. O esforço que tal pessoa tem que fazer para
                  voltar à vida que já deixou é tremendo, porque, via de regra,
                  ao morrer, a pessoa compreende o motivo de sua morte, os
                  desígnios por trás das aparentes fatalidades, e por que ela
                  deve seguir em frente e não voltar. Portanto, um alvo SEMPRE
                  resiste a uma tentativa de ressurreição com um bônus de +3 em
                  seu teste de força de vontade. Se o mago for bem-sucedido em
                  sua tentativa, a pessoa voltará e habitará seu corpo novamente
                  (na maioria das vezes com plena lembrança do que aconteceu
                  além). Por quanto tempo, porém, dependerá do estado do corpo e
                  da vontade dessa pessoa de permanecer viva após essa
                  experiência de morte.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </>
    ),
  });
