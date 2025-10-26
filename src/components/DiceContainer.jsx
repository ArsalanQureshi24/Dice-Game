import { useState, useRef, useEffect } from "react";;
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../redux/slices/gameSlice";
 
const DiceContainer = () => {
    const {guessedNumber,showRules} = useSelector(store => store.game)
    const dispatch = useDispatch();
    const [activeIndex,setActiveIndex] = useState(null)
    const [isRolling, setIsRolling] = useState(false)
    const diceImages = ["dice_1.png","dice_2.png","dice_3.png","dice_4.png","dice_5.png","dice_6.png"]
    const rollInterval = useRef(null)
   
    const handleDiceRoll = () => {
        if(!guessedNumber){
            alert("First Guess a Number!!!")
            return;
        } 
        if (isRolling) return
        setIsRolling(true)
        
        rollInterval.current = setInterval(() => {
            setActiveIndex(Math.floor(Math.random() * diceImages.length))
        }, 80)
        const duration = 800 // ms, adjust for longer/shorter roll
        const finalIndex = Math.floor(Math.random() * diceImages.length)
        setTimeout(() => {
            clearInterval(rollInterval.current)
            setActiveIndex(finalIndex)
            setIsRolling(false)
            
            dispatch(gameActions.diceNumber(finalIndex + 1)) 
            dispatch(gameActions.resetGuessNumber())
        }, duration)

        
    }
 
    useEffect(() => {
        return () => {
            if (rollInterval.current) clearInterval(rollInterval.current)
        }
    }, [])
    
return (
    <div className="px-4 py-5 my-5 text-center ">
        {activeIndex === null ? <div className={`d-block mx-auto mb-4 dice-btn d-flex justify-content-center align-items-center ${isRolling ? 'rolling' : ''}`} onClick={() => handleDiceRoll()}>
            <p>I'm the Dice</p>
        </div> : <img className={`d-block mx-auto mb-4 dice-image ${isRolling ? 'rolling' : ''}`} src={`${diceImages[activeIndex]}`} alt="" width="72" height="57" onClick={() => handleDiceRoll()}/>}
        
        
        <p className="display-5 text-body-emphasis dice-text">Click on Dice to roll</p>
        <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3 reset-score-btn" onClick={() => dispatch(gameActions.resetScore())}>
                    Reset Score
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4 show-rules-btn" onClick={() => dispatch(gameActions.markShowRules())}>
                    {showRules ? 'Hide Rules' : 'Show Rules'}
                    
                </button>
            </div>
        </div>
        
    </div>
);
};

export default DiceContainer;
