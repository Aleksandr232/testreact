import FolderBlock from "./components/folder_block/folder_block";
import Headers from "./components/headers/headers";
import LeftPanel from "./components/left_panel/left_panel";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Headers/>
      <LeftPanel/>
      <FolderBlock/>
      <Footer/>
    </div>
  );
}

export default App;
