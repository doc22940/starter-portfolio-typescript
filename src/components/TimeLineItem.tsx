import React from 'react';
import './Timeline.css';

type TimeLineItem = {
  heading: string;
  position?: string;
  children: React.ReactChild;
  buttons?: { text: string; url: string }[];
};

type ButtonProps = {
  position?: string;
  text: string;
  url: string;
};

const Button: ({ position, text, url }: ButtonProps) => JSX.Element = ({
  position,
  text,
  url,
}) => {
  if (position === 'middle') {
    return (
      <div className="TimelineItem__buttonContainer">
        <a href={url}>
          <button className="TimelineItem__button">{text}</button>
        </a>
      </div>
    );
  } else if (position === 'left') {
    return (
      <div className="TimelineItem__buttonContainer TimelineItem__buttonContainer--leftCorner">
        <a href={url}>
          <button className="TimelineItem__button">{text}</button>
        </a>
      </div>
    );
  } else if (position === 'right') {
    return (
      <div className="TimelineItem__buttonContainer TimelineItem__buttonContainer--rightCorner">
        <a href={url}>
          <button className="TimelineItem__button">{text}</button>
        </a>
      </div>
    );
  } else {
    return (
      <div className="TimelineItem__buttonContainer TimelineItem__buttonContainer--leftCorner TimelineItem__buttonContainer--rightCorner">
        <a href={url}>
          <button className="TimelineItem__button">{text}</button>
        </a>
      </div>
    );
  }
};

export default function TimeLineItem({
  heading,
  children,
  position = 'left',
  buttons = [],
}: TimeLineItem) {
  return (
    <div className={`TimelineItem__container  TimelineItem--left`}>
      <div className="TimelineItem__content">
        <h2>{heading}</h2>
        {children}
      </div>
      {buttons.length > 0 ? (
        <div className="TimelineItem__buttons">
          {buttons.length === 1 ? (
            <Button text={buttons[0].text} url={buttons[0].url} />
          ) : null}

          {buttons.length === 2 ? (
            <>
              <Button
                position="left"
                text={buttons[0].text}
                url={buttons[0].url}
              />
              <Button
                position="right"
                text={buttons[1].text}
                url={buttons[1].url}
              />
            </>
          ) : null}

          {buttons.length === 3
            ? buttons.map(({ text, url }, index) => {
                if (index === 0) {
                  return <Button position="left" text={text} url={url} />;
                } else if (index === buttons.length - 1) {
                  return <Button position="right" text={text} url={url} />;
                } else {
                  return <Button position="middle" text={text} url={url} />;
                }
              })
            : null}
        </div>
      ) : null}
    </div>
  );
}
