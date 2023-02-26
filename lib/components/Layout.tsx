import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning p-0">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-center">
            <span className="navbar-text text-center">
              🚧 En construction 🚧
            </span>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg sticky-top p-3 nav-background shadow">
        <div className="container">
          <Link className="navbar-brand text-white fw-semibold" href="/">
            🪚 Scies et Haches 🪓 🚧 site en construction 🚧
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" href="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/apropos">
                  A propos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3 mb-3">{children}</div>
    </>
  );
}
