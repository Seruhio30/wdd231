import { loadErrors } from './errors.js';
import { form_actions } from './form-actions.js';
import { navigation } from './navigation.js';
import { modal } from './modal.js';
import { form_handler } from './form-handler.js';
document.addEventListener('DOMContentLoaded', () => {
  loadErrors();
  form_actions();
  navigation();
  modal();
  form_handler();
});
