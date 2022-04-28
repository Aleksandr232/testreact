import FolderBlock from "./components/folder_block/folder_block";
import Headers from "./components/headers/headers";
import LeftPanel from "./components/left_panel/left_panel";

function App() {
  return (
    <div>
      <Headers/>
      <LeftPanel/>
      <FolderBlock/>
    </div>
  );
}

export default App;
