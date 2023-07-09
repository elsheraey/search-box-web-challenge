# Requirements

## Overview

The goal of this assignment is to create a reusable search box that resembles Google Search box.

## Component Specification:

- The component should have 2 views, a closed (Idle) view and an expanded (Active) view
- As you type, suggestions should appear from a list of provided suggestions
- On suggestion click or on pressing "Enter" an onSubmit() event should be fired with the search word or suggestion item name
- Pressing "Esc" closes the suggestions box and switches to idle view
- Every suggestion item could provide its own icon (or defaults to magnifier icon)
- Suggestion items should be broken down into categories that group suggestions by type

## Component design:

- Idle View
- Active View
- Suggestion Categories (Tweak the design as you see fit)

## Considerations and Assumptions:

- **All event handlers, state variables should be provided to the component via props**
- Feel free to form your own assumptions and design decisions when it comes to event
  handlers and state variables that best achieve the functional requirements
- This is more of a design task than a logic task so use the easiest way possible to build
  the logic and flex your design skills.
- **You shouldn’t use any external libraries within the component other than for the icons**
