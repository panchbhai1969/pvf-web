// components/TawkTo.tsx
"use client"
import { useEffect } from 'react';

const TawkTo: React.FC = () => {
  useEffect(() => {
    var Tawk_API:any = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6686f72e9d7f358570d72907/1i1vjb45k';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default TawkTo;
