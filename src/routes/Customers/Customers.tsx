import React, { useState } from "react";
import styles from "./Customer.module.scss";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  MultiSelectBox,
  MultiSelectBoxItem,
} from "@tremor/react";
import { CustomersData, CustomersPerson } from "./CustomersData";
import PageHeader from "../../Layout/PageHeader/PageHeader";

function Customers() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isCustomersPersonSelected = (customers: CustomersPerson) =>
    selectedNames.includes(customers.name) || selectedNames.length === 0;

  return (
    <div className={styles.customers}>
      <PageHeader
        title="Customers"
        content="List of current and past customers"
      />{" "}
      <Card decoration="top" decorationColor="blue">
        <MultiSelectBox
          onValueChange={(value: any) => setSelectedNames(value)}
          placeholder="Select Customer..."
          maxWidth="max-w-xs"
        >
          {CustomersData.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>
        <Table marginTop="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell textAlignment="text-right">ID</TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">Name</TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Phone Number
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Email
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Address
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">City</TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Zip Code
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {CustomersData.filter((item) =>
              isCustomersPersonSelected(item)
            ).map((item) => (
              <TableRow key={item.name}>
                <TableCell textAlignment="text-right">{item.userID}</TableCell>
                <TableCell textAlignment="text-right">{item.name}</TableCell>
                <TableCell textAlignment="text-right">{item.number}</TableCell>
                <TableCell textAlignment="text-right">{item.email}</TableCell>
                <TableCell textAlignment="text-right">{item.address}</TableCell>
                <TableCell textAlignment="text-right">{item.city}</TableCell>
                <TableCell textAlignment="text-right">{item.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default Customers;
