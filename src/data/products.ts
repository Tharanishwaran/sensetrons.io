import {
    Hospital, Shirt, Factory, Droplets, ShoppingCart, Settings,
    Stethoscope, Pill, FlaskConical, Users, ClipboardList, Package,
    Scissors, Ruler, Truck, Zap, Cpu, BarChart, ShieldCheck, Database,
    Smartphone, Search, Layers, FileText, BrainCircuit, Globe
} from "lucide-react";

// Import illustrations
import hospitalImg from "@/assets/illustrations/hospital.png";
import garmentsImg from "@/assets/illustrations/garments.png";
import manufacturingImg from "@/assets/illustrations/manufacturing.png";
import borewellImg from "@/assets/illustrations/borewell.png";
import retailImg from "@/assets/illustrations/retail.png";
import customImg from "@/assets/illustrations/custom.png";

export type ProductData = {
    id: string;
    title: string;
    industry: string;
    icon: any;
    color: string;
    bg: string;
    description: string;
    heroImage: string;
    features: {
        title: string;
        desc: string;
        icon: any;
    }[];
    benefits: string[];
    useCases: string[];
};

export const productsData: Record<string, ProductData> = {
    hospital: {
        id: "hospital",
        title: "Hospital Management System",
        industry: "Healthcare",
        icon: Hospital,
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        heroImage: hospitalImg,
        description: "A comprehensive, cloud-native HMS designed to streamline clinical, administrative, and financial operations. From OPD management to complex IPD billing, we cover the entire patient journey.",
        benefits: [
            "40% reduction in patient OPD wait times",
            "100% paperless record management (EMR/EHR)",
            "Automated pharmacy and lab inventory tracking",
            "Improved billing accuracy and insurance claim processing",
            "Real-time analytics for hospital administrators"
        ],
        useCases: [
            "Multi-specialty Hospitals",
            "Diagnostic Centers & Labs",
            "Specialized Clinics",
            "Pharmacy Chains"
        ],
        features: [
            {
                title: "Complete Patient Care",
                desc: "Manage OPD registrations, IPD admissions, and complete EMR/EHR securely.",
                icon: Stethoscope
            },
            {
                title: "Pharmacy & Lab",
                desc: "Integrated pharmacy billing and laboratory report automation with barcode support.",
                icon: Pill
            },
            {
                title: "Smart Billing",
                desc: "Dynamic billing for services, room charges, and insurance co-pay tracking.",
                icon: FileText
            },
            {
                title: "Internal Operations",
                desc: "Staff scheduling, payroll, and asset management tailored for healthcare.",
                icon: Users
            }
        ]
    },
    garments: {
        id: "garments",
        title: "Garments ERP",
        industry: "Textile",
        icon: Shirt,
        color: "text-orange-600",
        bg: "bg-orange-600/10",
        heroImage: garmentsImg,
        description: "The ultimate ERP for garment manufacturers and exporters. Manage styles, size-color matrices, and production lines with granular precision.",
        benefits: [
            "Accurate style-wise costing and BOM",
            "Real-time production tracking (Sampling to Dispatch)",
            "Reduced fabric wastage through smart inventory",
            "Better deadline management with automated alerts",
            "Simplified export documentation and compliance"
        ],
        useCases: [
            "Garment Manufacturers",
            "Exporters & Buying Houses",
            "Fabric Processing Units",
            "Workwear & Uniform Providers"
        ],
        features: [
            {
                title: "Style & Matrix",
                desc: "Manage complex Size-Color-Style matrices for every SKU effortlessly.",
                icon: Layers
            },
            {
                title: "Production Control",
                desc: "Track every piece through Cutting, Stitching, Checker, and QC departments.",
                icon: Scissors
            },
            {
                title: "Inventory Mastery",
                desc: "Raw material tracking (Fabric, trims, buttons) with precise wastage calculation.",
                icon: Package
            },
            {
                title: "Resource Planning",
                desc: "Machine maintenance and operator efficiency tracking on the floor.",
                icon: Settings
            }
        ]
    },
    manufacturing: {
        id: "manufacturing",
        title: "Manufacturing ERP",
        industry: "Industry 4.0",
        icon: Factory,
        color: "text-purple-600",
        bg: "bg-purple-600/10",
        heroImage: manufacturingImg,
        description: "Full-scale manufacturing execution system (MES) and ERP. Synchronize your supply chain with your production floor to achieve zero-waste operations.",
        benefits: [
            "Optimized machine utilization and scheduling",
            "End-to-end supply chain visibility",
            "Significant reduction in manual data entry errors",
            "Real-time cost per unit tracking",
            "Compliance-ready reporting"
        ],
        useCases: [
            "Steel & Metal Fabrication",
            "Automotive Component Mfg",
            "FMCG Production",
            "Industrial Equipment Mfg"
        ],
        features: [
            {
                title: "BOM & Work Orders",
                desc: "Multi-level Bill of Materials with automated work order generation.",
                icon: ClipboardList
            },
            {
                title: "Floor Analytics",
                desc: "Live OEE (Overall Equipment Effectiveness) monitoring and reporting.",
                icon: BarChart
            },
            {
                title: "Supply Chain",
                desc: "Integrated procurement, vendor management, and logistics tracking.",
                icon: Truck
            },
            {
                title: "Quality Assurance",
                desc: "Digital checklists and automatic rejection tracking for QA teams.",
                icon: ShieldCheck
            }
        ]
    },
    borewell: {
        id: "borewell",
        title: "Borewell ERP",
        industry: "Water Industry",
        icon: Droplets,
        color: "text-teal-600",
        bg: "bg-teal-600/10",
        heroImage: borewellImg,
        description: "Industry-first specialized ERP for borewell contractors and rig owners. Manage quotations, on-site rigs, material usage, and staff logs from a single mobile-friendly app.",
        benefits: [
            "Instant quotation generation on field",
            "Rig-wise fuel and material usage tracking",
            "Better recovery with automated payment reminders",
            "Staff attendance and daily work log management",
            "Project-wise profit & loss visibility"
        ],
        useCases: [
            "Borewell Contractors",
            "Rig Owners & Operators",
            "Irrigation Specialist Firms",
            "Groundwater Engineering Teams"
        ],
        features: [
            {
                title: "Field Operations",
                desc: "On-site job entry, depth tracking, and casing pipes log entry.",
                icon: Droplets
            },
            {
                title: "Rig Tracking",
                desc: "Fuel consumption, maintenance logs, and rig movement history.",
                icon: Truck
            },
            {
                title: "Smart Quotations",
                desc: "Pre-configured pricing templates for instant surveys.",
                icon: Search
            },
            {
                title: "Accounts Control",
                desc: "Manage customer deposits, staged billing, and pending payments.",
                icon: Database
            }
        ]
    },
    retail: {
        id: "retail",
        title: "Retail Billing ERP",
        industry: "Retail & POS",
        icon: ShoppingCart,
        color: "text-green-600",
        bg: "bg-green-600/10",
        heroImage: retailImg,
        description: "Modular POS and inventory system for retail stores to large chains. Lightning-fast billing integrated with smart stock replenishment and customer loyalty.",
        benefits: [
            "Instant barcode-based billing (0.5s per item)",
            "Automated low-stock alerts and PO generation",
            "Cross-store stock movement and tracking",
            "Integrated UPI/Card payment records",
            "Deep loyalty integration for repeat business"
        ],
        useCases: [
            "Supermarkets & Grocery",
            "Fashion Boutiques",
            "Electronics Showrooms",
            "Furniture Stores"
        ],
        features: [
            {
                title: "Flash Billing",
                desc: "High-speed POS interface designed for heavy footfall locations.",
                icon: Zap
            },
            {
                title: "Inventory AI",
                desc: "Smart replenishment based on sales velocity and seasonal trends.",
                icon: BrainCircuit
            },
            {
                title: "Multi-Store",
                desc: "Manage 100+ stores, separate warehouses, and central pricing.",
                icon: Globe
            },
            {
                title: "Loyalty Engine",
                desc: "Integrated points, memberships, and SMS/WhatsApp marketing.",
                icon: Users
            }
        ]
    },
    custom: {
        id: "custom",
        title: "Custom ERP Solutions",
        industry: "Bespoke",
        icon: Settings,
        color: "text-violet-600",
        bg: "bg-violet-600/10",
        heroImage: customImg,
        description: "Our core philosophy is that the software should fit the business, not vice versa. We build custom ERP modules tailored to your unique internal processes and challenges.",
        benefits: [
            "Zero compromises on internal workflows",
            "Higher team adoption due to tailored UX",
            "Cost-effective as you pay only for what you need",
            "Future-proof scalability as your business evolves",
            "First-party integration with your existing tools"
        ],
        useCases: [
            "Unique Hybrid Businesses",
            "Established Enterprises scaling up",
            "Niche Service Providers",
            "Government & Public Sector Projects"
        ],
        features: [
            {
                title: "Needs Analysis",
                desc: "Deep-dive consulting to map your exact operational requirements.",
                icon: Search
            },
            {
                title: "Scalable Core",
                desc: "Built on our high-performance SaaS core for speed and security.",
                icon: Cpu
            },
            {
                title: "API-First Design",
                desc: "Connect seamlessly with Tally, SAP, or any 3rd party tool.",
                icon: Database
            },
            {
                title: "Cloud or On-Prem",
                desc: "Deployment options based on your security and access needs.",
                icon: ShieldCheck
            }
        ]
    }
};
