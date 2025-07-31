import styles from "./Navbar.module.css";

interface NavbarProps {
  onAddProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAddProject }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🌿 EcoMap</div>
      <button className={styles.addButton} onClick={onAddProject}>
        + Novo Projeto
      </button>
    </nav>
  );
};
