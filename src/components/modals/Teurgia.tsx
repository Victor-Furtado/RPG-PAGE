import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenTeurgiaModal = () =>
  modals.open({
    title: "TEURGIA",
    children: (
      <>
        <Stack>
          <Text>
            Esta é a habilidade de um mago de causar ou curar aflições
            simplesmente por um esforço de sua vontade.
          </Text>
          <Text>
            A priori, uma pessoa não precisa saber nada sobre anatomia ou
            medicina para realizar um ato de teurgia. Na verdade, na maioria dos
            casos, quanto mais uma pessoa sabe, menos ela pode fazer, porque
            "estudos anatômicos provam que tal coisa é impossível" e, sendo a
            magia uma resposta à vontade e às crenças do mago, ela falhará.
            quando as crenças também falham. Para a teurgia, basta o mago
            acreditar em ALGUMA COISA (por exemplo, que a água de um lago
            inexplorado tem propriedades curativas contra certas doenças) para
            que funcione.
          </Text>
          <Text>
            Por esta razão, um mago teurgo não costuma discutir suas crenças com
            outros magos ou médicos. O segredo de sua magia mantém sua vontade
            afiada. Se ele discutir isso, ele pode perder seu poder quando
            alguém lhe provar de A a B que o que ele acreditava não tem
            fundamento.
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
                <td style={{ width: 84 }}>Diagnóstico</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que o mago sinta o que está fisicamente
                  errado com o alvo. Se ele tiver alguma habilidade médica, pode
                  explicar o problema tecnicamente. Se não, ele explicará de
                  acordo com sua crença. Ele pode descrever quais sintomas o
                  alvo exibirá como consequência de sua doença, como: “Você tem
                  uma doença que causará febre crescente em 3 meses e morte dois
                  meses depois”. Em um teste bem-sucedido, o mago sente uma
                  doença por sucesso, começando sempre com o mais grave. Os
                  sucessos podem ser "gastos" pelo mago para obter informações
                  mais detalhadas sobre uma doença. Por exemplo, se o mago sente
                  que o alvo tem um câncer de fígado, ele pode gastar sucessos
                  para entender o que o causou, quanto tempo o alvo viverá, etc.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Estabilizar</td>
                <td style={{ width: 16 }}>-2</td>
                <td style={{ width: 42 }}>5 minutos</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>
                  Com este efeito, o mago “estabiliza” o corpo do alvo de forma
                  a estabilizar seus ferimentos evitando sua morte. O alvo
                  permanece ferido (ele não recupera HP perdido), mas suas
                  feridas vão fechar e não vão mais infeccionar ou sangrar. O
                  alvo para de perder HP imediatamente devido a feridas abertas
                  ou não tratadas. Este efeito PODE curar o HP do alvo se ele
                  estiver abaixo de -HT. Os pontos de HP recuperados são iguais
                  à margem de sucessos do lançador com este feitiço. Se o HP
                  recuperado for maior que HT, ele para de se recuperar em HT +
                  1. Esse efeito também pode ser usado para prevenir ataques
                  cardíacos, derrames e outros acidentes metabólicos do gênero.
                  Se realizado todos os dias em uma pessoa, esse efeito mantém
                  seu corpo livre de colesterol, limpo e em boas condições de
                  funcionamento, aumentando muito sua expectativa de vida (as
                  rolagens de envelhecimento começam em 70 anos em um ambiente
                  TL 3, ou 20% mais tarde em outros ambientes ).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Cura/Infecção</td>
                <td style={{ width: 16 }}>-2 (básico)</td>
                <td style={{ width: 42 }}>5 minutos</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>
                  Este efeito permite ao mago curar ou causar uma doença no
                  alvo. A penalidade para este efeito varia de acordo com a
                  força e intensidade da doença, mas, a princípio, qualquer
                  doença ou enfermidade pode ser afetada, mesmo aquelas de
                  natureza puramente psicológica, ou doenças espirituais que
                  afligem o corpo. A princípio, ninguém cura ninguém. A única
                  pessoa que pode curar um enfermo é ele mesmo. O mago só pode
                  ajudá-lo a acreditar que pode. Portanto, quando alguém é alvo
                  desse efeito, ele deve testar sua força de vontade com uma
                  penalidade igual à penalidade do mago para curá-lo e um bônus
                  igual à margem de sucessos do mago. Se o alvo for
                  bem-sucedido, ele será curado permanentemente. Se ele falhar,
                  a cura durará tantos sucessos que o mago teve em dias, após o
                  que a doença retomará seu curso. A cura é instantânea, todos
                  os sintomas desaparecem no mesmo instante. Este efeito também
                  pode ser usado para remover ou inserir qualquer tipo de
                  intoxicação ou envenenamento no alvo, com as mesmas
                  penalidades.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Regeneração</td>
                <td style={{ width: 16 }}>-4 (básico)</td>
                <td style={{ width: 42 }}>30 minutos</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que o mago recupere tecidos perdidos e
                  feche feridas, recuperando assim o dano estrutural (HP) de um
                  corpo. Cada margem de sucesso cura 1 ponto de HP para um alvo.
                  Este efeito também pode ser usado para curar outros tipos de
                  danos estruturais, de acordo com uma penalidade adicional:
                  Essa regeneração acontece por meio de um processo no qual o
                  mago coloca parte de seu próprio corpo energético dentro do
                  alvo, e o solidifica, recuperando assim a ferida. Portanto, ao
                  curar X pontos de dano em uma ferida, a pessoa curada ficará X
                  dias sem sentir aquela parte. Ficará como que “sedado” para
                  ele, e ele só recuperará a mobilidade e a sensibilidade
                  daquela região depois de transcorridos os X dias. Se o mago
                  curar mais de 6 pontos de HP em uma única rolagem, ele
                  transferirá algumas de suas desvantagens mentais (e vantagens)
                  para o alvo. Para cada ponto de HP curado acima de 6, o alvo
                  assume 5 pontos de (des)vantagens mentais do conjurador,
                  primeiro as desvantagens, e somente depois que todas forem
                  transferidas, as vantagens. Este efeito desaparece conforme a
                  parte curada recupera sua sensibilidade, na proporção de 5
                  pontos de personagem por dia, até que tudo volte ao normal. O
                  mago rola uma tentativa desta habilidade para feri-lo. Se ele
                  falhar em sua primeira tentativa, ou não curar todo o HP
                  necessário, esse ferimento não poderá mais ser curado.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </>
    ),
  });
