import clsx from "clsx";

type DividerProps = {
    className?: string;
  };

  export function Divider({ className }: DividerProps) {


    return (
      <div
        className={clsx(
          "border-t-medium border-solid border-t-primary rounded-md mb-5",
          className
        )}
      />
    );
  }