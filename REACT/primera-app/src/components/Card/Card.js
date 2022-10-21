import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


function CardUser(props){

    const {name, img, descrip, joined, friends} = props;

    return(
        <Card >
            <Image src= {img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in {joined}</span>
            </Card.Meta>
            <Card.Description>
                {descrip}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                {friends} Friends
            </a>
            </Card.Content>
        </Card>
    )
}

export default CardUser
