export const getTheme = (isDark) => {
  return isDark
    ? {
        primaryBg: "hsl(230, 17%, 14%)",
        secondaryBg: "hsl(232, 19%, 15%)",
        cardBg: "hsl(228, 28%, 20%)",
        txt1: "hsl(228, 34%, 66%)",
        txt2: "hsl(0, 0%, 100%)",

        toggle: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
        green: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram1: "hsl(37, 97%, 70%)",
        instagram2: "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
      }
    : {
        primaryBg: "hsl(0, 0%, 100%)",
        secondaryBg: "hsl(225, 100%, 98%)",
        cardBg: "hsl(227, 47%, 96%)",
        txt1: "hsl(228, 12%, 44%)",
        txt2: "hsl(230, 17%, 14%)",
        toggle: "hsl(230, 22%, 74%) ",
        toggleTheme: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
      };
};
