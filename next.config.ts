// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. Statik dışa aktarımı etkinleştir
  output: 'export',

  // 2. Resim optimizasyonunu statik siteler için devre dışı bırak
  images: {
    unoptimized: true,
  },

  // 3. === EN KRİTİK DEĞİŞİKLİK BURADA ===
  // Tüm linklerin ve asset yollarının, sanki bir alt klasörde
  // çalışacakmış gibi oluşturulmasını sağlar. Bu, göreceli yolların
  // doğru çalışması için gereklidir.
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined, // Genellikle kullanıcı adı reposu için boş bırakılır ama bazen repo adı gerekir. Şimdilik boş bırakalım.
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined, // Bunu da boş bırakarak göreceli yollara zorluyoruz.
};

export default nextConfig;