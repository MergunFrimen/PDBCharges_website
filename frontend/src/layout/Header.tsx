import Logo from "../components/Logo";

export default function Header() {
  return (
    <header className="row">
      <div className="col">
        <h1 style={{ marginBottom: "25px" }}>
          <Logo />
        </h1>
      </div>
    </header>
  );
}
