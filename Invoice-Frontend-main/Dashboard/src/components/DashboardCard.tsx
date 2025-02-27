import { Card, CardContent, Typography } from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string;
  color: string;
}

const DashboardCard = ({ title, value, color }: DashboardCardProps) => {
  return (
    <Card sx={{ backgroundColor: color, color: "#fff", minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
