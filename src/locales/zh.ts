// pages
import { zh as aboutPage } from "./pages/about";
import { zh as homePage } from "./pages/home";
import { zh as contactPage } from "./pages/contact";
import { zh as featurePage } from "./pages/feature";
import { zh as codecampPage } from "./pages/products/codecamp-advantage";
import { zh as mathPage } from "./pages/products/math-advantage";
import { zh as readingPage } from "./pages/products/reading-advantage";
import { zh as sciencePage } from "./pages/products/science-advantage";
import { zh as stemPage } from "./pages/products/stem-advantage";
import { zh as storytimePage } from "./pages/products/storytime-advantage";
import { zh as tutorPage } from "./pages/products/tutor-advantage";
import { zh as zhongwenPage } from "./pages/products/zhongwen-advantage";
// components
import { zh as localeSwitcher } from "./components/locale-switcher";
import { zh as pricingTable } from './components/pricing-table';
import { zh as comparisonTable } from './components/comparison-table';
import { zh as contactForm } from './components/contact-form';
import { zh as footer } from './components/common/footer';
import { zh as header } from './components/common/header';
import { zh as navigation } from './components/common/navigation';

export default {
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
} as const  