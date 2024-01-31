import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsScope.contacts.items;
export const selectIsLoading = state => state.contactsScope.contacts.isLoading;
export const selectError = state => state.contactsScope.contacts.error;
export const selectFilterStatus = state => state.contactsScope.filter;

export const selectFilteredItems = createSelector(
  [selectContacts, selectFilterStatus],
  (contacts, filterQuery) => {
    const normalizeFilter = filterQuery.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
