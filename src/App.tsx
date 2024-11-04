// import { QueryClientProvider } from "react-query";
import Account from "./pages/Account";
import Todo from "./pages/Todo";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Todo />} />
            <Route path="todolist" element={<Todo />} />
            <Route path="user" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </QueryClientProvider> */}
    </>
  );
};

export default App;
