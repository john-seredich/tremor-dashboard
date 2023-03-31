import styles from "./KPICards.module.scss";
import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  ColGrid,
  Icon,
} from "@tremor/react";

import { KPICardData } from "./KPICardsData";
import { KPIColors } from "./KPICardsData";

function KPICards() {
  return (
    <div style={{ width: "100%" }}>
      <ColGrid numColsSm={2} numColsLg={4} gapX="gap-x-6" gapY="gap-y-6">
        {KPICardData.map((item) => (
          <Card
            key={item.title}
            maxWidth="max-w-full"
            decoration="top"
            decorationColor={item.color}
          >
            <Flex alignItems="items-center" justifyContent="justify-start">
              <Icon icon={item.icon} color={item.color} size="lg" />
              <Text>{item.title}</Text>
            </Flex>
            <Flex
              justifyContent="justify-start"
              alignItems="items-baseline"
              spaceX="space-x-3"
              truncate={true}
            >
              <Metric>{item.metric}</Metric>
              <Text truncate={true}>from {item.metricPrev}</Text>
            </Flex>
            <Flex
              justifyContent="justify-start"
              spaceX="space-x-2"
              marginTop="mt-4"
            >
              <BadgeDelta deltaType={item.deltaType} />
              <Flex
                justifyContent="justify-start"
                spaceX="space-x-1"
                truncate={true}
              >
                <Text color={KPIColors[item.deltaType]}>{item.delta}</Text>
                <Text truncate={true}> to previous month </Text>
              </Flex>
            </Flex>
          </Card>
        ))}
      </ColGrid>
    </div>
  );
}

export default KPICards;
