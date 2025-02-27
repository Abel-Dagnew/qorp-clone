import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Invoices", icon: <ReceiptIcon />, path: "/invoices" },
  { text: "Clients", icon: <PeopleIcon />, path: "/clients" },
  { text: "My Company", icon: <BusinessIcon />, path: "/company" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Sign Out", icon: <ExitToAppIcon />, path: "/logout" },
];

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        {menuItems.map((item) => (
          <Link key={item.text} href={item.path} passHref>
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
