import clsx from "clsx";

type GlassBoxProps = {
    children: React.ReactNode;
    className?: string;
    blur?: "0" | "1" | "2" | "3";
    opacity?: "0" | "1" | "2" | "3";
    bgcolor?: "0" | "1" | "2" | "3";
  };

  export function GlassBox({ children, className, blur = "2", opacity="2", bgcolor='2' }: GlassBoxProps) {
    const blurClasses = {
      "1": "backdrop-blur-sm dark:backdrop-blur-sm",
      "2": "backdrop-blur-md dark:backdrop-blur-md",
      "3": "backdrop-blur-xl dark:backdrop-blur-xl",
      "0": "backdrop-blur-none dark:backdrop-blur-none",
    };
    const opacityClasses = {
        "0": "bg-opacity-90 dark:bg-opacity-90",
        "1": "bg-opacity-60 dark:bg-opacity-60",
        "2": "bg-opacity-30 dark:bg-opacity-30",
        "3": "bg-opacity-0 dark:bg-opacity-0",
    };
    const bgClasses = {
        "0": "bg-white dark:bg-black",
        "1": "bg-primary-500",
        "2": "bg-primary-600",
        "3": "bg-primary-900 dark:bg-primary-50",
    }

    return (
      <section
        className={clsx(
          "py-8 md:py-10 rounded-xl shadow-md",
          blurClasses[blur],
          opacityClasses[opacity],
          bgClasses[bgcolor],
          className
        )}
      >
        {children}
      </section>
    );
  }