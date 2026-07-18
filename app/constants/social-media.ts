import { ORGANIZATION } from '@/constants/organization';

const { SOCIAL_MEDIA } = ORGANIZATION;

const FOOTER_SOCIAL_MEDIA = [
  {
    id: 'instagram',
    title: 'اینستاگرام',
    href: `https://instagram.com/${SOCIAL_MEDIA.INSTAGRAM}`,
    icon: 'instagram',
  },
  {
    id: 'linkedin',
    title: 'لینکدین',
    href: `https://linkedin.com/company/${SOCIAL_MEDIA.LINKEDIN}`,
    icon: 'linkedin',
  },
  {
    id: 'youtube',
    title: 'یوتیوب',
    href: `https://youtube.com//${SOCIAL_MEDIA.YOUTUBE}`,
    icon: 'youtube',
  },
] as const;

export { FOOTER_SOCIAL_MEDIA };
