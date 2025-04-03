import { program } from "commander";
import Contacts from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const contacts = await Contacts.listContacts();
      console.table(contacts);
      break;

    case "get":
      // ... id
      const contact = await Contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      // ... name email phone
      const createdContact = await Contacts.addContact({ name, email, phone });
      console.log(createdContact);
      break;

    case "update":
      //id, name, email, phone
      const updatedContact = await Contacts.getContactById(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact);
      break;

    case "remove":
      // ... id
      const removedContact = await Contacts.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
// invokeAction(program.opts()).then(console.log);
