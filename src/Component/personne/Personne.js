import "./Personne.css"
import { useState } from "react"
import "./Personne.css"

export default function Personne({
  personne,
  updatePersonne,
  deletePersonne
}) {
  const {id,nom,prenom,email,password} = personne
  const [detailsMode, setDetailsMode] = useState(false)
  const [updateMode, setUpdateMode] = useState(false)
  const [updateNom, setUpdateNom] = useState(nom)
  const [updatePrenom, setUpdatePrenom] = useState(prenom)
  const [updateEmail, setUpdateEmail] = useState(email)
  const [updatePassword, setUpdatePassword] = useState(password)


  function handleUpdateAll() {
    updatePersonne(
      {
        id,
        nom:updateNom,
        prenom:updatePrenom,
        email: updateEmail,
        password: updatePassword}
    )
    setUpdateMode(false)
  }

  function removePersonne() {
    deletePersonne(id)
  }
  return (
    <div className="stat">
      {!detailsMode && !updateMode ? (
        <ul>
          <li className="info">
            <p className="p">Nom</p> : {nom}
          </li>
          <li className="info">
            <p className="p">Prenom</p> : {prenom}
          </li>
         
        </ul>
      ) : detailsMode && !updateMode ? (
        <ul>
          <li className="info">
            <p className="p">Nom</p> : {nom}
          </li>
          <li className="info">
            <p className="p">Prenom</p> : {prenom}
          </li>
          <li className="info">
            <p className="p">Email </p>: {email}
          </li>
          <li className="info">
            <p className="p">Password</p> : {password}
          </li>
        </ul>
      ) : (detailsMode || !detailsMode) && updateMode ? (
        <ul>
          <li className="info">
            <p className="p">Nom</p> :
            <input
              className="i"
              type="text"
              value={updateNom}
              onChange={(e) => setUpdateNom(e.target.value)}
            />
          </li>
          <li className="info">
            <p className="p">Prenom</p> :{" "}
            <input
              className="i"
              type="text"
              value={updatePrenom}
              onChange={(e) => setUpdatePrenom(e.target.value)}
            />
          </li>
          <li className="info">
            <p className="p">Email </p>:{" "}
            <input
              className="i"
              type="text"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </li>
          <li className="info">
            <p className="p">Password</p> :{" "}
            <input
              className="i"
              type="text"
              value={updatePassword}
              onChange={(e) => setUpdatePassword(e.target.value)}
            />
          </li>
         
        </ul>
      ) : (
        <p>no</p>
      )}

      <ul className="crud">
        <li>
          {!updateMode ? (
            <button
              className="bt-m"
              type="submit"
              onClick={() => setUpdateMode(!updateMode)}
            >
              Modifier
            </button>
          ) : (
            <button
              className="bt-m"
              type="submit"
              onClick={() =>
                handleUpdateAll()
              }
            >
              Valider
            </button>
          )}
        </li>
        <li>
          <button className="bt-s" type="submit" onClick={removePersonne}>
            Supprimer
          </button>
          <li>
            <button
              className="bt-v"
              type="submit"
              onClick={() => setDetailsMode(!detailsMode)}
            >
              Voir plus
            </button>
          </li>
        </li>
      </ul>
    </div>
  )
}
