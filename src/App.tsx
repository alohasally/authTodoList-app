// import { QueryClientProvider } from "react-query";
import TodoList from "./pages/TodoList";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<TodoList />} />
            <Route path="todolist" element={<TodoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
