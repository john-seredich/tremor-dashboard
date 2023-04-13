import React from "react";
import {
  Card,
  List,
  ListItem,
  Icon,
  Text,
  Bold,
  Flex,
  Title,
  Button,
  Color,
  ColGrid,
} from "@tremor/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { DataTransactionMonths } from "./DashTransactionData";

function DashTransaction() {
  return (
    <div>
      <ColGrid numColsSm={1} numColsLg={1}>
        {DataTransactionMonths.map((item) => (
          <Card
            key={item.name}
            decoration="top"
            decorationColor="blue"
            maxWidth="max-w-3xl"
            hFull={true}
          >
            <Title>Transaction Volume</Title>
            <Text>{item.name}</Text>
            <List marginTop="mt-4">
              {item.data.map((transaction) => (
                <ListItem key={transaction.name}>
                  <Flex
                    justifyContent="justify-start"
                    truncate={true}
                    spaceX="space-x-4"
                  >
                    <Icon
                      variant="light"
                      icon={transaction.icon}
                      size="md"
                      color={transaction.color}
                    />
                    <div style={{ marginTop: ".9rem" }}>
                      <Text truncate={true}>
                        <Bold>{transaction.name}</Bold>
                      </Text>
                      <Text truncate={true}>
                        {`${transaction.numTransactions} transactions`}
                      </Text>
                    </div>
                  </Flex>
                  <Text>{transaction.amount}</Text>
                </ListItem>
              ))}
            </List>
            <Button
              size="sm"
              variant="light"
              icon={HiArrowNarrowRight}
              iconPosition="right"
              marginTop="mt-4"
            >
              View details
            </Button>
          </Card>
        ))}
      </ColGrid>
    </div>
  );
}

export default DashTransaction;
