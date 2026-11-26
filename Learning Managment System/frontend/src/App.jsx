
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Button from "./components/ui/button.jsx";

function App() {
  return (
    <>
      <main className="container">
        <Navbar />

        <h1>Welcome to Langolearning!</h1>

        <p>Your journey to learning a new language starts here.</p>

        <Button variant="primary">
          Start Learning
        </Button>
      </main>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;


