import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenTransmutacaoModal = () =>
  modals.open({
    title: "TRANSMUTAÇÃO",
    children: (
      <ScrollArea type="never">
        <Stack>
          <Text>
            Esta é a capacidade de transformar uma coisa em outra. É a conquista
            definitiva sobre a matéria, e um mago com esse conhecimento, a
            princípio, não precisa mais se preocupar com o bem-estar material.
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
                <th>Modificador</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: 84 }}>Conserto / Decadência</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>5 minutos</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>--</td>
                <td style={{ width: 256 }}>
                  Este efeito permite ao mago destruir objetos ou consertar
                  objetos quebrados. A margem de sucessos indica quantos HPs ele
                  pode recuperar ou remover do objeto. Este efeito não pode ser
                  usado para aumentar a qualidade de um item acima de seu valor
                  original (transformando-o em "bom", por exemplo). Este efeito
                  não pode reconstruir um objeto no qual uma parte está
                  faltando. Para consertar um item quebrado, o mago deve ter
                  consigo as peças daquele item, ou, pelo menos, 90% do objeto
                  original intacto. Um objeto que virou pó não pode ser
                  reconstruído.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Projeção da consciência</td>
                <td style={{ width: 16 }}>-5</td>
                <td style={{ width: 42 }}>30 minutos</td>
                <td style={{ width: 64 }}>Pôr do Sol/ Nascer do Sol</td>
                <td style={{ width: 256 }}>--</td>
                <td style={{ width: 256 }}>
                  Com este efeito, o mago pode projetar sua consciência fora de
                  seu corpo na forma de outro ser. O mago deve escolher qual
                  animal melhor representa sua personalidade e este será o
                  animal que ele vira quando sua consciência é projetada. O
                  efeito é que o mago deixa seu corpo exatamente como no
                  “Desenvolvimento Espiritual”, mas seu corpo astral assume a
                  forma de um animal e se projeta com tanta intensidade que se
                  torna sólido. Portanto, durante este efeito, o corpo original
                  do mago é deixado para trás, inconsciente. Quando o efeito
                  expira, o corpo projetado desaparece e o mago retorna ao local
                  de seu corpo físico. O mago pode encerrar o efeito sempre que
                  desejar. Qualquer dano que seu eu animal sofra será refletido
                  em seu corpo físico instantaneamente. O corpo projetado se
                  forma a poucos passos do corpo inconsciente do mago. Quando o
                  efeito expira, o corpo projetado desaparece onde quer que
                  esteja. Através de um efeito conhecido como "repercussão",
                  todo dano causado ao corpo projetado é refletido de volta no
                  corpo físico do mago, embora seja um dano generalizado e não
                  específico a qualquer órgão ou parte do corpo. Se o corpo
                  físico do mago morrer, o mago também morre e a projeção
                  termina imediatamente.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Transmutação</td>
                <td style={{ width: 16 }}>-10</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>--</td>
                <td style={{ width: 256 }}>
                  Com este efeito, o mago pode, como o nome indica, transformar
                  uma substância inanimada em outra. Todas as alterações
                  acontecem dentro do mesmo reino (sólidos permanecem sólidos,
                  líquidos permanecem líquidos). Para transformar algo em outro
                  muito raro ou muito complexo (como o
                  tetra-ortil-para-hidronegate de Triborus), o mago deve ser
                  bem-sucedido em um teste de química ou outra habilidade que o
                  mestre julgar apropriada. Para transformar um material em algo
                  comumente conhecido, como açúcar, ouro, etc, não é necessário
                  nenhum rolo extra. Se o mago deseja usar este efeito para
                  causar dano (criando veneno), todas as pessoas afetadas pelo
                  veneno podem resistir ao dano com um teste de força de
                  vontade. Se forem bem-sucedidos, esse veneno é completamente
                  neutralizado para essa pessoa. A massa afetada é de 333 gramas
                  (1/3 de kg) para o sucesso (mais um). As penalidades são
                  cumulativas. Para transformar 3 quilos de água em vinho, o
                  mago rola com 8 (para alterar a natureza do elemento), -9 (3
                  kg), -10 (penalidade natural) para uma penalidade de 27.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Transporte de matéria</td>
                <td style={{ width: 16 }}>-15</td>
                <td style={{ width: 42 }}>3 horas</td>
                <td style={{ width: 64 }}>Instantânea - Fixa</td>
                <td style={{ width: 256 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Com este efeito, o mago pode ir de um lugar para outro sem
                  percorrer a distância entre eles. Ele desaparece de onde quer
                  que esteja e aparece longe. Durante o tempo de conjuração, o
                  mago desaparece lentamente do local original e aparece no novo
                  local. Nesse período, ele fica vulnerável a ataques em ambos
                  os locais. O efeito tem um modificador baseado na
                  familiaridade do mago com o destino. O mago não pode carregar
                  nada neste transporte.
                </td>
              </tr>
            </tbody>
          </Table>
          <Title order={4}>
            Penalidade Transmutação e Projeção de consciência
          </Title>
          <Table>
            <thead>
              <tr>
                <th>Penalidade</th>
                <th>Projeção</th>
                <th>Transmutação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>O animal que melhor representa a essência do mago.</td>
                <td>
                  Alterar características aparentes e superficiais (sabor, cor,
                  rugosidade)
                </td>
              </tr>
              <tr>
                <td>-2</td>
                <td>Qualquer mamífero irracional.</td>
                <td>
                  Alterar características internas de um objeto (peso,
                  temperatura, oleosidade, etc)
                </td>
              </tr>
              <tr>
                <td>-4</td>
                <td>Seu próprio eu físico</td>
                <td>Alterar a forma de um objeto (torna-se moldável)</td>
              </tr>
              <tr>
                <td>-6</td>
                <td>Qualquer ser humanoide com a aparência que o mago foca.</td>
                <td>
                  Alterar a natureza de um objeto (de uma substância para outra)
                </td>
              </tr>
              <tr>
                <td>-8</td>
                <td>Qualquer forma com a qual o mago esteja familiarizado.</td>
                <td>Extra para afetar elementos sólidos.</td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </ScrollArea>
    ),
  });
