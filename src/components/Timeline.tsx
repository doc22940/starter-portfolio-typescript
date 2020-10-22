import React from 'react';
import TimelineItem from './TimeLineItem';
import './Timeline.css';

import reactTodoImage from '../assets/react-todo.png';
import fikenImportImage from '../assets/fiken-import.png';

export default function Timeline() {
  const reactTodo = [
    {
      text: 'Code',
      url: 'https://github.com/Ymirke/react-todo',
    },
    {
      text: 'Demo',
      url: 'https://react-todo-ymirke.herokuapp.com/',
    },
  ];
  const hackDay = [
    {
      text: 'Code',
      url: 'https://github.com/Ymirke/fikenImport',
    },
  ];
  const graduationProject = [
    {
      text: 'Code',
      url: 'https://github.com/Ymirke/graduation-project',
    },
    {
      text: 'Demo',
      url: 'https://salt-graduation-project.herokuapp.com/',
    },
  ];

  return (
    <>
      <h3 className="Timeline__headline">Projects timeline</h3>
      <div className="Timeline">
        <TimelineItem heading="Early 2020 - <Salt />">
          <p className="TimelineItem__text">
            Quit working as a digital marketing consultant to join School of Applied Technology.
          </p>
        </TimelineItem>
        <TimelineItem heading="Early 2020 - React todo" buttons={reactTodo}>
          <p className="TimelineItem__text">
            <img className="TimelineItem_image" src={reactTodoImage} alt="" />
          </p>
        </TimelineItem>
        <TimelineItem heading="Early 2020 - 24-hour hackday" buttons={hackDay}>
          <div className="TimelineItem__text">
            <p>
              During School of Applied Technology we had a 24-hour hack day
              where we could make a project.
            </p>
            <p>
              I made a tool that takes orders form a shopify store and imports
              it into the accounting system fiken.
            </p>
            <p>
              Main technical challenge was creating a customer, waiting for the
              right response and then attaching the order to the customer.
            </p>
            <img
              className="TimelineItem_image"
              src={fikenImportImage}
              alt="Data flow fikenImport"
            />
          </div>
        </TimelineItem>
        <TimelineItem
          heading="Mid 2020 - Graduation Project"
          buttons={graduationProject}
        >
          <>
            <div className="TimelineItem__text">
              <p>
                My team at School of Applied Technology and I created a
                prototype version for a non-profit organization called humans
                for humans. A platform to help victims of human trafficing
                annonymousely chat and get help from psychologists.
              </p>
              <a href="https://www.linkedin.com/posts/applied-technology-stockholm_great-week-news-dear-friends-the-main-core-activity-6699223137734717441-fTE3/">
                Read more here
              </a>
              <p>Our final presentation:</p>
              <div className="TimelineItem__videoContainer">
                <iframe
                  allowFullScreen
                  className="TimelineItem__videoIframe"
                  title="Presentation"
                  src="https://drive.google.com/file/d/1H2Xf6OJoA0xUwCPal1Dx7at2IrXEKjmp/preview"
                />
              </div>
            </div>
          </>
        </TimelineItem>
        <TimelineItem heading="Mid 2020 - Project for TrustLinc">
          <div className="TimelineItem__text">
            <p>
              Did a short project for{' '}
              <a href="https://www.trustlinc.com/">Trustlinc</a> where a team of
              us developers from salt worked 2 1-week sprints to implement
              multimedia functionality to their chat application.
            </p>
            <p>
              This included:
                <li>
                  Drag-and-drop file upload to their file storage solution for
                  images, videos, presentations etc.
                </li>
                <li> UI to look through your files and manage them.</li>
                <li> Interface within chat to send and search for files.</li>
            </p>
          </div>
        </TimelineItem>
      </div>
    </>
  );
}
