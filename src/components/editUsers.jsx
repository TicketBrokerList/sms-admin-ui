import {
    Edit,
    BooleanInput,
    SelectInput,
    CheckboxGroupInput,
    SimpleForm,
    TextInput,
    TextField,

} from 'react-admin';

export const EditUser = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="email" disabled />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="userName" />
            <SelectInput source="subscriptionTier" choices={[
                { id: 'Basic', name: 'Basic' },
                { id: 'Premium', name: 'Premium' },
                { id: 'Enterpise', name: 'Enterpise' },
            ]} />
            <BooleanInput source="is_active" />
            <BooleanInput source="is_verified" disabled />
            <CheckboxGroupInput source="roles" choices={[
                { id: 'user', name: 'user' },
                { id: 'admin', name: 'admin' },
            ]} />
        </SimpleForm>
    </Edit>
);