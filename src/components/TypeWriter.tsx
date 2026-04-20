import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
}

export const TypeWriter = ({
  words,
  className = "",
  speed = 80,
  pauseDuration = 2000,
}: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(word.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : currentText.length === word.length ? pauseDuration : speed
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse inline-block ml-0.5">|</span>
    </span>
  );
};
