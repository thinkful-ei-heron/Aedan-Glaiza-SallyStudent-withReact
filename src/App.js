import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <header>
        <h1>{props.name}'s Resume</h1>
        <p>I'm a hard working, fun individual with plenty of experience. I'm fluent in Java, Javascript, CSS, HTML, node.js, c#, python and ruby.</p>
      </header>
      <main>
        <section>
          <h2>My Education</h2>
          <p>I graduated from The University of Utah in 2016 with a BS in Computer Science</p>
        </section>
        <section>
          <h2>Employment History</h2>
          <ul>
            <li>
              <h3>FredBank Inc.</h3>
              <ul>
                <li>Senior Full Stack Dev</li>
                <li>Employment Dates: 2/28/18 - Current</li>
                <li>Job Description:
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est iusto doloribus consectetur fugit quis accusantium hic assumenda, dolorem autem dolor voluptatibus dolore sunt sed labore neque, saepe illum et!</p>
                </li>
              </ul>
            </li>
            <li>
              <h3>Walthroat</h3>
              <ul>
                <li>Junior Web Developer</li>
                <li>Employment Dates: 8/25/16 - 2/13/18</li>
                <li>Job Description:
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est iusto doloribus consectetur fugit quis accusantium hic assumenda, dolorem autem dolor voluptatibus dolore sunt sed labore neque, saepe illum et!</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      <address>
        <h2>Contact Info</h2>
        <ul>
          <li>Name: {props.name}</li>
          <li>Email: <a href= {props.email} >{props.email}</a></li>
          <li>Phone Number: 1-843-815-3542</li>
          <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="A picture of me" height= {400} />
        </ul>
      </address>
    </div>
    
  );
}

export default App;
