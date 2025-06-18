/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://comgeracao.com.br',
  generateRobotsTxt: true, // gera também o robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/checkout'], // se quiser excluir rotas específicas
}
