import { loadErrors } from './errors.js';
import { form_actions } from './form-actions.js';
import { navigation } from './navigation.js';
import { modal } from './modal.js';
import { form_handler } from './form-handler.js';

document.addEventListener('DOMContentLoaded', () => {
  try { loadErrors(); } catch (e) { console.warn('loadErrors failed', e); }
  try { form_actions(); } catch (e) { console.warn('form_actions failed', e); }
  try { navigation(); } catch (e) { console.warn('navigation failed', e); }
  try { modal(); } catch (e) { console.warn('modal failed', e); }
  try { form_handler(); } catch (e) { console.warn('form_handler failed', e); }
});
