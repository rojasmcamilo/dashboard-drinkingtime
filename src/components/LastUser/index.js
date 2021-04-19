import React, { useState, useEffect } from "react";
import LastUser from "./LastUser";

function UltimoUsuario() {
  const [User, setUser] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((res) => {
        let item = res[res.length - 1];
        setUser(item);
      });
  }, []);

  return (
    <LastUser
      name={User.name}
      image={User.image}
      email={User.email}
      addres={User.shipping_addres}
      telephone={User.telephone}
      birth_date={User.birth_date}
    />
  );
}

export default UltimoUsuario;
