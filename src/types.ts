export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}