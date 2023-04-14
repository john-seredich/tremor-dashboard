import React, { useState } from "react";
import styles from "./Manage.module.scss";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  MultiSelectBox,
  MultiSelectBoxItem,
  Icon,
} from "@tremor/react";
import { ManageData, SalesPerson } from "./ManageData";
import avatar1 from "../../assets/avatar.jpg";
import PageHeader from "../../Layout/PageHeader/PageHeader";

function Manage() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    selectedNames.includes(salesPerson.name) || selectedNames.length === 0;

  return (
    <div className={styles.manage}>
      <PageHeader title="Manage" content="Sales Represintives" />{" "}
      <Card decoration="top" decorationColor="blue">
        <MultiSelectBox
          onValueChange={(value: any) => setSelectedNames(value)}
          placeholder="Select Salespeople..."
          maxWidth="max-w-xs"
        >
          {ManageData.map((item) => (
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
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Leads
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Sales ($)
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Quota ($)
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Variance
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Region
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                Status
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ManageData.filter((item) => isSalesPersonSelected(item)).map(
              (item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <div className={styles.manage__name}>
                      <img
                        className={styles.manage__img}
                        src={item.image}
                        alt=""
                      />
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell textAlignment="text-right">{item.leads}</TableCell>
                  <TableCell textAlignment="text-right">{item.sales}</TableCell>
                  <TableCell textAlignment="text-right">{item.quota}</TableCell>
                  <TableCell textAlignment="text-right">
                    {item.variance}
                  </TableCell>
                  <TableCell textAlignment="text-right">
                    {item.region}
                  </TableCell>
                  <TableCell textAlignment="text-right">
                    <BadgeDelta deltaType={item.deltaType} size="xs" />
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default Manage;
