import { BarChart3, ShieldCheck, ShoppingBag } from "lucide-react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-to-use", label: "How to Use" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const features = [
  {
    icon: <BarChart3 className="text-[#C5A059]" />,
    title: "Real-time Analytics",
    desc: "Track every click and sale with our premium vendor dashboard.",
  },
  {
    icon: <ShieldCheck className="text-[#C5A059]" />,
    title: "Brand Protection",
    desc: "We verify every seller to maintain a premium, luxury marketplace environment.",
  },
  {
    icon: <ShoppingBag className="text-[#C5A059]" />,
    title: "Smart Retargeting",
    desc: "Our AI displays your products to customers most likely to buy.",
  },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Best Sellers", href: "#" },
    { label: "Gift Sets", href: "#" },
  ],
  marketplace: [
    { label: "Become a Seller", href: "#" },
    { label: "Ad Solutions", href: "#" },
    { label: "Vendor Portal", href: "#" },
    { label: "Marketplace Policy", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
