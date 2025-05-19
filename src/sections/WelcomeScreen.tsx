import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled components
const WelcomeScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.isExiting ? 0 : 1)};
`;

const WelcomeText = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: #021963;
  animation:
    ${fadeInUp} 1s forwards,
    ${fadeOut} 1s forwards 2s;
  font-family: "Arial", sans-serif;
`;

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 3 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    // Remove component completely after exit animation completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    // Clean up timers
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <WelcomeScreenContainer isExiting={isExiting}>
      <WelcomeText>Welcome to my portfolio</WelcomeText>
    </WelcomeScreenContainer>
  );
};

export default WelcomeScreen;
