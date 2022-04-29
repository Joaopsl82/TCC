import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Faturamento</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={75} text={"75%"} strokeWidth={5} />
        </div>
        <p className="title">Total faturado com consultas</p>
        <p className="amount">R$8.000</p>
        <p className="desc">
        Processamento de transações anteriores. Os últimos pagamentos não podem ser incluídos.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">R$30.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Semana Passada</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">R$15k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Último Mês</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">R$25k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
