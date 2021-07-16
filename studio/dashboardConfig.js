export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f172d945ca2f11122e311a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-5z5oou67',
                  apiId: 'ec78874c-dc86-48fd-b72f-722f4b64fb64'
                },
                {
                  buildHookId: '60f172d91017600123a3f3bd',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zc881i84',
                  apiId: 'bef45e29-4e87-4666-9958-b8d1e03cfebd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/panchi568/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zc881i84.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
