//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { sayac: 5 ,baslik:"merhaba"};
  }
  //fonksiyonlar
  arttir() {
    this.setState({ sayac: this.state.sayac + 1 });
  }
  //!arrow function kullandığımız zaman bind etmeye gerek yok
  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 });
  };
  //* React tarafından tanımlanan method lar default olarak class a bind edilir (bağlanır).
  //* Bu nedenle, metodlarımızı constructor daki class a bind etmeliyiz veya automatic binding için arrow function kullanabiliriz.
  render() {
    return (
      <div className="text-center">
        <h1>sayac:{this.state.sayac}</h1>
        <button className="btn btn-danger" onClick={this.arttir.bind(this)}>
          ARTTIR
        </button>
        <button className="btn btn-primary" onClick={this.azalt}>
          AZALT
        </button>
      </div>
    );
  }
}

export default Counter;
