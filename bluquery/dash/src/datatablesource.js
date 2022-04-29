export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Nome do Paciente",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 230,
  },

  {
    field: "age",
    headerName: "Idade",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Gustavo dos Santos",
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "ativo",
    email: "guglacake@gmail.com",
    age: 24,
  },
  {
    id: 2,
    username: "Daniel Joseph",
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "danieljp@gmail.com",
    status: "ativo",
    age: 30,
  },
  {
    id: 3,
    username: "Dudu Souza",
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dudu@gmail.com",
    status: "pendente",
    age: 45,
  },
  {
    id: 4,
    username: "Leia Skywalker",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "headphone@gmail.com",
    status: "ativo",
    age: 16,
  },
  {
    id: 5,
    username: "Rita Cadilac",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "ritinha@gmail.com",
    status: "desativado",
    age: 22,
  },
];
