# Start Again

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/quotes`)
* a single React component (`<App />`)
* an example database module (`server/db/quotes.js`)
* an API client module (`client/apis/quotes.js`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)

## User Stories
1. When the page loads, I want to see a beautiful photograph fade-in
2. After a few seconds, I want a thought-provoking quote to fade-in overlaid on the photo. The quotes will come from a local database.
3. After a few more seconds, I want the question "How do you want to start you day?" to fade in. This will have a drop down that the user can select from to choose mindfulness or journaling
  - Selecting mindfulness should direct me to a page containing a meditation timer where the user can select how long they want to meditate. The timer will count down and ring with a pleasing tone when it reaches zero.
  - Selecting journaling should lead the user to a page where they can write a journal entry that will be stored in a local database
4. The top-right corner of the page should display the weather. The location can be pre-determined for MVP
5. The design should be mobile first: optimised from a tablet perspective.
