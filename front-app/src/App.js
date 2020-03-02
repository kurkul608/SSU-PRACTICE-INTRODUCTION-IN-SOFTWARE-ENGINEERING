import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'




export default class App extends React.Component {
  state = {
    items: []
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/PowerBank/`)
      .then(res => {
        const items= res.data;
        this.setState({ items });
      })
  }
  handleChangePostID = event => {
    this.setState({ id: event.target.value });
  }
  handleChangePostName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangePostTank = event => {
    this.setState({ tank: event.target.value });
  }
  handleChangePostMaxCurrent = event => {
    this.setState({ maxCurrent: event.target.value });
  }
  handleChangePostUSBcount = event => {
    this.setState({ USBcount: event.target.value });
  }
  handleChangePostFatCharge = event => {
    this.setState({ fastCharge: event.target.value });
  }
  handleChangePostWeight = event => {
    this.setState({ weight: event.target.value });
  }

  handleSubmit = event => {
    // event.preventDefault();
    const newItem= {
      name: this.state.name,
      tank: this.state.tank,
      maxCurrent: this.state.maxCurrent,
      USBcount: this.state.USBcount,
      fastCharge: this.state.fastCharge,
      weight: this.state.weight
    };

    axios.post(`http://localhost:3000/api/PowerBank/`, { 
      name: newItem.name,
      tank: newItem.tank,
      maxCurrent: newItem.maxCurrent,
      USBcount: newItem.USBcount,
      fastCharge: newItem.fastCharge,
      weight: newItem.weight
    })
      .then (res => {
        console.log(res);
        
      })
  }
  handleSubmitPUT = event => {
    // event.preventDefault();
    const newItemPUT= {
      name: this.state.name,
      tank: this.state.tank,
      maxCurrent: this.state.maxCurrent,
      USBcount: this.state.USBcount,
      fastCharge: this.state.fastCharge,
      weight: this.state.weight
    };

    axios.put(`http://localhost:3000/api/PowerBank/${this.state.id}`, { 
      name: newItemPUT.name,
      tank: newItemPUT.tank,
      maxCurrent: newItemPUT.maxCurrent,
      USBcount: newItemPUT.USBcount,
      fastCharge: newItemPUT.fastCharge,
      weight: newItemPUT.weight
    })
      .then (res => {
        console.log(res);
        
      })
  }
  handleChangeDelete = event => {
    this.setState({ id: event.target.value});
  }

  handleSubmitDelete = event => {
    // event.preventDefault();
    axios.delete(`http://localhost:3000/api/PowerBank/${this.state.id}`)
      .then(res=> {
        console.log(res);
        
      })
  }
  
  agreeForm(f) {
    // Если поставлен флажок, снимаем блокирование кнопки
    if (f.agree.checked) f.submit.disabled = 0 
    // В противном случае вновь блокируем кнопку
    else f.submit.disabled = 1
   }
 
  render() {
    return (
       <div className ="container">
         <div className="jumbotron">
          <h1 className="display-3">Список Power bank:</h1>
          <ol class="list-unstyled">
            { this.state.items.map(item => 
            <li className="App-li">
              <table class="table table-bordered" >
                <tr>
                  <td><b>ID: </b></td>
                  <td><input className="inp" type="text" name="idGet"  value={item.id} /></td>
                </tr>
                <tr>
                  <td><b>Название: </b></td>
                  <td><input className="inp" type="text" name="nameGet" value={item.name} onChange={this.handleChangePostName}/><br /></td>
                </tr>
                <tr>
                  <td><b>Емкость: </b></td>
                  <td><input className="inp" type="text" name="tankGet" value={item.tank} /><br /></td>
                </tr>
                <tr>
                  <td><b>Макимальная мощность: </b></td>
                  <td><input className="inp" type="text" name="maxCurrentGet" value={item.maxCurrent} /><br /></td>
                </tr>
                <tr>
                  <td><b>Количество портов USB: </b></td>
                  <td><input className="inp" type="text" name="USNcountGet" value={item.USBcount} /><br /></td>
                </tr>
                <tr>
                  <td><b>Быстрая зарядка: </b></td>
                  <td><input className="inp" type="text" name="fastChargeGet" value={item.fastCharge} /><br /></td>
                </tr>
                <tr>
                  <td><b>Вес: </b></td>
                  <td><input className="inp" type="text" name="weightGet" value={item.weight} /><br /></td>
                </tr>
              </table>
              <form onSubmit={this.handleSubmitDelete}>
                <button type="submit" name="submit"onClick={this.handleChangeDelete} value={item.id} >Удалить Power Bank</button>
                <input class="container" type="checkbox" name="agree" onclick="agreeForm(this.form)" />
          </form>
          
          
            </li>)}
          </ol>
          
          <form class="table table-bordered"  onSubmit={this.handleSubmit}>
            <label>
              <h3>Введите характеристики нового Power bank:<br />
              </h3>
              <table>
                {/* <tr>
                  <td><b>ID: </b></td>
                  <td><input type="text" name="idPost" onChange={this.handleChangePostID} /></td>
                </tr> */}
                <tr>
                  <td><b>Название: </b></td>
                  <td><input className="inp" type="text" name="namePost" onChange={this.handleChangePostName} /></td>
                </tr>
                <tr>
                  <td><b>Емкость: </b></td>
                  <td><input className="inp" type="text" name="tankPost" onChange={this.handleChangePostTank} /><br /></td>
                  </tr>
                <tr>
                  <td><b>Макимальная мощность: </b></td>
                  <td><input className="inp" type="text" name="maxCurrentPost" onChange={this.handleChangePostMaxCurrent} /></td>
                  </tr>
                <tr>
                  <td><b>Количество портов USB: </b></td>
                  <td><input className="inp" type="text" name="USBcountPost" onChange={this.handleChangePostUSBcount} /></td>
                </tr>
                <tr>
                  <td><b>Быстрая зарядка: </b></td>
                  <td><input className="inp" type="text" name="fastChargePost" onChange={this.handleChangePostFatCharge} /></td>
                </tr>
                <tr>
                  <td><b>Вес: </b></td>
                  <td><input className="inp" type="text" name="weightPost" onChange={this.handleChangePostWeight} /><br /></td>
                </tr>
              </table>
            </label>
            <br /><button type="submit">Добавить новый Power Bank</button>
          </form>

          <form class="table table-bordered" onSubmit={this.handleSubmitPUT}>
            <label>
              <h3>Для того, чтобы изменить характеристики существующего Power Bank <br />
                Введите его ID и новые характеристики
              </h3>
              <table>
                <tr>
                  <td><b>ID: </b></td>
                  <td><input className="inp" type="text" name="idPost" onChange={this.handleChangePostID} /></td>
                </tr>
                <tr>
                  <td><b>Название: </b></td>
                  <td><input className="inp" type="text" name="namePost" onChange={this.handleChangePostName} /></td>
                </tr>
                <tr>
                  <td><b>Емкость: </b></td>
                  <td><input className="inp" type="text" name="tankPost" onChange={this.handleChangePostTank} /><br /></td>
                  </tr>
                <tr>
                  <td><b>Макимальная мощность: </b></td>
                  <td><input className="inp" type="text" name="maxCurrentPost" onChange={this.handleChangePostMaxCurrent} /></td>
                  </tr>
                <tr>
                  <td><b>Количество портов USB: </b></td>
                  <td><input className="inp" type="text" name="USBcountPost" onChange={this.handleChangePostUSBcount} /></td>
                </tr>
                <tr>
                  <td><b>Быстрая зарядка: </b></td>
                  <td><input className="inp" type="text" name="fastChargePost" onChange={this.handleChangePostFatCharge} /></td>
                </tr>
                <tr>
                  <td><b>Вес: </b></td>
                  <td><input className="inp" type="text" name="weightPost" onChange={this.handleChangePostWeight} /></td>
                </tr>
              </table>
            </label>
            <button type="submit">Изменить характеристики Power Bank</button>
          </form>
          
        </div>  
      </div>
    )
  }
}



