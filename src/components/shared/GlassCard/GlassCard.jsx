import styles from "./GlassCard.module.css";

export const GlassCard = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
