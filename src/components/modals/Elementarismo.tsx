import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenElementarismoModal = () =>
  modals.open({
    title: "ELEMENTARISMO",
    children: (
      <>
        <Stack>
          <Text>
            Esta é a ciência que permite ao mago controlar as forças elementais
            e elementares da natureza, da chuva de verão às erupções vulcânicas,
            da chama de uma vela à força de um tufão.
          </Text>
          <Text>
            Esta habilidade assume o controle dos 4 elementos, e normalmente não
            é ensinada a menos que o mago seja primeiro submetido a testes muito
            fortes, para assegurar aos mestres a integridade moral do aluno.
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
                <th style={{ width: 84 }}>Magia</th>
                <th style={{ width: 16 }}>Mod</th>
                <th style={{ width: 42 }}>Conj</th>
                <th style={{ width: 64 }}>Duração</th>
                <th style={{ width: 256 }}>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ignição</td>
                <td>0</td>
                <td>5 segundos</td>
                <td>Instantânea</td>
                <td>
                  Este efeito permite ao mago atear fogo em objetos ou
                  superfícies inflamáveis. Em objetos não inflamáveis, produz
                  uma faísca, e isso é tudo. Quanto maior a margem de sucessos,
                  maior a centelha.
                </td>
              </tr>
              <tr>
                <td>Rajada de vento</td>
                <td>0</td>
                <td>5 segundos</td>
                <td>Concentração</td>
                <td>
                  Este efeito permite ao lançador invocar uma rajada de vento.
                  Ele pode controlar a direção e o local do vento, e ele durará
                  enquanto o mago se concentrar nele. Este vento é forte o
                  suficiente para explodir pequenos objetos e jogar as pessoas
                  no chão. Todos pegos por ela têm que rolar contra seu DX para
                  evitar cair no chão. Se permanecerem na área do vento, devem
                  rolar novamente a cada 10 segundos.
                </td>
              </tr>
              <tr>
                <td>Controle de temperatura</td>
                <td>-2</td>
                <td>5 segundos</td>
                <td>Até o próximo pôr do sol ou nascer do sol</td>
                <td>
                  Este efeito permite ao mago alterar a temperatura ao redor de
                  uma pessoa, objeto ou área. Ele pode alterar esta temperatura
                  para qualquer valor de 20 a 100 graus Celsius. Uma pessoa
                  afetada terá a temperatura ao seu redor afetada, mas não sua
                  própria temperatura interna. Os objetos podem ter sua
                  temperatura alterada indefinidamente, embora o mago possa
                  alterar a temperatura a uma taxa máxima de 1 grau Celsius por
                  segundo.
                </td>
              </tr>
              <tr>
                <td>Golpe distante</td>
                <td>-3</td>
                <td>5 segundos</td>
                <td>Instantânea - Fixa</td>
                <td>
                  Parece mágica. Com este efeito, o mago pode projetar sua
                  própria energia à distância e atacar coisas distantes. Ele
                  deve se mover e executar o golpe como se estivesse fazendo em
                  alguém próximo a ele. Ele rola sua habilidade com todos os
                  modificadores para ataques à distância. O lançador deve ver o
                  alvo através de uma linha reta para que este efeito funcione.
                  O golpe projetado tem a força de um soco normal. Este efeito
                  pode ser usado para afastar objetos, mas sem causar nenhum
                  dano a eles. Pode ser usado para jogar alguém para longe (o
                  alvo resiste com uma disputa contra seu DX �3)
                </td>
              </tr>
              <tr>
                <td>Não alimentação</td>
                <td>-5</td>
                <td>5 minutos</td>
                <td>Até o próximo pôr do sol ou nascer do sol.</td>
                <td>
                  Este efeito permite ao mago suprimir toda a sua necessidade de
                  comer por um determinado período de tempo. Durante a duração
                  da magia, ele não sentirá fome ou sede e produzirá
                  "magicamente" todo o alimento de que precisa do nada. Se ele
                  se alimentar enquanto a magia estiver em vigor, a comida
                  passará por seu corpo sem ser processada.
                </td>
              </tr>
              <tr>
                <td>Controle do clima</td>
                <td>-8</td>
                <td>30 minutos</td>
                <td>Instantânea</td>
                <td>
                  Este efeito permite ao mago controlar as forças do clima. Ele
                  pode, basicamente, determinar o clima de uma determinada
                  região. Se a região estiver longe de onde ele está, aplique os
                  modificadores de Familiaridade. Se a alteração for algo
                  radical (neve no deserto), o mago tem uma penalidade adicional
                  de -2. Caso contrário, ele pode determinar qualquer clima
                  natural, desde que não seja desastroso (sem furacão,
                  terremoto, etc), e mesmo que não seja natural do local em que
                  ele está (como neve nos trópicos). . Durante os 30 minutos do
                  tempo de lançamento, o clima mudará lentamente para o tipo
                  determinado.
                </td>
              </tr>
              <tr>
                <td>Explosão</td>
                <td>-10</td>
                <td>1 minuto</td>
                <td>Instantânea - Fixa</td>
                <td>
                  O mago se concentra e causa uma rajada de fogo. Com isso, ele
                  pode explodir quase qualquer objeto. Se o alvo for um
                  dispositivo eletrônico, ele pode causar um curto-circuito com
                  esse efeito. Este efeito causa uma explosão 4D, centrada em um
                  ponto que o mago pode ver (aplicam-se modificadores de
                  distância). Se ele não pode ver, ele não pode fazer.
                </td>
              </tr>
              <tr>
                <td>Sem respiração</td>
                <td>-15</td>
                <td>5 minutos</td>
                <td>Concentração.</td>
                <td>
                  O controle final sobre o ar. Com este efeito, o mago pode
                  viver sem respirar. Pela duração do efeito, o mago pode não
                  apenas abster-se de respirar, mas também se tornar imune aos
                  efeitos da pressão extrema (positiva ou negativa). O mago
                  produzirá "magicamente" ar em seus pulmões a partir do nada.
                </td>
              </tr>
              <tr>
                <td>Raio</td>
                <td>-15</td>
                <td>1 minuto</td>
                <td>Instantânea - Fixa</td>
                <td>
                  Este efeito permite ao mago fazer com que um raio caia do céu
                  em um local de sua escolha. Ele deve ver o local, deve ser ao
                  ar livre e o clima deve ser favorável (céu nublado, embora
                  possa ser arranjado com controle de temperatura). O raio cai
                  com a força de um raio normal (4 a 5 Coulombs). Causa um dano
                  estrutural 6D a tudo o que toca. Nenhuma armadura protege
                  desse dano, mas uma gaiola de Faraday o dissipa totalmente.
                  Fora o fato de ter sido criado por magia, é um raio bem
                  normal.
                </td>
              </tr>
              <tr>
                <td>Cataclismo</td>
                <td>-20</td>
                <td>30 minutos</td>
                <td>Instantânea - Fixa</td>
                <td>
                  Este efeito é como o “Controle do Clima”, mas para a criação
                  ou prevenção de grandes cataclismos. Abaixo está uma tabela
                  com os modificadores adicionais para cada tipo de desastre. A
                  penalidade para prevenir um desastre é a mesma para causá-lo
                </td>
              </tr>
              <tr>
                <td>Domínio Elemental</td>
                <td>-30</td>
                <td>1 minuto</td>
                <td>Concentração</td>
                <td>
                  Este efeito permite o controle sobre todas as formas dos 4
                  elementos. Com um simples comando, o mago pode abrir as águas,
                  parar ventos ou semear tempestades. O mago pode neutralizar
                  completamente qualquer dano com base nos 4 elementos à taxa de
                  1D por margem de sucesso (sendo assim capaz de entrar no
                  fogo). Ele pode mover os elementos em grandes quantidades. Ele
                  poderia convocar uma tempestade de neve, queimar um castelo
                  inteiro ou congelar um lago. O GM é livre para determinar
                  qualquer penalidade que ele pense apenas para isso. Os danos
                  causados com este efeito estão na faixa de 5 a 7D
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
        <Title order={4}>Lista de cataclismas</Title>
        <Table>
          <thead>
            <tr>
              <th>Penalidade</th>
              <th>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Chuva forte, ventos uivantes</td>
            </tr>
            <tr>
              <td>-2</td>
              <td>Devastadora tempestade de granizo</td>
            </tr>
            <tr>
              <td>-4</td>
              <td>Enchente</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Terremoto: 2 pontos Richter</td>
            </tr>
            <tr>
              <td>-2</td>
              <td>Terremoto: 4 pontos Richter</td>
            </tr>
            <tr>
              <td>-4</td>
              <td>Terremoto: 6 pontos Richter</td>
            </tr>
            <tr>
              <td>-6</td>
              <td>Novas erupções vulcanicas</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Tufão F1</td>
            </tr>
            <tr>
              <td>-2</td>
              <td>Tufão F2</td>
            </tr>
            <tr>
              <td>-4</td>
              <td>Tufão F3</td>
            </tr>
            <tr>
              <td>-6</td>
              <td>Tufão F4</td>
            </tr>
            <tr>
              <td>-8</td>
              <td>Tufão F5</td>
            </tr>
          </tbody>
        </Table>
      </>
    ),
  });
