import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenEncantamentoModal = () =>
  modals.open({
    title: "ENCANTAMENTO",
    children: (
      <>
        <Stack>
          <Text>
            A arte do encantamento abrange a criação de talismãs mágicos e itens
            de todos os tipos. Um encantamento bem feito pode proteger uma
            família por gerações, ou levar reinos à destruição.
          </Text>
          <Text>
            Todos os encantamentos listados possuem um tempo fixo de preparo, e
            a necessidade de um ou mais componentes físicos.
          </Text>
          <Text>
            Além da penalidade usual no nível em Encantamento, cada efeito
            diferente requer o uso de certas habilidades pelo conjurador,
            especificadas para cada efeito.
          </Text>
          <Text>
            A duração de um encantamento é, na maioria dos casos, permanente.
            Porém existem certas condições estabelecidas na criação do
            encantamento que podem alterar essa determinação, modificando também
            a rolagem do lançador.
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
                <th style={{ width: 64 }}>Descarga</th>
                <th style={{ width: 64 }}>Custo</th>
                <th style={{ width: 64 }}>Criação</th>
                <th style={{ width: 64 }}>Tempo</th>
                <th style={{ width: 256 }}>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: 84 }}>Amuleto de Proteção</td>
                <td style={{ width: 16 }}>-2</td>
                <td style={{ width: 42 }}>1 hora</td>
                <td style={{ width: 64 }}>1 dia</td>
                <td style={{ width: 64 }}>$ 100</td>
                <td style={{ width: 64 }}>Joias 4</td>
                <td style={{ width: 64 }}>1 dia</td>
                <td style={{ width: 256 }}>
                  Este amuleto protege o usuário de outros usos malignos de
                  magias ou efeitos sobrenaturais. Enquanto o usuário o usa,
                  qualquer um usando qualquer poder sobrenatural nele com
                  intenção hostil (habilidades de artes marciais
                  cinematográficas incluídas) deve primeiro vencer uma
                  competição contra o nível de habilidade mágica do mago que fez
                  o amuleto. Se uma magia hostil vencer este concurso, o amuleto
                  se quebra e se torna inútil (material incluído).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Foco de poder</td>
                <td style={{ width: 16 }}>-8</td>
                <td style={{ width: 42 }}>1 mês</td>
                <td style={{ width: 64 }}>2 meses</td>
                <td style={{ width: 64 }}>$ 20.000</td>
                <td style={{ width: 64 }}>A habilidade necessária -10</td>
                <td style={{ width: 64 }}>3 dias</td>
                <td style={{ width: 256 }}>
                  Este é um foco genérico que permite a um mago fortalecer um
                  objeto com energia suficiente para aumentar UM EFEITO MÁGICO
                  ESPECÍFICO, e não uma habilidade mágica como um todo. Dá ao
                  usuário um bônus em seu nível apenas com esse efeito. O bônus
                  conferido é igual ao nível do criador em Encantamento menos 15
                  dividido por 2. Portanto, um nível de 21 confere um bônus de
                  +3 e um nível de 31 confere um bônus de +8. O maior bônus que
                  pode ser obtido com um foco de poder é +10 (nível 35). Para a
                  criação do item, o fabricante deve usar uma habilidade
                  adequada o suficiente para criar um item de qualidade �boa�,
                  que custa pelo menos $ 20.000. Um mago só pode encantar o foco
                  de poderes para efeitos que ele mesmo conhece no nível 15+
                  Nenhum foco de poder pode ser criado para este efeito.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Amuleto da Sorte</td>
                <td style={{ width: 16 }}>-8</td>
                <td style={{ width: 42 }}>1 dia</td>
                <td style={{ width: 64 }}>2 dias.</td>
                <td style={{ width: 64 }}>$ 1.000</td>
                <td style={{ width: 64 }}>Detecção -8</td>
                <td style={{ width: 64 }}>1 dia.</td>
                <td style={{ width: 256 }}>
                  Este talismã consiste em um objeto muito difícil de encontrar
                  (um trevo de quatro folhas, um pé de coelho, etc.) e, uma vez
                  encantado, protege o usuário contra a má sorte. O talismã dá
                  ao usuário uma série de novas jogadas que ele pode usar caso
                  falhe em uma jogada importante. Uma vez usado o relançamento,
                  o talismã perde seu poder, e um novo deve ser obtido. O número
                  de relançamentos que o talismã dá ao usuário é igual ao nível
                  do mago criador em “Amuleto da Sorte” menos 12, dividido por
                  três (arredondado para cima). Portanto, um nível de 15
                  permitiria um relançamento e um nível de 22 concederia 4
                  relançamentos.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </>
    ),
  });
