import React, { Component ,BrowserRouter as Router, Route, Link }  from 'react';
import {  Query, ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache  } from  'apollo-boost';
import gql from "graphql-tag";
import { Dropdown, Grid,  Button, Comment, Form, Image } from 'semantic-ui-react'
import  MenuNameProp  from './components/blocks/MenuNameProp'
import HeaderIcon from './components/blocks/HeaderIcon'
import CardGroupProps from './components/blocks/CardGroupProps'
import SideMenu from './components/blocks/SideMenu'
import data from './data/data.json'
const cache = new InMemoryCache();


const text4 = "<p class=\"bodytext\">as Men&uuml; ist dreig&auml;ngig: Zweierlei Brotaufstrich, Spitzkohl-Nudel-Pfanne und zum Dessert Vanillemousse. Was auf den Tisch kommt, entscheiden alle gemeinsam. Doch vor dem Essen muss nat&uuml;rlich erstmal gekocht werden, ebenfalls gemeinsam. Zum Kochtreff \"Miteinander kochen\" kommen einmal im Monat Menschen mit und ohne Behinderung ins Begegnungszentrum \"Das Luise\" in Bornheim-Hersel.</p><p class=\"bodytext\">\"Ich mache das, damit ich unter Menschen komme\", sagt Teilnehmerin Sina A. \"Das Essen ist lecker und die Menschen sind &hellip;\" Sie streckt beide Daumen in die H&ouml;he. Frieder T. erg&auml;nzt: \"Nach den Nachrichten komme ich. Da f&uuml;hle ich mich bei euch zuhause. Hier gibt es leckere Gem&uuml;sepfanne.\" Und auch Christiane K. ist begeistert: \"Ich komme zu allen Terminen. Kochen ist mein Hobby.</p><p class=\"bodytext\">Bereits seit f&uuml;nf Jahren findet der gemeinsame Kochtreff statt. Mit dabei ist eine gemischte Gruppe in wechselnder Besetzung. Wer Lust auf Kochen, gemeinsames Essen und Reden hat, ist herzlich willkommen. Einige, wie Christiane K. kommen gerne immer wieder. Und auch die freiwillig Engagierten von Rotaract, die den Kochtreff unterst&uuml;tzen, sind immer wieder gerne dabei: \"Es ist ein sch&ouml;nes Erlebnis in der Gemeinschaft\", sagt Yannik Breitkreuz. \"Und es ist etwas Besonderes, immer wieder neue Menschen kennen zu lernen.\"</p><p class=\"bodytext\">Auch Anna Schl&uuml;ter von der Lebenshilfe, die \"Miteinander kochen\" organisiert, findet, dass der Kochtreff ein besonderes Angebot ist: \"Hier mischen sich Menschen aus ganz verschiedenen Kreisen. Man lernt sich ganz leicht kennen und es ist ein sehr harmonisches Miteinander.\" Von den Teilnehmenden wird nur ein kleiner Umkostenbeitrag erhoben. \"F&uuml;r die fachliche Begleitung und die ganze Koordination im Hintergrund sind wir deshalb dringend auf Spenden angewiesen\", betont Anna Schl&uuml;ter.</p><p class=\"bodytext\"><strong>Wenn Sie \"Miteinander kochen\" unterst&uuml;tzen wollen, freuen wir uns sehr &uuml;ber Ihre&nbsp;<a class=\"internal-link\" href=\"https://www.lebenshilfe-bonn.de/spenden/jetzt-online-spenden/\" target=\"_top\">Spende</a>.</strong></p>";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache
});



  const ExchangeRates = () => (
    <Query
      query={gql`
        {
          employee(id: 1) {
            id
            name
            email
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <div key={data.employee.id}>
            <p>id: {data.employee.id}</p>
            <p>name: {data.employee.name}</p>
            <p>email: {data.employee.email}</p>
          </div>
        )
        ;
      }}
    </Query>
  );


const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const DropdownExampleClearable = () => <Dropdown clearable options={options} selection />

const CommentExampleReplyFormOuter = () => (
  <Comment.Group>
    <Comment >
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your effort put them all
            there.
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how Impermanent your efforts
            are.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)


export default class Article extends Component {
  render() {
    var referrer = document.URL;
    console.log(referrer)
    console.log(data)

    let imagePath = "",
        author = "",
        date = "",
        text = ""
    for(let i in  data.Articles) {
      var obj = data.Articles[i];
      console.log("id" + obj.id )
      console.log("referrer" +referrer.split('?')[1])

        if(obj.id == referrer.split('?')[1]){
          imagePath = obj.imagePath;
          author = obj.Author;

          break;
        }
      
    }

     const ImageExampleFluid = () => <Image src= {require(`${imagePath}`)} fluid />

    return (


        <div className="ui container">
        <h3> hallo</h3>
         <div className="ui big header">
          { <MenuNameProp />}
          </div>


 <div  className="ui  container">
  <Grid>

<Grid.Column width={10}>
<ImageExampleFluid />
<text4 />
<CommentExampleReplyFormOuter  />
</Grid.Column>
<Grid.Column width={6}>
{<SideMenu  />}
</Grid.Column>
</Grid>

</div>


          <footer>
          <div  className="ui inverted fixed vertical segment ">
          <div className="column"  >Kontaktme</div>
          <div className="column"  >&copy; Lebenshilfe Bonn 2019</div>
          </div>
          </footer>
          </div>



    );
  }
}

//   var styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     topBox: {
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'lightgray',
//         justifyContent: 'center',
//         alignItems: 'center',
//         //text-align: 'center'
//     },
//     headline: {
//         fontWeight: 'bold',
//         fontSize: 18,
//     marginTop: 0,
//         width: 200,
//         height: 80,
//     backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//   otherContainer: {
//         flex: 4,
//         justifyContent: 'center',
//         alignItems: 'center',
//     backgroundColor: 'green',
//     },


// });

//  class App extends Component {
//   render() {
//     return (  <ApolloProvider client={client}>
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//     </div>
//   </ApolloProvider>
//     );
//     );
//   }
// }

//export default Article;
