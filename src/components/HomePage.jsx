
import diceHomeImg from '../assets/dice_home_page_img.png';

const HomePage = ({ handleOnCLick }) => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        {" "}
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {" "}
          <div className="col-10 col-sm-8 col-lg-6">
            {" "}
            <img
              src={diceHomeImg}
              className="d-block mx-lg-auto img-fluid"
              alt="Dice Image"
              width="700"
              height="500"
              loading="lazy"
            />{" "}
          </div>{" "}
          <div class="col-lg-6">
            {" "}
            <div  className="name-container">
            <h1 className="dice-game-heading">Dice game</h1>
        <button
          type="button"
          className="btn btn-dark btn-size btn-lg px-4 me-md-2"
          onClick={() => handleOnCLick()}
        >
          Play Now
        </button>
        </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default HomePage;
