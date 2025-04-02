import { nanoid } from "nanoid";
import * as fs from "node:fs/promises";
import path from "node:path";

const contactsPath = path.resolve("db", "contacts.json");
console.log(contactsPath);

async function readContacts() {
  const data = await fs.readFile(contactsPath, { encoding: "utf-8" });

  return JSON.parse(data);
}

async function writeContacts(contacts) {
  return fs.writeFile(contactsPath, JSON.stringify(contacts, undefined, 2));
}

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const contacts = await readContacts();
  return contacts;
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await readContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (typeof contact === "undefined") {
    return null;
  }

  return contact;
}

getContactById("e6ywwRe4jcqxXfCZOj_1e").then((data) => console.log(data));

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
  const contacts = await readContacts();

  // const contact = { ...contacts, id: nanoid(), name, email, phone };
}

//продовження 1:36:13
