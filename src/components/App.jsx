import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import ContactForm from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">
              Contacts
              {/* <h1>Phonebook</h1>
              <ContactForm />
              <Filter />
              <ContactList /> */}
            </NavLink>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactForm />} />
      </Routes>
    </>
  );
};
