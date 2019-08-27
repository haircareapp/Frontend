import React from "react";
import styled from "styled-components";
import { StylelistData } from "../StylelistData";

const Card = styled.div`
  display: flex;
  width: 40%;
  padding: 15px 10px;
  color: white;
  background: black;
  border: 2px solid #fffff;
`;

export default function HairstylistCard(props) {
  const stylelist = StylelistData[1];
  console.log(stylelist);
  // const stylelist = stylelistData.find( stylelists => props.match.params.id === `${stylelists.id}`);
  return (
    <div>
      <Card>
        <h1>{stylelist.name}</h1>
        <img src={stylelist.imgUrl} alt={stylelist.name} />
        <p>{stylelist.description}</p>
      </Card>
    </div>
  );
}
