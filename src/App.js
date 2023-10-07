import Card from './card';
import contacts from "./contacts";

function App() {
  function createCard(contact) {
    return <Card
    id={contact.id}
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
  }


  return (
    <div className="app">
      <h1 className="heading">My Contact</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
