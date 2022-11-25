/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from "react"
import axios from "axios"
import PersonneList from "../../Component/personneList/personneList"


export default function PersonnePage() {
  
  const [Personne, setPersonne] = useState([])
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/customers/get")
      .then(({ data }) => {
    
        setPersonne(data)
      })
      .catch((err) => console.log(err))
  }, [update])
  const updatePersonne = (element) => {
    axios
      .put(`http://127.0.0.1:8000/update/${element.id}`, element)
      .then((res) => {
        setUpdate((prev) => prev + 1)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

 const createPersonne=async (e,data) =>{
  
    try {
      e.preventDefault()
   const res=await axios
      .post("http://127.0.0.1:8000/addpersonne", {
      
        nom: data.createNom,
        prenom: data.createPrenom,
        email: data.createEmail,
        password: data.createPassword,
      })
          setPersonne((prevPers) => [...prevPers, res])
        window.location.reload()
      
      }catch(e){console.log(e)}
  }
  





  
  const deletePersonne = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/delete/${id}`)
      .then((res) => {
        setUpdate((prev) => prev + 1)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
 
      <PersonneList
        personne={Personne}
        updatePersonne={updatePersonne}
        createPersonne={createPersonne}
        deletePersonne={deletePersonne}
      />
    </div>
  )
}
