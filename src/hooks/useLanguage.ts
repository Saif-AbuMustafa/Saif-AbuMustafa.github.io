import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOMetaTags {
  title?: string;
  description?: string;
  keywords?: string;
}

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    
    // Update document direction for RTL languages
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const updateSEOMetaTags = (tags: SEOMetaTags) => {
    if (tags.title) {
      document.title = tags.title;
      
      // Update Open Graph title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', tags.title);
    }

    if (tags.description) {
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', tags.description);

      // Update Open Graph description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', tags.description);
    }

    if (tags.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', tags.keywords);
    }
  };

  useEffect(() => {
    // Update HTML lang attribute on language change
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    t,
    updateSEOMetaTags,
    isRTL: i18n.language === 'ar'
  };
};
