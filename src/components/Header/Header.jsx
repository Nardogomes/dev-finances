const styles = {
  root: {
    padding: "2rem 0 10rem",
    backgroundColor: "#2D4A22",
    textAlign: "center"
  },
  title: {
    color: "#fff",
    fontWeight: 100,
  }
}

const Header = () => {
  return <header style={styles.root}>
    <h2 style={styles.title}>dev.finance$</h2>
  </header>
}

export default Header;