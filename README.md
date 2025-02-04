## Overview

This application allows users to add origins using a search box and view their performance data in a tabular format. Users can filter, sort, and customize the table by hiding or showing columns as needed.

## Features

- **Search Box for Adding Origins:** Users can search and add website origins to analyze their CrUX performance data.
- **Tabular Data Display:** The application fetches CrUX data and displays it in a structured table format.
- **Filtering & Sorting:** Users can filter and sort data based on various performance metrics.
- **Column Visibility Customization:** Users can toggle the visibility of table columns to focus on relevant metrics.
- **Data summary info:** Users has the ability to view Average and total information for certain metrics

## Local run

- Dowload the zip or clone the repo using the link
- Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

- Create a .env file in your root directory and add the below items

```bash
NEXT_PUBLIC_CRUX_API_URL=https://chromeuxreport.googleapis.com/v1/records:queryRecord
NEXT_PUBLIC_API_KEY=<your_api_key_from_google_cloud_console>
```

- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next steps

- **Enhance UI/UX:** Improve the interface for better user experience by using visualization charts and color coding.
- **Pagination Support:** Add pagination to manage large datasets.
- **Export Data Feature:** Allow users to export data as CSV/Excel.
- **User Authentication:** Enable login to save and track favorite origins.
