import clsx from "clsx";

type NeumBoxProps = {
    children: React.ReactNode;
    className?: string;
    style?: "blank" | "neon" | "color" | "card" | "hover" | "info";
  };

  export function NeumBox({ children, className, style='blank'}: NeumBoxProps) {
    const styleClasses = {
        "blank": "bg-white dark:bg-[#040f1c] border-8 border-gray-200 shadow-lg rounded-[2rem]",
        "neon": "neon-border bg-white dark:bg-[#040f1c] backdrop-blur-lg rounded-[2rem] rounded-[2rem]",
        "color": "bg-white dark:bg-[#040f1c] border-8 border-primary-500 shadow-lg rounded-[2rem]",
        "hover": "bg-white dark:bg-[#040f1c] border-8 border-gray-200 shadow-lg transition-all duration-300 ease-out hover:scale-[102%] hover:shadow-[10px_15px] hover:shadow-primary-500 hover:border-8 hover:border-primary-500 rounded-[2rem]",
        "card": "bg-[#F6F6F6] dark:bg-[#040f1c] shadow-[3px_5px_15px,3px_5px] shadow-gray-200 rounded-[2rem] md:rounded-[4rem]",
        "info": "border-4 border-[#726B79] shadow-[3px_5px] shadow-gray-200 rounded-[16rem]",
    }
    return (
      <section
        className={clsx(
          "py-8 md:py-10",
          styleClasses[style],
          className
        )}
      >
        
        {children}
      </section>
    );
  }