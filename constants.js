import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaCreditCard, FaDollarSign, FaGlobeAmericas, FaShoppingCart, FaTrophy } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { ImRocket } from "react-icons/im";


export const LinksDashboard = [
    {
        img: <TbLayoutDashboardFilled />,
        url: '/',
        text: 'Dashboard'
    },
    {
        img: <MdOutlineMapsHomeWork />,
        url: '/tables',
        text: 'Tables'
    },
    {
        img: <FaCreditCard />,
        url: '/billing',
        text: 'Billing'
    },
    {
        img: <IoIosCube />,
        url: '/vr',
        text: 'Virtual Reality'
    },
    {
        img: <FaTools />,
        url: '/rtl',
        text: 'RTL'
    }
]

export const LinksAccountPages = [
    {
        img: <MdManageAccounts />,
        url: '/profile',
        text: 'Profile'
    },
    {
        img: <MdOutlineAssignment />,
        url: '/signin',
        text: 'Sign In'
    },
    {
        img: <ImRocket />,
        url: '/signup',
        text: 'Sign Up'
    },
]

export const DashboardTopBoxes = [
    {
        text: "Today's Money",
        value: "$53,000",
        growth: "+55%",
        AdditionalGrowth: true,
        icon: <FaDollarSign className="text-xl" />
      },
      {
        text: "Today's Users",
        value: "2,300",
        growth: "+3%",
        AdditionalGrowth: true,
        icon: <FaGlobeAmericas className="text-xl" />
      },
      {
        text: "New Clients",
        value: "+3,462",
        growth: "-2%",
        AdditionalGrowth: false,
        icon: <FaTrophy className="text-xl" />
      },
      {
        text: "Sales",
        value: "$103,430",
        growth: "+5%",
        AdditionalGrowth: true,
        icon: <FaShoppingCart className="text-xl" />
      }
];

export const dataDashboardGraphs = [
    { name: 'Apr', uv: 50, pv: 30, sales: 450},
    { name: 'May', uv: 40, pv: 90, sales: 200 },
    { name: 'Jun', uv: 300, pv: 40, sales: 100 },
    { name: 'Jul', uv: 220, pv: 140, sales: 220 },
    { name: 'Aug', uv: 500, pv: 290, sales: 500 },
    { name: 'Sep', uv: 250, pv: 290, sales: 100  },
    { name: 'Oct', uv: 400, pv: 340, sales: 400  },
    { name: 'Nov', uv: 230, pv: 230, sales: 230  },
    { name: 'Dec', uv: 500, pv: 400, sales: 500  },
  ];

export const activeUsersStats = [
    {
        "category": "Users",
        "value": "36K",
        "icon": "📄",
        "gradientFrom": "#FF4081",
        "gradientTo": "#F50057",
        "progress": 36
      },
      {
        "category": "Clicks",
        "value": "2M",
        "icon": "👤",
        "gradientFrom": "#448AFF",
        "gradientTo": "#2979FF",
        "progress": 20
      },
      {
        "category": "Sales",
        "value": "$435",
        "icon": "💳",
        "gradientFrom": "#FF9100",
        "gradientTo": "#FF6D00",
        "progress": 20
      },
      {
        "category": "Items",
        "value": "43",
        "icon": "🧩",
        "gradientFrom": "#F44336",
        "gradientTo": "#D32F2F",
        "progress": 43
      }
]