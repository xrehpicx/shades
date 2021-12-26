/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ContextRender } from "./Contexts/AllContexts";

function App() {
  return (
    <ContextRender>
      <div
        css={css`
          font-family: "Product Sans";
        `}
      >
        <Typography variant="h1" color="initial">
          Jai Mangal Sharma
        </Typography>
      </div>
    </ContextRender>
  );
}

export default App;
