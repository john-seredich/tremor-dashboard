export type CustomersPerson = {
  userID: string;
  name: string;
  number: string;
  email: string;
  address: string;
  city: string;
  zipcode: string;
};
export const CustomersData: CustomersPerson[] = [
  {
    userID: "1",
    name: "Peter Doe",
    number: "(800)500-3212",
    email: "peterdoe@gmail.com",
    address: "1212 Prettier Street, Austin",
    city: "MD",
    zipcode: "21344",
  },
  {
    userID: "2",
    name: "Lena Whitehouse",
    number: "(623)122-3536",
    email: "lenawhite@gmail.com",
    address: "512 Easter Ave, Johnstown",
    city: "TX",
    zipcode: "21344",
  },
  {
    userID: "3",
    name: "Phil Less",
    number: "(320)450-7172",
    email: "philless12@gmail.com",
    address: "63141 Wenter Street, Menely",
    city: "GA",
    zipcode: "21344",
  },
  {
    userID: "4",
    name: "John Camper",
    number: "(120)090-4261",
    email: "camperjohn@gmail.com",
    address: "5121 Eastern Ave, Los Angeles",
    city: "CA",
    zipcode: "21344",
  },
  {
    userID: "5",
    name: "Max Balmoore",
    number: "(720)910-0023",
    email: "maxbalmoore3@gmail.com",
    address: "7122 Sycamore Street, Denver",
    city: "CO",
    zipcode: "21344",
  },
  {
    userID: "6",
    name: "Peter Moore",
    number: "(510)440-5843",
    email: "petermoore@gmail.com",
    address: "8912 Rokmae Lane, Fallarbor",
    city: "FL",
    zipcode: "21344",
  },
  {
    userID: "7",
    name: "Joe Sachs",
    number: "(210)564-3222",
    email: "joesachs@gmail.com",
    address: "2341 Denver Street, Aspen",
    city: "CO",
    zipcode: "21344",
  },
];
