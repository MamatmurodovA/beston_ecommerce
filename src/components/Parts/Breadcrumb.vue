<template>
  <ul class="breadcrumb">
    <li v-for="path in paths">
      <router-link :to="{name: path.name, params: path.params}">
          {{path.title}}
      </router-link>
    </li>
  </ul>
</template>

<script>

    export default {
        name: "Breadcrumb",
        data(){
          return {
            paths: [],
            param_list: [],
            cat: {},
          }
        },
        props: ['params'],
        methods: {
            pageDefiner()
            {
                let page_name = this.$route.name;
                let paths = []
                paths.push({
                    title: 'Bosh sahifa',
                    name: 'home_page',
                    params: {}
                })
                if (page_name === 'product_category_page')
                {
                    if (this.params[0])
                    {
                      paths.push({
                        title: this.params[0].title,
                        name: page_name,
                        params: {category_slug: this.params[0].slug}
                      })
                    }
                }
                else if (page_name === 'product_list_page')
                {

                    if (this.params[0])
                    {
                        paths.push({
                          title: this.params[0].title,
                          name: 'product_category_page',
                          params: {category_slug: this.params[0].slug}
                        })

                        if (this.params[0].child)
                        {
                          paths.push({
                            title: this.params[0].child.title,
                            name: page_name,
                            params: {category_slug: this.params[0].child.slug}
                          })
                        }
                    }
                }
                else if ( page_name === 'product_detail_page')
                {

                    if (this.params[0])
                    {
                      paths.push({
                        title: this.params[0].title,
                        name: 'product_category_page',
                        params: {category_slug: this.params[0].slug}
                      })

                      if (this.params[0].child)
                      {
                        paths.push({
                          title: this.params[0].child.title,
                          name: 'product_list_page',
                          params: {category_slug: this.params[0].child.slug}
                        })
                      }

                      paths.push({
                        title: this.params[1].title,
                        name: 'product_detail_page',
                        params: {category_slug: this.$route.params.category_slug, product_slug: this.params[1].slug}
                      })
                    }
                }
                else if (page_name === 'cart_page')
                {
                  paths.push({
                    title: 'Savat',
                    name: 'cart_page',
                    params: {}
                  })
                }
              this.paths = paths
            }
        },
        created()
        {
          this.pageDefiner()
        },
        watch: {
          params: 'pageDefiner'
        }
    }
</script>

<style scoped>

</style>
