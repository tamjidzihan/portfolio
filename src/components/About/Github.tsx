import GitHubCalendar from "react-github-calendar";

function Github() {

  const theme = {
    // dark: ['#eae4f0', '#4a256b'],     // Dark theme colors
    dark: ['#4a256b', '#eae4f0'],     // Dark theme colors
  };

  return (
    <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="tamjidzihan"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        // theme={theme}
        style={{ margin: '0 auto' }}
      />
    </div>
  );
}

export default Github;
