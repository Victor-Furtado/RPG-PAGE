import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenElementarismoModal = () =>
  modals.open({
    title: "ELEMENTARISMO",
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
                <th style={{ width: 84 }}>Magia</th>
                <th style={{ width: 16 }}>Mod</th>
                <th style={{ width: 42 }}>Conj</th>
                <th style={{ width: 64 }}>Duração</th>
                <th style={{ width: 84 }}>Modificadores</th>
                <th style={{ width: 256 }}>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Magia</td>
                <td>Mod</td>
                <td>Conj</td>
                <td>Duração</td>
                <td>Modificadores</td>
                <td>Efeito</td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </>
    ),
  });
