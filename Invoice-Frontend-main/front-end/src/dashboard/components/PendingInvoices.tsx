import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from "@mui/material";

const pendingInvoices = [
  { id: "INV-001", client: "Acme Corp", amount: "$500", dueDate: "2025-03-01" },
  { id: "INV-002", client: "Beta Ltd", amount: "$750", dueDate: "2025-03-05" },
];

const PendingInvoices = () => {
  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Pending Invoices
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Invoice #</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PendingInvoices;
