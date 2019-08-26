import React from 'react';
// import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react'

const HairstylistCard = () => (
    <Card>
      <Image src='' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Stylist</Card.Header>
        <Card.Meta>
          <span className='date'>located in california </span>
        </Card.Meta>
        <Card.Description>
          Nos gusta vivir en la palya y arreglar cabello es nuestra pasion. 
        </Card.Description>
      </Card.Content>
    </Card>
  )


export default HairstylistCard;