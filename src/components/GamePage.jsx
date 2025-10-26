import { useSelector } from "react-redux";
import DiceContainer from "./DiceContainer";
import Header from "./Header";
import Rules from "./Rules";
const GamePage = () => {
  const {showRules} = useSelector((store) => store.game);
  return (
    <>
      <Header />
      <DiceContainer />
      {showRules && <Rules />}
      
    </>
  );
};

export default GamePage;
