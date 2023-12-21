import { useEffect, useState } from "react";

interface IProgressBarProps {
  score: number;
  label?: string;
  progressWidth?: number;
  hideText?: boolean;
  darkTheme?: boolean;
  progressColor?: "red" | "green" | "blue" | "purple";
  primaryColor?: string;
  secondaryColor?: string;
  disableGlow?: boolean;
  className?: string;
}

export const Progress = (props: IProgressBarProps) => {
  const [progressAnimation, setProgressAnimation] = useState<boolean>(false);

  const {
    score,
    progressWidth,
    className,
    primaryColor,
    secondaryColor,
    progressColor = primaryColor || secondaryColor ? "" : "red",
    label,
    hideText,
    darkTheme,
    disableGlow,
  } = props;

  useEffect(() => {
    setProgressAnimation(true);
  });

  const renderProgressFiller = (glow: boolean) => (
    <>
      <div
        className={`progressFill ${
          !(primaryColor || secondaryColor) && progressColor
        } ${glow && "glowingEffect"}`}
        style={{
          width: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
          background: `linear-gradient( to right, ${primaryColor}, ${secondaryColor})`,
        }}
      />
      <div className={`${!(primaryColor || secondaryColor) && progressColor}`}>
        <div
          className={`particlesContainer`}
          style={{
            left: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
          }}>
          <div className={`particles`} />
          <div
            className={`smallParticles smallParticles4`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles3`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`bigParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`particles particles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles5`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles6`}
            style={{ background: secondaryColor }}
          />
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`progressBarFancyContainer ${className}`}
      style={{ width: progressWidth }}>
      {!hideText && (
        <div className={`labelScoreContainer ${darkTheme && `labelDarkTheme`}`}>
          <div className={`label`}>{label}</div>
          <div className={`number`}>{score}%</div>
        </div>
      )}
      <div className={`barGaugeContainer`} style={{ flexWrap: "wrap" }}>
        <div
          className={`progressbarWidth`}
          style={{
            width: progressWidth,
            margin: "0px 10px",
          }}>
          <div className={`progressBar`}>
            <div className={`progressTrack`} />
            {renderProgressFiller(false)}
            {!disableGlow && renderProgressFiller(true)}
          </div>
        </div>
      </div>
    </div>
  );
};
