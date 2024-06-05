<template>
  <div class="app-container">
    <Header />
    <SearchBar v-model="searchQuery" />
    <ContactList :contacts="filteredContacts" />
    <AddContact @add-contact="addContact" />
  </div>
  <components />
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import ContactList from "./components/ContactList.vue";
import AddContact from "./components/AddContact.vue";

const contacts = ref([]);
const searchQuery = ref("");

const addContact = (newContact) => {
  if (newContact.trim()) {
    contacts.value.push(newContact.trim());
  }
};

const filteredContacts = computed(() => {
  if (!searchQuery.value) {
    return contacts.value;
  }
  return contacts.value.filter((contact) =>
    contact.includes(searchQuery.value)
  );
});
</script>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
