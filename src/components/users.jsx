import { useMediaQuery } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField  } from "react-admin";
import MyUrlField from './CustomUrlField';
import * as React from 'react';


export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <EmailField source="email" />
          <TextField source="password" />
          <TextField source="name" />
          <TextField source="phone" />
        </Datagrid>
      )}
    </List>
  );
};