const features: Record<string, string[]> = {
  'gst-services': [
    'GST Registration',
    'Monthly Returns Filing',
    'GST Audit Support',
    'Input Tax Credit',
  ],
  'income-tax-services': [
    'Tax Planning',
    'Return Filing',
    'Tax Audit',
    'Assessment Support',
  ],
  'business-setup': [
    'Company Registration',
    'License Applications',
    'Compliance Setup',
    'Business Planning',
  ],
  'corporate-compliance': [
    'Annual Compliance',
    'Regulatory Filings',
    'Legal Documentation',
    'Advisory Services',
  ],
  'cost-management': [
    'Cost Analysis',
    'Budget Planning',
    'Efficiency Optimization',
    'Financial Strategy',
  ],
  'audit-certification': [
    'Statutory Audit',
    'Internal Audit',
    'Compliance Audit',
    'Special Purpose Audit',
  ],
  'registration-compliances': [
    'Business Registration',
    'License Management',
    'Renewal Services',
    'Compliance Tracking',
  ],
  'accounting-bookkeeping': [
    'Financial Statements',
    'Account Reconciliation',
    'Payroll Processing',
    'MIS Reports',
  ],
  'drafting-documentation': [
    'Legal Documents',
    'Agreements',
    'Contracts',
    'Policy Documents',
  ],
  'management-consultancy': [
    'Business Strategy',
    'Process Improvement',
    'Risk Management',
    'Growth Planning',
  ],
  'hr-services': [
    'Recruitment',
    'HR Policy Development',
    'Performance Management',
    'Training Programs',
  ],
  'statutory-compliances': [
    'Regulatory Compliance',
    'Statutory Filings',
    'Due Diligence',
    'Compliance Audit',
  ],
  'fema-rbi': [
    'FEMA Compliance',
    'RBI Reporting',
    'Foreign Investment',
    'Exchange Control',
  ],
  'virtual-accounting': [
    'Cloud Accounting',
    'Remote Bookkeeping',
    'Digital Documentation',
    'Real-time Reporting',
  ],
};

export default function getServiceFeatures(serviceId: string): string[] {
  return features[serviceId] || [
    'Professional Guidance',
    'Customized Solutions',
    'Regular Updates',
    'Dedicated Support',
  ];
}