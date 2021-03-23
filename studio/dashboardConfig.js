export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6059df121dd5f129678489f8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m8arm1pu',
                  apiId: '2b8e1bff-4d72-49fc-9af9-0ddc31cd0af0'
                },
                {
                  buildHookId: '6059df1260104a20e4c97dc6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qzuod6pe',
                  apiId: '9b2d724e-c1f9-4510-b65a-62e32ced9a58'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hyasir786/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qzuod6pe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
