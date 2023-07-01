import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenAlquimiaModal = () =>
  modals.open({
    title: "ALQUIMIA",
    children: (
      <ScrollArea type="never">
        <Stack>
          <Text>
            A alquimia é a arte de transformar as coisas. Ao contrário da
            transmutação, no entanto, ela não usa a energia do mago para seus
            efeitos, mas a energia das próprias coisas que ela muda. Uma
            operação alquímica depende de equipamentos complicados e difíceis de
            obter e de muitos ingredientes obscuros.
          </Text>
          <Text>
            A alquimia é baseada na suposição de que todas as coisas têm dentro
            de uma certa energia, e quando essa energia entra em contato com
            outras energias de outras substâncias, pode surgir um componente
            resultante específico que pode ser forte o suficiente para criar um
            certo efeito (como uma soma de vetores com forte componente), quer o
            usuário acredite nisso ou não
          </Text>
          <Text>
            A alquimia ensina quais são os melhores ingredientes, como obtê-los
            (o melhor momento e método) e como misturá-los nas proporções
            certas. Um pequeno contratempo em uma operação alquímica pode ser
            fatal, e os erros geralmente deixam marcas duradouras nos
            alquimistas.
          </Text>
          <Text>
            A alquimia estabelece um paralelo com o espírito humano, e todas as
            operações alquímicas têm uma correlação com as operações humanas.
            Desta forma, uma poção alquímica pode alterar os seres vivos de uma
            forma que poucas outras habilidades conseguem, levando-os a graus de
            alteração mais elevados do que qualquer outra técnica.
          </Text>
          <Text>
            Para a criação de uma poção alquímica, o mago pode comprar os
            ingredientes necessários ou colhê-los ele mesmo. Na descrição de
            cada poção ou efeito, há um campo indicando o preço para obtenção de
            tal material (considerando um ambiente TL 3-4 como a Europa
            medieval), e outro campo determinando quais são as habilidades e
            penalidades necessárias para encontrar o ingredientes necessários.
            Existe também um campo informando qual é o tempo mínimo necessário
            para criar aquela poção.
          </Text>
          <Text>
            A penalidade para cada poção é a penalidade usada para criá-la.
            Apenas um teste é permitido por poção, ao final de sua fabricação
          </Text>
          <Text>
            Toda poção também tem uma duração, que é o tempo em que ela
            permanece em vigor no corpo do alvo
          </Text>
          <Text>
            Um conjunto alquímico custa $ 5.000 e exige um gasto de $ 300 por
            mês para manutenção. Para o transporte, ela precisa de uma caixa
            especial feita para minimizar os riscos de quebrar os delicados
            vidros, que custam cerca de R$ 400.
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
                <th>Preço</th>
                <th>Perícias</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: 84 }}>Poções genéricas de cura/doença</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>Instantânea</td>
                <td style={{ width: 84 }}>$ 150 x Penalidade de cura.</td>
                <td style={{ width: 84 }}>Naturalismo -2, Herbalismo</td>
                <td style={{ width: 256 }}>
                  Um alquimista pode criar poções que curam certas doenças se
                  ele tiver alguma habilidade em Teurgia. Na criação da poção,
                  ele rola seu nível em Teurgia e define qual doença aquela
                  poção irá curar ou infligir. Ele, então, anota a margem de
                  sucessos no teste de Teurgia e cria uma poção que cura tal
                  doença com -3 ou -4 (por exemplo). Quando uma pessoa afligida
                  com a doença especificada bebe a poção, ela deve testar sua
                  vontade com um bônus igual à penalidade da poção. Em um
                  sucesso, ele é curado. Essas poções apenas curam doenças, não
                  recuperam pontos de vida perdidos. Da mesma forma, um
                  alquimista pode criar poções que infligem doenças em um alvo.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poções preventivas de nascimento</td>
                <td style={{ width: 16 }}>-1</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>1 mês</td>
                <td style={{ width: 84 }}>$ 200</td>
                <td style={{ width: 84 }}>Naturalismo 2, Herbalismo</td>
                <td style={{ width: 256 }}>
                  Enquanto durar a poção, quem a beber ficará estéril. Se
                  administrado a uma mulher grávida, pode causar um aborto (se
                  ela falhar em um teste de HT 3). Da mesma forma, um alquimista
                  pode criar uma poção que força a ovulação de uma mulher,
                  tornando-a fértil para o dia, ou cria uma poção que força o
                  nascimento de um menino ou menina (se for dado a um homem).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção Veritas</td>
                <td style={{ width: 16 }}>-2</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>1 dia</td>
                <td style={{ width: 84 }}>$ 400</td>
                <td style={{ width: 84 }}>Naturalismo 2, Herbalismo</td>
                <td style={{ width: 256 }}>
                  Esta poção garante que o alvo veja claramente. Elimina
                  quaisquer deficiências de visão que o alvo possa ter (exceto
                  cegueira) e ainda clareia sua visão de forma que ele não possa
                  ser afetado por feitiços ou habilidades que confundem suas
                  percepções.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>
                  Poções contra doenças de envelhecimento
                </td>
                <td style={{ width: 16 }}>-3</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>1 mês</td>
                <td style={{ width: 84 }}>$ 500</td>
                <td style={{ width: 84 }}>Naturalismo 4, Herbalismo 2</td>
                <td style={{ width: 256 }}>
                  Essas poções não rejuvenescem o alvo, mas previnem certas
                  doenças do envelhecimento e podem até mesmo revertê-las. As
                  doenças do envelhecimento incluem: pele enrugada, perda de
                  cabelo, menopausa, propensão a ataques cardíacos, etc. A
                  doença evitada deve ser determinada na criação da poção.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção de Heitor</td>
                <td style={{ width: 16 }}>-4</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>5 minutos</td>
                <td style={{ width: 84 }}>$ 300</td>
                <td style={{ width: 84 }}>Naturalismo -5, Herbalismo -3</td>
                <td style={{ width: 256 }}>
                  Ao ingerir essa poção, a pessoa recebe uma dose extra de
                  vitalidade. Por 5 minutos, ele não perderá nenhum cansaço
                  físico, independente do esforço que fizer (a menos que seja
                  drenado por efeitos mágicos).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção de Morfeu</td>
                <td style={{ width: 16 }}>-4</td>
                <td style={{ width: 42 }}>1 dia</td>
                <td style={{ width: 64 }}>1 hora</td>
                <td style={{ width: 84 }}>$ 700</td>
                <td style={{ width: 84 }}>Naturalismo 8, Herbalismo 6</td>
                <td style={{ width: 256 }}>
                  Quem beber desta poção dormirá 1D + 5 horas. Também pode ser
                  espalhado sobre uma superfície ou queimado no fogo, e o aroma
                  que exala fará com que quem o inalar adormeça. No entanto,
                  desta forma, as pessoas podem resistir à sonolência com um
                  teste de força de vontade + 16 mais uma penalidade igual ao
                  número de horas em que estão acordados. O aroma se expande por
                  cerca de 10 metros de raio, embora os ventos possam espalhá-lo
                  ainda mais.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção de Hércules</td>
                <td style={{ width: 16 }}>-5</td>
                <td style={{ width: 42 }}>1 dia</td>
                <td style={{ width: 64 }}>1 hora</td>
                <td style={{ width: 84 }}>$ 1500</td>
                <td style={{ width: 84 }}>Naturalismo 7, Herbalismo 5</td>
                <td style={{ width: 256 }}>
                  Esta poção dobra a força física de quem a bebe (antes de
                  aplicar qualquer modificador a ela).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção Eros</td>
                <td style={{ width: 16 }}>-5</td>
                <td style={{ width: 42 }}>1 dia</td>
                <td style={{ width: 64 }}>Instantânea</td>
                <td style={{ width: 84 }}>$ 2.000</td>
                <td style={{ width: 84 }}>Naturalismo 8, Herbalismo 6</td>
                <td style={{ width: 256 }}>
                  Esta poção é feita em pares. Uma vez dado a duas pessoas
                  diferentes, fará com que se apaixonem na próxima vez que se
                  encontrarem (se forem do sexo oposto) ou se tornem grandes
                  amigos imediatos (se forem do mesmo sexo). Se essa paixão
                  durar, essa poção não dá nenhuma garantia. Seu efeito é que,
                  sempre que as duas pessoas se encontrarem, elas tirarão um 18
                  em suas jogadas de reação.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção de Aquiles</td>
                <td style={{ width: 16 }}>-6</td>
                <td style={{ width: 42 }}>1 dia</td>
                <td style={{ width: 64 }}>1 hora</td>
                <td style={{ width: 84 }}>$ 2.000</td>
                <td style={{ width: 84 }}>Naturalismo 8, Herbalismo 6</td>
                <td style={{ width: 256 }}>
                  Com esta poção, o usuário se torna imune à dor. Garante que a
                  pessoa que bebeu está ativa e limpa até morrer. Durante a
                  poção, o usuário não ficará inconsciente e ficará imune a
                  qualquer efeito causador de sono. Ele só cairá em batalha
                  quando morrer. Caso contrário, ele continuará lutando sem
                  nenhuma penalidade por dor ou ferimentos.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção Bruto</td>
                <td style={{ width: 16 }}>-7</td>
                <td style={{ width: 42 }}>2 dias</td>
                <td style={{ width: 64 }}>1 hora</td>
                <td style={{ width: 84 }}>$ 4000</td>
                <td style={{ width: 84 }}>Naturalismo 9, Herbalismo 7</td>
                <td style={{ width: 256 }}>
                  Esta poção aumenta a resistência física do alvo, dobrando
                  efetivamente seu atributo HT (e consequentemente ganhando a
                  diferença em HPs) pela duração do efeito. Quando a poção
                  termina, o alvo perde os HPs ganhos. Se ele sofreu dano
                  durante este efeito, ele perderá em e HP a cada 2 pontos de HT
                  perdidos.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção de Proteu</td>
                <td style={{ width: 16 }}>-10</td>
                <td style={{ width: 42 }}>1 dia</td>
                <td style={{ width: 64 }}>3 horas</td>
                <td style={{ width: 84 }}>$ 5.000</td>
                <td style={{ width: 84 }}>Naturalismo –10, Herbalismo –8</td>
                <td style={{ width: 256 }}>
                  Material Necessário: Algum objeto pessoal do alvo da poção.
                  Esta poção cria um certo Efeito Halo (veja as habilidades
                  subconscientes) em torno de quem a bebe. Quem olhar para o
                  usuário, perceberá com os olhos da mente outra pessoa,
                  escolhida na criação da poção. Algum item do alvo da poção é
                  necessário para a criação.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção Helena</td>
                <td style={{ width: 16 }}>-12</td>
                <td style={{ width: 42 }}>5 dias</td>
                <td style={{ width: 64 }}>1 hora</td>
                <td style={{ width: 84 }}>$ 15.000</td>
                <td style={{ width: 84 }}>Naturalismo –15, Herbalismo –13</td>
                <td style={{ width: 256 }}>
                  Essa poção faz com que o usuário exale um aroma tão agradável
                  que todas as pessoas ao seu redor terão automaticamente a
                  melhor reação possível com o usuário. Afecta igualmente seres
                  de ambos os sexos e o seu efeito não tem (necessariamente)
                  qualquer componente sexual. Todas as pessoas afetadas tratarão
                  o usuário com a maior reverência e reconhecimento possível, e
                  o usuário, sem dúvida, se tornará o centro das atenções por um
                  tempo.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Poção de Hermes</td>
                <td style={{ width: 16 }}>-14</td>
                <td style={{ width: 42 }}>7 dias</td>
                <td style={{ width: 64 }}>3 minutos</td>
                <td style={{ width: 84 }}>$ 20.000</td>
                <td style={{ width: 84 }}>Naturalismo -18, Herbalismo -16</td>
                <td style={{ width: 256 }}>
                  Esta poção psicotrópica altera as percepções do usuário de tal
                  forma que ele verá e ouvirá tudo ao seu redor como em câmera
                  lenta. O usuário ganha +5 em todas as suas jogadas físicas, ou
                  um ataque extra por turno. Esta poção não garante que o
                  usuário se recupere ou perca a fadiga mais rápido que o
                  normal.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </ScrollArea>
    ),
  });
