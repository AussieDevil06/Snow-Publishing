# Suggestions...

- [ ] **SEO**
  - Add more descriptive meta tags to improve search engine rankings and also give a better social link, [open graph](https://www.opengraph.xyz/) is made to do this.
  - Add all sizes of favicon to make sure the icon views well on all devices, this also helps improve SEO. [This site](https://favicon.io/) can do it for you.

- [ ] **Styles for all devices**
  - Use [root variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) in the CSS file/s to make sure the content scales properly for different size screens. This also helps improve seach engine ranking.

- [ ] **Dynamic header and footer**
  - Having the header and footer defined on each page can lead to errors if there is any updates as the updates then hav to be carefully applied to each html page, similarly the copyright date can be automated to update each year as shown in the `shop.html` footer.

- [ ] **Create a "checkout" page**
  - The cart modal will work fine to show users what they are intending to buy but the final transaction is going to need it's own page as there's a bit to be done.  
    There are payment platform APIs made to help you take payments on your website, the main ones being [PayPal](https://developer.paypal.com/home) and [Stripe](https://stripe.com/au), but which one you use is totally dependant on which payment options you want to give your users.

- [ ] **More images in the details modal**
  - I think the product cards give enough info for a quick glance but obviously there needs to be more of a description about each item. My advice would be to use the product modal idea you already have with the description etc but also maybe add any other product images you might have.

- [ ] **Contact form**
  - Setup account with [EmailJS](https://www.emailjs.com/) and define the contact form parameters.
  - Setup [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) to protect against spam emails.  
  Localhost can be added to enable reCAPTCHA during development but this needs to be disabled once the site is live.
