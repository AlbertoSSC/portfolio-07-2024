import api01 from '@/assets/images/projects/api_01.jpg';
import api02 from '@/assets/images/projects/api_02.jpg';
import api03 from '@/assets/images/projects/api_03.jpg';

import invoice01 from '@/assets/images/projects/invoice_01.jpg';
import invoice02 from '@/assets/images/projects/invoice_02.jpg';
import invoice03 from '@/assets/images/projects/invoice_03.jpg';

import adoption01 from '@/assets/images/projects/adoption_01.jpg';
import adoption02 from '@/assets/images/projects/adoption_02.jpg';
import adoption03 from '@/assets/images/projects/adoption_03.jpg';

export const useStudiesProjectsImgs = () => {
  const apiProjectImages = [api01, api02, api03];
  const invoiceProjectImages = [invoice01, invoice02, invoice03];
  const adoptionProjectImages = [adoption02, adoption01, adoption03];

  return {
    apiProjectImages,
    invoiceProjectImages,
    adoptionProjectImages,
  };
};
