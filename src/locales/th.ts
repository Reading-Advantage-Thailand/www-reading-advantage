// pages
import { th as aboutPage } from './pages/about';
import { th as homePage } from './pages/home';
import { th as contactPage } from './pages/contact';
import { th as featurePage } from './pages/feature';
import { th as codecampPage } from './pages/products/codecamp-advantage';
import { th as mathPage } from './pages/products/math-advantage';
import { th as readingPage } from './pages/products/reading-advantage';
import { th as sciencePage } from './pages/products/science-advantage';
import { th as stemPage } from './pages/products/stem-advantage';
import { th as storytimePage } from './pages/products/storytime-advantage';
import { th as tutorPage } from './pages/products/tutor-advantage';
import { th as zhongwenPage } from './pages/products/zhongwen-advantage';
// components
import { th as localeSwitcher } from './components/locale-switcher';
import { th as navigation } from './components/navigation';
import { th as pricingTable } from './components/pricing-table';
import { th as comparisonTable } from './components/comparison-table';
import { th as contactForm } from './components/contact-form';
import { th as footer } from './components/common/footer';

export default {
    navigation: navigation,
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
            footer
        }
    }
} as const
