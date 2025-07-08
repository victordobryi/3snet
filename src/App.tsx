import Container from './components/layout/container/container';
import QueryClientProvider from './components/providers/query-client';
import Plan from './components/sections/plan/plan';

function App() {
  return (
    <QueryClientProvider>
      <Container>
        <Plan />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
