import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdAttachMoney, MdOutlineMapsHomeWork } from "react-icons/md";
import { FaBell, FaCreditCard, FaDollarSign, FaGlobeAmericas, FaKey, FaShoppingCart, FaTrophy } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { ImRocket } from "react-icons/im";
import atlassian from '@/public/assets/images/small-logos/logo-atlassian.svg' 
import invision from '@/public/assets/images/small-logos/logo-invision.svg' 
import jira from '@/public/assets/images/small-logos/logo-jira.svg' 
import slack from '@/public/assets/images/small-logos/logo-slack.svg' 
import spotify from '@/public/assets/images/small-logos/logo-spotify.svg' 
import xd from '@/public/assets/images/small-logos/logo-xd.svg' 
import team1 from '@/public/assets/images/team-1.jpg' 
import team2 from '@/public/assets/images/team-2.jpg' 
import team3 from '@/public/assets/images/team-3.jpg' 
import { FaBoxArchive } from "react-icons/fa6";


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

export const TableDashboardData = {
    headers: [{name: 'COMPANIES', justify: 'left'}, {name: 'MEMBERS', justify: 'left'}, {name: 'BUDGET', justify: 'center'}, {name: 'COMPLETION', justify: 'center'}],
    data: [
      {
        company: { icon: xd, name: "Soft UI XD Version" },
        members: [team1, team2, team3],
        budget: "$14,000",
        completion: { value: '50', gradientFrom: '#21ccfe', gradientTo: '#215aff' }
      },
      {
        company: { icon: atlassian, name: "Add Progress Track" },
        members: [team1, team2],
        budget: "$3,000",
        completion: { value: '15', gradientFrom: '#21ccfe', gradientTo: '#215aff' }
      },
      {
        company: { icon: slack, name: "Fix Platform Errors" },
        members: [team2, team3],
        budget: "Not set",
        completion: { value: '100', gradientFrom: '#93ea2e', gradientTo: '#1db037' }
      },
      {
        company: { icon: spotify, name: "Launch our Mobile App" },
        members: [team1, team2, team3],
        budget: "$20,500",
        completion: { value: '100', gradientFrom: '#93ea2e', gradientTo: '#1db037' }
      },
      {
        company: { icon: jira, name: "Add the New Pricing Page" },
        members: [team3],
        budget: "$500",
        completion: { value: '30', gradientFrom: '#21ccfe', gradientTo: '#215aff' }
      },
      {
        company: { icon: invision, name: "Redesign New Online Shop" },
        members: [team1, team3],
        budget: "$2,000",
        completion: { value: '40', gradientFrom: '#21ccfe', gradientTo: '#215aff' }
      }
    ]
}

export const dashboardLogs = [
  {title: '$2400, Design changes', description: '22 DEC 7:20 PM', icon: <FaBell style={{color: '#82D616'}} className="text-lg" />},
  {title: 'New order #1832412', description: '21 DEC 11 PM', icon: <FaBoxArchive style={{color: '#EA0606'}} className="text-lg " />},
  {title: 'Server payments for April', description: '21 DEC 9:34 PM', icon: <FaShoppingCart style={{color: '#2152FF'}} className="text-lg " />},
  {title: 'New card added for order #4395133', description: '20 DEC 2:20 AM', icon: <FaCreditCard style={{color: '#f77936'}} className="text-lg " />},
  {title: 'New card added for order #4395133', description: '18 DEC 4:54 AM', icon: <FaKey style={{color: '#c017a5'}} className="text-lg " />},
  {title: 'New order #9583120', description: '17 DEC', icon: <MdAttachMoney style={{color: '#282d4b'}} className="text-lg " />},
]