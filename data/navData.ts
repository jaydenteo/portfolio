interface NavItem {
  name: string;
  href: string;
}

interface Socials {
  name: string;
  href: string;
  displayName?: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#" },
  { name: "Stack", href: "#" },
  { name: "Works", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export const socials: Socials[] = [
  { name: "Email", href: "mailto:jayden228@gmail.com", displayName: "jayden228@gmail.com"},
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jayden-teo-470246143/" },
  { name: "GitHub", href: "https://github.com/jaydenteo" },
];
