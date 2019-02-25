import React from 'react'
import { Card, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// import {src} from '../../logo.png'
// const items = [
//   {
//     header: 'Project Report - April',
//     description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//     meta: 'ROI: 30%',
//     image: {src}
//   },
//   {
//     header: 'Project Report - May',
//     description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
//     meta: 'ROI: 34%',
//   },
//   {
//     header: 'Project Report - June',
//     description:
//       'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//     meta: 'ROI: 27%',
//   },
//   {
//     header: 'Project Report - April2',
//     description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//     meta: 'ROI: 30%',
//   },
//   {
//     header: 'Project Report - May2',
//     description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
//     meta: 'ROI: 34%',
//   },
//   {
//     header: 'Project Report - June2',
//     description:
//       'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//     meta: 'ROI: 27%',
//   }
// ]

// const CardGroupProps = () => <Card.Group items={items} />

// export default CardGroupProps


const CardGroupProps = () => (
  <Card.Group>
    <a href="/article?1">
    <Card  link>
    <Image src={require('../../images/1.jpg')} />
         <Card.Content>
           <Card.Header></Card.Header>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
    </Card>
    </a>
    <a href="/article?2">

    < Card link >

      <Image src={require('../../images/2.jpg')} />

      <Card.Content>
        <Card.Header content='Jake Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
    </Card>
    </a>
    <a href="/article?3">

    <Card link>
    <Image src={require('../../images/3.jpg')} />
    <Card.Content>
        <Card.Header content='Jak2e Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
    </Card>
    </a>
    <a href="/article?4">

    <Card link>
    <Image src={require('../../images/3.jpg')} />
    <Card.Content>
        <Card.Header content='Jake2 Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
    </Card>
    </a>

  </Card.Group>
)

export default CardGroupProps