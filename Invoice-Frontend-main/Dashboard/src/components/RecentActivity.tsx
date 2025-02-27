import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const activityLog = [
  { message: "Invoice INV-001 was paid by Acme Corp", timestamp: "10 minutes ago" },
  { message: "Invoice INV-002 was issued to Beta Ltd", timestamp: "1 hour ago" },
];

const RecentActivity = () => {
  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activityLog.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity.message} secondary={activity.timestamp} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity;
