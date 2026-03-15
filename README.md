# Training project

This repository contains the training project for frontend.
It includes a backend and frontend application, which are located in the `backend` and `frontend`
directories, respectively.

# Backend

The backend application is built using NestJS, a progressive Node.js framework
for building efficient and scalable server-side applications.
It provides a robust set of features for building APIs,
including support for TypeScript, dependency injection, and modular architecture.

## Documentation

To find an api documentation start a dev server and open http://localhost:8000/api in your browser.

```bash
cd backend
npm install
npm run start:dev
```

# Task

Connect frontend and backend applications.
The frontend application should be able to fetch data from the backend and display it on the screen.
Using [Tanstack Query](https://tanstack.com/query/latest)

## Examples

### Get requests

```tsx
// src/App.tsx
import {Route} from "react-router-dom";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Route path="/" element={<HomePage/>}/>
    </QueryClientProvider>
  );
}
```

```tsx
// src/hooks/useGetUser.tsx
import {useQuery} from "@tanstack/react-query";
import Cookies from "universal-cookie";

import {User} from "@/types";

async function fetchUser(): Promise<User> {
  const cookie = new Cookies();

  const response = await fetch("/api/auth/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.get("auth_token")}`,
    },
  });

  return await response.json();
}

export default function useGetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}

```

```tsx
// src/pages/HomePage.tsx
import useGetUser from "@/hooks/useGetUser";

export default function HomePage() {
  const {data: user, isLoading, error} = useGetUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
    </div>
  );
}

```
