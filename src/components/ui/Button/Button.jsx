import styles from "./Button.module.css";
import { cn } from "@/lib/utils";

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
