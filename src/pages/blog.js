/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Container
      css={`
        padding-bottom: 6em;
      `}
    >
      <h2>The five most annoying things about eating in a restaurant</h2>
      <p
        css={`
          font-weight: bold;
        `}
      >
        Practically at every restaurant there are similar things that are
        annoying. In this post we want to explorer what does things are and why
        they are a problem.
      </p>
      <p>
        Eating in a restaurant is clearly a very nice thing. You don't have to
        cook, you are served and you don't have to tidy up. In addition, the
        food is usually very tasty. What is there to complain about?
      </p>
      <p>
        But if we pay attention, there are always situations which are not so
        great. Most of the time we don't lose any thoughts of it, simply because
        we've got used to it. Slowly but surely we from <i>Gaston</i> are no
        more willing to accept this. With this blog post our search for ways to
        avoid these situations begins.
      </p>
      <p>
        The following five things are, in our opinion, the biggest turns offs at
        restaurant visits.
      </p>
      <h3>The five most annoying things</h3>
      <h4>1. Wait for the waitre or waitress</h4>
      <p>
        After arriving at the restaurant it is often necessary to wait for the
        waitress to see what is on the menu. If the restaurant is well filled
        and there are only a few waiters, it can take up to 10 minutes until the
        waitress takes care of you. In the worst case you will be overlooked and
        only served after you have intervened. These are extremely unpleasant
        situations for the guest but also for the staff.
      </p>
      <h4>2. Time pressure at the menu selection</h4>
      <p>
        Some take more and some less time to make a dicision what to order. And
        even the same person can sometimes take longer or shorter to decide
        depending on the occasion, time of day and restaurant. As soon as you
        have made your decision, you want to be able to place your order right
        away. But if the waitress comes before you have made a decision, you are
        under pressure. However the waitre times it, it is often unpleasant for
        the guest.
      </p>
      <h4>3. Get the wrong dish</h4>
      <p>
        Finally the food comes. But what's this? You got the wrong dish! This is
        again an unpleasant situation for the guest and the staff. Either you
        accept what you got or you have to insist on your order wherever the
        mistake happened.
      </p>
      <h4>4. Call for the waitre or waitress</h4>
      <p>
        No matter if you want to order another Coke or pay for it, the waitress
        has to be called. Therefore, it is necessary to draw attention within
        the restaurant. No matter how you do it, it is not a pleasant thing.
        Even if one has received the attention of the waitress, one is gladly
        put off with "I'll come immediately". If you are lucky, you can place
        your request after a minute. In the worst case you are forgotten and
        must intervene after a while again.
      </p>
      <h4>5. Payment processing</h4>
      <p>
        After you've enjoyed a good meal, it's time to pay. Paying is always an
        unpleasant thing, regardless of the circumstances. But the way it is
        done in restaurants makes it especially more unpleasant. After you have
        successfully called the waitress and waited a few minutes, the waitress
        finally appears to process the payment. Often you just get a receipt and
        the waitress is gone again. It is now expected that the corresponding
        amount will be deposited. Then the waitress will return and collect the
        money. If you want to pay with a credit card, in some cases the waitress
        will first need to get the terminal. All in all, there can be up to four
        interactions before you can finally pay. It is even worse if everyone at
        the table wants to pay separately. This means that you have to wait at
        least an extra minute per person.
      </p>
      <h3>Is this really that bad?</h3>
      <p>
        I think these situations are at least not so bad that I don't want to
        visit a restaurant anymore. But if I could choose, I'd rather be in a
        restaurant where these situations don't occur. That means, if it is
        possible to prevent them, I would absolutely prefer such a restaurant.
        Could it even be better? I am of the clear opinion that all these
        situations can be made much more pleasant or even completely avoided. In
        a next post we want to show how this would be possible.
      </p>
      <h3>What are your annoying situations? </h3>
      <p>
        Are you experiencing a similar situation? Or do you have other annoying
        things to experience when you visit a restaurant? Then write your
        situation to contact@gaston.ch.
      </p>
    </Container>
  </Layout>
)

export default BlogPage
