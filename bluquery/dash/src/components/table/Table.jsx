import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      customer: "Gustavo dos Santos",
      img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      sector: "Ortopedia",
      date: "20/04/2022",
      amount: "R$500",
      method: "Cartão de Crédito",
      status: "Aprovado",
    },
    {
      id: 2235235,
      customer: "Daniel Joseph",
      img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      sector: "Ortopedia",
      date: "13/03/2022",
      amount: "R$900",
      method: "Boleto",
      status: "Pendente",
    },
    {
      id: 2342353,
      customer: "Dudu Souza",
      img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      sector: "Ortopedia",
      date: "05/03/2022",
      amount: "R$200",
      method: "Carrtão de Crédito",
      status: "Aprovado",
    },
    {
      id: 2357741,
      customer: "Leia Skywalker",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      sector: "Ortopedia",
      date: "18/02/2022",
      amount: "R$920",
      method: "Cartão de Crédito",
      status: "Pendente",
    },
    {
      id: 2342355,
      customer: "Rita Cadilac",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      sector: "Ortopedia",
      date: "15/01/2022",
      amount: "R$1000",
      method: "Boleto",
      status: "Pendente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Nome do Paciente</TableCell>
            <TableCell className="tableCell">Setor Atendido</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Valor</TableCell>
            <TableCell className="tableCell">Forma de Pagamento</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.customer}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.sector}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
