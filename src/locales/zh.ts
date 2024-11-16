// pages
import { zh as aboutPage } from "./pages/about";
import { zh as homePage } from "./pages/home";
import { zh as contactPage } from "./pages/contact";
import { zh as featurePage } from "./pages/feature";
// components
import { zh as localeSwitcher } from "./components/locale-switcher";
import { zh as footer } from './components/footer';
import { zh as navigation } from './components/navigation';
import { zh as pricingTable } from './components/pricing-table';
import { zh as comparisonTable } from './components/comparison-table';
import { zh as contactForm } from './components/contact-form';

export default {
    navigation: navigation,
    footer: footer,
    pages: {
        about: aboutPage,
        home: homePage,
        contact: contactPage,
        feature: featurePage,
    },
    components: {
        localeSwitcher,
        pricingTable,
        comparisonTable,
        contactForm,
    }
} as const  