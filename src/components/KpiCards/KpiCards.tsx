import {
  Flex,
  Card,
  Text,
  Metric,
  BadgeDelta,
  Footer,
  ButtonInline,
} from "@tremor/react";
import styles from "./KpiCards.module.scss";
import { kpiData } from "../../data/kpiData";
import { FiArrowRight } from "react-icons/fi";

function KpiCards() {
  return (
    <>
      {kpiData.map((item) => (
        <div className={styles.kpi_card}>
          <Card key={item.title}>
            <Flex alignItems="items-start">
              <Text>{item.title}</Text>
              <BadgeDelta deltaType={item.deltaType} text={item.delta} />
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

            <Footer>
              <ButtonInline
                size="sm"
                text="View details"
                icon={FiArrowRight}
                iconPosition="right"
              />
            </Footer>
          </Card>
        </div>
      ))}
    </>
  );
}

export default KpiCards;
