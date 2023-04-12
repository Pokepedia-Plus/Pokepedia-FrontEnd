import "./Components/Modal.css"
import PokemonModal from "./Components/Pokemon.js";
// import supabase from "./Components/config/supabaseClient";
import POP from "./Components/Pokemon"
function App() {
  return (
    <>
    <div className="whole">
    {/* <POP/> */}
      <PokemonModal />
      </div>
    </>
  );
}

export default App;
