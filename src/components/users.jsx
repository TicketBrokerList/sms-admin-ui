import { useMediaQuery } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, ArrayField, SingleFieldList, ChipField, EditButton, ArrayInput, SimpleFormIterator, TextInput } from "react-admin";
// import MyUrlField from './CustomUrlField';
import * as React from 'react';
import { useRecordContext } from 'react-admin';

const TagsField = () => {
  const record = useRecordContext();
  return (
      <React.Fragment>
          {record.roles.map((item,index) => (
              <div key={index}><b>{item}</b></div>
          ))}
      </React.Fragment>
  )
};



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
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="userName" />
          <TextField source="subscriptionTier" />
          <TextField source="is_active" />
          <TextField source="is_verified" />
          <TagsField source="roles" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};