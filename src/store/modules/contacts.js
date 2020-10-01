export default {
  state: {
    contacts: [
      {id: 1, name: 'Andrew', number: '+380631234567', email:'andrew@gmail.com'},
      {id: 2, name: 'Katya tinder', number: '+380731234567'},
      {id: 3, name: 'Nazar work', number: '+38011111111', email:'nazar@gmail.com'},
      {id: 4, name: 'Anya', email: 'anya@gmail.com'},
      {id: 5, name: 'Oleg Gym'}
    ]
  },


  getters: {
    getSortedContacts(state) {
      return state.contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
  },

  mutations: {
    addContactToState(state, newContact) {
      state.contacts.push(newContact);
    },

    deleteContactFromState(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id)
    },
  }
}
