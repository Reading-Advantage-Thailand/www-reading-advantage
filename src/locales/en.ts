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
import { en as tutorPage } from './pages/products/tutor-advantage';
import { en as zhongwenPage } from './pages/products/zhongwen-advantage';
// components
import { en as localeSwitcher } from './components/locale-switcher';
import { en as pricingTable } from './components/pricing-table';
import { en as comparisonTable } from './components/comparison-table';
import { en as contactForm } from './components/contact-form';
import { en as footer } from './components/common/footer';
import { en as header } from './components/common/header';
import { en as navigation } from './components/common/navigation';

export default {
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
            storytimeAdvantage: storytimePage,
            tutorAdvantage: tutorPage,
            zhongwenAdvantage: zhongwenPage,
        },
    },
    components: {
        localeSwitcher,
        pricingTable,
        comparisonTable,
        contactForm,
        common: {
            footer,
            header,
            navigation,
        }
    }
} as const;
