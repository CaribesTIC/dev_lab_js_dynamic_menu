function inicio() {
    document.getElementsByTagName("nav")[0].appendChild(
        Menu.make( 
            [
                {  "id": 1, "id_parent":  0, "title": "Google"                  , "path": "https://www.google.co.ve/"               },
                {  "id": 2, "id_parent":  0, "title":"PHP"                      , "path": "#"                                       },
                {  "id": 3, "id_parent":  0, "title":"JavaSript"                , "path": "#"                                       },
                {  "id": 4, "id_parent":  0, "title":"Data Base"                , "path": "#"                                       },
                {  "id": 5, "id_parent":  2, "title":"Zend"                     , "path": "https://framework.zend.com/"             },
                {  "id": 6, "id_parent":  2, "title":"Synfony"                  , "path": "http://symfony.es/"                      },
                {  "id": 7, "id_parent":  2, "title":"Larave"                   , "path": "http://laravel.com"                      },
                {  "id": 8, "id_parent":  3, "title":"Reat"                     , "path": "#"                                       },
                {  "id": 9, "id_parent":  3, "title":"Vue"                      , "path": "#"                                       },
                {  "id":10, "id_parent":  4, "title":"PostgreSQL"               , "path": "#"                                       },
                {  "id":11, "id_parent":  8, "title":"Wikipedia - Reat"         , "path": "https://es.wikipedia.org/wiki/React"     },
                {  "id":12, "id_parent":  8, "title":"WebSite - Reat"           , "path": "https://es.reactjs.org/"                 },
                {  "id":13, "id_parent":  8, "title":"GitHub - Reat"            , "path": "https://github.com/facebook/react"       },
                {  "id":14, "id_parent":  9, "title":"Wikipedia - Vue"          , "path": "https://en.wikipedia.org/wiki/Vue.js"    },
                {  "id":15, "id_parent":  9, "title":"WebSite - Vue"            , "path": "https://vuejs.org/"                      },
                {  "id":16, "id_parent":  9, "title":"GitHub - Vue"             , "path": "https://github.com/vuejs"                },
                {  "id":17, "id_parent": 10, "title":"Ver 9.6"                  , "path": "#"                                       },
                {  "id":18, "id_parent": 17, "title":"Wikipedia - PostgreSQL...", "path": "https://es.wikipedia.org/wiki/PostgreSQL"},
                {  "id":19, "id_parent": 17, "title":"WebSite - PostgreSQL..."  , "path": "https://postgresql.org.es"               },
                {  "id":20, "id_parent": 17, "title":"GitHub - PostgreSQL..."   , "path": "https://github.com/postgres/postgres"    }
            ]
        )
    );
}


