<template>
  <mdb-container>
    <mdb-row class="mx-auto pt-2">
        <h1 class="mx-auto text-center display-4 p-3 red-text big">DONATE</h1>
        <div id='collection-component-2f36a03cad5'></div>
    </mdb-row>
  </mdb-container>
</template>

<script type="javascript">
const items = [
  { level: 'Bronze', amount: '$1000' },
  { level: 'Silver', amount: '$3000' },
  { level: 'Gold', amount: '$5000' },
  { level: 'Platinum', amount: '$10000' }
]
  export default {
  data () {
    return {
      items: items,
      striped: true,
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    (function () {
      // var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();

        }
      } else {
        loadScript();
      }

      function loadScript() {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'overtaps.myshopify.com',
          storefrontAccessToken: '244fc4d27a412190862e1ff0232cb6d0',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: 91279523951,
            node: document.getElementById('collection-component-2f36a03cad5'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
"product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (max-width: 601px)": {
          "max-width": "100%",
          "margin-left": "10",
          "margin-right": "10",
          "margin-bottom": "50px",

        }
      },
      "button": {
        "background-color": "#ff5252",
        "font-family": "Noto Sans KR, sans-serif",
        ":hover": {
          "background-color": "#ff1744"
        },
        ":focus": {
          "background-color": "#ff1744"
        },
      },
      "variantTitle": {
        "font-family": "Noto Sans KR, sans-serif"
      },
      "title": {
        "font-family": "Noto Sans KR, sans-serif"
      },
      "description": {
        "font-family": "Noto Sans KR, sans-serif"
      },
      "price": {
        "font-family": "Noto Sans KR, sans-serif"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Noto Sans KR, sans-serif"
      }
    },
    "googleFonts": [
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#ff5252",
        "font-family": "Noto Sans KR, sans-serif",
        ":hover": {
          "background-color": "#ff1744"
        },
        ":focus": {
          "background-color": "ff1744"
        },
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Roboto Condensed"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#ff5252",
        "font-family": "Noto Sans KR, sans-serif",
        ":hover": {
          "background-color": "#ff1744"
        },
        ":focus": {
          "background-color": "#da611f"
        },
      },
      "variantTitle": {
        "font-family": "Noto Sans KR, sans-serif",
      },
      "title": {
        "font-family": "Noto Sans KR, sans-serif"
      },
      "description": {
        "font-family": "Noto Sans KR, sans-serif",
      },
      "price": {
        "font-family": "Noto Sans KR, sans-serif",
      },
      "compareAt": {
        "font-family": "Noto Sans KR, sans-serif",
      }
    },
    "googleFonts": [
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Noto Sans KR, sans-serif",
        "background-color": "#ff5252",
        ":hover": {
          "background-color": "#ff1744"
        },
        ":focus": {
          "background-color": "#ff1744"
        },
      }
    },
    "googleFonts": [
      "Roboto Condensed"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Noto Sans KR, sans-serif",
      },
      "select": {
        "font-family": "Noto Sans KR, sans-serif",
      }
    },
    "googleFonts": [
      "Roboto Condensed",
      "Roboto Condensed"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
</script>