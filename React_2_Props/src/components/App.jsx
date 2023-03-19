import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(function (contact, index) {
        return (
          <Card
            key={index + 1}
            order={index + 1}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
