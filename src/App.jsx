import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from './components/users';
import { PostList } from './components/posts';
import { PostEdit } from './components/editPosts'
import { PostCreate } from "./components/createPost";
import { Dashboard } from "./components/dashboard";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { MyLayout } from "./components/customAppBar";
import { authProvider } from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin authProvider={authProvider} layout={MyLayout} dataProvider={dataProvider}>
    <Resource name="dashboard" list={Dashboard} icon={DashboardIcon}/>
    <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);

export default App;