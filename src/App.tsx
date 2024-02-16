import Generator from './components/Generator';
import Pad from './components/Pad';
import Box from './components/Box';

function App() {
  return (
    <div className="h-dvh p-4 flex flex-col gap-4">
      <Pad name="Sample Pad ">
        <Generator name="Generator">
          <Box />
          <Box />
        </Generator>
        <Generator name="Generator">
          <Box />
          <Box />
        </Generator>
        <Generator name="Generator">
          <Box />
          <Box />
        </Generator>
      </Pad>
      <Pad name="Pad with one box">
        <Generator name="Generator">
          <Box />
          <Box />
        </Generator>
        <Generator name="Generator">
          <Box />
        </Generator>
        <Generator name="Generator">
          <Box />
          <Box />
        </Generator>
      </Pad>
      <Pad name="Turbine Pad">
        <Generator name="Turbine">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </Generator>
        <Generator name="Generator">
          <Box />
          <Box />
        </Generator>
      </Pad>
    </div>
  );
}

export default App;
