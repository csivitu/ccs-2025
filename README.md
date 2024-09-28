[![csivit][csivitu-shield]][csivitu-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/csivitu/Template">
    <img src="https://csivit.com/images/favicon.png" alt="Logo" width="80">
  </a>

  <h3 align="center">Frontend</h3>

  <p align="center">
    Boilerplate Code Repository for Next.js frontend
    <br />
    <a href="https://github.com/csivitu/Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/csivitu/Template">View Demo</a>
    ·
    <a href="https://github.com/csivitu/Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/csivitu/Template/issues">Request Feature</a>
  </p>
</p>



## Table of Contents
  - [Commit messages](#Commits)
  - [Commit Examples](#Examples)
  - [Tailwind Config and CSS](#TailwindCSS)
  - [Folder Structure](#Folders)
  - [Types and Interfaces](#Types)
  - [Integration](#Integration)



## Commits
1.Commits must be made not fir every minor changes but a group of changes must be batched togeteher and committed to the repo at once, same goes for sending a PR to the main upstream repository or the main branch from any other branch.
2.Commit messages must follow standard pracices, eg: using prefixes for commit messages

## Examples
### 1. **Type-Based Prefixes**
   These describe the type of change made to the codebase:
   
   - **feat**: A new feature or functionality.
     - Example: `feat: add user login functionality`
   - **fix**: A bug fix.
     - Example: `fix: resolve login redirect issue`
   - **chore**: Maintenance tasks or changes that do not affect the codebase logic (e.g., updates to configuration files, dependency updates).
     - Example: `chore: update dependencies`
   - **refactor**: Code changes that neither fix a bug nor add a feature but improve the internal structure.
     - Example: `refactor: simplify user data handling logic`
   - **style**: Code formatting changes (e.g., spacing, indentation, commas), unrelated to functionality.
     - Example: `style: fix indentation in index.ts`
   - **test**: Adding or updating tests.
     - Example: `test: add unit tests for login feature`
   - **docs**: Documentation updates.
     - Example: `docs: update README with installation instructions`
   - **build**: Changes related to build system configuration or external dependencies.
     - Example: `build: configure Webpack for production`
   - **ci**: Changes related to Continuous Integration (CI) configuration.
     - Example: `ci: update GitHub Actions for test pipeline`
   - **perf**: Performance improvements.
     - Example: `perf: improve data loading speed`
   - **revert**: Reverting a previous commit.
     - Example: `revert: revert previous login bug fix`

### 2. **Scope-Based Prefixes**
   These specify the area of the project being affected (optional but helpful):
   
   - **feat(auth)**: If the feature is related to authentication.
     - Example: `feat(auth): add OAuth2.0 authentication`
   - **fix(api)**: If the fix applies to API-related code.
     - Example: `fix(api): handle missing parameters in request`
   - **docs(ui)**: If the documentation is for UI components.
     - Example: `docs(ui): update button component usage`

### 3. **Semantic Commit Prefixes (Conventional Commits)**
   The Conventional Commits specification standardizes commit messages with prefixes and is often used with tools like `semantic-release` to automate versioning:
   
   - **BREAKING CHANGE**: This prefix indicates that the commit introduces a breaking API change.
     - Example: `feat!: change authentication method to token-based (BREAKING CHANGE)`
   - **build(deps)**: If you update or install new dependencies.
     - Example: `build(deps): upgrade React to version 18`

### Example Commit Messages:
- `feat(cart): add item quantity update functionality`
- `fix(auth): resolve token expiration issue`
- `chore: remove deprecated package`

## TailwindCSS
The tailwind.config.ts is a TypeScript configuration file used in Tailwind CSS projects to customize various aspects of Tailwind's default configuration. It allows you to define custom themes, extend or override existing styles, and configure plugins, among other things.
Things to consider:
1.For errors like CSS not being applied to some pages but working on other pages, make sure to check the content object inside the tailwind.config property accordingly
2. Adhere to the same breakpoints for the entierity of the project to ensure that responsivity failures do not arise.
3, For using custom fonts, make sure there is a font-face directive defined in the globals.css file and correctly defined in the tailwindconfig file as well
Sample:
in globals.css
```bash
@font-face {
  font-family: 'Averia Sans Libre';
  src: url('/fonts/AveriaSansLibre-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```
in tailwind config
```bash
extend: {
      fontFamily: {
        "Alegreya": ["Alegreya", "monospace"],
      },
    },
  },
```

## Folders
1.Adhere to the folder structure defined in the boilderplate, segregate similar files/ assets into same directory for better readablity of code. 
2.All files must be small case(first word) especially the route/ pages files. 
3.In react, every component must have it's first letter capitalised to avoid errors
4.Unimportant or non necessary folders/files (locally required files) must be mentioned appropriately in the .gitignore file.
5.Again, ensure tailwind config is updated for any folder structure changes.

## Types
All custom user types that are non-primitive must be defined in a seperate folder in the **src** folder called **types** which contains necessary files for all the user defined types used in the project.
Eg:
```bash
interface User {
  name: string;
  age: number;
  login(): void;
}

type User = {
  name: string;
  age: number;
  login: () => void;
};
```

## Integration
1.All the response data must be stored as in varaibles of their respective types/interfaces, all the netowrk requests must be handled for runtime-errors using try/catch and finally blocks.
2.The state of each netowkr request must be stored in a state and that state must be updated depending on the response.status recieved from the API.
3. Loadiing states and error message states must be used to handle loading phases and error messages (if any, after the request is completed successfully)
3. For polling based requests, a maximum upper limit must be set after which the polling must cease and an appropriate error message me set

There are different ways to fetch data:

1. getServerSideProps:
  Server-Side Data Fetching: Use getServerSideProps when you need to fetch data on the server side before rendering the page.
  Real-Time Data: Use it when the data should be fetched on every request (e.g., real-time data, personalized content, or ensuring data is always fresh).
  SEO Considerations: When you need the data to be available for search engines (since the data is pre-rendered).
  Sensitive Data: If you're fetching sensitive data (e.g., authentication tokens, database queries), which should not be exposed to the client.

```bash
export const getServerSideProps = async () => {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
};

```
2. useEffect:
   Client-Side Data Fetching: Use useEffect when the data can be fetched after the page has been rendered on the client side.
   Static or Non-Critical Data: If the data doesn’t need to be fetched before the page renders (e.g., less critical or optional data like paginated comments, client-specific data).
   Dynamic or User-Driven Events: When data should be fetched based on user interactions, such as button clicks or scroll events.
   Lighter Initial Load: When you want the page to load quickly and fetch data later.
   
```bash
import { useState, useEffect } from 'react';
const Page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);  // State for tracking errors
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.example.com/data');
        
        // Check if the response is OK
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);  // Set the fetched data to state
      } catch (err) {
        setError(err.message);  // Capture and set error message
      }
    }
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;  // Display error message
  if (!data) return <div>Loading...</div>;  // Display loading state if data isn't fetched yet
  return <div>{data.title}</div>;  // Render the fetched data
};
export default Page;
```
   


<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[csivitu-shield]: https://img.shields.io/badge/csivitu-csivitu-blue
[csivitu-url]: https://csivit.com
[issues-shield]: https://img.shields.io/github/issues/csivitu/Template.svg?style=flat-square
[issues-url]: https://github.com/csivitu/Template/issues
