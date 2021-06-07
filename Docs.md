**`JSON`** example with all form elements:
```json
{
    // fieldset with legend?
  "inputs": [
    // don't forget to validate input types
    {
    "label": "Name",
    "type": "text",
    "id": "name",
    "placeholder": "Type your name",
    "required": true
    },
    {
    "label": "Age",
    "type": "number",
    "id": "age",
    "required": false
    }]
  "select": {
    "id": "pet-select",
    "label": "Your favorite pet",
    "options": ["dog", "cat", "parrot", "degus", "ants"],  // object?
    // option group??
    "selected": "degus",
    "multiple": true,
    "size": 3
  },
  "textarea": {
    "id": "about",
    "cols": 50,
    "rows": 5,
    "placeholder": "Write here about yourself a little bit."
  },
  "submit": {
    "url": "www.example.com",
    "text": "Send"
  }
}
```
will be converted in `HTML`:
```html
<form action="www.example.com">
  <label for="name">Name</label>
  <input type="text" id="name" required/>

  <label for="age">Age</label>
  <input type="number" id="age"/>

  <label for="pet-select">Your favorite pet</label>
  <select id="pet-select">
    <option value="dog">dog</option>
    <option value="cat">cat<option>
    <option value="parrot">parrot<option>
    <option value="degus" selected>degus<option>
    <option value="ants">ants<option>
  </select>

  <label for="about">About</label>
  <textarea id="about" cols="50" rows="5"
    placeholder="Write here about yourself a little bit."></textarea>
  
  <button>Send</button>

  <style>
    <!-- styles -->
  </style>
</form>
```