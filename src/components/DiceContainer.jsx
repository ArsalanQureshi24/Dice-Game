import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../redux/slices/gameSlice";
import React from "react";

// Pre-load dice images
const diceImageImports = [
  new URL('../assets/dice_1.png', import.meta.url).href,
  new URL('../assets/dice_2.png', import.meta.url).href,
  new URL('../assets/dice_3.png', import.meta.url).href,
  new URL('../assets/dice_4.png', import.meta.url).href,
  new URL('../assets/dice_5.png', import.meta.url).href,
  new URL('../assets/dice_6.png', import.meta.url).href
];

// Preload images
diceImageImports.forEach(src => {
  const img = new Image();
  img.src = src;
});
 
const DiceContainer = React.memo(() => {
    const {guessedNumber, showRules} = useSelector(store => store.game)
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(null)
    const [isRolling, setIsRolling] = useState(false)
    const rollInterval = useRef(null)
    
    // Memoize dice images array
    const diceImages = useMemo(() => diceImageImports, [])
   
    const handleDiceRoll = useCallback(() => {
        if(!guessedNumber){
            alert("First Guess a Number!!!")
            return;
        } 
        if (isRolling) return
        setIsRolling(true)
        
        // Reduced animation interval for better performance
        rollInterval.current = setInterval(() => {
            setActiveIndex(prevIndex => {
                const newIndex = Math.floor(Math.random() * diceImages.length);
                return newIndex === prevIndex ? (newIndex + 1) % 6 : newIndex;
            });
        }, 100) // Slightly increased interval for smoother animation
        
        const finalIndex = Math.floor(Math.random() * diceImages.length)
        
        // Use requestAnimationFrame for smoother animation
        const animationEndTime = performance.now() + 800;
        const animate = () => {
            if (performance.now() < animationEndTime) {
                requestAnimationFrame(animate);
            } else {
                clearInterval(rollInterval.current);
                setActiveIndex(finalIndex);
                setIsRolling(false);
                
                // Batch these updates together
                dispatch(gameActions.diceNumber(finalIndex + 1));
                dispatch(gameActions.updateScore());
                dispatch(gameActions.resetGuessNumber());
            }
        };
        requestAnimationFrame(animate);

        
    })
 
    useEffect(() => {
        return () => {
            if (rollInterval.current) clearInterval(rollInterval.current)
        }
    }, [])
    
return (
    <div className="px-4 py-5 my-5 text-center">
        {activeIndex === null ? (
            <div 
                className={`d-block mx-auto mb-4 dice-btn d-flex justify-content-center align-items-center ${isRolling ? 'rolling' : ''}`} 
                onClick={handleDiceRoll}
            >
                <p>I'm the Dice</p>
            </div>
        ) : (
            <img 
                className={`d-block mx-auto mb-4 dice-image ${isRolling ? 'rolling' : ''}`} 
                src={diceImages[activeIndex]} 
                alt={`Dice showing ${activeIndex + 1}`}
                width="72" 
                height="57" 
                onClick={handleDiceRoll}
                style={{ willChange: 'transform' }}
            />
        )}
        
        
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
});

export default DiceContainer;
