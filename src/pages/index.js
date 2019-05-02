import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Button extends React.Component {

  componentDidMount () {
    this.stripe = window.Stripe('pk_test_1pEkwpj9XL1wvgW66mDw8pzI00ZlR7xaOg');
  }

  render(){
    return (
      <div>
      <form onSubmit={event => {
        event.preventDefault();
        this.stripe.redirectToCheckout({
          items: [
            // Replace with the ID of your SKU
            {sku: 'sku_EzkAAKh62mNeK3', quantity: 1}
          ],
          successUrl: 'http://tender-curie-d532dd.netlify.com/success',
          cancelUrl: 'http://tender-curie-d532dd.netlify.com/cancel',
        }).then(function (result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      }} >
        <button type='submit'>Buy Tshirts</button>
      </form>
    </div>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>By Tshirts</h1>
    <Button />
  </Layout>
)

export default IndexPage
