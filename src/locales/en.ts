// pages
import { en as aboutPage } from './pages/about';
import { en as homePage } from './pages/home';
import { en as contactPage } from './pages/contact';
import { en as featurePage } from './pages/feature';
import { en as codecampPage } from './pages/products/codecamp-advantage';
import { en as mathPage } from './pages/products/math-advantage';
import { en as readingPage } from './pages/products/reading-advantage';
import { en as sciencePage } from './pages/products/science-advantage';
import { en as stemPage } from './pages/products/stem-advantage';
import { en as storytimePage } from './pages/products/storytime-advantage';
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
        products: {
            codecampAdvantage: codecampPage,
            mathAdvantage: mathPage,
            readingAdvantage: readingPage,
            scienceAdvantage: sciencePage,
            stemAdvantage: stemPage,
            storytimeAdvantage: storytimePage
        },
    },
    components: {
        localeSwitcher,
        pricingTable,
        comparisonTable,
        contactForm,
    }
} as const;
