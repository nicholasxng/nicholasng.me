## 2024-06-21 - Form Label Accessibility
**Learning:** Found that custom-styled forms in Hugo templates often miss `for`/`id` bindings between `<label>` and `<input>` elements. Screen readers rely on these explicit associations, not just visual proximity.
**Action:** Always ensure custom forms have matching `for` on labels and `id` on inputs, especially when migrating or creating new form components.
