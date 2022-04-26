import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const history = useNavigate();
  return (
    <div className="container card py-5 px-5">
      <div className="row">
        <div className="avatar col-4">
          <img src="http://gamemod-pc.ru/wp-content/uploads/2019/12/main_2x.jpg" />
        </div>
        <div className="profile-info col-4 mx-5">
          <h3 className="profile-name">Рик</h3>
          <p>
            Невероятно крутой ученый путешествует по галактике в компании со
            своим не менее крутым внуком
          </p>
          <div className="d-flex flex-column lign-center">
            <button className="btn btn-primary my-3">
              Редактировать профиль
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => history("/")}
            >
              К постам!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
