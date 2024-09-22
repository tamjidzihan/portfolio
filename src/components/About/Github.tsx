import GitHubCalendar from "react-github-calendar";

function Github() {

  const theme = {
    light: ['#ebedf0', '#c084f5'], // Light theme colors
    dark: ['#333', '#c084f5'],     // Dark theme colors
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
        theme={theme}
        style={{ margin: '0 auto' }}
      />
    </div>
  );
}

export default Github;
