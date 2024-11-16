// pages
import { en as aboutPage } from './pages/about';
import { en as homePage } from './pages/home';
import { en as contactPage } from './pages/contact';
import { en as featurePage } from './pages/feature';
// components
import { en as localeSwitcher } from './components/locale-switcher';
import { en as footer } from './components/footer';
import { en as navigation } from './components/navigation';
import { en as pricingTable } from './components/pricing-table';
import { en as comparisonTable } from './components/comparison-table';
import { en as contactForm } from './components/contact-form';

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
} as const;
