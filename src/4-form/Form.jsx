import React, { useState } from "react";
// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.
const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [remember, setRemember] = useState("");

  const sendToDatabase = (e) => {
    e.preventDefault();
    //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
    //? const res = axios.post("url", { name, pass, country })
    alert(`
        name : ${name}
        password : ${password}
        country : ${country}
        remember : ${remember}
    `);
    //!database e yollandıktan sonra değişkenlerin içini temizledik, bunu ekranda da temiz görmek için inputlarda value değişkenleri tanımladık
    //? eğer input değerlerini state'e bağlı olarak kontrol etmek istersek inputların value proplarına state'leri bağlamamız gerekir. bu duruma kontrolsüz komponentten kontrollü komponente çevirme denir.
    setName("");
    setPassword("");
    setCountry("");
    setRemember("");
  };
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*********************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={sendToDatabase}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{name} </span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            //* required alanların çalışması için formları onSubmit ile göndermeliyiz. onClick ile gönderdiğimizde çalışmaz
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{password} </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country: <span className="text-danger">{country} </span>
          </label>
          <select
            id="country"
            value={country}
            className="form-select"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option> COUNTRIES</option>
            <option value="Türkiye">TURKEY</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="remember">
            Remember:
            <span className="text-danger">{remember.toString()} </span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
