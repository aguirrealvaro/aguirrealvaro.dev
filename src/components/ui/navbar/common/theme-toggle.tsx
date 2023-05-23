import { FunctionComponent } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";

export const ThemeToggle: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = theme === "light" ? Sun : Moon;

  return (
    <IconButton onClick={handleToggle}>
      <Icon icon={icon} />
    </IconButton>
  );
};
