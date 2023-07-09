# ReactApp - SearchBox Component

This repository contains a React component called SearchBox that provides a search input field with suggestions built following requirements that can be found [here](./requirements.md).

## Instructions

To run the project and see the SearchBox component in action, follow these steps:

1. Clone the repository to your local machine:

2. Navigate to the project directory:

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This command will start the React development server and open the application in your default browser. If the browser doesn't open automatically, you can access the app at [http://localhost:3000](http://localhost:3000).

For more information about applications built with create-react-app, the original README.md can be found [here](./getting-started.md).

## SearchBox Component

**Please note that this component is a controlled component per this requirement:**

```
All event handlers, state variables should be provided to the component via props
```

While I found that it would've been better to have this component manage its own state in general, I decided to follow the requirements as closely as possible since this might be required for several use-cases.

The SearchBox component provides a search input field with various functionalities. It accepts the following props:

### Props

- `active` (boolean, required): Determines whether the search box is active or not. When active, the component expands to show suggestions.
- `setActive` (function, required): Callback function to set the active state of the search box.

- `inputValue` (string, required): The current value of the search input field.
- `setInputValue` (function, required): Callback function to set the value of the search input field.

Optional Props:

- `onInputChange` (function): Callback function triggered when the input value changes. Receives the updated value as an argument.
- `suggestions` (array of Suggestion objects): An array of suggestion items to display when the search box is active.
- `onSubmit` (function): Callback function triggered when the user submits the search. Receives the search value as an argument.
- `placeholder` (string): Placeholder text to display in the search input field.
- `onEscape` (function): Callback function triggered when the user presses the Escape key. Useful for handling escape events.

### Example Usage

Can be found in the following [demo component](./src/components/Demo.tsx).

## Questions to the Reviewer

- Did I satisfy the requirements? The problem with this challenge is that its scope is too broad to the point I decided to write down the future improvements section. I could've spent a lot more time on it, but I decided to stop at a certain point. I think I satisfied the requirements, but I'm not sure if I did it in the way that was intended. I would love to get some feedback on this.

- I am not sure what would be better? Have the event handlers replace or extend a default behavior according to the specification.

- I am not sure if I was supposed to implement the autocomplete or similar behavior?

## Future Improvements

- Add an Autocomplete uncontrolled component wrapping and making use of the SearchBox component.

- Debounce input changes: I've already implemented the hook for this but I would need to complete the above point to make use of it.

- Customizable styling or custom rendering:

  - I assumed it's not needed for this challenge as it specifically asked for the component to maintain a similar style to Google Search.
  - I was really tempted to follow this path for maximum configurability, but I decided not to since it I would've had to think of multiple use-cases and it would've taken a lot more time.

- Mobile responsiveness: This is important due to a popular problem with similar UIs that is to control where the suggestions are displayed, above or below the input field depending on the available space.

- Optimization for large suggestion lists: If the suggestions list becomes very long, consider implementing virtual scrolling or pagination to improve performance and user experience. I didn't implement this because I assumed the list of suggestions would be limited like in Google Search. That is, if I were to implement the above autocomplete component I would've added a max number of suggestions.

- Caching: I didn't tackle this due to a similar reason to the above point.
