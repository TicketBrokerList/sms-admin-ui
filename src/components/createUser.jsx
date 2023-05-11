import {
    Create,
    BooleanInput,
    SelectInput,
    CheckboxGroupInput,
    SimpleForm,
    TextInput,
    PasswordInput
} from 'react-admin';

export const CreateUser = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="userName" />
            <PasswordInput source="password" />
            <SelectInput source="subscriptionTier" choices={[
                { id: 'Basic', name: 'Basic' },
                { id: 'Premium', name: 'Premium' },
                { id: 'Enterpise', name: 'Enterpise' },
            ]} />
            <BooleanInput source="is_active" />
            <CheckboxGroupInput source="roles" choices={[
                { id: 'user', name: 'user' },
                { id: 'admin', name: 'admin' },
            ]} />
        </SimpleForm>
    </Create>
);