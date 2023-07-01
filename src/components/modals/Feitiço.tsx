import { ScrollArea, Stack, Table, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export const OpenFeiticoModal = () =>
  modals.open({
    title: "FEITIÇO",
    children: (
      <ScrollArea type="never">
        <Stack>
          <Text>
            Feitiços são o estudo dos efeitos que uma poderosa força de vontade
            pode ter sobre as percepções dos outros. Este estudo envolve as
            chamadas "ilusões", controle da mente e a cobiçada capacidade de se
            tornar invisível.
          </Text>
          <Text>
            A maioria dos feitiços, a menos que indicado, está sujeita aos
            modificadores de Familiaridade com base na familiaridade do
            conjurador com o alvo.
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
                <td style={{ width: 84 }}>Impulso emocional</td>
                <td style={{ width: 16 }}>0</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração Especial</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Com este feitiço, um mago pode influenciar uma mente de forma
                  a fazê-la sentir qualquer emoção que ele deseje. O alvo pode
                  resistir com sua força de vontade e, se falhar, começará a
                  sentir qualquer emoção imposta pelo conjurador. As emoções
                  induzidas devem ser genéricas (raiva, calma, prazer). A
                  intensidade da emoção dependerá da margem de sucessos pela
                  qual o conjurador venceu a resistência do alvo. Emoções
                  direcionadas (como raiva em relação a alguém ou prazer em
                  algo) devem ser criadas com o efeito "feitiço de ligação". O
                  alvo só pode resistir a esse efeito se a emoção induzida for
                  contra o que ele sente ou deseja. Pelo contrário, ele será um
                  alvo fácil para esse efeito. Se o alvo for outro mago que
                  tenha algum nível em Feitiços, ele sempre poderá resistir a
                  esse efeito. Se ele resistir, saberá que alguém tentou
                  enfeitiçá-lo. O mago pode escolher influenciar mais de uma
                  pessoa com uma penalidade de -1 em sua rolagem por alvo
                  afetado. Com uma penalidade extra de 5, ele pode afetar todos
                  próximos (dentro de 10 metros ou mais), criando assim uma
                  “aura” de sentimentos para todos ao seu redor. Quando usado
                  dessa maneira, o feitiço não possui modificadores de
                  familiaridade, embora cada um afetado tenha seu próprio teste
                  de resistência conforme descrito.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Impulso comportamental</td>
                <td style={{ width: 16 }}>-2</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este é o feitiço usado para forçar alguém a realizar uma ação
                  que normalmente não faria. O mago se concentra no efeito e na
                  pessoa afetada, e será levado a fazer a ação descrita se
                  falhar em um teste de resistência. O alvo só pode resistir a
                  este feitiço se tiver algum nível com Feitiços ou se o
                  comportamento descrito for contra o que ele acredita ou
                  deseja. Em outros casos, ele será um alvo fácil para o
                  feitiço. Se o alvo for outro mago que tenha algum nível em
                  Feitiços, ele sempre poderá resistir a esse efeito. Se ele
                  resistir, saberá que alguém tentou enfeitiçá-lo. Se o alvo não
                  for um mago, ele provavelmente nem perceberá o que foi feito
                  com ele, acreditando que fez o que fez porque assim o quis. Se
                  a ação descrita for contra as crenças do alvo, ele pode ter um
                  bônus em sua resistência de até 15 (para coisas como “matar
                  sua mãe”).
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Impulso psicofísico</td>
                <td style={{ width: 16 }}>-6</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração Especial</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este efeito permite ao mago influenciar o alvo fisicamente
                  através de seu componente psicológico. Permite ao mago induzir
                  efeitos físicos específicos controlados pelo cérebro, tais
                  como: medo, ansiedade, batimentos cardíacos, sonolência,
                  febre, pressão baixa, etc. Um mago que conheça anatomia (ou
                  teurgia) pode ter muito mais ideias para este efeito,
                  induzindo doenças complexas através da manipulação
                  psicológica. O alvo sempre pode resistir a este efeito com sua
                  força de vontade ou HT, o que for maior. Esta habilidade não
                  pode ser usada para matar um alvo imediatamente. Embora de
                  natureza mágica, este feitiço não pode conferir resistência
                  sobre-humana ao alvo. Se, por exemplo, o mago amplificar a
                  força do alvo por um mês, isso seria fatal para o alvo,
                  considerando que essa mudança vem por alteração bioquímica das
                  funções corporais. Forçá-lo a ocorrer por um mês direto pode
                  produzir efeitos como: O alvo não sente mais sonolência ou
                  fome, o alvo fica cansado com muito mais frequência, o alvo
                  força seus músculos acima do limite. Use a duração do feitiço
                  com cuidado.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Ilusão dos sentidos</td>
                <td style={{ width: 16 }}>-8</td>
                <td style={{ width: 42 }}>5 minutos.</td>
                <td style={{ width: 64 }}>Concentração Especial.</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este efeito permite que um mago confunda os sentidos do outro,
                  fazendo-o ver o que não existe, ouvir o que não foi dito e
                  sentir o que não existe. A ilusão é puramente mental. A imagem
                  não “aparece” per se, mas o alvo nunca consegue perceber a
                  diferença. Ele pode resistir ao seu efeito com seu nível em
                  Feitiços ou sua força de vontade, o que for maior. A ilusão
                  engana todos os cinco sentidos. O alvo verá pessoas
                  interagindo com a ilusão como se ela estivesse lá. As pessoas
                  que virem o alvo o verão interagindo com o nada. Portanto, se
                  o alvo tentar subir uma escada ilusória ou passar por uma
                  porta ilusória, ele pode tentar desacreditar na ilusão com um
                  teste de IQ menos os sucessos do conjurador. Cada ação
                  subseqüente que produz uma resposta física ao alvo que vai
                  contra a ilusão dá ao alvo um novo teste de IQ ou Feitiço. Uma
                  ilusão pode dar ao alvo a sensação de estar sendo atacado,
                  ferido ou até mesmo morto. Cada vez que isso acontece, o alvo
                  rola sua resistência com uma penalidade igual ao dano que ele
                  receberia ilusória. Se ele falhar, perderá metade do dano como
                  fadiga (arredondado para cima). Quando sua fadiga chegar a
                  zero, ele acreditará que está morto e deverá fazer um teste de
                  susto em 8. Ele VAI ficar inconsciente e possivelmente acordar
                  mais tarde com um belo trauma. Este efeito também pode ser
                  usado para esconder coisas do alvo, tornando-as invisíveis
                  para ele. O tamanho é irrelevante, pois o que é afetado são as
                  percepções do alvo. O mago pode escolher afetar mais de uma
                  pessoa com uma penalidade de -1 em sua rolagem por alvo
                  afetado. Com uma penalidade extra de 5, ele pode afetar todos
                  que olham para um determinado objeto (alterando sua aparência,
                  por exemplo), focando a ilusão em um objeto e não em uma
                  pessoa. Se ele fizer isso, todos olhando para o alvo podem
                  rolar seu IQ ou nível de Feitiço menos os sucessos do
                  conjurador para ver através da ilusão. Se eles falharem, eles
                  não devem rolar novamente, a menos que a ilusão faça algum
                  tipo de incongruência física com o que eles veem e o que
                  aconteceu.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Feitiço de ligação</td>
                <td style={{ width: 16 }}>-12</td>
                <td style={{ width: 42 }}>1 hora.</td>
                <td style={{ width: 64 }}>Especial Sunset/Sunrise.</td>
                <td style={{ width: 64 }}>Familiaridade</td>
                <td style={{ width: 256 }}>
                  Este feitiço permite ao lançador “escravizar” parte da força
                  de vontade do alvo, determinando-a. O mago determina um desejo
                  e um alvo, como, por exemplo: “gosta de chocolate” ou “me
                  ama”, e testa contra a força de vontade do alvo. Em caso de
                  sucesso, o alvo será compelido a agir como o mago determinou.
                  A margem de sucessos indicará com que intensidade. Se o alvo
                  for outro mago, ele pode resistir a esse efeito com seu nível
                  em Feitiços. Essa resistência pode ocorrer como uma segunda
                  chance se ele falhar em seu teste normal de resistência à
                  força de vontade. Se a ordem que o mago deu ao alvo for contra
                  o que ele realmente quer ou acredita, ele pode resistir com um
                  bônus à vontade do GM (até +15 para coisas como “odeie sua
                  mãe”). Este efeito pode ser usado, com os mesmos
                  modificadores, para libertar uma pessoa de uma amarração,
                  embora o mago não possa determinar que alguém está amarrado a
                  menos que ele reúna isso por sua grande mudança de
                  comportamento.
                </td>
              </tr>
              <tr>
                <td style={{ width: 84 }}>Invisibilidade</td>
                <td style={{ width: 16 }}>-15</td>
                <td style={{ width: 42 }}>5 segundos</td>
                <td style={{ width: 64 }}>Concentração</td>
                <td style={{ width: 64 }}>--</td>
                <td style={{ width: 256 }}>
                  Um dos feitiços mais fortes possíveis: o de ficar invisível.
                  Para tanto, o conjurador deve ter uma vontade acostumada a
                  esforços extremos e rápidos. O mago, com este efeito, estimula
                  as mentes daqueles ao seu redor para “vê-lo, mas não notá-lo”.
                  Como se todos olhando para ele estivessem repentinamente
                  distraídos com outra coisa, exceto ele. Portanto, o mago não
                  se torna fisicamente invisível, mas mentalmente. Este efeito
                  não pode ser resistido e não é modificado pela familiaridade.
                  A margem de sucessos do conjurador é a penalidade na percepção
                  que as pessoas terão ao notar o conjurador. Essa
                  invisibilidade não é apenas visual, mas afeta todos os
                  sentidos (mesmo lutar às cegas ou ver feitiços invisíveis do
                  GRUPS Magic). Dura enquanto o conjurador se concentrar nela.
                  Se, por exemplo, o mago for filmado enquanto invisível, as
                  pessoas o verão através do filme normalmente após o término do
                  feitiço, mas NÃO o verão, mesmo durante o filme, enquanto o
                  feitiço estiver em vigor. O mago pode excluir certas pessoas
                  deste efeito com uma penalidade de 1 por pessoa excluída.
                </td>
              </tr>
            </tbody>
          </Table>
        </ScrollArea>
      </ScrollArea>
    ),
  });
