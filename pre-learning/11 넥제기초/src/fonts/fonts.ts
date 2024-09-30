import { Nanum_Pen_Script, Jacquarda_Bastarda_9 } from "next/font/google";
import localFont from "next/font/local";

export const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  preload: false,
});

export const jacquardaBastarda9 = Jacquarda_Bastarda_9({
  weight: "400",
  subsets: ["latin"],
});

export const jejuDoldam = localFont({
  src: [{ path: "./local/doldam.woff2" }, { path: "./local/doldam.woff" }],
});
