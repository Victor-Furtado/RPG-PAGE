import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenLevitacaoModal = () =>
  modals.open({
    title: "LEVITAÇÃO",
    children: (
      <>
        <Stack>
          <Text>
            Esta é a habilidade que permite que bruxas e bruxos subam em
            vassouras ou tapetes e voem para longe. É a capacidade de criar um
            campo de energia em torno de um determinado objeto que pode diminuir
            ou anular o campo gravitacional do planeta, permitindo que o alvo
            seja movido à distância.
          </Text>
          <Text>
            Portanto, essa levitação não é o mesmo que uma Telecinese Psiônica,
            que afeta um objeto por dentro, em nível molecular.
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
                <td style={{ width: 84 }}>Telecinese</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este efeito permite ao mago controlar o movimento de um objeto
                  à distância. Depende do volume, não do peso, e objetos maiores
                  incorrem em penalidades maiores. O volume controlado é igual a
                  125 decímetros cúbicos por margem de sucesso (50 x 50 x 50 cm
                  por sucesso. 8 é a penalidade para levitar uma pessoa), até 10
                  sucessos, quando o move 1 hex de matéria. Depois disso, cada
                  sucesso adiciona 1 hex de volume movido. A velocidade com que
                  a matéria é movida é igual ao dobro da margem de sucessos do
                  teste modificado. Para 0 sucessos, a velocidade é de 1 m/s.
                  Movimentos complexos requerem penalidades adicionais (como
                  fazer uma caneta escrever em um pedaço de papel) e vários
                  testes de meditação para manter o foco. Esse feitiço pode
                  afetar parte de um objeto, fazendo-o levitar de um lado, por
                  exemplo.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Impulso</td>
                <td style={{ width: 16 }}>-3</td>
                <td style={{ width: 42 }}>Instantâneo</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que um mago crie um súbito impulso de
                  movimento para um objeto. O efeito é o mesmo como se alguém
                  repentinamente empurrasse (ou puxasse) o objeto com um ST
                  igual ao IQ do mago. Este impulso é rápido e instantâneo e não
                  pode ser mantido para um controle mais fino. O impulso não
                  depende do volume do objeto. Se a força usada não for
                  suficiente para mover o objeto, ele simplesmente não se move.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Flutuando</td>
                <td style={{ width: 16 }}>-8</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que um mago levite e voe para longe. Dura
                  enquanto o mago se concentra. A velocidade com que ele voa é
                  igual a 2m/s, vezes a margem de sucessos (para 0 sucessos, a
                  velocidade é de 1m/s). O mago pode levitar a si mesmo e tudo o
                  que ele carrega em um hexágono, independentemente do peso.
                  Para levitar outra pessoa, ou alguém com ela, ele tem uma
                  penalidade adicional de £ 2 por pessoa levitada.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Manipulação</td>
                <td style={{ width: 16 }}>-4</td>
                <td style={{ width: 42 }}>1 segundo</td>
                <td style={{ width: 64 }}>Concentração - Fixa</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que um mago, com intensa concentração,
                  manipule algum objeto à distância como se o estivesse
                  segurando. Ele poderia, por exemplo, trancar/destrancar uma
                  porta sem a chave (mas com um teste de Lockpicking), tocar um
                  instrumento musical, digitar um teclado, etc. O objeto não irá
                  levitar, mas simplesmente começar a funcionar. Para levitar o
                  objeto enquanto o manipula, adicione as penalidades de
                  “telecinese” à manipulação. O mago poderia, com uma habilidade
                  “mundana”, realizar operações profissionais como consertar um
                  relógio, lapidar uma joia, etc.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </>
    ),
  });
