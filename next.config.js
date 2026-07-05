/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ваши текущие настройки, если они есть
};

// Подключаем анализатор
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// Экспортируем обернутый конфиг
module.exports = withBundleAnalyzer(nextConfig);
