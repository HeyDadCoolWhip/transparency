import React from 'react';
import './styles.css';

function Home() {
  return (
    <>
      <div className={"container"}>
        <p id={"fairWarning"} >Fair warning: this was all stolen. This shit is fuckin hideous</p>
        <div className={"timeline"}>
          <div className={"timelineBox"} id={"primary"}>
            <div className={"statusText"}>
              <b className={"status"}>Type: 1</b>
            </div>
            <div className={"timelineBody"}>
              <h4 className={"header"}><span className={"badge"}>primary</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris a diam. Mi ipsum faucibus vitae aliquet. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</p>
              <p className={"time"}>1 hour(s) ago</p>
            </div>
          </div>

          <div className={"timelineBox"} id={"success"}>
            <div className={"statusText"}>
              <b className={"status"}>Type: 2</b>
            </div>
            <div className={"timelineBody"}>
              <h4 className={"header"}><span className={"badge"}>success</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris a diam. Mi ipsum faucibus vitae aliquet. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</p>
              <p className={"time"}>3 hours ago</p>
            </div>
          </div>

          <div className={"timelineBox"} id={"danger"}>
            <div className={"statusText"}>
              <b className={"status"}>Type: 3</b>
            </div>
            <div className={"timelineBody"}>
              <h4 className={"header"}><span className={"badge"}>danger</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris a diam. Mi ipsum faucibus vitae aliquet. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</p>
              <p className={"time"}>8 hours ago</p>
            </div>
          </div>

          <div className={"timelineBox"} id={"secondary"}>
            <div className={"statusText"}>
              <b className={"status"}>Type: 4</b>
            </div>
            <div className={"timelineBody"}>
              <h4 className={"header"}><span className={"badge"}>secondary</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris a diam. Mi ipsum faucibus vitae aliquet. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</p>
              <p className={"time"}>1 day(s) ago</p>
            </div>
          </div>

          <div className={"timelineBox"} id={"warning"}>
            <div className={"statusText"}>
              <b className={"status"}>Type: 5</b>
            </div>
            <div className={"timelineBody"}>
              <h4 className={"header"}><span className={"badge"}>warning</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris a diam. Mi ipsum faucibus vitae aliquet. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</p>
              <p className={"time"}>1 day(s) & 2 hours ago</p>
            </div>
          </div>

          <div className={"timelineBox"} id={"info"}>
            <div className={"statusText"}>
              <b className={"status"}>Type: 6</b>
            </div>
            <div className={"timelineBody"}>
              <h4 className={"header"}><span className={"badge"}>info</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris a diam. Mi ipsum faucibus vitae aliquet. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</p>
              <p className={"time"}>2 days ago</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;