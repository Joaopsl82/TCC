import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informações</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Leia Skywalker</h1>
                <div className="detailItem">
                  <span className="itemKey">E-mail:</span>
                  <span className="itemValue">headphone@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefone:</span>
                  <span className="itemValue">(11) 94002-8922</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemValue">
                    Avenida Paes de Barros, 1045 - Mooca
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">CPF:</span>
                  <span className="itemValue">490.555.538-22</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Últimas Consultas</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
