import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Post from "./component/post";
import { Link } from "react-router-dom";
import PageRoute from "./pages/PageRoute";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <h1>react query practice~~</h1>
        <ul>
          <Link to="/post">Post</Link>
          <Link to="/">SuperHero</Link>
        </ul>
      </div>
      {/* <Post /> */}
      <PageRoute />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
