/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react"

import { IoAddCircleOutline } from "react-icons/io5"
import Personne from "../personne/Personne"
import "./PersonneList.css"


export default function PersonneList({
  personne,
  updatePersonne,
  createPersonne,
  deletePersonne,
}) {
  const [createMode, setCreateMode] = useState(false)
  const [createNom, setCreateNom] = useState()
  const [createPrenom, setCreatePrenom] = useState()
  const [createEmail, setCreateEmail] = useState()
  const [createPassword, setCreatePassword] = useState()

  function handleCreateMode() {
    setCreateMode(!createMode)
  }
//  console.log(createNom, createPrenom, createEmail,createPassword)
  return (
    
    <div className="list">
      
      <h1 className="statList">
        Liste des personnes
        <i className="ic" onClick={handleCreateMode}>
          <IoAddCircleOutline />
        </i>
      </h1>

      {!createMode ? (
        personne.map((element, i) => (
          <Personne
            key={i}
            personne={element}
            updatePersonne={updatePersonne}
            deletePersonne={deletePersonne}
          />
        ))
      ) : (
        <div className="new">
          <ul>
            <li className="info">
              <p className="p">Nom</p> :
              <input
                className="i"
                type="text"
                value={createNom}
                onChange={(e) => setCreateNom(e.target.value)}
              />
            </li>
            <li className="info">
              <p className="p">Prenom</p> :
              <input
                className="i"
                type="text"
                value={createPrenom}
                onChange={(e) => setCreatePrenom(e.target.value)}
              />
            </li>
            <li className="info">
              <p className="p">Email</p>:
              <input
                className="i"
                type="text"
                value={createEmail}
                onChange={(e) => setCreateEmail(e.target.value)}
              />
            </li>
            <li className="info">
              <p className="p">Password</p> :
              <input
                className="i"
                type="text"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
              />
            </li>
          </ul>

          <button
            className="bt-mm"
            type="submit"
            onClick={(e) => {
              createPersonne(e, {
                createNom,
                createPrenom,
                createEmail,
                createPassword,
              })
              setCreateMode((prevCreateMode) => !prevCreateMode)
              
            }}
          >
            Ajouter
          </button>
        </div>
      )}
    </div>
  )
}
