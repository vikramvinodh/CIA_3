import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/adminpanel/components/pages/login";
import Dashboard from "./components/adminpanel/components/Navbar/Dashboard";
import UserTable from "./components/adminpanel/components/pages/User-CRED/UserTable";
import Edit from "./components/adminpanel/components/pages/User-CRED/EditUser";
import UserState from "./components/adminpanel/context/Userstate";
import CreateUser from "./components/adminpanel/components/pages/User-CRED/CreateUser";
import ChangePassword from "./components/adminpanel/components/pages/User-CRED/Change_password";
import ScrollToTop from './ScrollTop';
import DashHome from './components/adminpanel/components/pages/DashHome'
import Loading from './components/alert/Loading';
import CreateBlog from "./components/adminpanel/components/Blogs/CreateBlog"
import CreateBlogCategory from './components/adminpanel/components/Blogs/Categroy_CRED/CreateBlogCategory';
import CreateBlogAuthor from './components/adminpanel/components/Blogs/Author_CRED/CreateBlogAuthor';
import EditBlogCategory from './components/adminpanel/components/Blogs/Categroy_CRED/EditBlogCategory';
import ManageBlogs from './components/adminpanel/components/Blogs/Categroy_CRED/ManageBlogs';
import ManageAuthor from './components/adminpanel/components/Blogs/Author_CRED/ManageAuthor';
import EditAuthor from './components/adminpanel/components/Blogs/Author_CRED/EditAuthor';
import EditComponent from './components/adminpanel/components/Blogs/jodit/EditComponent';
import BlogList from './components/adminpanel/components/Blogs/Categroy_CRED/BlogsList';


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <UserState>
          <React.Suspense fallback={<Loading />}>
            <Routes>
              {/* home page route */}
              <Route path="/" element={<Login />} />

              {/* Dashboard Routes for the adminPanel */}
              <Route path="/dashboard" element={<Dashboard />} >
                <Route path="home" element={<DashHome />} />

                {/* User Routers */}
                <Route path="users" element={<UserTable />} />
                <Route path="create-user" element={<CreateUser />} />
                <Route path="edit/:id" element={<Edit />} />
                <Route path="change-password" element={<ChangePassword />} />

                {/* Blogs */}
                <Route path="manage-blogs" element={<ManageBlogs />} />
                <Route path="manage-authors" element={<ManageAuthor />} />
                <Route path="create-blog/list?/category?/author?" element={<CreateBlog />} />
                <Route path="create-category" element={<CreateBlogCategory />} />
                <Route path="edit-category/:id" element={<EditBlogCategory />} />
                <Route path="edit-author/:id" element={<EditAuthor />} />
                <Route path="edit-blog/list?/:id" element={<EditComponent />} />
                <Route path="create-author" element={<CreateBlogAuthor />} />
                <Route path="blog-list" element={<BlogList />} />
              </Route>
            </Routes>
          </React.Suspense>
        </UserState>
      </BrowserRouter>
    </>
  );
}

export default App;