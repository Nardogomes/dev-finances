import Header from "../Header/Header";

const styles = {
  root: {
    width: "100%",
    height: "100vh",
  }
}

const Screen = ({ children, style={} }) => {
  return <div style={styles.root}>
      <Header />
  </div>
}

export default Screen;