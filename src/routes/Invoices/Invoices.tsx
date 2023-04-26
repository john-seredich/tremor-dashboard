import React from "react";
import styles from "./Invoices.module.scss";
import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
} from "@tremor/react";
import avatar from "../../assets/avatar2.jpg";

import { invoiceTransactions, invoiceColors } from "./InvoicesData";
import PageHeader from "../../Layout/PageHeader/PageHeader";

function Invoices() {
  return (
    <div className={styles.invoices}>
      <PageHeader title="Invoices" content="Clients" />
      <Card decoration="top" decorationColor="blue">
        <Flex justifyContent="justify-start" spaceX="space-x-2">
          <Title>Purchases</Title>
          <Badge color="gray" text="8" />
        </Flex>
        <Text marginTop="mt-2">Overview of this month's purchases</Text>

        <Table marginTop="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Transaction ID</TableHeaderCell>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Item</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Amount
              </TableHeaderCell>
              <TableHeaderCell>Link</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceTransactions.map((item) => (
              <TableRow key={item.transactionID}>
                <TableCell>{item.transactionID}</TableCell>
                <TableCell>
                  <div className={styles.invoices__name}>
                    <img
                      className={styles.invoices__img}
                      src={item.image}
                      alt={item.user}
                    />
                    <p>{item.user}</p>
                  </div>
                </TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>
                  <Badge
                    color={invoiceColors[item.status]}
                    size="xs"
                    text={item.status}
                  />
                </TableCell>
                <TableCell textAlignment="text-right">{item.amount}</TableCell>
                <TableCell>
                  <Button size="xs" variant="secondary" color="gray">
                    See details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default Invoices;
