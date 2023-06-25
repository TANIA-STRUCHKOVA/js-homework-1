/*import Button from "../../components/Button/Button";*/
import React, { Component } from 'react';
import styles from "./App.module.css";
import Header from "./layouts/Header/Header";
/* import ButtonFunc from "./components/Button/ButtonFunc"; */
import CardsCont from "./layouts/CardsCont/CardsCont";
import { Routes, Route } from 'react-router-dom'
import Project1 from "./pages/Project1/Project1";
import Project1Class from "./pages/Project1/Project1Class";
import NotFound from "./pages/NotFound/NotFound";
import Project2 from './pages/Project2/Project2';
import Project2Class from './pages/Project2/Project2Class';
import Project3 from './pages/Project3/Project3';
import Project3Class from './pages/Project3/Project3Class';
import QrReact from './pages/QrReact/QrReact';
import TwoWayBinding from './pages/TwoWayBinding/TwoWayBinding';
import Todo from './pages/Todo/Todo';


/*import bee from "./assets/images/bee-on-daisy.jpg"*/

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isText: false
    }
  }

  render() {
    const textValue = this.state.isText ? 'yes' : 'no'
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<CardsCont />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project1class" element={<Project1Class />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project2class" element={<Project2Class />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project3class" element={<Project3Class />} />
          <Route path="/qr-code" element={<QrReact />} />
          <Route path="/two-way" element={<TwoWayBinding />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>


        {/*<ButtonFunc/>*/}
      </div>
    )
  }
}

