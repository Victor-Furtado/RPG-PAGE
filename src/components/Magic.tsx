import {
  Divider,
  ScrollArea,
  SimpleGrid,
  Stack,
  Paper,
  Table,
  Text,
  ThemeIcon,
  Title,
  createStyles,
} from "@mantine/core";
import {
  GiPotionBall,
  GiDragonOrb,
  GiFireSpellCast,
  GiMagicPalm,
  GiHiveMind,
  GiQuill,
  GiHalfDead,
  GiHealing,
  GiTransform,
} from "react-icons/gi";
import { OpenAlquimiaModal } from "./modals";
import { OpenAdivinhacaoModal } from "./modals/Adivinhação";

const useStyles = createStyles((theme) => ({
  headers: {
    textAlign: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  itemIcon: {
    marginRight: theme.spacing.md,
  },
  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },
}));

export function MagicPage() {
  const { classes } = useStyles();
  return (
    <ScrollArea style={{ height: "90vh" }} type="never">
      <Stack>
        <Title className={classes.headers}>Regras de Magia</Title>
        <Text>
          Toda magia é uma perícia M/MD não afetada pela Memória Eidética. Cada
          efeito mágico específico é obtido rolando a perícia com uma penalidade
          (ou bônus) apropriada, definida pelo efeito. Assim, por exemplo, a
          perícia “Necromancia” tem muitos efeitos, dos quais um é “Espíritos
          dos Sentidos”, obtido rolando Necromancia com penalidade de -2.
        </Text>
        <Text>
          Se um personagem possui uma perícia mágica, ele pode tentar qualquer
          efeito descrito, rolando seu nível com a penalidade apropriada, desde
          que sua NH final seja acima de 3.
        </Text>
        <Text>
          Caso o personagem não possua a magia necessária para o efeito, ele não
          pode tentar tal efeito. Não há nível padrão para habilidades mágicas.
        </Text>
        <Divider />
        <Title className={classes.headers}>Lançando magias</Title>
        <Text>
          Cada efeito tem um tempo de conjuração e de duração especificado em
          sua descrição. Se o mago quiser, ANTES de lançar a magia, ele pode
          anunciar que está lançando mais cedo do que o normal ou uma magia com
          maior duração, com uma penalidade adicional. Essa penalidade é dada
          pela diferença do tempo listado para lançar ou a duração original da
          magia e o tempo tentado conforme descrito na tabela a seguir:
        </Text>
        <Table style={{ marginRight: 8 }} captionSide="bottom" highlightOnHover>
          <thead style={{ backgroundColor: "black" }}>
            <tr>
              <th>Valor</th>
              <th>Tempo</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            {conjDur.map((obj, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{obj.conj}</td>
                <td>{obj.dur}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Text>
          Por exemplo: se um efeito é descrito como levando 1 hora para ser
          lançado, um mago pode tentar lançá-lo em 1 minuto com uma penalidade
          de (6-3) 3 pontos em seu nível de habilidade.
        </Text>
        <Text>
          Um mago pode deliberadamente levar mais tempo do que o normal para
          realizar uma mágica e, com isso, ganhar um bônus em seu nível da mesma
          forma.
        </Text>
        <Divider />
        <Title className={classes.headers}>
          Duração de Concentração, Especial e Fixo
        </Title>
        <Text>
          Sua concetração é determinada pelo seu nível na perícia
          &quot;meditação&quot;. Quanto maior a habilidade, maior sua capacidade
          de se concentrar.
        </Text>
        <Table captionSide="bottom" highlightOnHover>
          <thead style={{ backgroundColor: "black" }}>
            <tr>
              <th>NH</th>
              <th>Concentração</th>
            </tr>
          </thead>
          <tbody>
            {concentracao.map((t, i) => (
              <tr key={i}>
                <td style={{ textAlign: "center" }}>{i + 12}</td>
                <td style={{ textAlign: "center" }}>{t}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Text>
          Este período pressupõe que o mago esteja relaxado e livre de
          interferências. Se ele estiver distraído por algo, ele deve rolar sua
          “meditação” para evitar perder o controle da magia. Se ele se distrair
          repetidamente, ele deve rolar com uma penalidade cumulativa
          apropriada.
        </Text>
        <Text>
          Alguns efeitos mágicos têm uma duração descrita como “especial”. Isso
          significa que, por uma penalidade adicional de 2 por nível de duração,
          o mago pode aumentar a duração do efeito além do original, desde que
          determine, no momento da conjuração, a duração total do efeito.
        </Text>
        <Text>
          Outros efeitos têm sua duração descrita como “fixa”. Isso significa
          que a duração desses efeitos mágicos não pode ser alterada com
          sucessos. Dura apenas o indicado. Na grande maioria dos casos, são
          efeitos instantâneos ou que duram enquanto o mago se concentra
        </Text>
        <Divider />
        <Title className={classes.headers}>Familiaridade</Title>
        <Text>
          Muitos efeitos mágicos são modificados pela familiaridade do
          conjurador com o alvo. A tabela que relaciona a familiaridade com o
          modificador de habilidade é a seguinte:
        </Text>
        <Table captionSide="bottom" highlightOnHover>
          <thead style={{ backgroundColor: "black" }}>
            <tr>
              <th>Modificador</th>
              <th>Familiaridade</th>
            </tr>
          </thead>
          <tbody>
            {familiaridade.map((f, i) => (
              <tr key={i}>
                <td style={{ textAlign: "center" }}>{f.mod}</td>
                <td>{f.fam}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Divider />
        <Title className={classes.headers}>Perícias Mágicas</Title>
        <SimpleGrid
          mt={60}
          cols={3}
          spacing={50}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          {magicSkills.map(({ icon: Icon, title, description, openModal }) => (
            <Paper
              p="md"
              radius="md"
              className={classes.item}
              key={title}
              onClick={openModal}
            >
              <ThemeIcon
                variant="light"
                className={classes.itemIcon}
                size={60}
                radius="md"
              >
                <h1>
                  <Icon />
                </h1>
              </ThemeIcon>

              <div>
                <Text fw={700} fz="lg" className={classes.itemTitle}>
                  {title}
                </Text>
                <Text c="dimmed">{description}</Text>
              </div>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </ScrollArea>
  );
}

const conjDur = [
  {
    conj: "Instantâneo",
    dur: "Instantâneo",
  },
  {
    conj: "2 segundos",
    dur: "Concentração",
  },
  {
    conj: "5 segundos",
    dur: "1 hora",
  },
  {
    conj: "1 minute",
    dur: "1 semana",
  },
  {
    conj: "5 minutes",
    dur: "1 mês",
  },
  {
    conj: "30 minutes",
    dur: "Uma estação",
  },
  {
    conj: "1 hora",
    dur: "1 ano",
  },
  {
    conj: "3 horas",
    dur: "10 anos",
  },
];

const concentracao = [
  "5 segundos",
  "10 segundos",
  "30 segundos",
  "1 minuto",
  "3 minutos",
  "10 minutos",
  "30 minutos",
  "45 minutos",
  "1 hora",
];

const familiaridade = [
  {
    mod: "+2",
    fam: "Pode ver o alvo",
  },
  {
    mod: "+1",
    fam: "Possui representação física do alvo (Quadro, Estátua)",
  },
  {
    mod: "0",
    fam: "Possui imagem mental do alvo",
  },
  {
    mod: "-2",
    fam: "Sem imagem do alvo",
  },
  {
    mod: "+1",
    fam: "Pode tocar o alvo",
  },
  {
    mod: "0",
    fam: "Possui um objeto que pertence ao alvo",
  },
  {
    mod: "0",
    fam: "As auras do alvo e do conjurador estão se tocando",
  },
  {
    mod: "-2",
    fam: "Não existe contato com o alvo",
  },
  {
    mod: "+2",
    fam: "Sabe o nome verdadeiro do alvo",
  },
  {
    mod: "+2",
    fam: "Conhece o alvo intimamente (Esposo/pai/irmão)",
  },
  {
    mod: "+1",
    fam: "Conhece bem o alvo (Grandes amigos, Amantes)",
  },
  {
    mod: "0",
    fam: "Conhece o alvo minimamente (Amigo, colega de trab)",
  },
  {
    mod: "-1",
    fam: "Conhece de ouvir falar do alvo",
  },
  {
    mod: "-2",
    fam: "Não faz ideia de quem seja o alvo",
  },
];

const magicSkills = [
  {
    icon: GiPotionBall,
    title: "Alquimia",
    description:
      "O estudo das propriedades das ervas e combinação de elementos naturais",
    openModal: OpenAlquimiaModal,
  },
  {
    icon: GiDragonOrb,
    title: "Adivinhação",
    description: "O estudo das razões e caminhos dos deuses",
    openModal: OpenAdivinhacaoModal,
  },
  {
    icon: GiFireSpellCast,
    title: "Elementalismo",
    description: "O estudo e controle das forças elementais da natureza",
  },
  {
    icon: GiMagicPalm,
    title: "Encantamento",
    description: "O estudo da criação de talismãs e bugigangas",
  },
  {
    icon: GiHiveMind,
    title: "Feitiços",
    description:
      "O estudo da ação das forças mágicas sobre a vontade e as percepções mundanas",
  },
  {
    icon: GiQuill,
    title: "Levitação",
    description: "A ciência do controle do movimento à distância",
  },
  {
    icon: GiHalfDead,
    title: "Necromancia",
    description: "O estudo da morte e dos mortos",
  },
  {
    icon: GiHealing,
    title: "Teurgia",
    description: "O estudo da cura através da magia",
  },
  {
    icon: GiTransform,
    title: "Transmutação",
    description: "O estudo da alteração dos corpos (vivos ou não)",
  },
];
