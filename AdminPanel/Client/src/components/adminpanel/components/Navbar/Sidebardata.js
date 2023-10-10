import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as fa from 'react-icons/fa';
import * as bi from 'react-icons/bi';
import * as bs from 'react-icons/bs'
import * as cg from 'react-icons/cg'

export const Sidebardata = [
  {
    label: 'Dashboard',
    path: '/dashboard/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
  },

  {
    label: 'Users',
    icon: <fa.FaUserSecret />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        label: 'Users',
        path: 'users',
        icon: <RiIcons.RiUserStarFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Create-user',
        path: 'create-user',
        icon: <IoIcons.IoIosCloud />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      }
    ]
  },

  {
    label: 'Blogs',
    icon: <fa.FaMicroblog />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    _subNav: [
      {
        label: 'Artical List',
        path: 'blog-list',
        icon: <bs.BsListCheck />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Manage Blogs',
        path: 'manage-blogs',
        icon: <fa.FaBloggerB />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Manage Authors',
        path: 'manage-authors',
        icon: <bs.BsFillPersonPlusFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
    ],
    get subNav() {
      return this._subNav;
    },
    set subNav(value) {
      this._subNav = value;
    },
  },
];

export const sales = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
  },
  {
    label: 'Leads',
    path: 'leads-list',
    icon: <bi.BiArchiveIn />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
  },
];

export const publisher = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
  },
  {
    label: 'Loaction & Categories',
    icon: <fa.FaFirefoxBrowser />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        label: 'Categories',
        path: 'courses-list',
        icon: <bi.BiCategory />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Location',
        path: 'location',
        icon: <bi.BiCurrentLocation />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },

    ]
  },


  {
    label: 'Courses',
    icon: <bi.BiListCheck />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        label: 'Pages-List',
        path: 'pages',
        icon: <fa.FaClipboardList />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Create-Bulk-Pages',
        path: 'create-page',
        icon: <RiIcons.RiCheckboxMultipleBlankLine />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Create-Single-Pages',
        path: 'create-page/singlePage',
        icon: <IoIcons.IoMdCreate />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Bulk Update',
        path: 'bulk',
        icon: <bi.BiUpload />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Static-Content',
        path: 'static-content',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
    ]
  },
  {
    label: 'Media',
    icon: <bi.BiCloudUpload />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        label: 'Gallery',
        path: 'edit-gallery',
        icon: <bs.BsCreditCard2FrontFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Upload-Gallery',
        path: 'upload-gallery',
        icon: <RiIcons.RiGalleryFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Upload-Tools',
        path: 'upload-tools-gallery',
        icon: <bs.BsTools />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      }

    ]
  },

  {
    label: 'Testimonials',
    icon: <bi.BiCommentEdit />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        label: "Testimonials",
        path: 'testimonials',
        icon: <RiIcons.RiUserStarFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: "Create-Testimonials",
        path: 'create-testimonials',
        icon: <RiIcons.RiUserStarFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
    ]
  },

  {
    label: 'Others',
    icon: <IoIcons.IoMdRocket />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        label: "Trainer",
        path: 'trainers',
        icon: <RiIcons.RiUserStarFill />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Create - Trainer',
        path: 'create-trainer',
        icon: <IoIcons.IoIosCloud />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      },
      {
        label: 'Delete Course-Page',
        path: 'delete-course',
        icon: <RiIcons.RiDeleteBin2Line />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
      }
    ]
  },
];

