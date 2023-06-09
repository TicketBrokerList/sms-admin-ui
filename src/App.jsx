import { Admin, Resource } from "react-admin";
import { UserList } from './components/users';
// import { PostList } from './components/posts';
// import { PostEdit } from './components/editPosts'
// import { PostCreate } from "./components/createPost";
import { Dashboard } from "./components/dashboard";
// import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { MyLayout } from "./components/customAppBar";
import { authProvider } from "./api/authProvider";
import { dataProvider } from "./api/dataProvider";
import { EditUser } from './components/editUsers';
import { CreateUser } from './components/createUser';


const App = () => (
  <Admin authProvider={authProvider} layout={MyLayout} dataProvider={dataProvider}>
    <Resource name="dashboard" list={Dashboard} icon={DashboardIcon} />
    <Resource name="users" list={UserList} edit={EditUser} create={CreateUser}  icon={UserIcon} //recordRepresentation="name"
    />
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
  </Admin>
);

export default App;