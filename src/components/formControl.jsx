import React, { useState } from 'react';

function FormControl() {

  const [formData, setFormData] = useState({
    nom: 'Hafsa',
    email: 'stifa@gmail.com',
    ville:''
  });

  const [x, setX] = useState('')

  const [y, setY] = useState(false)
  const changerStatus = (e) =>{
    setY(e.target.checked)
  }

  const [formVille, setFormVille] = useState('Rome')
  



  const changer = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((datas) => ({
      ...datas,[name]: value}))
    setX('Votre ' + name + ' est ' +value);
    setFormVille(e.target.value)
  };
  return (
    <div>
        <form action="">
            <label htmlFor="nom">Nom: </label>
            <input type="text" name="nom" id="nom" value={formData.nom} onChange={changer} /><br />
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" value={formData.email} onChange={changer} /><br />
            <input type="button" value="Valider" onSubmit={(e)=> {e.preventDefault()}} /> <br />
            <input type="checkbox" onChange={changerStatus} />
        </form>
        <div>
            <h4>{x}</h4>
            <h3>{(y) ? "OK":"Not OK"}</h3>
            <select name="ville" value={formVille} onChange={changer}>
                <option value="spain">Spain</option>
                <option value="spain">Morocco</option>
                <option value="spain">Palestine</option>
            </select>
            <h3></h3>
        </div>
    
    </div>
  )
}

export default FormControl
