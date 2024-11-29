import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoPage = () => {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [showRules, setShowRules] = useState(true);
  const [errorCount, setErrorCount] = useState(0);

  const containerWidth = 400;
  const containerHeight = 600;

  // Generate a new star
  const generateStar = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const newStar = {
      id,
      x: Math.floor(Math.random() * (containerWidth - 30)),
      y: 0,
      speed: Math.random() * 1 + 0.5,
    };
    setStars((prevStars) => [...prevStars, newStar]);
  };

  // Move stars downward
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({ ...star, y: star.y + star.speed }))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Generate stars at intervals
  useEffect(() => {
    const interval = setInterval(generateStar, 2000);
    return () => clearInterval(interval);
  }, []);

  // Play miss sound dynamically
  const playMissSound = useCallback(() => {
    if (!isSoundEnabled) return;
    import("../image/miss.wav").then((module) => {
      const missSound = new Audio(module.default);
      missSound.play();
    });
  }, [isSoundEnabled]);

  // Handle missed stars
  useEffect(() => {
    const missedStars = stars.filter((star) => star.y >= containerHeight);
    if (missedStars.length > 0) {
      setMissed((prevMissed) => {
        const newMissed = prevMissed + missedStars.length;

        if (newMissed > 5 && errorCount < 2) {
          setErrorCount((prevError) => prevError + 1);
          setIsSoundEnabled(false);
          toast.error("You missed too many stars! Sound has been muted.", {
            position: "top-center",
          });
        }

        if (newMissed >= 10) {
          toast.error("You missed 10 stars! Redirecting to home page...", {
            position: "top-center",
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }

        return newMissed;
      });
      setStars((prevStars) =>
        prevStars.filter((star) => star.y < containerHeight)
      );
      playMissSound();
    }
  }, [stars, playMissSound, errorCount]);

  // Play click sound dynamically
  const playClickSound = useCallback(() => {
    if (!isSoundEnabled) return;
    import("../image/audio.wav").then((module) => {
      const clickSound = new Audio(module.default);
      clickSound.play();
    });
  }, [isSoundEnabled]);

  // Handle star click
  const handleStarClick = (id) => {
    playClickSound();
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
    setScore((prevScore) => {
      const newScore = prevScore + 1;

      if (newScore >= 10 && !isSoundEnabled) {
        setIsSoundEnabled(true);
        toast.success("Great job! Sound has been re-enabled.", {
          position: "top-center",
        });
      }

      return newScore;
    });
  };

  // Close rules modal
  const closeRules = () => {
    setShowRules(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle, #2c3e50, #3498db, #9b59b6)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <ToastContainer />

      {/* Rules Modal */}
      {showRules && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#34495e",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.7)",
            zIndex: 10,
          }}
        >
          <h2>Welcome to the Star Catch Game!</h2>
          <p style={{ marginBottom: "1rem" }}>
            - If you miss 5 stars, the sound will be muted. <br />
            - If you miss 10 stars, you'll be redirected to the home page.
          </p>
          <button
            onClick={closeRules}
            style={{
              padding: "10px 20px",
              background: "#e74c3c",
              border: "none",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Start Game
          </button>
        </div>
      )}

      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#f39c12" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
        Oops! Looks like you're lost in space. Catch the stars to pass the time.
      </p>

      <button
        onClick={() => setIsSoundEnabled(!isSoundEnabled)}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          background: isSoundEnabled ? "#e74c3c" : "#2ecc71",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        {isSoundEnabled ? "Mute Sound" : "Unmute Sound"}
      </button>

      <div
        style={{
          position: "relative",
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          background: "rgba(0,0,0,0.7)",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.8)",
          marginBottom: "20px",
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            style={{
              position: "absolute",
              top: `${star.y}px`,
              left: `${star.x}px`,
              width: "30px",
              height: "30px",
              backgroundColor: "yellow",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(255,255,0,1)",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>

      <div>
        <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
          Score: <span style={{ color: "#2ecc71" }}>{score}</span>
        </h2>
        <h4 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Missed Stars: <span style={{ color: "#e74c3c" }}>{missed}</span>
        </h4>
      </div>

      <div>
        <a
          href="/"
          style={{
            textDecoration: "none",
            padding: "10px 15px",
            fontSize: "1rem",
            background: "#3498db",
            color: "#fff",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Back to Home
        </a>
        <a
          href="/contact"
          style={{
            textDecoration: "none",
            padding: "10px 15px",
            fontSize: "1rem",
            background: "transparent",
            border: "2px solid #fff",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default NoPage;
