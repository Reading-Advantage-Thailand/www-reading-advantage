// pages
import { th as aboutPage } from './pages/about';
import { th as homePage } from './pages/home';
import { th as contactPage } from './pages/contact';
import { th as featurePage } from './pages/feature';

// components
import { th as localeSwitcher } from './components/locale-switcher';
import { th as footer } from './components/footer';
import { th as navigation } from './components/navigation';
import { th as pricingTable } from './components/pricing-table';
import { th as comparisonTable } from './components/comparison-table';
import { th as contactForm } from './components/contact-form';

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
