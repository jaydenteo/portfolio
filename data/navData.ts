import {
  Linkedin, 
  Github,
} from "@/assets/icons";

interface NavItem {
  name: string;
  href: string;
}

interface Socials {
  name: string;
  href: string;
  displayName?: string;
  icon?: React.ElementType;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#" },
  { name: "Stack", href: "#Stack" },
  { name: "Works", href: "#Works" },
  { name: "About", href: "#About" },
  { name: "Contact", href: "#Contact" },
];

export const socials: Socials[] = [
  { name: "Email", href: "mailto:jayden228@gmail.com", displayName: "jayden228@gmail.com"},
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jayden-teo-470246143/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/jaydenteo", icon: Github },
];
